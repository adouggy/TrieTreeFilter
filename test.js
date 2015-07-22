

/**
 * test here
 * @author Ade.Li <251089564@qq.com>
 */

var filter = require('./filter.js');
var fs = require('fs');

// init filter trie tree
try{
	var data = fs.readFileSync('./filter_dict.txt', 'utf8');
	var arr = data.split('\n');
 	filter.init( arr );
}catch(err){
	return console.log(err);
}

//console.log( filter.filter("中共") );
console.log( filter.filter( '这是一篇特别特别妈的长的文章,这是一篇特别特别他妈的长的文章,共产党这是一篇特别特别他妈的长的文章,这是一篇特别特别他妈的长的文章,这是一篇特别特别他妈的长的文章,这是一篇特别特别他妈的长的文章,这是一篇特别特别他妈的长的文章,这是一篇特别特别他妈的长的文章,这是一篇特别特别他妈的长的文章,这是一篇特别特别他妈的长的文章,这是一篇特别特别他妈的长的文章,这是一篇特别特别他妈的长的文章,' ) );
