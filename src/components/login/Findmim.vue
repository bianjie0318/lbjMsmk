<template>
  <div class="wrap">
    <div class="lbj_mim">
      <img @click="lbjback" src="../../assets/back.png" alt />
      <p>找回密码</p>
    </div>
    <div class="lbj_pass">
      <div class="huom">
        <input type="text" placeholder="请输入手机号" />
        <span>获取验证码</span>
      </div>
      <input type="text" placeholder="请输入验证码" />
      <input type="password" placeholder="请输入密码" />
      <button class="btn">确定</button>
    </div>
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
    //点击返回上一级
    lbjback(){
        this.$router.go(-1)
    }
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  overflow-x:hidden;
  .lbj_mim {
    width: 100%;
    display: flex;
    padding: 0 30px;
    box-sizing: border-box;
    height: 96px;
    align-items: center;

    > img {
      width: 30px;
      height: 30px;
    }
    > p {
      font-size: 36px;
      color: #2c2c2c;
      margin-left: 254px;
    }
  }
  .lbj_pass {
    width: 670px;
    padding: 0 37px;
    margin-top: 12px;
    box-sizing: border-box;
    margin: 0 auto;
    .huom {
      width: 100%;
      display: flex;
      padding: 0 4px;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #eee;
      box-sizing: border-box;
      input {
        width: 400px;
        height: 92px;
        border: none;
        font-size: 36px;
        color: #bababa;
      }
      span {
        font-size: 28px;
        color: #e84600;
      }
    }
    input {
      width: 670px;
      padding: 0 4px;
      box-sizing: border-box;
      border: none;
      border-bottom: 2px solid #eee;
      color: #bababa;
      height: 92px;
    }
    .btn {
      margin-top: 116px;
      width: 608px;
      height: 90px;
      color: #fff;
      font-weight: bold;
      border: none;
      border-radius: 38px;
      border: 1px solid #ff8e3f;
      text-align: center;
      background-image: linear-gradient(to right, #ff944b, #fc4500);
    }
  }
}
</style>
