<template>
  <div class="hm-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XyForm',
  props: {
    model: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
