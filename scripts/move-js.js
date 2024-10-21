const fs = require('fs-extra');
const path = require('path');

async function moveJsFiles() {
  const srcDir = path.join(__dirname, '../dist');
  const destDir = path.join(srcDir, 'js');

  await fs.ensureDir(destDir);
  const files = await fs.readdir(srcDir);

  await Promise.all(
    files
      .filter(file => file.endsWith('.js'))
      .map(file => fs.move(path.join(srcDir, file), path.join(destDir, file)))
  );
}

moveJsFiles().catch(err => console.error(err));
