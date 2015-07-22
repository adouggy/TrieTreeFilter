/**
 * filter, need trie and split module
 * @author Ade.Li <251089564@qq.com>
 */

var splitter = require('./split.js');
var trie = require('./mytrie.js');
var root = new trie.Node();

/**
 * input an array of filter words and construct tree
 */
function init(filterWords){
	for( var i =0; i<filterWords.length; i++ ){
		root.add( filterWords[i] );
	}
	//root.printDF();
	console.log( root.contains("中共") );
}

/**
 * split the post and find whether it contains filter words
 * return [] if the post pass the filter test
 * return [fitler words] if post failed, and the result set is the reason
 */
function filter(post){
	var res = [];
	var arr = splitter.split( post );
	//console.log( "split:" + arr );
	for( var i=0; i<arr.length; i++ ){
		if( root.contains( arr[i] ) ){
			res.push( arr[i] );
			break;
		}
	}

	return res;
}

module.exports.init = init;
module.exports.split = splitter.split; //just for test use
module.exports.filter = filter;