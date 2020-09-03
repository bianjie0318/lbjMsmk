<template>
  <!-- 立即学习页面 -->
  <div class="lbj_wrap">
    <!-- 头部 -->
    <div class="lbj_head">
      <img @click="dianBack" class="lbj_huit" src="../../assets/back.png" alt />
      <p>{{ header }}</p>
      <img class="lbj_ril" src="../../assets/ril.png" alt />
    </div>
    <!-- 头部结束 -->

    <div class="lbj_con" v-if="isShow">
      <!-- 进度 -->
      <div class="lbj_neir">
        <p class="lbj_zi">共1课时</p>
        <van-progress pivot-text color="#F5F5F5" track-color="#eb6100" :percentage="0" />
        <p class="lbj_jind">已学习{{ lbjMeismk.progress_rate }}%</p>
      </div>
      <!-- 视频 -->
      <div
        class="lbj_video"
        @click="entervideo(item)"
        v-for="(item,index) in lbjMeismk1"
        :key="index"
      >
        <div class="lbj_hang">
          <span></span>
          <p>{{ item.periods_title }}</p>
        </div>
        <div class="lbj_jd">
          <van-progress pivot-text color="#F5F5F5" track-color="#EB6100" :percentage="0" />
          <p>已观看{{ item.progress_rate }}%</p>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="lbj_foot">
      <ul class="lbj_di">
        <li @click="lbjWrite">
          <p>写评论</p>
        </li>
        <li @click="lbjKx">
          <p>课程详情</p>
        </li>
        <li @click="lbjYc">
          <p>移出列表</p>
        </li>
      </ul>
    </div>

    <!-- 留言框出现 -->
    <!-- <van-cell is-link>展示弹出层</van-cell> -->
    <van-popup v-model="show" class="lbj_tc">
      <p>
        <span></span>
        <span @click="dianClose">X</span>
      </p>
      <p>
        星级:
        <van-rate v-model="value" :size="16" color="#EA7A2F" void-icon="star" void-color="#eee" />
      </p>
      <p>
        内容：
        <textarea style="border:1px solid #D3D3D3" name id cols="30" rows="3"></textarea>
      </p>
      <p>
        <button>发布</button>
      </p>
    </van-popup>
  </div>
</template>

<script>
import { getMeis } from "../../http/api";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      isShow: true,
      id: "",
      lbjMeismk: [],
      lbjMeismk1: [],
      header: "",
      video_id: "",
      show: false,
      value: 2
    };
  },
  created() {
    //创建后
    this.lbjMeism();
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  methods: {
    //方法集合
    showPopup() {},
    dianBack() {
      this.$router.go(-1);
    },

    lbjMeism() {
      // console.log(this.$route.params.id)
      let id = this.$route.query.id;
      getMeis({
        id
      }).then(res => {
        console.log(res);
        //    this.lbj =res.data.data[0]
        this.lbjMeismk = res.data.data.course;
        this.lbjMeismk1 = res.data.data.periods;
        this.header = res.data.data.course.title;
        console.log(this.header);
        this.video_id = res.data.data.periods[0].video_id;
      });
    },
    // 点击进入视频页面
    entervideo(item) {
      this.isShow = !this.isShow;
      // let id=this.$route.query.video_id
      this.$router.push({
        path: `/xueShip`,

        query: {
          id: this.$route.query.id,
          video_id: this.video_id,
          title: this.header
        }
      });
      console.log(this.$route.query.id, this.video_id, this.header);
    },
    // 点击弹出留言框
    lbjWrite() {
      this.show = true;
    },
    // 点击关闭弹层
    dianClose() {
      this.show = false;
    },

    // 点击课程详情跳回详情
    lbjKx(){
      this.$router.go(-1)
    },
    // 移除列表
    lbjYc(){
      
    }
  }
};
</script>

<style scoped lang="scss">
.lbj_wrap {
  width: 100%;
  //   头部
  .lbj_head {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    box-sizing: border-box;
    align-items: center;
    > .lbj_huit {
      width: 30px;
      height: 34px;
    }
    > p {
      width: 480px;
      font-size: 34px;
      color: #303030;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    > .lbj_ril {
      width: 34px;
      height: 34px;
    }
  }
  //   头部结束
  // 内容部分
  .lbj_con {
    width: 100%;

    .lbj_neir {
      width: 100%;
      height: 104px;
      align-items: center;
      display: flex;
      padding: 0 16px;
      box-sizing: border-box;
      justify-content: space-around;
      border-bottom: 1px solid #ddd;
      .lbj_zi {
        font-size: 28px;
        color: #545454;
      }
      /deep/.van-progress {
        width: 421px;
      }
      .lbj_jind {
        font-size: 26px;
        color: #4c4c4c;
      }
    }
    .lbj_video {
      width: 690px;
      height: 134px;
      border: 2px solid #e3e3e3;
      border-radius: 10px;
      margin: 0 auto;
      margin-top: 28px;
      padding: 34px 28px;
      box-sizing: border-box;
      .lbj_hang {
        width: 100%;
        display: flex;
        height: 36px;
        align-items: center;
        > span {
          width: 6px;
          height: 6px;
          display: inline-block;
          background: #ed731d;
          margin-right: 22px;
        }
        > p {
          font-size: 24px;
          color: #292929;
        }
      }
      .lbj_jd {
        width: 100%;
        height: 46px;
        display: flex;
        align-items: center;

        /deep/.van-progress {
          width: 468px;
        }
        > p {
          font-size: 26px;
          color: #6f6f6f;
          margin-left: 14px;
        }
      }
    }
  }
  // 内容部分结束
  // 弹层内的样式
  .lbj_tc {
    width: 700px;
    height: 400px;
    border-radius: 10px;
    > p:nth-child(1) {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;
      box-sizing: border-box;
    }
    > p:nth-child(2) {
      width: 100%;
      padding: 0 28px;
      box-sizing: border-box;
      margin: 20px 0;
      font-size: 28px;
      color: #8e8e8e;
    }
    > p:nth-child(3) {
      width: 100%;
      padding: 0 28px;
      box-sizing: border-box;
      margin: 20px 0;
      font-size: 28px;
      color: #8e8e8e;
      margin-top: 80px;
    }
    > p:nth-child(4) {
      margin: 40px auto;
      width: 200px;
      height: 80px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      > button {
        border-radius: 10px;
        background: #eb6100;
        padding: 16px 30px;
        border: none;
        text-align: center;
        color: #fff;
        outline: none;
      }
    }
  }
  // 弹层内的样式结束
  // 底部布局
  .lbj_foot {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    .lbj_di {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      > li {
        > p {
          font-size: 30px;
          color: #8c8c8c;
        }
      }
    }
  }
  // 底部布局结束
}
//
</style>
