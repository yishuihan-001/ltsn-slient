/*
 * @Des: 页面、组件说明
 * @Author: ur name
 * @Date: 2020-06-30 23:44:00
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 */ 
'use strict';

/* module.exports = (input, {postfix = 'rainbows'} = {}) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return `${input} & ${postfix}`;
}; */

exports.query = require('./lib/query')
exports.update = require('./lib/update')
