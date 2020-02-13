<template>
  <pre>$_ctx.prop1 = {{ $_ctx.prop1 }}</pre>
</template>

<script>
import { createContextMixin } from '../context'

export default {
  name: 'Component1',
  mixins: [createContextMixin()],
  props: {
    prop1: {
      type: String,
      default: 'component default'
    }
  },
}
</script>

<style>
</style>