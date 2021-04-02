<template>
  <transition name="dialog-show">
    <div class="xy-dialog__wrapper" v-show="visible" @click.self="show">
      <div class="xy-dialog" :style="{width: width,marginTop: top}">
        <div class="xy-dialog__header">
          <slot name="title">
            <span class="xy-dialog__title">{{title}}</span>
          </slot>
          <button class="xy-dialog__headerbtn" @click="show">
            <i class="xy-icon-close"></i>
          </button>
        </div>
        <div class="xy-dialog__body">
          <slot></slot>
        </div>
        <div class="xy-dialog__footer" v-if="$slots.footer">
          <slot name="footer">
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'XyDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    show () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style scoped lang="scss">
.xy-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);

  .xy-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .xy-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .xy-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .xy-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-show-enter-active {
  animation: dialog-show-in .4s;
}

.dialog-show-leave-active {
  animation: dialog-show-out .4s;
}

@keyframes dialog-show-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-show-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>
