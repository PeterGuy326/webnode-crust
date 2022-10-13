import { Page } from "../base/Page";

export class TestPage extends Page {
    
    constructor() {
        super()
        this.map.test = {
            test: 'test'
        }
    }

    async test() {
        return 'test'
    }
}