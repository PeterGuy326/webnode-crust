import { Page } from "../base/page";

export class TestPage extends Page {
    
    map = {
        test: {
            test: 'test'
        }
    }

    async test() {
        return 'test'
    }
}