const fs = require('fs');
const DIR = 'C:/Users/ADMIN/Downloads/z ai';
const htmlPath = DIR + '/motorcycle-sales.html';

let html = fs.readFileSync(htmlPath, 'utf8');

const head = fs.readFileSync(DIR + '/.tmp-logo-head.png');
const fav = fs.readFileSync(DIR + '/.tmp-logo-fav.png');
const headUri = 'data:image/png;base64,' + head.toString('base64');
const favUri = 'data:image/png;base64,' + fav.toString('base64');
console.log('head_uri_kb=' + Math.round(headUri.length / 1024) + ' fav_uri_kb=' + Math.round(favUri.length / 1024));

const count = (s, t) => s.split(t).length - 1;
if (count(html, '__LOGO_DATA_URI__') !== 1 || count(html, '__FAVICON_DATA_URI__') !== 1) {
  console.error('TOKEN_ERROR logo=' + count(html, '__LOGO_DATA_URI__') + ' favicon=' + count(html, '__FAVICON_DATA_URI__'));
  process.exit(1);
}

html = html.replace('__LOGO_DATA_URI__', headUri).replace('__FAVICON_DATA_URI__', favUri);
fs.writeFileSync(htmlPath, html);
console.log('PATCH_OK html_kb=' + Math.round(Buffer.byteLength(html, 'utf8') / 1024));
