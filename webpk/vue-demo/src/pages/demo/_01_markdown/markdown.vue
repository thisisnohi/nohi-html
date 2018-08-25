<template>
  <div id="markdown" class="container">
    <div class="row">
      <div class="col col-lg-6">
        <textarea class="content" :value="input" @input="update"></textarea>
      </div>
      <div class="col col-lg-6">
        <div class="content markdown-show" v-html="compiledMarkdown"></div>
      </div>
    </div>
  </div>
</template>

<script>
  const _ = require('lodash');

  export default {
    name: 'markdown',
    data: function () {
      return {
        input: '# hello'
      }
    }
    ,
    methods: {
      update: _.debounce(function (e) {
        this.input = e.target.value
      }, 300)
    },
    computed: {
      compiledMarkdown: function () {
        return marked(this.input, { sanitize: true })
      }
    }
  }
</script>

<style lang="scss">
  #markdown , #markdown div , #markdown .col  , .col .content{
    width: 100%;
    height: 100%;
  }
  .markdown-show{
    border: 1px solid blue;
  }
</style>
