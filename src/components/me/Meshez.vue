<template>
  <!-- 设置密码页面 -->
  <div class="wrap">
    <!-- 头部 -->
    <div class="lbj_head">
      <img src="../../assets/back.png" alt />
      <p>设置</p>
      <p></p>
    </div>
    <!-- 头部结束 -->
    <!-- 内容 -->
    <div class="lbj_con">
      <div class="lbj_con_neir">
        <p>设置密码</p>
        <img src="../../assets/右箭头.png" alt />
      </div>
      <!-- 退出登录 -->
      <div class="lbj_btn">
        <button @click="dianSign">退出登录</button>
      </div>
    </div>

    <!-- 内容结束 -->
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
    // 点击退出
    dianSign(){
        window.localStorage.clear();
        this.$router.push("/login")
    }
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  background: #f0f2f5;
  // 头部
  .lbj_head {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    box-sizing: border-box;
    align-items: center;
    background: #fff;
    > img {
      width: 30px;
      height: 32px;
    }
    > p {
      font-size: 30px;
      color: #595959;
    }
  }
  // 头部结束
  // 内容
  .lbj_con {
    width: 100%;
    margin-top: 20px;
      background: #fff;

    .lbj_con_neir {
      width: 100%;
      height: 90px;
      padding: 0 30px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      background: #fff;
      align-items: center;
      > p {
        font-size: 30px;
        color: #595959;
      }
      > img {
        width: 30px;
        height: 32px;
      }
    }
    .lbj_btn{
        margin-top: 180px;
        width: 100%;
        text-align: center;
        >button{
            width:90%;
            height: 90px;
            background: #EB6100;
            color: #fff;
            font-weight: bold;
            border: none;
            border-radius: 15px;
        }

    }
  }
  // 内容结束
}
</style>
