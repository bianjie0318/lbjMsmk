<template>
  <div id="app">
    <router-view />
    <!-- 信息 拖拽开始-->
    <float-icons padding="10 10 60 10" class="icons-warp">
      <div class="emial" @click="information">
        <img src="../src/assets/email.png" alt />
      </div>
    </float-icons>
    <!-- 信息 拖拽结束-->
  </div>
</template>

<script>
import FloatIcons from "../src/components/tuozhuai.vue";
export default {
  components: {
    "float-icons": FloatIcons
  },
  methods: {
    // 点击按钮
    handleIcons(router) {
      console.log("router", router);
      this.$router.push(router);
    },
    // 点击进入邮箱
    information() {
      // this.$router.push("/emailshuj");
      this.$router.push({ path: "/emailshuj" });
    }
  }
};
</script>>

<style lang="scss">
// 信息拖拽样式开始
.icons-warp {
  border-radius: 50%;
  .emial {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    background-color: #007aff;
    border: 1px solid 007aff;
    box-shadow: darkgrey 10px 10px 30px 5px;
    img {
      width: 48px;
      height: 40px;
      display: block;
      margin: 45px auto;
    }
  }
}
// 公共首尾
.public {
  width: 100%;
  background: darkgray;
  height: 88px;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
// 头部
.head {
  top: 0;
}
// 内容
.main {
  width: 100%;
  // height: 444px;
  position: absolute;
  left: 0;
  right: 0;
  background: darkkhaki;
  top: 88px;
  bottom: 88px;
}
// 尾部
.foot {
  bottom: 0;
}
</style>
