import 'jquery';
import 'bootstrap'; //以别名方式引入,参见webpack.config.js  resolve alias
const _ = require('lodash');
import Vue from 'vue'
import App from './markdown.vue'

var token = ''
console.info('token:' + token);
if (_.isEmpty(token)) {
  console.info('empty')
}else {
  console.info('not empty')
}
// 应用组件
window.app = require('main');  //以别名方式引入,参见webpack.config.js  resolve alias

$(document).ready(function () {
  console.info('document ready');
  new Vue({
    el: '#markdown',
    render: h => h(App)
  });
});
