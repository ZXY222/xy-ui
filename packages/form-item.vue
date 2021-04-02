<template>
  <div class="xy-form-item">
    <label class="xy-form-item__label">{{label}}</label>
    <div class="xy-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XyFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.xy-form-item {
  margin-bottom: 25px;
  .xy-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .xy-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
