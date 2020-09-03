<template>
  <!-- 我的学习卡页面 -->
  <div class="lbj_wrap">
    <!-- 头部 -->
    <div class="lbj_head">
      <img @click="dianBack" src="../../assets/back.png" alt />
      <p class="lbj_wenz">我的学习卡</p>
      <p class="lbj_wenz1" @click="enterxxk">学习卡兑换</p>
    </div>
    <!-- 头部结束 -->
    <!-- 内容部分哦 -->
    <div class="lbj_con">
      <img src="../../assets/empty.0d284c2e.png" alt />
      <p>暂无兑换记录</p>
    </div>
    <!-- 内容部分结束 -->
  </div>
</template>

<script>
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
    };
  },
  created() {
    //创建后
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  methods: {
    //方法集合
    //    点击回退上一级
    dianBack() {
      this.$router.go(-1);
    },
    // 点击进入学习卡
    enterxxk(){
        this.$router.push("/lbjXxk")
    }
  }
};
</script>

<style scoped lang="scss">
.lbj_wrap {
  width: 100%;
  // 头部
  .lbj_head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 86px;
    padding-left: 30px;
    padding-right: 24px;
    box-sizing: border-box;
    > img {
      width: 30px;
      height: 32px;
    }
    > .lbj_wenz {
      font-size: 34px;
      color: #2a2a2a;
    }
    > .lbj_wenz1 {
      font-size: 30px;
      color: #3a3a3a;
    }
  }
  // 头部结束
  // 内容部分
  .lbj_con {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 86px;
    background: #f0f2f5;
    > img {
      width: 268px;
      height: 302px;
      margin-top: 148px;
    }
    > p {
      font-size: 30px;
      color: #898888;
      margin-top: 30px;
    }
  }
  // 内容部分结束
}
</style>
