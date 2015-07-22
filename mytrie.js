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

module.exports.Node = TrieTree.Node
