<template>
  <!-- 课程订单 -->
  <div class="lbj_wrap">
    <!-- 头部 -->
    <div class="lbj_head">
      <img @click="dianBack" src="../../assets/back.png" alt />
      <p class="lbj_wenz">课程订单</p>
      <p></p>
    </div>
    <!-- 头部结束 -->
    <!-- 切换不同的订单 -->
    <div class="lbj_list">
      <van-tabs v-model="active">
        <van-tab title="全部订单">
          <!-- 有数据 -->
          <div class="lbj_dd" v-if="lbjshuj.length>0==isShow">
            <ul class="lbj_dditem">
              <li v-for="(item) in lbjshuj" :key="item.id">
                <div class="lbj_ddlist">
                  <p>订单编号:{{ item.order_number }}</p>
                  <p>交易完成</p>
                </div>
                <p class="lbj_zi1">{{ item.title }}</p>
                <p class="lbj_zi2">时间:{{ item.created_at }}</p>
                <p class="lbj_zi3">
                  实付款：<img src="../../assets/钱.png" alt />{{ item.order_price }}
                </p>
              </li>
            </ul>
          </div>
          <!-- 无数据 -->
          <div class="lbj_con" v-else>
            <img src="../../assets/empty.0d284c2e.png" alt />
            <p>暂无订单</p>
          </div>
        </van-tab>
        <van-tab title="待支付">
          <!-- 有数据 -->
          <div class="lbj_dd" v-if="lbjshuj1.length>0==isShow">
            <ul class="lbj_dditem">
              <li v-for="(item) in lbjshuj1" :key="item.id">
                <div class="lbj_ddlist">
                  <p>订单编号:{{ item.order_number }}</p>
                  <p>交易完成</p>
                </div>
                <p class="lbj_zi1">{{ item.title }}</p>
                <p class="lbj_zi2">时间:{{ item.created_at }}</p>
                <p class="lbj_zi3">
                  实付款：<img src="../../assets/钱.png" alt />{{ item.order_price }}
                </p>
              </li>
            </ul>
          </div>
          <!-- 无数据 -->
          <div class="lbj_con" v-else>
            <img src="../../assets/empty.0d284c2e.png" alt />
            <p>暂无订单</p>
          </div>
        </van-tab>
        <van-tab title="已完成">
           <!-- 有数据 -->
          <div class="lbj_dd" v-if="lbjshuj2.length>0==isShow">
            <ul class="lbj_dditem">
              <li v-for="(item) in lbjshuj2" :key="item.id">
                <div class="lbj_ddlist">
                  <p>订单编号:{{ item.order_number }}</p>
                  <p>交易完成</p>
                </div>
                <p class="lbj_zi1">{{ item.title }}</p>
                <p class="lbj_zi2">时间:{{ item.created_at }}</p>
                <p class="lbj_zi3">
                  实付款：<img src="../../assets/钱.png" alt />{{ item.order_price }}
                </p>
              </li>
            </ul>
          </div>
          <!-- 无数据 -->
          <div class="lbj_con" v-else>
            <img src="../../assets/empty.0d284c2e.png" alt />
            <p>暂无订单</p>
          </div>
        </van-tab>
        <van-tab title="已取消">
           <!-- 有数据 -->
          <div class="lbj_dd" v-if="lbjshuj3.length>0==isShow">
            <ul class="lbj_dditem">
              <li v-for="(item) in lbjshuj3" :key="item.id">
                <div class="lbj_ddlist">
                  <p>订单编号:{{ item.order_number }}</p>
                  <p>交易完成</p>
                </div>
                <p class="lbj_zi1">{{ item.title }}</p>
                <p class="lbj_zi2">时间:{{ item.created_at }}</p>
                <p class="lbj_zi3">
                  实付款：<img src="../../assets/钱.png" alt />{{ item.order_price }}
                </p>
              </li>
            </ul>
          </div>
          <!-- 无数据 -->
          <div class="lbj_con" v-else>
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
import { getclassdd } from "../../http/api";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      active: 0,
      lbjshuj:[],
      lbjshuj1:[],
      lbjshuj2:[],
      lbjshuj3:[],
      isShow:true,
    };
  },
  created() {
    //创建后
    this.lbjs();
    this.lbjs1();
    this.lbjs2();
    this.lbjs3();
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
    },
    // 全部
    lbjs() {
      getclassdd({
        limit: 10,
        order_status: 0,
        order_type: 2,
        page: 1
      }).then(res => {
        console.log(res);
        this.lbjshuj = res.data.data.list
      });
    },
    lbjs1() {
      getclassdd({
        limit: 10,
        order_status: 1,
        order_type: 2,
        page: 1
      }).then(res => {
        console.log(res);
        this.lbjshuj1 = res.data.data.list
      });
    },
    lbjs2() {
      getclassdd({
        limit: 10,
        order_status: 2,
        order_type: 2,
        page: 1
      }).then(res => {
        console.log(res);
        this.lbjshuj2 = res.data.data.list
      });
    },
    lbjs3() {
      getclassdd({
        limit: 10,
        order_status: 3,
        order_type: 2,
        page: 1
      }).then(res => {
        console.log(res);
        this.lbjshuj3 = res.data.data.list
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
    .lbj_con {
      width: 100%;
      text-align: center;
      > img {
        width: 320px;
        height: 298px;
      }
      > p {
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
  /deep/.van-tabs__wrap {
    height: 86px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  /deep/.van-tabs__line {
    background-color: #f5b384;
  }

  .lbj_dd {
    width: 100%;
    .lbj_dditem {
      width: 100%;
      margin: 0 auto;
      padding: 0 20px;
      box-sizing: border-box;
      > li {
        width: 700px;
        border: 1px solid #ccc;
        margin-top: 20px;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 10px;
        .lbj_ddlist {
          display: flex;
          justify-content: space-between;
          height: 60px;
          align-items: center;
          border-bottom: 1px solid #eee;
          > p:nth-child(1) {
            font-size: 30px;
            color: #595959;
          }
          > p:nth-child(2) {
            font-size: 30px;
            color: #ea7a2f;
          }
        }
        .lbj_zi1 {
          font-size: 32px;
          color: #595959;
          margin-top: 16px;
        }
        .lbj_zi2 {
          font-size: 30px;
          color: #969696;
          margin-top: 10px;
        }
        .lbj_zi3 {
          font-size: 30px;
          color: #969696;
          margin-top: 10px;
          >img{
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
  //   切换不同的订单结束
}
</style>
