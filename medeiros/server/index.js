const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Base uploads directory inside the React app's public folder
const UPLOADS_DIR = path.join(__dirname, '..', 'public', 'uploads');
const SRC_DIR = path.join(__dirname, '..', 'src');
const BACKUP_DIR = path.join(__dirname, '..', 'server_backups');

ensureDir(BACKUP_DIR);

const BACKUP_MANIFEST = path.join(BACKUP_DIR, 'manifest.json');
function readBackupManifest(){
  if (!fs.existsSync(BACKUP_MANIFEST)) return {};
  try { return JSON.parse(fs.readFileSync(BACKUP_MANIFEST,'utf8')); } catch { return {}; }
}
function writeBackupManifest(m){ fs.writeFileSync(BACKUP_MANIFEST, JSON.stringify(m,null,2),'utf8'); }

// Simple admin authentication middleware - expects header x-admin-token
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'changeme';
function requireAdmin(req, res, next){
  const t = req.headers['x-admin-token'];
  if (!t || t !== ADMIN_TOKEN) return res.status(401).json({ error: 'unauthorized' });
  next();
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

ensureDir(UPLOADS_DIR);

const locations = ['jardin-eldorado', 'pagani'];
locations.forEach(loc => ensureDir(path.join(UPLOADS_DIR, loc)));

// Helper to metadata file
function metaFile(location) {
  return path.join(UPLOADS_DIR, location, 'meta.json');
}

function readMeta(location) {
  const file = metaFile(location);
  if (!fs.existsSync(file)) return [];
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (err) {
    return [];
  }
}

function writeMeta(location, data) {
  fs.writeFileSync(metaFile(location), JSON.stringify(data, null, 2), 'utf8');
}

// List images for a location
// Optional query params: page, slot
app.get('/api/images/:location', (req, res) => {
  const { location } = req.params;
  const { page, slot } = req.query;
  if (!locations.includes(location)) return res.status(400).json({ error: 'Invalid location' });
  const dir = path.join(UPLOADS_DIR, location);
  const files = fs.readdirSync(dir).filter(f => f !== 'meta.json');
  const meta = readMeta(location);
  // Merge meta with files
  let items = files.map(filename => {
    const m = meta.find(x => x.filename === filename) || {};
    return {
      filename,
      url: `/uploads/${location}/${filename}`,
      description: m.description || '',
      page: m.page || null,
      slot: m.slot || null,
      order: m.order || 0
    };
  });
  if (page) items = items.filter(i => i.page === page);
  if (slot) items = items.filter(i => i.slot === slot);
  res.json(items);
});

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const loc = req.params.location;
    const dest = path.join(UPLOADS_DIR, loc);
    ensureDir(dest);
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    // keep original name but prefix timestamp to avoid collisions
    const unique = `${Date.now()}-${file.originalname}`.replace(/\s+/g, '-');
    cb(null, unique);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif/;
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.test(ext)) cb(null, true);
    else cb(new Error('Only images are allowed'));
  }
});

// Upload endpoint
app.post('/api/images/:location', requireAdmin, upload.single('image'), (req, res) => {
  const { location } = req.params;
  if (!locations.includes(location)) return res.status(400).json({ error: 'Invalid location' });
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  const description = req.body.description || '';
  const page = req.body.page || null; // e.g., home, equipe, contatos
  const slot = req.body.slot || null; // e.g., main, card, slide, gallery
  const order = parseInt(req.body.order || '0', 10) || 0;
  const meta = readMeta(location);
  meta.push({ filename: req.file.filename, description, page, slot, order });
  writeMeta(location, meta);
  res.json({ filename: req.file.filename, url: `/uploads/${location}/${req.file.filename}`, description, page, slot, order });
});

// Update metadata for an image (description, page, slot, order)
app.put('/api/images/:location/:filename', requireAdmin, (req, res) => {
  const { location, filename } = req.params;
  if (!locations.includes(location)) return res.status(400).json({ error: 'Invalid location' });
  const meta = readMeta(location);
  const idx = meta.findIndex(x => x.filename === filename);
  if (idx === -1) return res.status(404).json({ error: 'Metadata not found' });
  const { description, page, slot, order } = req.body;
  if (description !== undefined) meta[idx].description = description;
  if (page !== undefined) meta[idx].page = page;
  if (slot !== undefined) meta[idx].slot = slot;
  if (order !== undefined) meta[idx].order = parseInt(order, 10) || 0;
  writeMeta(location, meta);
  res.json({ success: true, item: meta[idx] });
});

// Delete endpoint
app.delete('/api/images/:location/:filename', requireAdmin, (req, res) => {
  const { location, filename } = req.params;
  if (!locations.includes(location)) return res.status(400).json({ error: 'Invalid location' });
  const filePath = path.join(UPLOADS_DIR, location, filename);
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'File not found' });
  try {
    fs.unlinkSync(filePath);
    // remove from meta
    const meta = readMeta(location).filter(x => x.filename !== filename);
    writeMeta(location, meta);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Could not delete file' });
  }
});

// Serve uploads statically
app.use('/uploads', express.static(path.join(__dirname, '..', 'public', 'uploads')));

// Serve a file from src for thumbnails (only images under src/componentes)
app.get('/static-src', (req, res) => {
  const rel = req.query.path;
  if (!rel) return res.status(400).send('path required');
  // normalize and prevent path traversal
  const abs = path.normalize(path.join(SRC_DIR, rel));
  if (!abs.startsWith(path.join(SRC_DIR, 'componentes'))) return res.status(403).send('forbidden');
  if (!fs.existsSync(abs)) return res.status(404).send('not found');
  res.sendFile(abs);
});

// Scan for static image targets under src/componentes
function scanStaticTargets() {
  const componentsDir = path.join(SRC_DIR, 'componentes');
  const exts = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];
  const targets = [];

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else {
        const ext = path.extname(e.name).toLowerCase();
        if (exts.includes(ext)) {
          const rel = path.relative(SRC_DIR, p).replace(/\\/g, '/');
          // determine location (jardin-eldorado or pagani) by path
          const location = rel.includes('Jardin-eldorado') ? 'jardin-eldorado' : (rel.includes('Pagani') ? 'pagani' : 'global');
          const component = rel.split('/')[2] || '';
          targets.push({ id: Buffer.from(rel).toString('base64'), relPath: rel, location, component, filename: e.name });
        }
      }
    }
  }

  if (fs.existsSync(componentsDir)) walk(componentsDir);
  return targets;
}

// Metadata for static targets (descriptions/role) stored server-side
const STATIC_META_FILE = path.join(__dirname, 'static_targets_meta.json');
function readStaticMeta() {
  if (!fs.existsSync(STATIC_META_FILE)) return {};
  try { return JSON.parse(fs.readFileSync(STATIC_META_FILE, 'utf8')); } catch { return {}; }
}
function writeStaticMeta(m) { fs.writeFileSync(STATIC_META_FILE, JSON.stringify(m, null, 2), 'utf8'); }

app.get('/api/targets', (req, res) => {
  const targets = scanStaticTargets();
  const meta = readStaticMeta();
  const merged = targets.map(t => ({ ...t, description: (meta[t.relPath] && meta[t.relPath].description) || '', role: (meta[t.relPath] && meta[t.relPath].role) || '' }));
  res.json(merged);
});

// Replace a target file (upload) - backs up original
const replaceUpload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 8 * 1024 * 1024 } });
app.post('/api/targets/:id/replace', requireAdmin, replaceUpload.single('image'), (req, res) => {
  const id = req.params.id;
  const targets = scanStaticTargets();
  const t = targets.find(x => x.id === id);
  if (!t) return res.status(404).json({ error: 'target not found' });
  if (!req.file) return res.status(400).json({ error: 'no file' });
  const abs = path.join(SRC_DIR, t.relPath);
  // backup
  const stamp = Date.now();
  const backupName = `${stamp}-${t.filename}`;
  const backupPath = path.join(BACKUP_DIR, backupName);
  try {
    fs.copyFileSync(abs, backupPath);
    fs.writeFileSync(abs, req.file.buffer);
    // record manifest
    const manifest = readBackupManifest();
    const key = `${stamp}-${Buffer.from(t.relPath).toString('base64')}`;
    manifest[key] = { backupPath: path.relative(__dirname, backupPath), targetRel: t.relPath, filename: t.filename, timestamp: stamp };
    writeBackupManifest(manifest);
    res.json({ success: true, backup: path.relative(__dirname, backupPath), key });
  } catch (err) {
    res.status(500).json({ error: 'could not replace', details: err.message });
  }
});

// List backups
app.get('/api/backups', requireAdmin, (req, res) => {
  const manifest = readBackupManifest();
  res.json(manifest);
});

// Restore a backup entry by key
app.post('/api/backups/restore', requireAdmin, (req, res) => {
  const { key } = req.body;
  const manifest = readBackupManifest();
  const entry = manifest[key];
  if (!entry) return res.status(404).json({ error: 'not found' });
  try {
    // entry: { backupPath, targetRel }
    const backupAbs = path.join(__dirname, entry.backupPath);
    const targetAbs = path.join(SRC_DIR, entry.targetRel);
    if (!fs.existsSync(backupAbs)) return res.status(404).json({ error: 'backup missing' });
    fs.copyFileSync(backupAbs, targetAbs);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'could not restore', details: err.message });
  }
});

// Edit metadata for a target
app.put('/api/targets/:id', requireAdmin, (req, res) => {
  const id = req.params.id;
  const targets = scanStaticTargets();
  const t = targets.find(x => x.id === id);
  if (!t) return res.status(404).json({ error: 'target not found' });
  const meta = readStaticMeta();
  meta[t.relPath] = meta[t.relPath] || {};
  const { description, role } = req.body;
  if (description !== undefined) meta[t.relPath].description = description;
  if (role !== undefined) meta[t.relPath].role = role;
  writeStaticMeta(meta);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Image server listening on port ${PORT}`);
});
