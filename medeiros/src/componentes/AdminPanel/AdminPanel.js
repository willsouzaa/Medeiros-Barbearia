import React, { useEffect, useState } from 'react';
import './adminPanel.css';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000';
const LOCATIONS = ['Jardin-eldorado', 'Pagani'];
const PAGES = ['home', 'equipe', 'contatos'];
const SLOTS = ['main', 'card', 'slide'];

function authHeaders(token) {
  const h = { Accept: 'application/json' };
  if (token) h['x-admin-token'] = token;
  return h;
}

export default function AdminPanel() {
  const [adminToken, setAdminToken] = useState('');
  const [activeLocation, setActiveLocation] = useState(LOCATIONS[0]);
  const [uploads, setUploads] = useState({});

  const [fileInput, setFileInput] = useState(null);
  const [description, setDescription] = useState('');
  const [page, setPage] = useState(PAGES[0]);
  const [slot, setSlot] = useState(SLOTS[0]);
  const [order, setOrder] = useState(0);

  const [staticTargets, setStaticTargets] = useState([]);
  const [backups, setBackups] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    (async () => { await Promise.all([loadUploads(), loadStatic(), loadBackups()]); })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isAuthed = Boolean(adminToken);

  async function loadUploads() {
    const result = {};
    for (const loc of LOCATIONS) {
      try {
        const res = await fetch(`${API_BASE}/api/images/${encodeURIComponent(loc)}`);
        result[loc] = res.ok ? await res.json() : [];
      } catch (e) {
        result[loc] = [];
      }
    }
    setUploads(result);
  }

  async function loadStatic() {
    try {
      const res = await fetch(`${API_BASE}/api/targets`);
      setStaticTargets(res.ok ? await res.json() : []);
    } catch (e) {
      setStaticTargets([]);
    }
  }

  async function loadBackups() {
    try {
      const res = await fetch(`${API_BASE}/api/backups`);
      setBackups(res.ok ? await res.json() : []);
    } catch (e) {
      setBackups([]);
    }
  }

  async function handleUpload(e) {
    e.preventDefault();
    if (!fileInput) return setStatus('Escolha um arquivo');
    const f = new FormData();
    f.append('image', fileInput);
    f.append('description', description);
    f.append('page', page);
    f.append('slot', slot);
    f.append('order', String(order));
    setStatus('Enviando...');
    try {
      const res = await fetch(`${API_BASE}/api/images/${encodeURIComponent(activeLocation)}`, {
        method: 'POST',
        headers: authHeaders(adminToken),
        body: f,
      });
      if (!res.ok) throw new Error('upload failed');
      setStatus('OK');
      setFileInput(null);
      setDescription('');
      await loadUploads();
    } catch (err) {
      setStatus('Erro no upload');
    }
  }

  async function handleDelete(location, filename) {
  if (!window.confirm('Confirma exclusão?')) return;
    try {
      const res = await fetch(`${API_BASE}/api/images/${encodeURIComponent(location)}/${encodeURIComponent(filename)}`, {
        method: 'DELETE',
        headers: authHeaders(adminToken),
      });
      if (!res.ok) throw new Error('delete failed');
      await loadUploads();
      setStatus('Excluído');
    } catch (e) {
      setStatus('Erro ao excluir');
    }
  }

  async function updateMeta(location, filename, meta) {
    try {
      const res = await fetch(`${API_BASE}/api/images/${encodeURIComponent(location)}/${encodeURIComponent(filename)}`, {
        method: 'PUT',
        headers: { ...authHeaders(adminToken), 'Content-Type': 'application/json' },
        body: JSON.stringify(meta),
      });
      if (!res.ok) throw new Error('update failed');
      await loadUploads();
      setStatus('Meta atualizada');
    } catch (e) {
      setStatus('Erro ao atualizar meta');
    }
  }

  async function replaceStatic(targetId, file) {
    if (!file) return setStatus('Escolha um arquivo');
    const f = new FormData();
    f.append('file', file);
    setStatus('Substituindo...');
    try {
      const res = await fetch(`${API_BASE}/api/targets/${encodeURIComponent(targetId)}/replace`, {
        method: 'POST',
        headers: authHeaders(adminToken),
        body: f,
      });
      if (!res.ok) throw new Error('replace failed');
      setStatus('Substituído');
      await loadStatic();
      await loadBackups();
    } catch (e) {
      setStatus('Erro ao substituir');
    }
  }
  async function restoreBackup(backupId) {
    if (!window.confirm('Restaurar backup?')) return;
    try {
      const res = await fetch(`${API_BASE}/api/backups/restore`, {
        method: 'POST',
        headers: { ...authHeaders(adminToken), 'Content-Type': 'application/json' },
        body: JSON.stringify({ backupId }),
      });
      if (!res.ok) throw new Error('restore failed');
      setStatus('Restaurado');
      await loadStatic();
      await loadBackups();
    } catch (e) {
      setStatus('Erro ao restaurar');
    }
  }
  return (
    <div className="admin-panel">
      <header className="admin-header">
        <h2>Painel Admin - Imagens</h2>
        <div className="auth-row">
          <input type="password" placeholder="Token admin" value={adminToken} onChange={(e) => setAdminToken(e.target.value)} />
          <div className={`badge ${isAuthed ? 'ok' : 'no'}`}>{isAuthed ? 'Autenticado' : 'Não autenticado'}</div>
        </div>
      </header>

      <main className="admin-main">
        <section className="panel-left">
          <div className="location-tabs">
            {LOCATIONS.map((loc) => (
              <button key={loc} className={loc === activeLocation ? 'active' : ''} onClick={() => setActiveLocation(loc)}>{loc}</button>
            ))}
          </div>

          <form className="upload-form" onSubmit={handleUpload}>
            <h3>Enviar imagem para {activeLocation}</h3>
            <label>
              Arquivo
              <input type="file" accept="image/*" onChange={(e) => setFileInput(e.target.files && e.target.files[0])} />
            </label>
            <label>
              Descrição
              <input value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
              Página
              <select value={page} onChange={(e) => setPage(e.target.value)}>{PAGES.map((p) => (<option key={p} value={p}>{p}</option>))}</select>
            </label>
            <label>
              Slot
              <select value={slot} onChange={(e) => setSlot(e.target.value)}>{SLOTS.map((s) => (<option key={s} value={s}>{s}</option>))}</select>
            </label>
            <label>
              Ordem
              <input type="number" value={order} onChange={(e) => setOrder(Number(e.target.value))} />
            </label>
            <div className="form-actions">
              <button type="submit" disabled={!isAuthed}>Enviar</button>
              <button type="button" onClick={() => { setDescription(''); setFileInput(null); }}>Limpar</button>
            </div>
          </form>

          <div className="uploads-list">
            <h3>Uploads - {activeLocation}</h3>
            <div className="grid">
              {(uploads[activeLocation] || []).map((it) => (
                <div className="card" key={it.filename}>
                  <div className="thumb"><img src={it.url || ('/uploads/' + activeLocation + '/' + it.filename)} alt={it.description || it.filename} /></div>
                  <div className="meta">
                    <div className="desc">{it.description}</div>
                    <div className="small">{it.page} / {it.slot} • ordem {it.order}</div>
                    <div className="card-actions">
                      <button onClick={() => handleDelete(activeLocation, it.filename)} disabled={!isAuthed}>Excluir</button>
                      <button onClick={() => {
                        const newDesc = window.prompt('Nova descrição', it.description || '');
                        if (newDesc !== null) updateMeta(activeLocation, it.filename, { description: newDesc, page: it.page, slot: it.slot, order: it.order });
                      }}>Editar</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="panel-right">
          <section className="static-section">
            <h3>Alvos estáticos (src) — substituir arquivos</h3>
            <div className="targets">
              {staticTargets.map((t) => (
                <div className="target" key={t.id}>
                  <div className="target-info">
                    <div className="t-path">{t.relPath}</div>
                    <div className="t-meta">{t.role || ''} • {t.page || ''}</div>
                  </div>
                  <div className="t-actions">
                    <input type="file" accept="image/*" onChange={(e) => {
                      const f = e.target.files && e.target.files[0];
                      if (f) replaceStatic(t.id, f);
                    }} disabled={!isAuthed} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="backups">
            <h3>Backups</h3>
            <div className="backup-list">
              {backups.map((b) => (
                <div className="backup" key={b.id}>
                  <div>{b.originalRelPath} • {new Date(b.createdAt).toLocaleString()}</div>
                  <div>
                    <button onClick={() => restoreBackup(b.id)} disabled={!isAuthed}>Restaurar</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="status">
            <h3>Status</h3>
            <div>{status}</div>
          </section>
        </aside>
      </main>

    </div>
  );
}

