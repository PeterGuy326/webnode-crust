export class Page {
    map: {
        [action: string]: {
            [method: string]: string // 方法名 -> url 中的 method
        }
    }
}