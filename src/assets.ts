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
        npc: {
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
            { name: 'gystangry', src: 'assets/image/icon/gyst/angry.png' },
            { name: 'gystblushing', src: 'assets/image/icon/gyst/blushing.png' },
            { name: 'gysthappy', src: 'assets/image/icon/gyst/happy.png' },
            { name: 'gysthurt', src: 'assets/image/icon/gyst/hurt.png' },
            { name: 'gystsurprised', src: 'assets/image/icon/gyst/surprised.png' },
            { name: 'gystupset', src: 'assets/image/icon/gyst/upset.png' },
            { name: 'maverickangry', src: 'assets/image/icon/maverick/angry.png' },
            { name: 'maverickblushing', src: 'assets/image/icon/maverick/blushing.png' },
            { name: 'maverickhappy', src: 'assets/image/icon/maverick/happy.png' },
            { name: 'maverickhurt', src: 'assets/image/icon/maverick/hurt.png' },
            { name: 'mavericksurprised', src: 'assets/image/icon/maverick/surprised.png' },
            { name: 'maverickupset', src: 'assets/image/icon/maverick/upset.png' },
            { name: 'mizukiangry', src: 'assets/image/icon/mizuki/angry.png' },
            { name: 'mizukiblushing', src: 'assets/image/icon/mizuki/blushing.png' },
            { name: 'mizukihappy', src: 'assets/image/icon/mizuki/happy.png' },
            { name: 'mizukihurt', src: 'assets/image/icon/mizuki/hurt.png' },
            { name: 'mizukisurprised', src: 'assets/image/icon/mizuki/surprised.png' },
            { name: 'mizukiupset', src: 'assets/image/icon/mizuki/upset.png' }
        ],
        npc: [
            { name: 'aaron', src: 'assets/image/npc/aaron.png' },
            { name: 'adrian', src: 'assets/image/npc/adrian.png' },
            { name: 'anthony', src: 'assets/image/npc/anthony.png' },
            { name: 'aria', src: 'assets/image/npc/aria.png' },
            { name: 'brook', src: 'assets/image/npc/brook.png' },
            { name: 'bruce', src: 'assets/image/npc/bruce.png' },
            { name: 'cals', src: 'assets/image/npc/cals.png' },
            { name: 'chrome', src: 'assets/image/npc/chrome.png' },
            { name: 'crow', src: 'assets/image/npc/crow.png' },
            { name: 'dot', src: 'assets/image/npc/dot.png' },
            { name: 'drew', src: 'assets/image/npc/drew.png' },
            { name: 'emmy', src: 'assets/image/npc/emmy.png' },
            { name: 'grey', src: 'assets/image/npc/grey.png' },
            { name: 'griffin', src: 'assets/image/npc/griffin.png' },
            { name: 'hayden', src: 'assets/image/npc/hayden.png' },
            { name: 'jack', src: 'assets/image/npc/jack.png' },
            { name: 'jaxie', src: 'assets/image/npc/jaxie.png' },
            { name: 'lee', src: 'assets/image/npc/lee.png' },
            { name: 'marie', src: 'assets/image/npc/marie.png' },
            { name: 'min', src: 'assets/image/npc/min.png' },
            { name: 'mo' , src: 'assets/image/npc/mo.png' },
            { name: 'mona', src: 'assets/image/npc/mona.png' },
            { name: 'morrigan', src: 'assets/image/npc/morrigan.png' },
            { name: 'nat', src: 'assets/image/npc/nat.png' },
            { name: 'phil', src: 'assets/image/npc/phil.png' },
            { name: 'phineas', src: 'assets/image/npc/phineas.png' },
            { name: 'phinley', src: 'assets/image/npc/phinley.png' },
            { name: 'sergio', src: 'assets/image/npc/sergio.png' },
            { name: 'serina', src: 'assets/image/npc/serina.png' },
            { name: 'sienna', src: 'assets/image/npc/sienna.png' },
            { name: 'steven', src: 'assets/image/npc/steven.png' },
            { name: 'therat', src: 'assets/image/npc/therat.png' },
            { name: 'vanilla', src: 'assets/image/npc/vanilla.png' },
            { name: 'viper', src: 'assets/image/npc/viper.png' },
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