import Vue from 'vue'
import App from './App.vue'


const $ = require('jquery');
const _ = require('lodash');
import 'bootstrap'; //以别名方式引入,参见webpack.config.js  resolve alias

// 应用组件
window.app = require('main');  //以别名方式引入,参见webpack.config.js  resolve alias

var token = ''
console.info('token:' + token);
if (_.isEmpty(token)) {
  console.info('empty')
}else {
  console.info('not empty')
}
new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#main',
  data () {
    return {
        name : 'NOHI Vue2 demo'
      , projectInfo : app
    }
  }
})

// $('#main').css({background: 'red'});
