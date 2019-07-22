<template>
  <div class="wrap">
    <div @click.stop="open"
         class="demo-button">打开</div>
    <div class="drawer-wrap-test">
      <v-drawer v-model="drawerVisible"
                :modal="modal"
                :center="center"
                :title="title"
                :width="drawer1Width"
                :fullscreen="fullscreen"
                :placement="placement"
                :closable="closable"
                :beforeClose="beforeClose"
                :lockScroll="lockScroll"
                :maskClosable="maskClosable"
                :outClosable="outClosable"
                :inner="inner"
                @input="closeDrawer"
                @close="close"
                @onVisibleChange="onVisibleChange">
        <div class="demo-button"
             @click.stop="open2">打开第二个</div>
      </v-drawer>
      <v-drawer v-model="drawerVisible2"
                :modal="modal"
                :center="center"
                :title="title"
                :width="drawer2Width"
                :fullscreen="fullscreen"
                :placement="placement"
                :closable="closable"
                :maskClosable="maskClosable"
                :outClosable="outClosable"
                :beforeClose="beforeClose"
                :lockScroll="lockScroll"
                :inner="inner"
                @input="closeDrawer2"
                @close="close"
                @onVisibleChange="onVisibleChange">
      </v-drawer>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawerVisible: false,
      drawerVisible2: false,
      drawer2Width: "200px",
      drawer1Width: "400px",
      modal: true,
      placement: "right",
      closable: true,
      title: "抽屉轮子",
      fullscreen: false,
      center: true,
      lockScroll: false,
      maskClosable: false,
      outClosable: true,
      inner: true
    }
  },
  methods: {
    open() {
      this.drawerVisible = true;
    },
    // 关闭抽屉
    closeDrawer(val) {
      this.drawerVisible = val;
    },
    closeDrawer2(val) {
      this.drawerVisible2 = val;
    },
    beforeClose(done) {
      done()
    },
    // 关闭回调
    close() {
      console.log("close")
    },
    // 切换状态
    onVisibleChange(flag) {
      console.log("onVisibleChange", flag)
    },
    open2() {
      this.drawerVisible2 = true;
    }
  }
}
</script>
<style lang="less" scoped>
.wrap {
  p {
    line-height: 50px;
  }
}
.drawer-wrap-test {
  width: 100%;
  height: 400px;
  background-color: pink;
  position: relative;
}
.demo-button {
  -webkit-appearance: button;
  vertical-align: middle;
  line-height: 1.5;
  outline: 0;
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 5px 15px 6px;
  font-size: 12px;
  border-radius: 4px;
  transition: color 0.2s linear, background-color 0.2s linear,
    border 0.2s linear, box-shadow 0.2s linear;
  color: #515a6e;
  background-color: #fff;
  border-color: #dcdee2;
}
</style>
