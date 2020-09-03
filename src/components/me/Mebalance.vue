<template>
  <!-- 我的余额页面 -->
  <div class="wrap">
    <!-- 我的余额头部 -->
    <div class="lbj_head">
      <img @click="dianBack" src="../../assets/back.png" alt />
      <p class="lbj_tou_title">我的余额</p>
      <p class="lbj_tou_mingx" @click="entermx">余额明细</p>
    </div>
    <!-- 我的余额头部结束 -->
    <!-- 学习币剩余 -->
    <div class="lbj_xxb">
      <p>我的余额</p>
      <p>
        <span>0</span>学习币
      </p>
    </div>
    <!-- 学习币剩余结束 -->
    <!-- 学习币内容 -->
    <div class="lbj_xxb_list">
      <ul class="lbj_xxb_item" v-for="(item) in lbj_xxb" :key="item.id">
        <li>
          <p>{{item.title}}</p>
          <p>{{item.price}}</p>
        </li>
      </ul>
      <!-- 充值说明 -->
      <div class="lbj_explain">
          <p>充值说明</p>
          <p>1、学习币是网校中专有的一种虚拟货币，大家可以用学习币购买网校内的任何虚拟商品，比如课程、辅导答疑。 </p>
          <p>2、充值后没有使用期限,但无法提现,退款和转赠他人。</p>
          <p>3、如遇到无法充值、充值失败等问题,请联系客服。</p>
      </div>
      <!-- 充值说明结束 -->

    </div>
    <!-- 学习币内容结束 -->
    <!-- 充值按钮 -->
    <div class="lbj_btn">
      <button>立即充值</button>
    </div>
    <!-- 充值按钮结束 -->
  </div>
</template>

<script>
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      //  学习币
      lbj_xxb: [
        { id: 1, title: "20000.00学习币", price: "￥ 20000.00" },
        { id: 2, title: "10000.00学习币", price: "￥ 10000.00" },
        { id: 3, title: "8000.00学习币", price: "￥ 8000.00" },
        { id: 4, title: "5000.00学习币", price: "￥ 5000.00" },
        { id: 5, title: "20000.00学习币", price: "￥ 20000.00" },
        { id: 6, title: "3000.00学习币", price: "￥ 3000.00" },
        { id: 7, title: "0.01学习币", price: "￥ 0.01" },
        { id: 8, title: "100.00学习币", price: "￥ 100.00" }
      ]
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
    },
    // 进入余额明细
    entermx(){
      this.$router.push("/lbjyemx")
    }
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  position: relative;
  // 我的余额头部
  .lbj_head {
    width: 100%;
    height: 92px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 28px;
    padding-right: 22px;
    box-sizing: border-box;
    position: fixed;
    left:0;
    right: 0;
    top: 0;
    background: #fff;
    > img {
      width: 30px;
      height: 32px;
    }
    > .lbj_tou_title {
      font-size: 34px;
      color: #292929;
    }
    > .lbj_tou_mingx {
      font-size: 34px;
      color: #444444;
    }
  }
  // 我的余额头部结束

  // 学习币剩余
  .lbj_xxb {
    width: 100%;
    display: flex;
    align-items: center;
    height: 110px;
    background: #fff;
    position: absolute;
    left:0;
    right:0;
    top: 92px;
    
    > p:nth-child(1) {
      font-size: 30px;
      color: #1f1f1f;
      padding-left: 30px;
      box-sizing: border-box;
    }
    > p:nth-child(2) {
      font-size: 30px;
      color: #d85914;
      padding-left: 30px;
      box-sizing: border-box;
    }
  }
  // 学习币剩余结束

  // 学习币内容
  .lbj_xxb_list {
    width: 100%;
    // height: 80%;
    background: #eeeeee;
    overflow: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 202px;
    // 学习币每一项
    .lbj_xxb_item {
      width: 100%;
      height: 100%;
      overflow: auto;
      background: #eeeeee;
      > li {
        width: 686px;
        height: 112px;
        background: #fff;
        border-radius: 15px;
        margin: 0 auto;
        display: flex;
        margin-top: 32px;
        align-items: center;
        padding: 0 36px;
        box-sizing: border-box;
        justify-content: space-between;
        > p:nth-child(1) {
          font-size: 26px;
          color: #0c0c0c;
        }
        > p:nth-child(2) {
          font-size: 20px;
          color: #e70303;
        }
        
      }
    }
    // 充值说明
    .lbj_explain{
        width: 100%;
        margin-top: 26px;
        margin-bottom: 130px;
        >p:nth-child(1){
            font-size: 30px;
            color: #000000;
            font-weight: bold;
            padding-left: 36px;
            border-left: 2px solid #E88853;
        }
        >p:nth-child(2){
            font-size: 26px;
            color: #7C7C7C;
            margin-top: 30px;
            margin-left: 40px;
            line-height: 36px;
        }
        >p:nth-child(3){
            font-size: 26px;
            color: #7C7C7C;
            margin-left: 40px;
            margin-top: 14px;

        }
        >p:nth-child(4){
            font-size: 26px;
            color: #7C7C7C;
            margin-left: 40px;
            margin-top: 14px;


        }
    }
  }
  // 学习币内容结束
  //   充值按钮
  .lbj_btn {
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    button {
      width: 100%;
      height: 100px;
      background: #cccccc;
      color: #fff;
      font-weight: bold;
      border: none;
    }
  }
  //   充值按钮结束
}
</style>
