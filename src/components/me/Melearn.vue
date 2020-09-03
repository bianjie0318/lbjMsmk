<template>
  <!-- 我的学习页面 -->
  <div class="wrap">
    <!-- 头部 -->
    <div class="lbj_head">
      <img @click="lbjBack" class="lbj_photo" src="../../assets/back.png" alt />
      <p>我的学习</p>
      <img class="lbj_photo1" src="../../assets/ril.png" alt />
    </div>
    <!-- 轮播 -->
    <div class="lbj_lun">
      <van-tabs v-model="active">
        <van-tab v-for="(item) in lbj_lun" :key="item.id">
          <template #title>
            <ul>
              <li>
                <p @click="lbjQh(item.type)">{{ item.name }}({{ item.num }})</p>
              </li>
            </ul>
          </template>
          <!-- 有课程 -->
          <div class="lbj_yk" v-if="lbj_zbk.length>0==lbjxs">
            <ul class="lbj_lic">
              <li v-for="(item,index) in lbj_zbk" :key="index">
                <p>{{ item.title }}</p>
                <div class="lbj_zh">
                  <img src="../../assets/clock.png" alt />
                  <p>{{ item.start_play_date | MeLess }}~{{ item.end_play_date | MeLess }}</p>
                  <span style="height: 10px;font-size: 14px;margin: 0 10px;">|</span>
                  <p>共{{ item.section_num }}课时</p>
                </div>
                <div class="lbj_jd">
                  <van-progress
                    class="lbj_jdt"
                    color="#EB6100"
                    stroke-width="4px"
                    :show-pivot="lbjyy"
                    :percentage="100"
                  />
                  <p>已学习{{ item.progress_rate }}%</p>
                </div>
              </li>
            </ul>
          </div>
          <!-- 无课程 -->
          <div class="lbj_lun_con" v-else>
            <img src="../../assets/empty.0d284c2e.png" alt />
            <p class="lbj_title">还没有课程，快去选择课程学习吧</p>
            <p class="lbj_btn">
              <button>选择课程</button>
            </p>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { getLearnsj } from "../../http/api";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      active: 0,
      lbj_lun: [],
      lbj_zbk: [],
      type: "",
      lbjyy: false,
      // xiab:1
      type: 2,
      lbj_dbk: [],
      leix: false,
      lbjxs:true
    };
  },
  created() {
    //创建后
    this.lbjsj();
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  methods: {
    //方法集合
    //点击回退
    lbjBack() {
      this.$router.go(-1);
    },
    lbjsj() {
      getLearnsj(this.type).then(res => {
        console.log(res);
        this.lbj_lun = res.data.data.typeNum;
        this.lbj_zbk = res.data.data.courseList;
      });
    },
    lbjQh(type) {
      // console.log{}
      getLearnsj(type).then(res => {
        console.log(res);
        this.lbj_zbk = res.data.data.courseList;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  //   头部
  .lbj_head {
    width: 100%;
    height: 82px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    box-sizing: border-box;
    .lbj_photo {
      width: 24px;
      height: 32px;
    }
    > p {
      font-size: 36px;
      color: #494949;
    }
    .lbj_photo1 {
      width: 34px;
      height: 34px;
    }
  }
  //   水平点播轮播
  .lbj_lun {
    width: 100%;
    // height: 94px;
    // line-height: 94px;
    overflow: auto;
    /deep/.van-tab {
      font-size: 28px;
      color: #afb0b0;
      margin-right: 36px;
    }
    .lbj_lun_con {
      width: 100%;
      text-align: center;
      > img {
        width: 300px;
        height: 300px;
        margin-top: 198px;
      }
      > .lbj_title {
        font-size: 32px;
        color: #9a9a9a;
        margin-top: 30px;
      }
      > .lbj_btn {
        width: 100%;
        margin-top: 78px;
        > button {
          width: 176px;
          height: 56px;
          background: #eb6100;
          color: #fff;
          font-weight: bold;
          border: none;
          border-radius: 10px;
          font-size: 28px;
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
  }
  // 有课程
  .lbj_yk {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    margin-top: 30px;
    .lbj_lic {
      width: 700px;
      margin: 0 auto;
      border-radius: 10px;
      border: 1px solid #f4f4f4;
      box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.05);
      > li {
        width: 100%;
        padding: 16px;
        box-sizing: border-box;
        > p {
          font-size: 32px;
          color: #333333;
          margin-top: 16px;
        }
        > .lbj_zh {
          width: 100%;
          display: flex;
          margin-top: 26px;
          > img {
            width: 26px;
            height: 26px;
            margin-right: 10px;
          }
          > p {
            font-size: 26px;
            color: #666666;
          }
        }
        > .lbj_jd {
          width: 100%;
          margin-top: 26px;
          display: flex;
          height: 40px;
          align-items: center;

          .lbj_jdt {
            width: 160px;
          }
          > p {
            font-size: 26px;
            color: #969696;
            margin-left: 20px;
          }
        }
      }
    }
  }
}
</style>
