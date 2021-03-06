<template>
  <div>
    <transition name="fade">
      <div :class="drawerMaskClass"
           :style="modalStyle"
           v-show="visible"
           v-if="modal"
           @click.stop="onClickMask"></div>
    </transition>
    <transition :name="'drawer-animation-'+placement">
      <div v-click-outside="onClickOutside"
           :class="drawerClassTrans"
           v-show="visible"
           :style="{
            width: fullscreen?'100vw':width
          }">
        <div :class="prefixCls+'-inner'">
          <div :class="prefixCls+'__header-slot'">
            <slot name="header"></slot>
          </div>
          <div :class="prefixCls+'__header'"
               v-if="showHead">
            <div :class="prefixCls+'__title'"
                 :style="betweenStyle"
                 v-if="title">{{ title }}</div>
            <!-- <i :class="'el-icon-close '+prefixCls+'__close'"
               v-if="closable"
               @click.stop="close"></i> -->
            <span :class="prefixCls+'__close'"
                  v-if="closable"
                  @click.stop="close"></span>

          </div>
          <div :class="prefixCls+'__body'"
               :style="styles">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Vue from 'vue';
import * as vClickOutside from 'v-click-outside-x';
Vue.use(vClickOutside);
const prefixCls = 'hl-drawer';
export default {
  name: 'vDrawer',
  props: {
    //  抽屉是否显示
    value: {
      type: Boolean,
      default: false
    },
    //  抽屉标题。如果使用的 slot 自定义了页头，则 title 无效
    title: {
      type: String,
      default: ''
    },
    // 抽屉宽度
    width: {
      type: String,
      default: "260px"
    },
    // 是否为全屏
    fullscreen: {
      type: Boolean,
      default: false
    },
    // 是否允许点击遮罩区域关闭
    maskClosable: {
      type: Boolean,
      default: true
    },
    // 是否允许点击其它区域关闭
    outClosable: {
      type: Boolean,
      default: true
    },
    // 自定义类名
    drawerClass: {
      type: String
    },
    // 是否需要遮罩层
    modal: {
      type: Boolean,
      default: false
    },
    // 遮罩层样式
    modalStyle: {
      type: [Object, String]
    },
    // 关闭之前回调
    beforeClose: {
      type: Function
    },
    // 抽屉的方向，可选值为 left 或 right
    placement: {
      validator(value) {
        return ['left', 'right'].includes(value);
      },
      default: 'right'
    },
    // 是否显示右上角的关闭按钮
    closable: {
      type: Boolean,
      default: false
    },
    // 内容的样式
    styles: {
      type: [Object, String]
    },
    // 是否对头部和底部居中
    center: {
      type: Boolean,
      default: false
    },
    // 是否允许Body滚动
    lockScroll: {
      type: Boolean,
      default: false
    },
    inner: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      timer: null,
      prefixCls: prefixCls,
      visible: this.value,
      showHead: true,
    };
  },
  computed: {
    // 类名
    drawerClassTrans() {
      const innerClass = this.inner ? `${this.prefixCls} ${this.prefixCls}__inner` : `${this.prefixCls}`;
      const resultClass = this.placement ? `${innerClass} ${this.prefixCls}__${this.placement} ` : innerClass;
      return this.drawerClass ? resultClass + this.drawerClass : resultClass
    },
    // mask类名
    drawerMaskClass() {
      return this.inner ? `${this.prefixCls}__mask__inner` : `${this.prefixCls}__mask`
    },
    // 头部和底部的样式
    betweenStyle() {
      return this.center ? "text-align:center" : "";
    }
  },
  methods: {
    // 点击外部关闭
    onClickOutside (event) {
      event.stopPropagation()
      if (this.visible && this.outClosable) {
        this.close()
      }
    },
    // 点击mask关闭
    onClickMask () {
      if (this.visible && this.maskClosable) {
        this.close()
      }
    },
    // 关闭
    close () {
      if (!this.beforeClose) {
        this.handleClose()
      }
      this.beforeClose(this.handleClose)
    },
    // 关闭处理
    handleClose () {
      this.visible = false
      this.$emit('input', false)
      this.$emit('close')
    },
    // 初始化header
    privateInitHeader () {
      let showHead = true
      if (this.$slots.header === undefined && !this.title && !this.closable) {
        showHead = false
      }
      this.showHead = showHead
    },
    addScrollEffect () {
      document.body.style.overflow = 'hidden'
    },
    removeScrollEffect () {
      document.body.style.overflow = ''
    }
  },
  watch: {
    value (val) {
      this.visible = val
    },
    visible (val) {
      if (val === false) {
        this.timer = setTimeout(() => {
          this.removeScrollEffect()
        }, 300)
      } else {
        if (this.timer) clearTimeout(this.timer)
        if (this.lockScroll) {
          this.addScrollEffect()
        }
      }
      this.$emit('onVisibleChange', val)
    }
  },
  mounted () {
    this.privateInitHeader ()
  }
}
</script>
<style lang="less" scoped>
@baseClass: hl-drawer;
@headerPadding: 14px 16px;
@baseBorder: 1px solid #e8eaec;
@closeRight: 14px;
@closeTop: 14px;
.@{baseClass} {
  position: fixed;
  top: 0;
  height: 100%;
  background: #fff;
  z-index: 1000;
  box-shadow: 0 0 2px 2px rgba(212, 211, 211, 0.4);
  transition: all 0.5s ease;
  overflow-y: auto;
  .@{baseClass}-inner {
    .@{baseClass}__header-slot {
      position: relative;
      width: 100%;
    }
    .@{baseClass}__header {
      position: relative;
      border-bottom: @baseBorder;
      padding: @headerPadding;
      line-height: 1;
      .@{baseClass}__title {
      }
      .@{baseClass}__close {
        position: absolute;
        right: @closeRight;
        top: @closeTop;
        &::before {
          content: "\2716";
        }
      }
    }
    .@{baseClass}__body {
    }
  }
}
.@{baseClass}__left {
  left: 0;
}
.@{baseClass}__right {
  right: 0;
}
.@{baseClass}__mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(55, 55, 55, 0.6);
  height: 100%;
  z-index: 1000;
}
.@{baseClass}__mask__inner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(55, 55, 55, 0.6);
  height: 100%;
  z-index: 1000;
}
.@{baseClass}__inner {
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
}
.drawer-animation-right-enter,
.drawer-animation-right-leave-to {
  transform: translate3d(100%, 0, 0);
  opacity: 0;
}
.drawer-animation-right-enter-to,
.drawer-animation-right-leave {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
.drawer-animation-left-enter,
.drawer-animation-left-leave-to {
  transform: translate3d(-100%, 0, 0);
  opacity: 0;
}
.drawer-animation-left-enter-to,
.drawer-animation-left-leave {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
</style>
