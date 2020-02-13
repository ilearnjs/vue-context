<template>
  <pre>$_ctx.prop1 = {{ c_prop1 }}</pre>
</template>

<script>
import { createContextMixin } from '../context'

const props = {
  prop1: {
    type: String,
    default: 'component default'
  },
}

export default {
  name: 'Component1',
  mixins: [createContextMixin(props)],
  props,
}
</script>

<style>
</style>