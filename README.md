##TrieTreeFilter

javascript extension for spam word filtering via Trie tree  
本工程用于匹配关键词，基于Trie Tree。  
灵感源自php版本的关键词过滤组件，但是node.js却很难搜索到相关组件。  


###Why not hash?
Although hash gives O(1) for 'contains' operation, this ignore the fact compare operation consumes the time.  
In trie, isPrefix operation reduce the time when comparing two words.


###About Trie Tree implement
inspirit by a post from: <http://notdennisbyrne.blogspot.com/2008/12/javascript-trie-implementation.html>

###About Chinese split

###未来改进
纯Trie Tree并不是最高效的匹配方式，未来将改进为Aho–Corasick<https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_algorithm>
