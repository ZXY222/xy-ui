<template>
  <div class="xy-switch" :class="{'is-checked':value}" @click="clickChange">
    <input
      class="xy-switch__input"
      type="checkbox"
      :name="name"
      ref="check"
    >
    <span class="xy-switch__core" ref="mySwitch">
      <span class="xy-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'XySwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickChange () {
      this.$emit('input', !this.value)
      this.$nextTick(() => {
        this.setColor()
        this.$refs.check.chacked = this.value
      })
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.mySwitch.style.borderColor = color
        this.$refs.mySwitch.style.backgroundColor = color
      }
    }
  },
  mounted () {
    this.setColor()
    this.$refs.check.chacked = this.value
  }
}
</script>

<style scoped lang="scss">
.xy-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .xy-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .xy-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .xy-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.xy-switch.is-checked {
  .xy-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .xy-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
