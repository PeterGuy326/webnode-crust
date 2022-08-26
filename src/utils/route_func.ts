import * as path from 'path'
import * as fs from 'fs'

/**
 * 获取根项目名
 * @returns application
 */
function getApplicationName(): string {
    const name = path.join(__dirname, '../../').split('/').pop()
    const application = name.split('-').pop()
    return application
}

/**
 * 获取 action 列表
 * @returns 
 */
function getActionList(): string[] {
    var actionList = fs.readdirSync("../page")
    actionList.map(action => {
        action.replaceAll('.ts', '')
    })
    return actionList
}

/**
 * 根据 action 获取 方法列表
 * @returns 
 */
function getMethodList(action: string): { [action: string]: string[]} {
    return {}
}

export {
    getApplicationName,
    getActionList,
    getMethodList
}