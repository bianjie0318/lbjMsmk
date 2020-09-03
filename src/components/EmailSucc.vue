<template>
  <!-- 留言成功 -->
  <div class="wrap">
    <div class="lbj_email">
      <p>给我们留言</p>
      <img @click="dianXia" src="../assets/xia.png" alt />
    </div>
    <div class="lbj_qieh">
      <div class="lbj_zi">
        <p>留言成功</p>
        <p>我们会尽快联系你</p>
        <p>
          <button>关闭</button>
        </p>
        <p @click="dianBack">再次留言</p>
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
        this.$router.push("/emailshuj")
    },
    dianXia(){
        this.$router.push("/tabbar/me")
    }
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
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
