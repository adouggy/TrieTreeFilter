/**
 * the implement of Trie Tree
 * 2015-7
 * @author Ade.Li <251089564@qq.com>
 */
TrieTree = {}; //namespce for non-node js engine.

TrieTree.Node = function(){
  this.data = ''; // character
  this.isOnlyPrefix = true; // indicate this should be the end of a word, not just a prefix
  this.children = []; // type hash, character->TrieTree.Node
};

TrieTree.Node.prototype.add = function(word) {
  if(!word) 
    return;

  var k = word[0];
  if( !this.children[k] ){
    this.children[k] = new TrieTree.Node();
  }
  if( word.length == 1 ){
    this.children[k].isOnlyPrefix = false;
  }
  this.children[k].data = k;
  this.children[k].add( word.substring(1) );
};

/**
 * to see the word in a trie
 */
TrieTree.Node.prototype.contains = function(word) {
  if( !word )
    return false;

  var k = word.charAt(0);
  var child = this.children[k];
  
  if( child ){
    if( child.isOnlyPrefix == false && word.length == 1){
      //hit last one
      return true;
    }
    return child.contains( word.substring(1) );
  }
 
  return false;
}

/**
 * depth first
 */
TrieTree.Node.prototype.printDF = function(){
  if( !this || !this.children )
    return;

  var nodes = [];
  for( var k in this.children ){
     nodes.push( this.children[k] );
  }
 
  while( nodes.length != 0 ){
    var node = nodes.shift();
    console.log( node.data );
    
    for( var k in node.children ){
      nodes.unshift( node.children[k] );
    }

  }
}

/**
 * to see the any word in post exists in trie
 * pretty cool to iterate all post via trie, ah~
 * return hit words
 */
function containsAny(root, post) {
  if( !post || !root )
    return [];

  var res = [];
  var node = root;
  var w = '';
  for( var i=0; i<post.length; i++ ){
    var k = post.charAt(i);
    var child = node.children[k];
    if( child ){
      w += k;
      node = child;
      if( child.isOnlyPrefix == false ){
        res.push( w );
        return res;
      }
    }else{
      if( node != root ){
        i-=w.length;
        node = root;
        w = '';
      }
    }
  }
 
  return res;
}

module.exports.Node = TrieTree.Node
module.exports.containsAny = containsAny


// just for test...
// var root = new TrieTree.Node();
// root.add("abc");
// root.add("abd");
// root.add("cde");
// root.add("bac");

// console.log( containsAny( root, "babcd" ) );
// console.log( containsAny( root, "abc" ) );
// console.log( containsAny( root, "cde" ) );
// console.log( containsAny( root, "aacdefff" ) );
