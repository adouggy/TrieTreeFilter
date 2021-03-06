TrieTreeFilter
===================
javascript program for spam word filtering via trie tree.  
can run as a node js project.

## Index

- [Run the project](#run-the-project)
- [Benchmark](#benchmark)
- [Why not regex?](#why-not-regex)
- [Why not hash?](#why-not-hash)
- [About Trie Tree](#about-trie-tree)
- [Future improvement](#future-improvement)
- [MIT License](#mit-license)

### Run the project
Run it under node, to see benchmark
```shell  
	node ./test.js
```

### Benchmark
```
Test Regex
res:操你
post length:33 interval:14(mili), average:0.014(mili)

Test Trie
res:操你
post length:33 interval:6(mili), average:0.006(mili)
```

### Why not regex?
It's pretty easy just find the filter words in a post via regex, but , time issue.  
See the benchmark.

### Why not hash?
Although hash gives O(1) for 'contains' operation, but we need split the post into words, which the time consumption is much higher than comparing.

### About trie tree
Inspirit by a [post](http://notdennisbyrne.blogspot.com/2008/12/javascript-trie-implementation.html)  
If we want filter a post with some sensetive words, total time consumption should be:  
```
O( N x TrieHeight )
```
which N is near the character count in post and TrieHeight instead of longest words in filter dictionary.  

### Future improvement
Pure trie tree is not the best method, to improve, see [Aho-Corasick algorithm](https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_algorithm)  
纯Trie tree并不是最高效的匹配方式，未来将改进为[Aho–Corasick算法](https://en.wikipedia.org/wiki/Aho%E2%80%93Corasick_algorithm)


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