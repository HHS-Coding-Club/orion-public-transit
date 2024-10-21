const canvas = document.getElementById('canvas') as HTMLCanvasElement;

import { Graphics } from './graphics.js';
import { assets, loadAssets } from './assets.js';
import { GameManager } from './gameManager.js';

const orionPublicTransit: {
    name: string;
    author: string;
    version: string;
    fps: number;
    canWidth: number;
    canHeight: number;
    debug: boolean;
} = {
    name: 'Orion Public Transit',
    author: 'Colack',
    version: '0.0.1',
    fps: 144,
    canWidth: 1280,
    canHeight: 720,
    debug: true
}

var orionAssets: { name: string; src: string; loaded?: boolean; image?: HTMLImageElement }[] = [];
const orionGraphics: Graphics = new Graphics(canvas, orionPublicTransit.canWidth, orionPublicTransit.canHeight);
const gameManager: GameManager = new GameManager(document);

function init() {
    gameManager.renameTitle(orionPublicTransit.name);

    for (const category in assets.image.icon) {
        orionAssets = orionAssets.concat(assets.image.icon[category]);
    }

    console.log(`Initializing ${orionPublicTransit.name} v${orionPublicTransit.version} by ${orionPublicTransit.author}`);

    loadAssets(orionAssets, orionPublicTransit.debug).then(() => {
        orionGraphics.init();

        orionGraphics.drawDialogBox('white', 'black', 'Hello, World!', orionAssets[0].image!);
    }).catch(error => {
        console.error("Error loading assets:", error);
    });
}

init();