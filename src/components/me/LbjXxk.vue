<template>
  <!-- 点击进入学习卡 -->
  <div class="lbj_wrap">
    <!-- 头部数据 -->
    <div class="lbj_head">
      <img @click="dianBack" src="../../assets/back.png" alt />
      <p>学习卡兑换</p>
      <p></p>
    </div>
    <!-- 头部数据结束 -->
    <!-- 内容部分 -->
    <div class="lbj_neir">
      <p>
        卡号：
        <input type="text" placeholder="请输入学习卡号哦" />
      </p>
      <p>
        卡号：
        <input type="password" placeholder="请输入学习卡密码" />
      </p>
    </div>
    <div class="lbj_btn">
      <div>立即兑换</div>
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
    dianBack(){
        this.$router.go(-1)
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
    padding: 30px;
    box-sizing: border-box;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > img {
      width: 34px;
      height: 32px;
    }
    > p {
      font-size: 32px;
      color: #595959;
    }
  }
  // 内容
  .lbj_neir {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    > p {
      font-size: 30px;
      border-bottom: 1px solid #eee;
      input {
        height: 90px;
        line-height: 90px;
        border: none;
        &::placeholder {
          font-size: 30px;
          color: #969799;
        }
      }
    }
  }
//   按钮
.lbj_btn{
    width:100%;
    margin-top: 200px;
    >div{
        width: 680px;
        height: 90px;
        background: #EB6100;
        border-radius: 10px;
        color: #fff;
        text-align: center;
        line-height: 90px;
        margin: 0 auto;
    }
}
}
</style>
