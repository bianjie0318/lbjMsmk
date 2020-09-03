<template>
<!-- 设置密码页 -->
  <div class="wrap">
      <!-- 头部 -->
    <div class="lbj_tou">
      设置密码
      <span @click="setXinx">跳过</span>
    </div>
    <!-- 输入 -->
    <div class="lbj_nei">
      <input type="password" placeholder="请设置登录密码" />
      <input type="password" placeholder="请再次输入密码" />
    </div>
    <div class="lbj_btn">
      <button @click="setXinx">确定</button>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '../http/api'
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
    //   手机号
      mobile:'',
    //   type类型
    type:2,
    // 密码
    password:'',
    sms_code:''

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
    setXinx(){
        this.$router.push("/getuser")
        
    }
  }
};
</script>

<style scoped lang="scss">
// 全局
.wrap {
  width: 100%;
//   头部
  .lbj_tou {
    width: 100%;
    height: 108px;
    font-size: 38px;
    color: #595959;
    text-align: center;
    line-height: 108px;
    position: relative;
    > span {
      font-size: 30px;
      color: #595959;
      position: absolute;
      right: 22px;
    }
  }
//   输入
  .lbj_nei {
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
    > input {
      width: 100%;
      height: 99px;
      border: none;
      border-bottom: 1px solid #ddd;
      ::placeholder{
          color: #000;
          font-size: 30px;
      }
    }
  }
//   btn确认按钮
  .lbj_btn {
    width: 100%;
    text-align: center;
    margin-top: 114px;
    > button {
      width: 612px;
      height: 92px;
      color: #fff;
      font-weight: bold;
      background: linear-gradient(to right, #ff944b 0%, #fc5500 100%);
      border: none;
      border-radius: 40px;
    }
  }
}
</style>
