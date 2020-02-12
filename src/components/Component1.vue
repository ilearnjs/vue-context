<template>
  <div>{{ $ctx.prop1 }}</div>
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