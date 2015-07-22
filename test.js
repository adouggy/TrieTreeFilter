

/**
 * test here
 * @author Ade.Li <251089564@qq.com>
 */

var filter = require('./filter.js');
var fs = require('fs');

// test case with hit at the end of line, which, is the worst case for trie
 // var post = '我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，天灭中共,啦啦啦啦啦啦';
// with no fitler word
// var post = '我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，啦啦啦啦啦啦';
// at beginning
var post = '我很长,，!!!!共产党!!!!很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，我很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，很长,，天灭中共,啦啦啦啦啦啦';
// very short, no filter word
// var post = '啦啦啦啦啦';
// very short, with filter word
// var post = '啦啦啦啦啦操你妈';


var time;
var filterWords;
var testCount = 1000;
var res = false;

// init filter trie tree
try{
	var data = fs.readFileSync('./filter_dict.txt', 'utf8');
	filterWords = data.split('\n');
	time = Date.now();
 	filter.init( filterWords );
 	console.log("construct trie tree, time cost:" + (Date.now() - time) + "(mili)");
 	console.log("");
}catch(err){
	return console.log(err);
}

//
console.log("Test Regex");
time = Date.now();
for( var i=0; i<testCount; i++ ){
	res = regexFilter(post);
}
console.log("res:" + res);
printInterval(time);

//
// console.log("Test Hash");
// time = Date.now();
// for( var i=0; i<testCount; i++ ){
// 	res = hashFilter(post);
// }
// console.log("res:" + res);
// printInterval(time);

//
console.log("Test Trie");
time = Date.now();
for( var i=0; i<testCount; i++ ){
	res = filter.filter( post );
}
console.log("res:" + res);
printInterval(time);


function printInterval(startTime){
	var interval = Date.now() - time;
	var average = interval / testCount;
	console.log("post length:" + post.length + " interval:" + interval + "(mili), average:" + average + "(mili)");
	console.log("");
}

function regexFilter(post){
	var res = [];
	for( var i=0; i<filterWords.length; i++ ){
		if( post.search( filterWords[i] ) > 0 ){
			res.push(filterWords[i]);
			break;
		}
	}
	return res;
}

// function hashFilter(post){
// 	//need split here
// 	var hash = [];
// 	time = Date.now();
// 	var arr = filter.split(post);
// 	console.log( Date.now() - time );
// 	for( var i=0; i<arr.length; i++ ){
// 		hash[arr[i]] = 1;
// 	}
// 	var res = [];
// 	for( var i=0; i<filterWords.length; i++ ){
// 		if( hash[filterWords[i]] == 1 ){
// 			res.push( filterWords[i] );
// 			break;
// 		}
// 	}
// 	return res;
// }




