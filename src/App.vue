<template>
  <div id="app">
    <div>
      <button @click="changeOriginal">Change original</button>
      <button @click="changeContextLocal">Change context local</button>
      <button @click="changeContextRoot">Change context root</button>
    </div>
    <hr />
    <h3>W/o wrapper</h3>
    <Component1 :prop1="original" />
    <hr />
    <h3>Wrapped</h3>
    <Provider :context="localContext">
      <Component1 :prop1="original" />
    </Provider>
    <hr />
  </div>
</template>

<script>
import Provider from './components/Provider'
import Component1 from './components/Component1'

export default {
  name: 'App',
  components: {
    Component1,
    Provider,
  },
  data () {
    return {
      original: 'original default',
      localContext: { Component1: { prop1: 'context local default' } }
    }
  },
  methods: {
    changeOriginal () {
      this.original = 'original new'
    },
    changeContextLocal () {
      this.localContext.Component1.prop1 = 'context local new'
    },
    changeContextRoot () {
      this.$_rootContext.Component1.prop1 = 'context root new'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
