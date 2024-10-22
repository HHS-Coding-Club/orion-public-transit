export const assets: {
    image: {
        app: {
            name: string;
            src: string;
            loaded?: boolean;
            image?: HTMLImageElement;
        }[];
        icon: {
            name: string;
            src: string;
            loaded?: boolean;
            image?: HTMLImageElement;
        }[];
    };
} = {
    image: {
        app: [
            { name: 'trueends', src: 'assets/image/app/trueends.png' }
        ],
        icon: [
            { name: 'jzangry', src: 'assets/image/icon/jz/angry.png' },
            { name: 'jzblushing', src: 'assets/image/icon/jz/blushing.png' },
            { name: 'jzhappy', src: 'assets/image/icon/jz/happy.png' },
            { name: 'jzhurt', src: 'assets/image/icon/jz/hurt.png' },
            { name: 'jzsurprised', src: 'assets/image/icon/jz/surprised.png' },
            { name: 'jzupset', src: 'assets/image/icon/jz/upset.png' },
        ]
    }
};

export function loadAssets(assetArray: { name: string; src: string; loaded?: boolean; image?: HTMLImageElement }[], debug: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
        let loadedCount = 0;

        assetArray.forEach((asset) => {
            if (debug) console.log(`Loading asset: ${asset.name}`);
            const image = new Image();
            image.onload = () => {
                asset.loaded = true;
                asset.image = image;
                loadedCount++;

                if (loadedCount === assetArray.length) {
                    resolve();
                }
            };
            image.onerror = () => {
                console.error(`Failed to load asset: ${asset.name}`);
                reject(new Error(`Failed to load asset: ${asset.name}`));
            };
            image.src = asset.src;
        });
    });
}