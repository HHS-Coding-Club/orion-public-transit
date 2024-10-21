export class Graphics {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D | null;
    private canvasWidth: number;
    private canvasHeight: number;
    
    constructor(canvas: HTMLCanvasElement, width: number, height: number) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.canvasWidth = width;
        this.canvasHeight = height;
    }

    public init() {
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
        this.clear();
    }

    public clear() {
        this.ctx!.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    public drawImage(image: HTMLImageElement, x: number, y: number, width: number, height: number) {
        this.ctx!.drawImage(image, x, y, width, height);
    }

    public drawDialogBox(border: string, color: string, text: string, image: HTMLImageElement) {
        const dialogHeight = 100;
        const imageHeight = 100; // Adjust this if you want the image to be larger or smaller
        const dialogY = this.canvasHeight - dialogHeight; // Position for the dialog box
        const imageY = dialogY - imageHeight; // Position for the image above the dialog box
        const borderRadius = 20; // Adjust for desired roundness
    
        // Draw the rounded rectangle for the dialog box
        this.ctx!.fillStyle = color;
        this.ctx!.beginPath();
        this.ctx!.moveTo(0 + borderRadius, dialogY);
        this.ctx!.lineTo(this.canvasWidth - borderRadius, dialogY);
        this.ctx!.arcTo(this.canvasWidth, dialogY, this.canvasWidth, dialogY + dialogHeight, borderRadius);
        this.ctx!.lineTo(this.canvasWidth, dialogY + dialogHeight);
        this.ctx!.arcTo(this.canvasWidth, dialogY + dialogHeight, 0, dialogY + dialogHeight, borderRadius);
        this.ctx!.lineTo(0, dialogY + dialogHeight);
        this.ctx!.arcTo(0, dialogY + dialogHeight, 0, dialogY, borderRadius);
        this.ctx!.lineTo(0, dialogY);
        this.ctx!.arcTo(0, dialogY, this.canvasWidth - borderRadius, dialogY, borderRadius);
        this.ctx!.closePath();
        this.ctx!.fill();
    
        // Draw the border
        this.ctx!.strokeStyle = border;
        this.ctx!.stroke();
    
        // Draw the text
        this.ctx!.fillStyle = 'black';
        this.ctx!.font = '16px Arial';
        this.ctx!.fillText(text, 10, dialogY + 30); // Adjust Y to center text vertically
    
        // Draw the image above the dialog box
        this.ctx!.drawImage(image, (this.canvasWidth - image.width) / 2, imageY, image.width, image.height); // Center the image above the box
    }
    
}