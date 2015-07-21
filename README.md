##TrieTreeFilter

Javascript extension for spam word filtering via Trie tree.  
This project should run as server side.  

本工程用于匹配关键词，基于Trie Tree。对于中文分词模块则采用开源的Node.js工程，详见<###About Chinese split>  

###Run the project
First, install Chinese split module: npm install segment --save  
Sechond, run it under node.

###Why not regex?
Its pretty easy just find the filter words in a post via regex, but still, time issue.
See the benchmark.

###Why not hash?
Although hash gives O(1) for 'contains' operation, this ignore the fact compare operation consumes the time.  
In trie, isPrefix operation reduce the time when comparing two words.


###About Trie Tree
Inspirit by a post from: <http://notdennisbyrne.blogspot.com/2008/12/javascript-trie-implementation.html>
So, if we want filter a post with some sensetive words, total time consumption should be:  
O(NxTrieHeight), which N instead of N words in post and TrieHeight instead of longest words in filter dictionary.  

###About Chinese split
目前采用Segment模块，基于Node.js，详情见:<https://github.com/leizongmin/node-segment>

###未来改进
纯Trie Tree并不是最高效的匹配方式，未来将改进为Aho–Corasick算法:<https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_algorithm>


## MIT License

```
Copyright (c) 2015 Yazi Li (李雅子) <adouggy@gmail.com>

The MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```