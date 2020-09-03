<template>
  <!-- 余额明细页面 -->
  <div class="lbj_wrap">
    <!-- 头部布局 -->
    <div class="lbj_head">
      <img @click="dianBack" src="../../assets/back.png" alt />
      <p>余额明细</p>
      <p></p>
    </div>
    <!-- 头部布局结束 -->
    <!-- 内容部分 -->
    <div class="lbj_wai">
      <div class="lbj_neir" v-for="(item) in lbjmx" :key="item.id">
        <p>
          <span>{{ item.shop_name }}</span>
          <span>{{ item.remaining_sum }}</span>
        </p>
        <p>
          <span>{{ item.change_price }}</span>
          <span>{{ item.created_at | MeYe }}</span>
        </p>
      </div>
    </div>

    <p class="lbj_zh">没有更多了</p>
    <!-- 内容部分结束 -->
  </div>
</template>

<script>
import { getMx } from "../../http/api";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      lbjmx: []
    };
  },
  created() {
    //创建后
    this.lbjZij();
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
    lbjZij() {
      getMx({}).then(res => {
        console.log(res);
        this.lbjmx = res.data.data.list;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.lbj_wrap {
  width: 100%;
  // 头部布局
  .lbj_head {
    width: 100%;
    display: flex;
    padding: 0 20px;
    box-sizing: border-box;
    height: 80px;
    align-items: center;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
    > img {
      width: 34px;
      height: 32px;
    }
    > p {
      font-size: 34px;
    }
  }
  // 头部布局结束
  // 内容部分样式
  .lbj_wai {
    .lbj_neir {
      width: 100%;
      padding: 0 46px;
      box-sizing: border-box;
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border-bottom: 1px solid #eee;
      > p:nth-child(1) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        > span:nth-child(1) {
          font-size: 32px;
          color: #333333;
        }
        > span:nth-child(2) {
          font-size: 32px;
          color: #000;
        }
      }
      > p:nth-child(2) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        > span:nth-child(1) {
          font-size: 32px;
          color: #b1b1b1;
        }
        > span:nth-child(2) {
          font-size: 32px;
          color: #999999;
        }
      }
    }
  }

  .lbj_zh {
    text-align: center;
    font-size: 28px;
    color: #a9aaac;
    margin-top: 40px;
  }
  // 内容部分样式结束
}
</style>
