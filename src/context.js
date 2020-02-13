import Vue from 'vue'

Vue.prototype.$_rootContext = Vue.observable({
  all: 'all',
  Component1: {
    prop1: 'context root default'
  }
})

export const injectContextMixin = {
  inject: {
    $_localContext: {
      from: '$_localContext',
      default: () => ({}),
    },
  },
}

export const createContextMixin = (props) => {
  let computed = {}

  Object.keys(props).forEach(key => {
    computed[`c_${key}`] = function () {
      console.log('called')
      const { $options, $props, $_rootContext, $_localContext } = this
      const originalValue = $options.propsData[key]
      const localContextValue = $_localContext[$options.name] && $_localContext[$options.name][key]
      const rootContextValue = $_rootContext[$options.name] && $_rootContext[$options.name][key]
      const originalOrDefault = $props[key]
      const computed = originalValue || localContextValue || rootContextValue || originalOrDefault

      return {
        originalValue,
        rootContextValue,
        originalOrDefault,
        localContextValue,
        computed,
      }
    }
  })

  return {
    mixins: [injectContextMixin],
    computed: {
      ...computed
    }
  }
}
