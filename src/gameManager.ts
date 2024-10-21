/*
    Game Manager class
*/
export class GameManager {
    private document: Document;

    constructor(document: Document) {
        this.document = document;
    }

    public renameTitle(title: string) {
        this.document.title = title;
    }
}