<template>
  <!-- 会员订单 -->
  <div class="lbj_wrap">
    <!-- 头部 -->
    <div class="lbj_head">
      <img @click="dianBack" src="../../assets/back.png" alt />
      <p class="lbj_wenz">会员订单</p>
      <p></p>
    </div>
    <!-- 头部结束 -->
    <!-- 切换不同的订单 -->
    <div class="lbj_list">
      <van-tabs v-model="active">
        <van-tab title="全部订单">
          <div class="lbj_con">
            <img src="../../assets/empty.0d284c2e.png" alt />
            <p>暂无订单</p>
          </div>
        </van-tab>
        <van-tab title="待支付">
            <div class="lbj_con">
            <img src="../../assets/empty.0d284c2e.png" alt />
            <p>暂无订单</p>
          </div>
        </van-tab>
        <van-tab title="已完成">
            <div class="lbj_con">
            <img src="../../assets/empty.0d284c2e.png" alt />
            <p>暂无订单</p>
          </div>
        </van-tab>
        <van-tab title="已取消">
            <div class="lbj_con">
            <img src="../../assets/empty.0d284c2e.png" alt />
            <p>暂无订单</p>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- 切换不同的订单结束 -->
  </div>
</template>

<script>
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      active: 0
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
    // 点击返回上一级
    dianBack() {
      this.$router.go(-1);
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
    height: 92px;
    padding: 30px;
    box-sizing: border-box;
    > img {
      width: 26px;
      height: 30px;
    }
    > p {
      font-size: 36px;
      color: #4e4e4e;
    }
  }
  // 头部结束
  //   切换不同的订单
  .lbj_list {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    .van-tabs {
      width: 100%;
      
      //   height: 86px;
    }
    .lbj_con{
        width:100%;
        text-align: center;
        >img{
            width: 320px;
            height: 298px;
        }
        >p{
            margin-top: 34px;
            font-size: 28px;
            color: #868686;
        }
    }
  }
  /deep/.van-tab__text,
  .van-tab__text--ellipsis {
    height: 86px;
    line-height: 86px;
    font-size: 30px;
    // color: #707274;
    overflow: inherit;
    padding-bottom: 20px;
    box-sizing: border-box;

  }
  /deep/.van-tab--active {
    color: #ea5800;
  }
  /deep/.van-tabs__wrap{
      height: 86px;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
  }
  /deep/.van-tabs__line{
      background-color: #F5B384;
  }

  //   切换不同的订单结束
}
</style>
