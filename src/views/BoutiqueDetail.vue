<template>
  <!-- 精品详情 -->
  <div class="wrap">
    <!-- 头部 -->
    <div class="lbj_head">
      <img @click="dianBack" class="lbj_tu1" src="../assets/back.png" alt />
      <p>课程详情</p>
      <img @click="showShare" class="lbj_tu2" src="../assets/分享.png" alt />
    </div>
    <!-- 弹层 -->
    <div class="lbj_tc">
      <van-popup v-model="show">
        <div class="lbj_fenn">
          <p>分享</p>
          <div>
            <img :src="imrUrl" alt />
          </div>
        </div>
      </van-popup>
    </div>
    <!-- 头部结束 -->
    <!-- 内容部分 -->
    <div class="lbj_neir">
      <!-- tou -->
      <div class="lbj_con">
        <p>{{ lbj_kecXq.title }}</p>
        <img class="lbj_xing" @click="dianHouse" v-if="is_collect==0" src="../assets/星星.png" alt />
        <img class="lbj_xing" @click="dianHouse" v-else src="../assets/xing_active.png" alt />
        <p class="lbj_mian" :class="lbj_kecXq.is_free==1?'':'active'">
          <!-- 免费 -->
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
            alt
            v-if="lbj_kecXq.is_free==1?false:true"
            class="lbj_money"
          />
          &nbsp;{{lbj_kecXq.price==0?'免费':`${lbj_kecXq.price/100}.00`}}
        </p>
        <p class="lbj_gong">
          <span>共{{ lbj_kecXq.is_free }}课时</span>|
          <span>{{ lbj_kecXq.sales_num }}</span>人已报名
        </p>
      </div>
      <!-- tou结束 -->
      <!-- 团队 -->
      <div class="lbj_team">
        <p>教学团队</p>
        <div class="lbj_team_con">
          <img :src="lbj_kexqTou.avatar" alt />
          <p>{{ lbj_kexqTou.teacher_name }}</p>
        </div>
      </div>
      <!-- 团队结束 -->
      <!-- 课程介绍 -->
      <div class="lbj_introduce">
        <p>课程介绍</p>
        <p v-html="lbj_kecXq.course_details"></p>
      </div>
      <!-- 课程介绍结束 -->
      <!-- 课程大纲 -->
      <div class="lbj_outline">
        <p>课程大纲</p>
        <p v-html="lbj_kecXq.course_details"></p>
      </div>
      <!-- 课程大纲结束 -->
      <!-- 课程评论 -->
      <div class="lbj_discuss">
        <p>课程评论</p>
        <div class="lbj_fu" v-if="lbj_pingl.length>0">
          <div class="lbj_discuss_item" v-for="(item) in lbj_pingl" :key="item.id">
            <img :src="item.avatar" alt />
            <div class="lbj_item_user">
              <p class="lbj_item_xinx">
                <span>{{ item.nickname }}</span>
                <span>
                  <van-rate
                    v-model="item.grade"
                    :size="12"
                    color="#EA7A2F"
                    void-icon="star"
                    void-color="#eee"
                  />
                </span>
                <span>{{ item.created_at | lessDate }}</span>
              </p>
              <p class="lbj_item_xinx1">{{ item.content }}</p>
            </div>
          </div>
        </div>

        <div class="lbj_discuss_qie" v-else>
          <img src="../assets/empty.0d284c2e.png" alt />
          <p>暂无评论</p>
        </div>
      </div>
      <!-- 课程评论结束 -->
      <div class="lbj_btn">
        <button @click="enterBaom">{{ getBaom }}</button>
        <!-- <button v-else @click="enterLearn">立即学习</button> -->
      </div>
    </div>

    <!-- 内容部分结束 -->
  </div>
</template>

<script>
import {
  getlessDetail,
  getlessdiscuss,
  getShouc,
  getBaom,
  getShouf,
  getShoucQxLie
} from "../http/api";
import QRCode from "qrcode";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      lbj_kecXq: [],
      lbj_kexqTou: [],
      lbj_pingl: [],
      is_collect: "",
      // lbj_pingl2: [],
      // lbj_pingl3: [],
      page: 1,
      limit: 10,
      id: "",
      value: "",
      // active:0,
      lbjShow: true,
      show: false,
      imrUrl: "",
      title: "",
      getBaom: "立即报名",
      shoucang:0,
    };
  },
  created() {
    //创建后
    this.kecDetail();
    this.kecPingl();
    // this.lbjXq()
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  methods: {
    //方法集合
    // 获取课程
    kecDetail() {
      getlessDetail(this.$route.params.id).then(res => {
        console.log(res);
        this.lbj_kecXq = res.data.data.info;
        // console.log("默认获取", this.lbj_kecXq.is_collect);
        if (this.lbj_kecXq.is_collect == 1) {
          this.is_collect = 1;
        } else {
          this.is_collect = 0;
        }
        this.lbj_kexqTou = res.data.data.teachers[0];
      });
    },
    // 获取评论
    kecPingl() {
      getlessdiscuss({
        page: this.page,
        limit: this.limit,
        id: this.$route.params.id
      }).then(res => {
        // console.log(res);
        this.lbj_pingl = res.data.data.list;
        // this.lbj_pingl2 = res.data.data.list[1];
        // this.lbj_pingl3 = res.data.data.list[2];
      });
    },
    // 点击回退上一级
    dianBack() {
      this.$router.go(-1);
    },
    // 点击收藏
    dianHouse() {
      if (this.lbj_kecXq.is_collect == 1) {
        getShoucQxLie(this.shoucang).then(res => {
          // console.log("取消", res);
          if (res.data.data == 1) {
            this.is_collect = 0;
          }
          this.lbjShow = true;
          // console.log(this.is_collect);
          this.lbj_kecXq.is_collect = 0
        });
      } else if (this.lbj_kecXq.is_collect == 0) {
        getShouc({
          course_basis_id: this.$route.params.id,
          type: 1
        }).then(res => {
          // console.log("收藏", res);
          this.is_collect = 1;
          this.lbjShow = false;
          this.shoucang = res.data.data
          // console.log(this.is_collect);
          this.lbj_kecXq.is_collect = 1
        });
      }
    },

    // 点击分享按钮弹出分享
    showShare() {
      //触发事件调用下面的方法
      // With promises
      this.show = !this.show;
      let url = location.href;
      console.log(url);
      QRCode.toDataURL(url)
        .then(url => {
          console.log(url);
          this.imrUrl = url;
        })
        .catch(err => {
          console.error(err);
        });
    },
    // 点击立即报名
    enterBaom() {
      // this.lbjShow = false;
      // console.log(this.lbj_kecXq.price);
      if (this.lbj_kecXq.price == 0) {
        if (this.lbj_kecXq.is_buy == 1) {
          this.getBaom = "立即学习";
          getBaom({
            shop_id: this.lbj_kecXq.id,
            type: 5
          }).then(res => {
            console.log(res);
            this.$toast("成功");
            // location.reload();
            // console.log(this.$route.params.id)
            this.$router.push({
              path: "/promptlyLearn",
              query:{
                 id:this.$route.params.id
              }
            });
          });
        } else {
          // this.$router.push("/learnTij")
        }
      } else {
        getShouf().then(res => {
          console.log(res);
        });
      }
    },

    // 点击立即学习
    enterLearn() {
      this.$router.push("/promptlyLearn");
    }
    // 跳转过来的详情
    // lbjXq(){
    //   console.log("课程",this.$route.query.id)
    //   getlessDetail({
    //     basis_id:JSON.parse(this.$route.query.id)
    //   }).then(res=>{
    //     console.log(res)
    //   })
    // }
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  // height: 100%;
  position: relative;
  // 头部
  .lbj_head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
    box-sizing: border-box;
    height: 90px;
    align-items: center;
    border-bottom: 1px solid #ddd;
    > .lbj_tu1 {
      width: 24px;
      height: 34px;
    }
    > .lbj_tu2 {
      width: 32px;
      height: 36px;
    }
    > p {
      font-size: 34px;
      color: #595959;
    }
  }
  // 分享图层
  .lbj_tc {
    width: 100%;
    height: 100%;
    /deep/.van-popup {
      width: 500px;
      height: 350px;
      border-radius: 20px;
      text-align: center;
      p {
        margin-top: 25px;
      }
      img {
        margin-top: 20px;
      }
    }
  }
  // 头部结束
  // 内容
  .lbj_neir {
    width: 100%;
    background: #f0f2f5;
    height: 100%;
    overflow: auto;
    margin-bottom: 150px;
    // 头
    .lbj_con {
      width: 100%;
      padding: 0 29px;
      box-sizing: border-box;
      position: relative;
      background: #fff;
      > p:nth-child(1) {
        font-size: 30px;
        color: #121212;
        padding-top: 36px;
        box-sizing: border-box;
        width: 580px;
        line-height: 45px;
      }
      > .lbj_xing {
        width: 38px;
        height: 38px;
        position: absolute;
        right: 28px;
        top: 15px;
      }
      > .lbj_mian {
        font-size: 36px;
        color: #e43400;
        margin-top: 16px;
        width: 580px;
        .lbj_money {
          width: 32px;
          height: 32px;
          border-radius: 0px;
        }
      }
      > .lbj_gong {
        font-size: 32px;
        color: #787878;
        margin-top: 27px;
        padding-bottom: 38px;
        box-sizing: border-box;
      }
    }
    // 头结束
    // 团队
    .lbj_team {
      width: 100%;
      background: #fff;
      margin-top: 28px;
      > p {
        font-size: 30px;
        color: #2e2e2e;
        padding: 0 18px;
        padding-top: 28px;
        box-sizing: border-box;
      }
      .lbj_team_con {
        width: 100%;
        > img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-top: 36px;
          margin-left: 50px;
        }
        > p {
          font-size: 24px;
          color: #2a2a2a;
          padding: 0 0 70px 50px;
          margin-top: 16px;
          box-sizing: border-box;
        }
      }
    }
    // 团队结束
    // 课程介绍
    .lbj_introduce {
      width: 100%;
      background: #fff;
      margin-top: 28px;
      > p:nth-child(1) {
        padding: 0 24px;
        padding-top: 28px;
        box-sizing: border-box;
        font-size: 30px;
        color: #1e1e1e;
      }
      > p:nth-child(2) {
        padding: 0 20px;
        padding-top: 28px;
        font-size: 29px;
        color: #000;
        margin-top: 25px;
        padding-bottom: 36px;
        line-height: 40px;
        box-sizing: border-box;
      }
    }
    // 课程介绍结束

    // 课程大纲
    .lbj_outline {
      width: 100%;
      background: #fff;
      margin-top: 28px;
      > p:nth-child(1) {
        padding: 0 24px;
        padding-top: 28px;
        box-sizing: border-box;
        font-size: 30px;
        color: #1e1e1e;
      }
      > p:nth-child(2) {
        padding: 0 52px;
        padding-top: 28px;
        font-size: 29px;
        color: #000;
        margin-top: 25px;
        padding-bottom: 36px;
        line-height: 56px;
        box-sizing: border-box;
      }
    }
    // 课程大纲结束
    // 课程评论
    .lbj_discuss {
      width: 100%;
      background: #fff;
      margin-top: 28px;
      > p:nth-child(1) {
        padding: 0 24px;
        padding-top: 28px;
        box-sizing: border-box;
        font-size: 30px;
        color: #1e1e1e;
      }
      .lbj_fu {
        > .lbj_discuss_item {
          width: 100%;
          display: flex;
          padding: 0 40px;
          box-sizing: border-box;
          margin-top: 18px;
          > img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
          }

          .lbj_item_user {
            display: flex;
            flex-direction: column;
            height: 86px;
            justify-content: space-around;

            > .lbj_item_xinx {
              margin-left: 20px;
              height: 34px;
              display: flex;
              align-items: center;
              > span:nth-child(1) {
                font-size: 22px;
              }
              > span:nth-child(2) {
                margin-left: 20px;
                // font-size: 10px;
              }
              > span:nth-child(3) {
                font-size: 18px;
                color: #808080;
                margin-left: 40px;
              }
            }
            > .lbj_item_xinx1 {
              margin-left: 20px;

              font-size: 24px;
              color: #838383;
            }
          }
        }
      }

      .lbj_discuss_qie {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        > img {
          width: 312px;
          height: 312px;
        }
        > p {
          font-size: 30px;
          color: #8c8c8c;
          text-align: center;
          margin-top: 20px;
        }
      }
    }
    // 课程评论结束
    .lbj_btn {
      width: 100%;
      height: 85px;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      button {
        width: 100%;
        height: 85px;
        background: #eb6100;
        color: #fff;
        font-weight: bold;
        text-align: center;
        line-height: 85px;
        border: none;
      }
    }
  }

  // 内容结束
}
</style>
