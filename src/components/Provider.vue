<script>
import isArray from 'lodash/isArray'
import mergeWith from 'lodash/mergeWith'
import { injectContextMixin } from '../context'

export default {
  name: 'Provider',
  mixins: [injectContextMixin],
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
  provide () {
    function customizer (object) {
      if (isArray(object)) {
        return object
      }
    }

    const mergedContext = mergeWith(this.context, this.$_context || this.$_rootContext, customizer)

    return { '$_localContext': mergedContext }
  },
  render () {
    return this.$slots.default || null
  },
}
</script>
