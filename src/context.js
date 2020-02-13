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

export const createContextMixin = () => {
  let $_ctx = function () {
    const { $options, $props, $_rootContext, $_localContext } = this
    return new Proxy({}, {
      get (obj, prop) {
        return getValue()

        function getValue () {
          const originalValue = $options.propsData[prop]
          const localContextValue = $_localContext[$options.name] && $_localContext[$options.name][prop]
          const rootContextValue = $_rootContext[$options.name] && $_rootContext[$options.name][prop]
          const originalOrDefault = $props[prop]
          const computed = originalValue || localContextValue || rootContextValue || originalOrDefault

          return {
            originalValue,
            rootContextValue,
            originalOrDefault,
            localContextValue,
            computed,
          }
        }
      }
    })
  }

  return {
    mixins: [injectContextMixin],
    computed: {
      $_ctx
    }
  }
}
