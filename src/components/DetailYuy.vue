<template>
  <!-- 预约课程 -->
  <div class="wrap">
    <!-- 头部外层 -->
    <div class="lbj_tou">
      <img @click="dianBack" src="../assets/左箭头.png" alt />
      <p>预约课程</p>
      <p></p>
    </div>
    <!-- 头部外层结束 -->

    <!-- 头部信息 -->
    <div class="lbj_head">
      <div class="lbj_head_nei">
        <img :src="lbj_shujY.avatar" alt />
        <div class="lbj_wenz">
          <p>
            <span>{{ lbj_shujY.teacher_name }}</span>
            <span>{{ lbj_shujY.level_name }}</span>
          </p>
          <p>
            <span>{{ lbj_shujY.sex | sex }}</span>
            <span>{{ lbj_shujY.teach_age }}年教龄</span>
          </p>
        </div>
        <p @click="dianBack">查看详情</p>
        <!-- 优势 -->
      </div>
    </div>
    <!-- 头部信息结束 -->
    <!-- 内容部分 -->
    <div class="lbj_con">
      <div class="lbj_title">
        <p>选择时间</p>
        <p>(北京时间)</p>
      </div>
      <div class="lbj_date">
        <van-tabs>
          <van-tab v-for="(item,index) in lbjRiq" :title="item.title" :key="index">
            <img src="../assets/empty.0d284c2e.png" alt />
            <p>暂无消息</p>
          </van-tab>
        </van-tabs>
      </div>
      <div class="lbj_btn">
        <button>立即预约</button>
      </div>
    </div>
    <!-- 内容部分结束 -->
  </div>
</template>

<script>
import { getDetailY, getDate } from "../http/api";

export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      //   名师
      lbj_shujY: [],
      active: 2,
      // id:""，
      lbjRiq: [
        { id: 1, title: "周一" },
        { id: 1, title: "周二" },
        { id: 1, title: "周三" },
        { id: 1, title: "周四" },
        { id: 1, title: "周五" },
        { id: 1, title: "周六" },
        { id: 1, title: "周日" },
        { id: 1, title: "周一" },
        { id: 1, title: "周二" },
        { id: 1, title: "周三" },
        { id: 1, title: "周四" },
        { id: 1, title: "周五" },
        { id: 1, title: "周六" },
        { id: 1, title: "周日" }
      ],

      is_next: 0,
      teacher_id: "3",
      week_day: 1,

      lbjDate1: []
    };
  },
  filters: {
    sex(val) {
      if (val == 0) {
        return "男";
      } else {
        return "女";
      }
    }
  },
  created() {
    //创建后
    this.lbjMingY();
    this.lbjDate();
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
    // 获取预约课程
    lbjMingY() {
      console.log(this.$route.params.id);
      getDetailY(this.$route.params.id).then(res => {
        console.log(res);
        this.lbj_shujY = res.data.data.teacher;
      });
    },

    // 预约课程的日期
    lbjDate() {
      getDate({
        is_next: this.is_next,
        teacher_id: this.teacher_id,
        week_day: this.week_day
      }).then(res => {
        console.log(res);
        this.lbjDate1 = res.data.data.weekDateList;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  // 头部外层
  .lbj_tou {
    width: 100%;
    height: 200px;
    display: flex;
    background: linear-gradient(to bottom, #62b5fd, #5186e7);
    justify-content: space-between;
    padding: 0 34px;
    padding-top: 30px;
    box-sizing: border-box;
    position: relative;
    > img {
      width: 30px;
      height: 36px;
    }
    > p {
      font-size: 38px;
      color: #fff;
      font-weight: bold;
    }
  }
  // 头部外层结束
  //   头部信息
  .lbj_head {
    width: 100%;
    position: absolute;
    top: 86px;
    left: 0;
    right: 0;
    // display: flex;

    // 内容部分
    > .lbj_head_nei {
      width: 710px;
      height: 180px;
      margin: 0 auto;
      background: #fff;
      border-radius: 18px;
      padding: 0 24px;
      padding-top: 60px;
      box-sizing: border-box;
      display: flex;
      position: relative;
      z-index: 20;
      > img {
        width: 78px;
        height: 78px;
        border-radius: 50%;
      }
      > .lbj_wenz {
        display: flex;
        flex-direction: column;
        margin-left: 26px;
        height: 90px;
        justify-content: center;
        > p:nth-child(1) {
          > span:nth-child(1) {
            font-size: 28px;
            color: #2d2d2d;
          }
          > span:nth-child(2) {
            font-size: 24px;
            color: #e86d1b;
            margin-left: 10px;
          }
        }
        > p:nth-child(2) {
          > span:nth-child(1) {
            font-size: 22px;
            color: #999999;
          }
          > span:nth-child(2) {
            font-size: 22px;
            color: #999999;
            margin-left: 10px;
          }
        }
      }

      > p {
        width: 160px;
        height: 58px;
        background: #fff;
        color: #eb4501;
        text-align: center;
        line-height: 58px;
        border-radius: 40px;
        position: absolute;
        right: 32px;
        font-size: 30px;
        border: 1px solid #f4a670;
      }
    }
  }
  //   头部信息结束
  // 内容部分
  .lbj_con {
    width: 100%;
    height: 80%;
    background: #f0f2f5;
    padding-top: 80px;
    position: absolute;

    .lbj_title {
      width: 100%;
      display: flex;
      margin: 18px 0;
      padding: 0 20px;
      box-sizing: border-box;
      > p:nth-child(1) {
        border-left: 4px solid #eb6100;
        padding-left: 20px;
        box-sizing: border-box;
        font-size: 30px;
        color: #595959;
      }
      > p:nth-child(2) {
        margin-left: 20px;
        font-size: 24px;
        color: #595959;
      }
    }
    /deep/.van-tabs--line .van-tabs__wrap {
      height: 160px;
      width: 95%;
      margin: 0 auto;
      border-radius: 10px;
    }
    /deep/.van-tab__pane {
      width:100%;
      margin:0 auto;
      text-align: center;
     

      > img {
        width: 300px;
        height: 300px;
        margin-top: 60px;
      }
      >p{
        font-size: 30px;
        color:#8C8C8C;
        margin-top: 40px;
      }
    }
    
    .lbj_btn{
      width: 100%;
      height: 90px;
      position: fixed;
      bottom:0;
      >button{
        width: 100%;
        height: 80px;
        border: none;
        background: #EB6100;
        color:#fff;
      }
    }
    
  }
  // 内容部分结束
}
</style>
