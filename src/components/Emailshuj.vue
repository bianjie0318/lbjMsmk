<template>
<!-- 留言页面 -->
  <div class="wrap">
    <!-- 外层留言 -->
    <div class="lbj_wai">
      <div class="lbj_email">
        <p>给我们留言</p>
        <img @click="dianXia" src="../assets/xia.png" alt />
      </div>
      <div class="lbj_leave">您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问题</div>
      <div class="lbj_info">
        <p>手机</p>
        <input type="text" placeholder="请输入" v-model="mobile" />
      </div>
      <div class="lbj_info1">
        <p>留言内容</p>
        <textarea placeholder="请输入" v-model="xinx" name id cols="30" rows="10"></textarea>
      </div>
      <div class="btn">
        <button @click="Tijxinx">提交</button>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      lbjqieh:true,
      mobile:'',
      xinx:''
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
    dianXia() {
      this.$router.go(-1);
    },
    // 点击提交信息
    Tijxinx(){
      if(this.mobile==''||this.xinx==''){
        this.$toast('请填写完整');
      }else{
        this.$router.push("/emailSucc")
        this.$toast('留言成功');

      }
    }
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  background: #f2f3f5;
  overflow-x: hidden;
  // email
  .lbj_email {
    width: 100%;
    background: #007aff;
    height: 119px;
    line-height: 119px;
    padding-left: 20px;
    padding-right: 22px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > p {
      color: #fff;
      font-size: 30px;
    }
    img {
      width: 32px;
      height: 20px;
      color: #aaa;
    }
  }
  // 留言
  .lbj_leave {
    width: 100%;
    height: 101px;
    margin-top: 14px;
    padding: 22px 0;
    padding-left: 32px;
    padding-right: 64px;
    box-sizing: border-box;
    font-size: 27px;
    color: #353534;
    line-height: 40px;
    // letter-spacing:15px;
  }
  // 信息
  .lbj_info {
    width: 100%;

    > p {
      height: 56px;
      line-height: 56px;
      font-size: 24px;
      color: #141312;
      padding-left: 32px;
      box-sizing: border-box;
    }
    > input {
      width: 100%;
      height: 79px;
      background: #fff;
      border: none;
      font-size: 26px;
      color: #6a6a6a;
      padding-left: 23px;
      box-sizing: border-box;
    }
  }
  .lbj_info1 {
    width: 100%;

    > p {
      // height: 56px;
      // line-height: 56px;
      font-size: 24px;
      color: #141312;
      padding-left: 32px;
      box-sizing: border-box;
      margin-top: 33px;
      margin-bottom: 13px;
    }
    > textarea {
      width: 100%;
      height: 180px;
      background: #fff;
      border: none;
      font-size: 26px;
      color: #6a6a6a;
      padding-left: 30px;
      padding-top: 24px;
      box-sizing: border-box;
    }
  }
  // 提交按钮
  .btn {
    width: 100%;
    margin: 0 auto;
    margin-top: 30px;
    text-align: center;
    button {
      width: 672px;
      height: 80px;
      background: #007aff;
      color: #fff;
      font-weight: bold;
      border: none;
      border-radius: 10px;
    }
  }

  // 提交成功后
  .lbj_qieh{
    width: 100%;
    .lbj_zi{
      width: 100%;
      text-align: center;
      >p:nth-child(1){
        font-size: 40px;
        margin-top: 20px;
      }
       >p:nth-child(2){
        font-size: 26px;
        margin-top: 40px;
      }
       >p:nth-child(3){
        font-size: 26px;
        margin-top: 40px;
        >button{
          border: none;
          background: #007AFF;
          width: 280px;
          border-radius: 10px;
          height: 60px;
          text-align: center;
          line-height: 60px;
          color: #fff;
        }
      }
       >p:nth-child(4){
        font-size: 20px;
        margin-top: 30px;
        text-decoration: underline;
      }
    }
  }
}
</style>
