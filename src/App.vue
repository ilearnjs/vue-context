<template>
  <div id="app">
    <div>
      <button @click="changeOriginal">Change original</button>
      <button @click="changeContext">Change context</button>
    </div>
    <Component1 :prop1="original" />
  </div>
</template>

<script>
import Component1 from './components/Component1'

export default {
  name: 'App',
  components: {
    Component1,
  },
  data () {
    return {
      original: 'original default',
    }
  },
  methods: {
    changeOriginal () {
      this.original = 'original new'
    },
    changeContext () {
      this.$_context.Component1.prop1 = 'context root new'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
