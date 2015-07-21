/**
 * test here
 * @author Ade.Li <251089564@qq.com>
 */

var splitter = require('./split.js');
var trie = require('./mytrie.js');

var arr = splitter.split( '中华人民共和国万岁，万岁，万万岁;法轮功无疆，无疆，无江江' )

console.log( arr );


var root = new trie.Node();
root.add("abc");
root.add("abd");
root.add("cde");
root.add("你大爷的");

console.log( "test:" + root.contains("abe") );
console.log( "test:" + root.contains("abc") );
console.log( "test:" + root.contains("ab") );
console.log( "test:" + root.contains("abcd") );
console.log( "test:" + root.contains("abcee") );
console.log( "test:" + root.contains("cde") );
console.log( "test:" + root.contains("你大爷的") );
console.log( "test:" + root.contains("你大爷") );