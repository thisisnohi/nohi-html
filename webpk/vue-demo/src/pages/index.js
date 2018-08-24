import Vue from 'vue'
import App from './App.vue'

import 'jquery';
import 'bootstrap/dist/css/bootstrap.css'

// 应用组件
window.app = require('../resources/js/main.js');

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#main',
  data () {
    return {
        name : 'NOHI Vue2 demo'
      , projectInfo : app.toString()
    }
  }
})

$('#main').css({background: 'red'});
