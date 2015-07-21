

/**
 * test here
 * @author Ade.Li <251089564@qq.com>
 */

var filter = require('./filter.js');

filter.init( ['法轮功', '傻逼'] );
console.log( filter.filter( '中华人民共和国万岁，万岁，万万岁;法轮功无疆，无疆，无江江' ) );
