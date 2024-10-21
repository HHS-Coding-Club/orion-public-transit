export class Graphics {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D | null;
    private canvasWidth: number;
    private canvasHeight: number;

    private readonly globalFont: string = 'Helvetica';
    
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

    public drawImageColoredSilhouette(image: HTMLImageElement, x: number, y: number, width: number, height: number, color: string) {
        this.ctx!.drawImage(image, x, y, width, height);

        this.ctx!.globalCompositeOperation = 'source-atop';

        this.ctx!.fillStyle = color;
        this.ctx!.fillRect(x, y, width, height);

        this.ctx!.globalCompositeOperation = 'source-over';

        this.ctx!.filter = 'none';
    }
    

    public drawDialogBox(
        border: string,
        color: string,
        text: string,
        textColor: string,
        image: HTMLImageElement,
        characterName: string,
        textShadow: string,
        silhouetteColor: string
    ) {
        const cornerRadius = 15;
        const boxWidth = this.canvasWidth;
        const boxHeight = 100;

        this.ctx!.beginPath();
        this.ctx!.moveTo(cornerRadius, this.canvasHeight - boxHeight);
        this.ctx!.lineTo(boxWidth - cornerRadius, this.canvasHeight - boxHeight);
        this.ctx!.arcTo(boxWidth, this.canvasHeight - boxHeight, boxWidth, this.canvasHeight - boxHeight + cornerRadius, cornerRadius);
        this.ctx!.lineTo(boxWidth, this.canvasHeight);
        this.ctx!.arcTo(boxWidth, this.canvasHeight, boxWidth - cornerRadius, this.canvasHeight, cornerRadius);
        this.ctx!.lineTo(cornerRadius, this.canvasHeight);
        this.ctx!.arcTo(0, this.canvasHeight, 0, this.canvasHeight - boxHeight + cornerRadius, cornerRadius);
        this.ctx!.lineTo(0, this.canvasHeight - boxHeight);
        this.ctx!.arcTo(0, this.canvasHeight - boxHeight, cornerRadius, this.canvasHeight - boxHeight, cornerRadius);
        this.ctx!.closePath();

        this.ctx!.shadowColor = 'rgba(0, 0, 0, 0.5)';
        this.ctx!.shadowBlur = 10;
        this.ctx!.shadowOffsetX = 5;
        this.ctx!.shadowOffsetY = 5;
    
        this.ctx!.fillStyle = color;
        this.ctx!.fill();

        this.ctx!.shadowColor = 'transparent'; 
        this.ctx!.strokeStyle = border;
        this.ctx!.lineWidth = 2;
        this.ctx!.stroke();

        this.ctx!.font = `20px ${this.globalFont}`;
        this.ctx!.fillStyle = textColor;
        this.ctx!.textBaseline = 'middle';
        this.ctx!.textAlign = 'left';
    
        this.ctx!.shadowColor = textShadow;
        this.ctx!.shadowBlur = 5;
        this.ctx!.shadowOffsetX = 2;
        this.ctx!.shadowOffsetY = 2;

        this.ctx!.fillText(`${characterName}: ${text}`, 10, this.canvasHeight - 50);

        this.ctx!.shadowColor = 'transparent';

        this.drawImageColoredSilhouette(image, this.canvasWidth - 390, this.canvasHeight - 500, 400, 400, silhouetteColor);
        this.drawImage(image, this.canvasWidth - 400, this.canvasHeight - 500, 400, 400);
    }    
}