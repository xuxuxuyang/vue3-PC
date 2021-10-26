import { ElButton, ElTable, ElTableColumn } from 'element-plus'

//遍历注册全局组件
const eles = [ElButton, ElTable, ElTableColumn]
export function elecomps(app) {
  for (const item of eles) {
    app.component(item.name, item)
  }
}