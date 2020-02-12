import Vue from 'vue'

Vue.prototype.$_context = Vue.observable({
  all: 'all',
  Component1: {
    prop1: 'context root default'
  }
})

export const createContextMixin = () => {
  let $ctx = function () {
    const { $options, $props, $_context } = this
    return new Proxy({}, {
      get (obj, prop) {
        return getValue()

        function getValue () {
          const originalValue = $options.propsData[prop]
          const rootContextValue = $_context[$options.name] && $_context[$options.name][prop]
          const originalOrDefault = $props[prop]
          const computed = originalValue || rootContextValue || originalOrDefault

          return {
            originalValue,
            rootContextValue,
            originalOrDefault,
            computed
          }
        }
      }
    })
  }

  return {
    computed: {
      $ctx
    }
  }
}
