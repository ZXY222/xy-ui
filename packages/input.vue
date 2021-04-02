<template>
  <div class="xy-input" :class="{'xy-input--suffix': clearable || showPassword}">
    <input
      :type="showPassword ? (show ? 'password' : 'type') : type"
      class="xy-input__inner"
      :class="{'is-disabled':disabled}"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="model"
      :clearable="clearable"
      :showPassword="showPassword"
    >
    <span class="xy-input__suffix" v-if="clearable || showPassword">
      <i class="xy-input__icon xy-icon-circle-close" v-if="clearable && value" @click="clear"></i>
      <i class="xy-input__icon xy-icon-view" v-if="showPassword && value" @click="showChange" :class="{'eye-color': show}"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'XyInput',
  data () {
    return {
      show: true
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    model (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    showChange () {
      this.show = !this.show
    }
  }
}
</script>

<style scoped lang="scss">
.xy-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .xy-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.xy-input--suffix {
  .xy-input__inner {
    padding-right: 30px;
  }
  .xy-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
    .eye-color{
      color: black;
    }
  }
}
</style>
