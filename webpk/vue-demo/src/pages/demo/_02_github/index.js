require('bootstrap');
import Vue from 'vue'

var token = ''
console.info('1:' + _ + ',2:' + $);
if (_.isEmpty(token)) {
  console.info('empty')
} else {
  console.info('not empty')
}
// 应用组件
window.app = require('main');  //以别名方式引入,参见webpack.config.js  resolve alias

$(document).ready(function () {
  console.info('document ready');

  var vue = new Vue({
    el: '.container'
    , data: {
        types:['radio-1','radio-2']
      , current: 'radio-1'
      , msg : 'I cannot give you an answer until you ask a question!'
      , list : []
    }
    ,
    created : function(){
      this.getResult();
      this.debouncedGetResult = _.debounce(this.getResult, 500)
      console.info(this.debouncedGetResult);
    }
    ,
    watch : {
      current : function(a,b){
        this.msg = 'Waiting for get result...'
        this.debouncedGetResult();
      }
    }
    ,
    methods : {
      getResult : function () {
        var count = _.random(3, 10);
        this.list = [];
        for (var i = 0 ; i < count ; i ++) {
          this.list.push( this.current + ' : this is [' + i + ']');
        }
        this.msg = 'It\'s ok , enjoy it!'
      }
    }
  });
});
