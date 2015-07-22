/**
 * filter, need trie and split module
 * @author Ade.Li <251089564@qq.com>
 */

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
}

/**
 * find post contains any filter words
 * return [] if the post pass the filter test
 * return [fitler words] if post failed, and the result set is the reason
 */
function filter(post){
	return trie.containsAny( root, post );
}

module.exports.init = init;
module.exports.filter = filter;