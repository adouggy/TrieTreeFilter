/**
 * the implement of Trie Tree
 * @author Ade.Li <251089564@qq.com>
 */
TrieTree = {};

TrieTree.Node = function(){
  this.data = ''; // character
  this.children = []; // type hash, character->TrieTree.Node
};

TrieTree.Node.prototype.add = function(word) {
  if(!word) 
    return;

  var k = word[0];
  if( !this.children[k] ){
    this.children[k] = new TrieTree.Node();
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
     if( Object.keys(child.children).length == 0 && word.length == 1){
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
