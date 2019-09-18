Vue2 笔记
> https://cn.vuejs.org/v2/guide/

# Vue实例

## 指令
    指令带有前缀 v-，以表示它们是 Vue 提供的特殊特性
* v-bind:title="message"
    * 将这个元素节点的 title 特性和 Vue 实例的 message 属性保持一致
* 条件与循环
    * v-if: 控制显示、隐藏
    * v-for="todo in todos"   
* 处理用户输入
   * v-on: 添加一个事件监听器
        * v-on:click="reverseMessage"
        * methods:{reverseMessage(){} }
   * v-model: 表单输入和应用状态之间的双向绑定
* v-once: 执行一次性地插值
* v-html: 当html处理
    * 双大括号会将数据解释为普通文本，而非 HTML 代码。
    * 为了输出真正的 HTML，你需要使用 v-html 指令

## 生命周期
* created、mounted、updated 和 destroyed。
* before
* 生命周期钩子的 this 上下文指向调用它的 Vue 实例。        

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
 
## 模板语法

### 插值
* 文本

    * 数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值

    ```
    <span>Message: {{ msg }}</span>
    ```
    
    *  v-once 指令: 执行一次性地插值

* 原始 HTML v-html 指令
```
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```    

* 特性
    * Mustache 语法不能作用在 HTML 特性上，遇到这种情况应该使用 v-bind 指令：
    ```
     <div v-bind:id="dynamicId"></div>
    ```
    
    
### 指令
> 指令 (Directives) 是带有 v- 前缀的特殊特性。指令特性的值预期是单个 JavaScript 表达式 (v-for 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM

* 参数
```
<a v-bind:href="url">...</a>
```
在这里 href 是参数，告知 v-bind 指令将该元素的 href 特性与表达式 url 的值绑定。

v-on 指令，它用于监听 DOM 事件

* 修饰符
> 修饰符 (Modifiers) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定
```
<form v-on:submit.prevent="onSubmit">...</form>
.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：
```

* 动态参数(从 2.6.0 开始)
    * <a v-bind:[attributeName]="url"> 
        * attributeName == href  ==> <a v-bind:href="url"> ... </a>
    * <a v-on:[eventName]="doSomething">
        * eventName == focus ==> v-on:focus
* 修饰符
    * <form v-on:submit.prevent="onSubmit">...</form>

## 缩写
```
 v-bind 缩写 <a :href="url">...</a>
 v-on 缩写   <a @click="doSomething">...</a>
```

## 计算属性和侦听器
## 计算属性

### 基础例子
```
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
运行结果
Original message: "Hello"
Computed reversed message: "olleH"
```

### 计算属性缓存 vs 方法
### 计算属性 vs 侦听属性
### 计算属性的 setter

# Class 与 Style 绑定

## 绑定 HTML Class
### 对象语法
* `v-bind:class` 动态地切换 class
```
<div v-bind:class="{ active: isActive }"></div>
<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>
```
### 数组语法


## 绑定内联样式
* `v-bind:style`
```
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
data: {
  activeColor: 'red',
  fontSize: 30
}
```
直接绑定到对象上
```
<div v-bind:style="styleObject"></div>
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```


# 条件渲染 `v-if v-else v-else-if`
```
<h1 v-if="ok">Yes</h1>
<h1 v-else>No</h1>

<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

* 在 `<template>` 元素上使用 v-if 条件渲染分组
```
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

* 用 key 管理可复用的元素
* `v-show` 的元素始终会被渲染并保留在 DOM注意，v-show 不支持 <template> 元素，也不支持 v-else。


* `v-if` 是“真正”的条件渲染,`v-if` 也是惰性的 , v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换


## 列表渲染
* 注意事项
   * Vue 不能检测以下数组的变动：
       * 当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
       * 当你修改数组的长度时，例如：vm.items.length = newLength 
   * 使用 vm.$set 实例方法: vm.$set(vm.items, indexOfItem, newValue)
   * vm.items.splice(newLength)

## 事件处理
## 表单输入绑定
