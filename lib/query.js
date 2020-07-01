/*
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2020-06-30 23:49:22
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 */ 
const Table = require('cli-table')

function query(dists) {
  const keys = Object.keys(dists[0])
  // 建立表头
  const table = new Table({
    head: keys
  })
  
  // 拼接出表格的每一行
  return dists
    .reduce((res, item) => {
      table.push(
        Object.values(item)
      )
      return res
    }, table)
    .toString()
}

module.exports = query
