<template>
<!-- 系统通知页 -->
    <div class="lbj_wrap">
         <!-- 头部 -->
    <div class="lbj_head">
      <img @click="dianBack" src="../../assets/back.png" alt />
      <p>系统通知</p>
      <p></p>
    </div>
    <!-- 头部结束 -->
    <!-- 内容部分 -->
    <div class="lbj_con">
        <img src="../../assets/empty.0d284c2e.png" alt="">
        <p>暂无消息通知</p>
    </div>
    <!-- 内容部分结束 -->

    </div>
</template>

<script>
export default {
    props: {},   // 组件参数 接收来自父组件的数据
    data() {
        return {
     //模拟数据
        };
    },
    created() {
      //创建后
    },
    components: {},    // 局部注册的组件
    mounted() {
      //加载后
    },
    watch: {},         // 负责监听
    computed: {},      // 计算属性
    methods: {
       //方法集合
       dianBack(){
           this.$router.go(-1)
       }
    }
};
</script>

<style scoped lang="scss">
.lbj_wrap{
    width: 100%;
    // 头部
  .lbj_head {
    width: 100%;
    display: flex;
    padding: 0 30px;
    box-sizing: border-box;
    height: 92px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    > img {
      width: 26px;
      height: 30px;
    }
    > p {
      font-size: 34px;
      color: #595959;
    }
  }
  // 头部结束
//   内容部分
.lbj_con{
    width:100%;
    text-align: center;
    >img{
        width: 340px;
        height: 340px;
        margin-top: 170px;
    }
    >p{
        font-size: 30px;
        color: #8C8C8C;
        margin-top: 25px;
    }
}
//   内容部分结束
}
</style>
