const fs = require('fs');
const SRC = 'D:/เอกสาร m2/logo mg 2024/mg ubon/59394.png';
try {
  const st = fs.statSync(SRC);
  console.log('FOUND size_bytes=' + st.size);
  fs.copyFileSync(SRC, 'C:/Users/ADMIN/Downloads/z ai/.tmp-logo-src.png');
  console.log('COPIED_OK');
} catch (e) {
  console.log('ERROR: ' + e.message);
}
