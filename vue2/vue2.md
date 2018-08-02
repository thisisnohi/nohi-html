Vue2 笔记
> https://cn.vuejs.org/v2/guide/

# Vue实例

## 数据与方法
* Object.freeze(obj) 阻止修改现有的属性
* v-on:click="foo = 'baz' 执行foo=='bza'脚本 click里也可以是函数
* Vue 实例属性与方法,前缀 $，以便与用户定义的属性区分开来
```
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
})
```

## 实例生命周期钩子
> 每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数

* `created` 钩子可以用来在一个实例被创建之后执行代码
```
new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})
// => "a is: 1"
```
* `mounted`、`updated` 和 `destroyed`。生命周期钩子的 this 上下文指向调用它的 Vue 实例。

### 生命周期图示
