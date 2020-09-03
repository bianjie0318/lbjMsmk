<template>
  <div class="wrap">
    <!-- 我的页面 -->
    <div class="lbj_me">
      <div class="lbj_tou"></div>
      <div class="lbj_toux">
        <!-- 获取头像数据渲染 -->
        <div class="lbj_shuj">
          <img :src="lbjTou.avatar"  @click="enterGen" alt />
          <div class="lbj_tuw" >
            <p @click="enterGen" class="lbj_phone">{{ lbjTou.nickname }}</p>
            <img @click="enterGen" src="../assets/zi.png" alt />
            <p @click="enterFud" class="lbj_yuekl">去约课</p>
          </div>
        </div>
        <!-- 获取头像数据渲染结束 -->

        <!-- 头向下的文字类 -->
        <div class="lbj_wenz_wai">
          <ul class="lbj_zit">
            <!-- 点击我的特色课进入我的学习页 -->
            <li @click="enterLearn">
              <p>0</p>
              <p>我的特色课</p>
              <p>已购买特色课程学习</p>
            </li>
            <!-- 点击我的特色课进入我的学习页结束 -->

            <!-- 点击一对一辅导进入约课页 -->
            <li @click="enterYuekq">
              <p>0</p>
              <p>一对一辅导</p>
              <p>我的一对一老师辅导</p>
            </li>
            <!-- 点击一对一辅导进入约课页结束 -->

            <!-- 点击剩余学习币进入我的余额页 -->
            <li @click="enterYue">
              <p>0.00</p>
              <p>剩余学习币</p>
              <p>查看剩余学习币</p>
              <!-- 点击剩余学习币进入我的余额页结束 -->
            </li>
          </ul>
        </div>
        <!-- 头向下的文字类结束 -->

        <!-- 邀请好友 -->
        <div class="lbj_invite">
          <div class="lbj_invite_nei" @click="enteryaoqm">
            <img class="lbj_invite_xinx" src="../assets/yaoq.png" alt />
            <div class="lbj_invite_title">
              <p>邀请好友注册App,享多重好礼</p>
              <p>限时特惠,多邀多得</p>
            </div>
            <img class="lbj_invite_jiant" src="../assets/youj.png" alt />
          </div>
        </div>
        <!-- 邀请好友结束 -->

        <!-- 课程相关 -->
        <div class="lbj_lesson">
          <p>课程相关</p>
          <ul class="lbj_lesson_tuw">
            <!-- 点击进入关注 -->
            <li @click="enterFollow">
              <img src="../assets/leijguanz.png" alt />
              <p>关注的老师</p>
            </li>
            <!-- 点击进入收藏 -->
            <li @click="enterCollection">
              <img src="../assets/shouc.png" alt />
              <p>我的收藏</p>
            </li>
          </ul>
        </div>
        <!-- 课程相关结束 -->

        <!-- 订单相关 -->
        <div class="lbj_lesson">
          <p>订单相关</p>
          <ul class="lbj_lesson_tuw">
            <!-- 点击进入课程订单页 -->
            <li @click="enterLesson">
              <img src="../assets/dingd.png" alt />
              <p>课程订单</p>
            </li>
            <!-- 点击进入会员订单页 -->
            <li @click="enterVip">
              <img src="../assets/dingd.png" alt />
              <p>会员订单</p>
            </li>
            <!-- 点击进入约课订单页 -->
            <li @click="enterYuek">
              <img src="../assets/dingd.png" alt />
              <p>约课订单</p>
            </li>
          </ul>
        </div>
        <!-- 订单相关结束 -->

        <!-- 我的账户 -->
        <div class="lbj_lesson">
          <p>我的账户</p>
          <ul class="lbj_lesson_tuw">
            <li @click="enterCoupon">
              <img src="../assets/juan.png" alt />
              <p>优惠券</p>
            </li>
            <li @click="enterLearnk">
              <img src="../assets/ka.png" alt />
              <p>学习卡</p>
            </li>
            <li @click="enterKvip">
              <img src="../assets/vip.png" alt />
              <p>会员</p>
            </li>
          </ul>
        </div>
        <!-- 我的账户结束 -->

        <!-- 自助服务 -->
        <div class="lbj_help">
          <p>自助服务</p>
          <ul class="lbj_lesson_tuw">
            <li @click="enterNews">
              <img src="../assets/xiaox.png" alt />
              <p>我的消息</p>
            </li>
            <li @click="enterFeedback">
              <img src="../assets/fank.png" alt />
              <p>意见反馈</p>
            </li>
            <li @click="enterFuw">
              <img src="../assets/kef.png" alt />
              <p>在线客服</p>
            </li>
            <li @click="enterShez">
              <img src="../assets/set.png" alt />
              <p>设置</p>
            </li>
          </ul>
        </div>
        <!-- 自助服务结束 -->
        
      </div>
    </div>
    <!-- 邀请码 -->
    <div class="lbj_yaoq1" v-if="lbjyq" @click="enteryaoqm">
      <div class="lbj_yq">
        <img src="../assets/meyaoq.png" alt />
      </div>
      <p class="lbj_zhiw">
        <img src="../assets/zhiwen.png" alt />
        <span>长按保存到相册</span>
      </p>
    </div>
    <!-- 我的页面结束 -->
  </div>
</template>

<script>

// import { login } from '../http/api';
import { getUserinfo } from "../http/api";

export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
    
       // 头像数据
      lbjTou: [],
      // 点击邀请
      lbjyq: false,

       //模拟数据
    

       // 切换登录与我的
      lbjSwitch:true,
     
     
    };
  },
  created() {
    //创建后
    this.headShuj()
  },
  components: {
    
  }, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  methods: {
    //方法集合
    headShuj(){
       getUserinfo({
         
       }).then(res=>{
         console.log(res)
         this.lbjTou=res.data.data
       })
    },
    // 点击一对一辅导跳约课
    enterYuekq() {
      this.$router.push("/tabbar/record");
    },

    // 点击我的特色课跳我的学习页
    enterLearn() {
      this.$router.push("/melearn");
    },

    // 点击剩余学习币进入我的余额页
    enterYue() {
      this.$router.push("/mebalance");
    },

    // 点击邀请进入邀请码
    enteryaoqm() {
      this.lbjyq = !this.lbjyq;
    },

    // 点击关注的老师进入我的关注页
    enterFollow() {
      this.$router.push("/mefollow");
    },
    // 点击我的收藏，进入收藏
    enterCollection() {
      this.$router.push("/mecollection");
    },
    // 点击课程订单进入课程订单页
    enterLesson() {
      this.$router.push("/melesson");
    },
    // 点击会员订单进入会员订单页
    enterVip() {
      this.$router.push("/mevip");
    },
    // 点击约课订单进入约课页面
    enterYuek() {
      this.$router.push("/meyuek");
    },
    // 点击优惠券进入我的优惠券页面
    enterCoupon() {
      this.$router.push("/mecoupon");
    },
    // 点击学习卡进入我的学习卡
    enterLearnk() {
      this.$router.push("/melearnk");
    },
    //点击会员进入开通会页
    enterKvip() {
      this.$router.push("/mekvip");
    },
    //点击设置进入设置页
    enterShez() {
      this.$router.push("/meshez");
    },
    // 点击消息进入消息里
    enterNews(){
      this.$router.push("/menews")
    },
    // 点击反馈进入反馈页
    enterFeedback(){
      this.$router.push("/mefeed")
    },
    // 点击跳转至客服
    enterFuw(){
      this.$router.push("/emailshuj")

    },
    // 点击进个人信息
    enterGen(){
      this.$router.push("/getuser")
    },
    // 点击进入一对一辅导
    enterFud(){
      this.$router.push("/coach")
    }
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  overflow-x: hidden;
  // position: relative;

  // 我的页面
  .lbj_me {
    width: 100%;
    // 顶部头像
    .lbj_tou {
      width: 100%;
      height: 218px;
      background: #fc5500;
      border-radius: 0 0 90px 90px;
      position: relative;

    }
    .lbj_toux {
      width: 685px;
      height: 344px;
      background: #fff;
      margin: 0 auto;
      position: absolute;
      top: 90px;
      left: 0;
      right: 0;
      border-radius: 10px;
      // overflow: auto;
      box-shadow: 0px 0px 50px 15px rgba(0, 0, 0, 0.1);
      // 获取头像数据
      > .lbj_shuj {
        width: 100%;
        display: flex;
        height: 183px;
        align-items: center;
        > img {
          width: 144px;
          height: 122px;
          padding-left: 30px;
          box-sizing: border-box;
        }
        > .lbj_tuw {
          width: 540px;
          display: flex;
          height: 183px;
          align-items: center;
          position: relative;
          > .lbj_phone {
            font-size: 30px;
            color: #000000;
            margin-left: 20px;
          }
          > img {
            width: 32px;
            height: 32px;
            margin-left: 20px;
          }
          > .lbj_yuekl {
            width: 112px;
            height: 50px;
            background: #eb6100;
            color: #fff;
            font-weight: bold;
            border-radius: 15px 0 0 15px;
            font-size: 26px;
            text-align: center;
            line-height: 50px;
            position: absolute;
            right: 0;
            top: 80px;
            bottom: 66px;
          }
        }
      }
      // 获取头像数据结束

      // 头向下的文字类
      .lbj_wenz_wai {
        width: 100%;
        .lbj_zit {
          width: 100%;
          display: flex;
          // flex-direction: column;
          justify-content: space-around;
          > li {
            width: 240px;
            display: flex;
            flex-direction: column;
            text-align: center;
            height: 158px;
            justify-content: space-around;
            border-right: 1px solid #eee;
            > p:nth-child(1) {
              font-size: 32px;
              color: #e94d00;
              font-weight: bold;
            }
            > p:nth-child(2) {
              font-size: 30px;
              color: #3e3e3e;
            }
            > p:nth-child(3) {
              font-size: 20px;
              color: #aeaeae;
            }
          }
        }
      }
      // 头向下的文字类结束

      // 邀请
      .lbj_invite {
        width: 100%;
        margin-top: 56px;
        height: 88px;
        margin-bottom: 26px;
        .lbj_invite_nei {
          width: 686px;
          height: 88px;
          background: linear-gradient(to left, #ff944b 0%, #fc5500 100%);
          border-radius: 45px;
          display: flex;
          padding: 0 28px;
          box-sizing: border-box;
          align-items: center;
          position: relative;
          > .lbj_invite_xinx {
            width: 44px;
            height: 42px;
          }
          > .lbj_invite_title {
            height: 88px;

            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 10px 0;
            box-sizing: border-box;
            padding-left: 22px;
            > p {
              font-size: 28px;
              color: #fff;
            }
          }
          > .lbj_invite_jiant {
            width: 50px;
            height: 50px;
            position: absolute;
            right: 8px;
          }
        }
      }
      // 邀请结束

      // 课程相关
      .lbj_lesson {
        width: 100%;
        // background: #fff;
        > p {
          width: 100%;
          height: 60px;
          // padding: 0 30px;
          box-sizing: border-box;
          font-size: 32px;
          color: #2f2f2f;
          line-height: 60px;
          margin-top: 20px;
        }
        > .lbj_lesson_tuw {
          width: 100%;
          padding: 0 24px;
          box-sizing: border-box;
          display: flex;
          border-bottom: 1px solid #ddd;
          > li {
            text-align: center;
            margin-right: 64px;
            height: 143px;
            > img {
              width: 44px;
              height: 44px;
            }
            > p {
              font-size: 26px;
              color: #555555;
              margin-top: 12px;
            }
          }
        }
      }
      // 课程相关结束

      // 自助服务
      .lbj_help {
        width: 100%;
        margin-bottom: 120px;
        // background: #fff;

        > p {
          width: 100%;
          height: 60px;
          // padding: 0 30px;
          box-sizing: border-box;
          font-size: 32px;
          color: #2f2f2f;
          line-height: 60px;
          margin-top: 20px;
        }
        > .lbj_lesson_tuw {
          width: 100%;
          padding: 0 24px;
          box-sizing: border-box;
          display: flex;
          border-bottom: 1px solid #ddd;
          > li {
            text-align: center;
            margin-right: 64px;
            height: 143px;
            > img {
              width: 44px;
              height: 44px;
            }
            > p {
              font-size: 26px;
              color: #555555;
              margin-top: 12px;
            }
          }
        }
      }
      // 自助服务结束
    }
  }
  // 邀请码
  .lbj_yaoq1 {
    width: 100%;
    height: 94.5%;
    overflow: auto;
    position: fixed;
    left: 0;
    right: 0;
    // top: 182px;
    bottom: 101px;
    background: rgba(0, 0, 0, 0.4);
    > .lbj_yq {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      text-align: center;
      margin-top: 80px;
      > img {
        width: 666px;
        height: 85%;
      }
    }
  }
  .lbj_zong {
    width: 100%;
    .lbj_head {
      width: 100%;
      text-align: center;
      margin-top: 100px;
      margin-bottom: 130px;
      > img {
        width: 470px;
        height: 103px;
      }
    }
    .lbj_entry {
      width: 100%;
      padding: 0 67px;
      box-sizing: border-box;
      > input {
        padding: 10px;
        box-sizing: border-box;
        width: 608px;
        height: 94px;
        border: none;
        line-height: 94px;
        border-bottom: 2px solid #ddd;
        font-size: 30px;
      }
      .lbj_entry_fo {
        width: 608px;
        height: 94px;
        line-height: 94px;
        display: flex;
        padding: 10px;
        box-sizing: border-box;
        justify-content: space-between;
        > p:nth-child(1) {
          font-size: 24px;
          color: #7d7d7d;
        }
        > p:nth-child(2) {
          font-size: 26px;
          color: #7d7d7d;
        }
      }
      .btn {
        margin-top: 76px;
        width: 608px;
        height: 90px;
        color: #fff;
        font-weight: bold;
        border: none;
        border-radius: 38px;
        border: 1px solid #ff8e3f;
        background-image: linear-gradient(to right, #ff944b, #fc4500);
      }
    }

    .lbj_entry1 {
      width: 100%;
      padding: 0 67px;
      box-sizing: border-box;
      .huom {
        width: 100%;
        display: flex;
        padding: 0 4px;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #eee;
        .van-count-down {
          font-size: 26px;
          color: #c4c4c4;
        }

        input {
          width: 380px;
          height: 92px;
          border: none;
          font-size: 30px;
          color: #bababa;
        }
        > div:nth-child(1) {
          font-size: 28px;
          color: #e84600;
        }
        > div:nth-child(2) {
          font-size: 28px;
          color: #c4c4c4;
        }
      }
      > input {
        padding: 10px;
        box-sizing: border-box;
        width: 608px;
        height: 94px;
        border: none;
        line-height: 94px;
        border-bottom: 2px solid #ddd;
        font-size: 30px;
      }
      .lbj_entry_fo {
        width: 608px;
        height: 94px;
        line-height: 94px;
        display: flex;
        padding: 10px;
        box-sizing: border-box;
        justify-content: space-between;
        > p:nth-child(1) {
          font-size: 24px;
          color: #7d7d7d;
        }
        > p:nth-child(2) {
          font-size: 26px;
          color: #7d7d7d;
        }
      }
      .btn {
        margin-top: 76px;
        width: 608px;
        height: 90px;
        color: #fff;
        font-weight: bold;
        border: none;
        border-radius: 38px;
        border: 1px solid #ff8e3f;
        background-image: linear-gradient(to right, #ff944b, #fc4500);
      }
    }
  }
  .lbj_zhiw {
    width: 100%;
    position: absolute;
    bottom: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      width: 40px;
      height: 40px;
    }
    > span {
      margin-left: 15px;
      font-size: 34px;
      color: #fff;
    }
  }
}
</style>
