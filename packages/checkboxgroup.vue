<template>
  <div class="xy-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XyCheckboxGroup',
  props: {
    value: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  provide () {
    return {
      CheckBoxGroup: this
    }
  }
}
</script>

<style scoped>

</style>
