/**
 * Chinese splitter facade, which, can replace splitter easily in the future.
 * @author Ade.Li <251089564@qq.com>
 */

// 载入模块
var Segment = require('segment');
// 创建实例
var segment = new Segment();
// 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
segment.useDefault();

/**
 * should output an array of words
 */
function split(post){
	var res = segment.doSegment(post);
	var arr = [];
	if( !res )
		return arr;

	for( var k in res ){
		arr.push( res[k]['w'] );
	}

	return arr;
}

module.exports.split = split;