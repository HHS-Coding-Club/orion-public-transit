const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

import { assets } from './assets';

const orionPublicTransit: {
    name: string;
    author: string;
    version: string;
    fps: number;
    canWidth: number;
    canHeight: number;
} = {
    name: 'Orion Public Transit',
    author: 'Colack',
    version: '0.0.1',
    fps: 144,
    canWidth: 1280,
    canHeight: 720
}

function init() {
    canvas.width = orionPublicTransit.canWidth;
    canvas.height = orionPublicTransit.canHeight;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);   
}

init();