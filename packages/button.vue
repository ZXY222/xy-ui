<template>
<button class="xy-button" :class='[`xy-button--${type}`,{
  "is-plain": plain,
  "is-round": round,
  "is-circle": circle,
  "is-disabled": disabled
  }]'
        @click="myFn"
        :disabled="disabled"
>
  <i v-if="icon" :class='icon'></i>
  <span v-if="$slots.default">
    <slot></slot>
  </span>
</button>
</template>

<script>
export default {
  name: 'XyButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    myFn (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="scss">
.xy-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.xy-button--primary{
   color: #fff;
   background-color: #409eff;
   border-color: #409eff;

   &:hover,
   &:focus{
     color: #fff;
     border-color: #66b1ff;
     background-color: #66b1ff;
   }
 }
.xy-button--success{
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:hover,
  &:focus{
    color: #fff;
    border-color: #85ce61;
    background-color: #85ce61;
  }
}
.xy-button--info{
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:hover,
  &:focus{
    color: #fff;
    border-color: #a6a9ad;
    background-color: #a6a9ad;
  }
}
.xy-button--warning{
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:hover,
  &:focus{
    color: #fff;
    border-color: #ebb563;
    background-color: #ebb563;
  }
}
.xy-button--danger{
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:hover,
  &:focus{
    color: #fff;
    border-color: #f78989;
    background-color: #f78989;
  }
}

//朴素样式
.xy-button.is-plain{
  &:hover,
  &:focus{
    color: #409eff;
    border-color: #409eff;
    background-color: #fff;
  }
}
.xy-button--primary.is-plain{
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus{
    color: #fff;
    border-color: #409eff;
    background-color: #409eff;
  }
}
.xy-button--success.is-plain{
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;

  &:hover,
  &:focus{
    color: #fff;
    border-color: #67c23a;
    background-color: #67c23a;
  }
}
.xy-button--info.is-plain{
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;

  &:hover,
  &:focus{
    color: #fff;
    border-color: #909399;
    background: #909399;
  }
}
.xy-button--warning.is-plain{
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;

  &:hover,
  &:focus{
    color: #fff;
    border-color: #e6a23c;
    background: #e6a23c;
  }
}
.xy-button--danger.is-plain{
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;

  &:hover,
  &:focus{
    color: #fff;
    border-color: #f56c6c;
    background: #f78989;
  }
}

//控制圆角
.xy-button.is-round{
  border-radius: 20px;
  padding: 12px 23px;
}

//变圆
.xy-button.is-circle{
  border-radius: 50%;
  padding: 12px;
}

.xy-button [class*=xy-icon-]+span{
  margin-left: 5px;
}
// 禁用
.xy-button.is-disabled,
.xy-button.is-disabled:focus,
.xy-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.xy-button.is-disabled,
.xy-button.is-disabled:focus,
.xy-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.xy-button--primary.is-disabled,
.xy-button--primary.is-disabled:active,
.xy-button--primary.is-disabled:focus,
.xy-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.xy-button--success.is-disabled,
.xy-button--success.is-disabled:active,
.xy-button--success.is-disabled:focus,
.xy-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}
.xy-button--info.is-disabled,
.xy-button--info.is-disabled:active,
.xy-button--info.is-disabled:focus,
.xy-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
.xy-button--warning.is-disabled,
.xy-button--warning.is-disabled:active,
.xy-button--warning.is-disabled:focus,
.xy-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.xy-button--danger.is-disabled,
.xy-button--danger.is-disabled:active,
.xy-button--danger.is-disabled:focus,
.xy-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}
</style>
