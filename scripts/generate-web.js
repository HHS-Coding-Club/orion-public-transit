import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orion</title>
    <link rel="stylesheet" href="css/orion.css">
</head>
<body>
    <canvas id="canvas"></canvas>
</body>
<script type="module" src="js/orion.js"></script>
</html>
`;

const css = `
canvas {
    display: block;
    margin: auto;
    border-color: white;
    border-style: solid;
}

body {
    background-color: black;
}
`;

const outputDir = path.join(__dirname, '../dist');
const cssPath = path.join(outputDir, 'css');

try {
    fs.mkdirSync(outputDir, { recursive: true });
    fs.mkdirSync(cssPath, { recursive: true });

    fs.writeFileSync(path.join(outputDir, 'index.html'), html);
    fs.writeFileSync(path.join(cssPath, 'orion.css'), css);

    console.log('Web files generated successfully!');
} catch (error) {
    console.error('Error generating web files:', error);
}
