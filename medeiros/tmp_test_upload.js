(async () => {
  try {
    const fs = require('fs');
    const path = require('path');

    // tiny 1x1 png
    const b64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2NgYGBgAAAABAABJzQnCgAAAABJRU5ErkJggg==';
    const buffer = Buffer.from(b64, 'base64');

    // Node 18+ has global FormData, Blob and fetch
    const { FormData, Blob } = global;
    if (typeof FormData === 'undefined' || typeof fetch === 'undefined') {
      console.error('FormData or fetch is not available in this Node runtime.');
      process.exit(2);
    }

    const fd = new FormData();
    const blob = new Blob([buffer], { type: 'image/png' });
    fd.append('image', blob, 'test.png');
    fd.append('description', 'teste automatizado');
    fd.append('page', 'home');
    fd.append('slot', 'main');
    fd.append('order', '0');

    const uploadRes = await fetch('http://localhost:4000/api/images/jardin-eldorado', {
      method: 'POST',
      body: fd,
      headers: { 'x-admin-token': 'changeme' },
    });
    console.log('upload status', uploadRes.status);
    const listRes = await fetch('http://localhost:4000/api/images/jardin-eldorado');
    const list = await listRes.json();
    console.log('uploads count', list.length);
    if (list.length) console.log(list[0]);
  } catch (err) {
    console.error('error running test upload', err);
    process.exit(1);
  }
})();
