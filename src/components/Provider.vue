<script>
import isArray from 'lodash/isArray'
import mergeWith from 'lodash/mergeWith'

export default {
  name: 'Provider',
  inject: {
    _$context: {
      from: 'vaContext',
      default: () => { },
    },
  },
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
  provide () {
    function customizer (object, other) {
      if (isArray(other)) {
        return other
      }
    }

    const newContext = mergeWith(this._$context, this.context, customizer)

    return { 'vaContext': newContext }
  },
  render () {
    return this.$slots.default || null
  },
}
</script>
