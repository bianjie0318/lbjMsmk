<template>
  <!-- 订单通知页 -->
  <div class="lbj_wrap">
    <!-- 头部 -->
    <div class="lbj_head">
      <img @click="dianBack" src="../../assets/back.png" alt />
      <p>订单通知</p>
      <p></p>
    </div>
    <!-- 头部结束 -->
    <!-- 内容部分 -->
     <!-- 有数据 -->
    <div class="lbj_shuj" v-if="lbjDdshuj.length>0==show">
      <div class="lbj_item" v-for="(item) in lbjDdshuj" :key="item.id">
        <p>{{ item.created_at | LessMx }}</p>
        <p>{{ item.content }}</p>
      </div>
      <p class="lbj_zh">没有更多了</p>
    </div>
    <!-- <div class="lbj_con">
        <img src="../../assets/empty.0d284c2e.png" alt="">
        <p>暂无消息通知</p>
    </div>-->
    <!-- 内容部分结束 -->
  </div>
</template>

<script>
import { getDdTz } from "../../http/api";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      lbjDdshuj:[],
      show:true
    };
  },
  created() {
    //创建后
    this.lbjDdtz();
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  methods: {
    //方法集合
    dianBack() {
      this.$router.go(-1);
    },
    lbjDdtz() {
      getDdTz({
        limit: 10,
        message_classify: "order",
        page: 1
      }).then(res => {
        console.log(res);
        this.lbjDdshuj=res.data.data.list
      });
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
  .lbj_con {
    width: 100%;
    text-align: center;
    > img {
      width: 340px;
      height: 340px;
      margin-top: 170px;
    }
    > p {
      font-size: 30px;
      color: #8c8c8c;
      margin-top: 25px;
    }
  }
   .lbj_shuj {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    > .lbj_item {
      width: 100%;
      border-bottom: 1px solid #eee;
      > p:nth-child(1) {
        width: 240px;
        margin: 0 auto;
        padding: 10px 10px;
        box-sizing: border-box;
        background: #b7b7b7;
        color: #fff;
        font-size: 26px;
        margin-top: 28px;
        text-align: center;
        border-radius: 5px;
      }
      > p:nth-child(2) {
        font-size: 28px;
        color: #8c8c8c;
        margin-top: 24px;
        margin-bottom: 24px;
        line-height: 46px;
      }
    }
  }
  .lbj_zh {
    text-align: center;
    font-size: 28px;
    color: #a9aaac;
    margin-top: 40px;
  }
  //   内容部分结束
}
</style>
