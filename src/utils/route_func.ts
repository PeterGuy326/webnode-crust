import * as path from 'path'
import * as fs from 'fs'
import * as _ from 'lodash'

/**
 * 获取根项目名
 * @returns application
 */
function getApplicationName(): string {
    const dirPath = path.join(__dirname, '../../')
    const dirList = dirPath.split('/')
    const name = dirList[dirList.length - 2]
    const application = name.split('-').pop()
    return application
}

/**
 * 获取 action 列表
 * @returns 
 */
function getActionList(): string[] {
    const actionList = fs.readdirSync("./src/page")
    const actionStrSet = new Set<string>()
    actionList.map(action => {
        actionStrSet.add(_.replace(action, '_page.ts', ''))
    })
    return [...actionStrSet]
}

/**
 * 根据 action 获取 方法列表
 * @returns 
 */
function getMethodMap(action: string): { [method: string]: string} {
    return {}
}

export {
    getApplicationName,
    getActionList,
    getMethodMap
}