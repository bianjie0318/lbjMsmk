<template>
  <!-- 详情页 -->
  <div class="wrap">
    <!-- 头部外层 -->
    <div class="lbj_tou">
      <img @click="dianBack" src="../assets/左箭头.png" alt />
      <p>讲师详情</p>
      <p></p>
    </div>
    <!-- 头部外层结束 -->

    <!-- 头部信息 -->
    <div class="lbj_head">
      <div class="lbj_head_nei">
        <img :src="lbj_shuj.avatar" alt />
        <div class="lbj_wenz">
          <p>
            <span>{{ lbj_shuj.teacher_name }}</span>
            <span>{{ lbj_shuj.level_name }}</span>
          </p>
          <p>
            <span>{{ lbj_shuj.sex |sex }}</span>
            <span>{{ lbj_shuj.teach_age }}年教龄</span>
          </p>
        </div>
        <!-- <p @click="enterGz" v-if="flag==2">关注</p> -->
        <p @click="enterGz" >{{ flag }}</p>
        <!-- 优势 -->
      </div>
      <div class="lbj_advantage">
        <ul class="lbj_yous">
          <li v-for="(item) in lbj_shuj.tag_content" :key="item.id">{{ item }}</li>
        </ul>
      </div>
    </div>
    <!-- 头部信息结束 -->
    <!-- 内容部分 -->
    <div class="lbj_con">
      <div class="lbj_neir">
        <van-tabs v-model="active">
          <van-tab title="讲师介绍">
            <!--第一条 -->
            <div class="lbj_li" v-for="(item) in lbj_detail" :key="item.id">
              <p>{{ item.attr_name }}</p>
              <p v-for="(value) in item.attr_value" :key="value.id">{{ value.attr_value_name }}</p>
            </div>
            <!--第三条 -->
            <div class="lbj_li1">
              <p>老师简介</p>
              <p>{{ lbj_detailjianj }}</p>
            </div>
            <!--第三条结束 -->
            <div class="lbj_btn" @click="enterYuy">
              <button>立即预约</button>
            </div>
          </van-tab>
          <van-tab title="主讲课程">
            <div class="lbj_course">
              <ul class="lbj_course_list" v-for="(item,index) in lbj_zhuj" :key="index">
                <li @click="enterJingp(item.id)">
                  <p>{{ item.title }}</p>
                  <p>共1课时</p>
                  <div
                    class="lbj_course_item"
                    v-for="(item,index) in item.teachers_list"
                    :key="index"
                  >
                    <img :src="item.teacher_avatar" alt />
                    <p>{{ item.teacher_name }}</p>
                  </div>
                  <p class="lbj_course_nei">
                    <span>{{ item.sales_num }}人已报名</span>
                    <span :class="item.price==0?'':'active'">
                      <img
                        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                        alt
                        v-if="item.price==0?false:true"
                        class="lbj_money"
                      />
                      &nbsp;{{item.price==0?'免费':`${item.price/100}.00`}}
                    </span>
                  </p>
                </li>
              </ul>
              <div class="lbj_btn">
                <button>立即预约</button>
              </div>
            </div>
          </van-tab>
          <van-tab title="学员评价">
            <div class="lbj_tu_wai">
              <!-- 学员评价内容 -->
              <div class="lbj_xuey_zi" v-if="lbj_pj.length>0">
                <ul class="lbj_list">
                  <li v-for="(item) in lbj_pj" :key="item.id">{{ item.title }}({{ item.count }})</li>
                </ul>
                <p class="lbj_jiantqh">
                  <img @click="dianShow" v-if="lbjJtShow" src="../assets/下箭头.png" alt />
                  <img @click="dianShow" v-else src="../assets/上箭头.png" alt />
                </p>

                <div class="lbj_pjneir">
                  <div class="lbj_pjlist" v-for="(item) in lbj_pj1" :key="item.id">
                    <img :src="item.avatar" alt />
                    <div class="lbj_pjitem">
                      <p class="lbj_pjxing">
                        <van-rate
                          v-model="item.grade"
                          :size="22"
                          color="#EA7A30"
                          void-icon="star"
                          void-color="#eee"
                        />
                      </p>
                      <ul class="lbjpj_shuj">
                        <li v-for="(item) in item.tag_content.split(',')" :key="item.id">{{ item }}</li>
                      </ul>
                      <p class="lbj_py">{{ item.content }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 学员评价内容结束 -->

              <!-- 暂无评论 -->
              <div class="lbj_tu" v-else>
                <img src="../assets/empty.0d284c2e.png" alt />
                <p>暂无评论</p>
              </div>
              <div class="lbj_btn">
                <button>立即预约</button>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <!-- 内容部分结束 -->
  </div>
</template>

<script>
import {
  getDetail,
  getDetailNei,
  getDetailZhuj,
  jsDetail,
  getDetailG,
  getDetailQg
} from "../http/api";

export default {
  // props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      // 模拟数据
      //   名师
      lbj_shuj: [],
      active: 0,
      //   详情
      lbj_detail: [],
      lbj_detailjianj: [],

      //   主讲
      lbj_zhuj: [],

      limit: 10,
      page: 1,
      teacher_id: "",
      lbj_pj: [],
      lbj_pj1: [],

      lbjJtShow: true,
      flag: "关注",
      id:""
    };
  },
  created() {
    // console.log(this.$route.params)

    // 创建后
    this.lbjMing();
    this.lbjMingDetail();
    this.lbjMingDetailZ();
    this.jsDetaPingj();
    // 关注
    // this.findGuanz();
    // console.log(111)
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
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性

  methods: {
    //方法集合
    // 获取名师列表
    lbjMing() {
      getDetail(this.$route.params.id).then(res => {
        // console.log(res);
        this.lbj_shuj = res.data.data.teacher;
      });
    },
    // // 详情
    lbjMingDetail() {
      getDetailNei(this.$route.params.id).then(res => {
        // console.log(res);
        this.lbj_detail = res.data.data.attr.splice(-2);
        this.lbj_detailjianj = res.data.data.intro;
      });
    },
    // // 主讲内容
    lbjMingDetailZ() {
      getDetailZhuj({
        limit: this.limit,
        page: this.page,
        teacher_id: this.$route.params.id
      }).then(res => {
        // console.log(res);
        this.lbj_zhuj = res.data.data.list;
      });
    },
    dianBack() {
      this.$router.go(-1);
    },

    // 讲师详情学员评价
    jsDetaPingj() {
      jsDetail({
        limit: this.limit,
        page: this.page,
        teacher_id: this.$route.params.id
      }).then(res => {
        // console.log(res);
        this.lbj_pj = res.data.data.tag;
        this.lbj_pj1 = res.data.data.comment.list;
        // console.log(this.lbj_pj1);
      });
    },
    // 点击箭头隐藏显示
    dianShow() {
      this.lbjJtShow = !this.lbjJtShow;
    },
    // 点击学员评价让内容切换
    dianLearn() {
      this.lbjJtShow = !this.lbjJtShow;
    },
    // 点击进入课程详情
    // enterKcDetail(){
    //   this.$router.push("/boutiqueDetil")
    // },
    // 点击进入预约课程
    enterYuy() {
      console.log(this.lbj_shuj)
      this.$router.push({
        path:`/detailYuy/${this.lbj_shuj.id}`,
        
      });
        // console.log(id)

    },
    // 点击关注
    enterGz() {
      getDetailG(
     this.$route.params.id
      ).then(res => {

        if (res.data.data.flag == "2") {
          this.flag = "关注";
        } else {
          this.flag = "已关注";
        }
      });
    },
     enterJingp(id){
      // console.log(item)
      this.$router.push({
        path:`/boutiqueDetail/${id}`
      })
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
      height: 280px;
      margin: 0 auto;
      background: #fff;
      border-radius: 18px;
      padding: 0 30px;
      padding-top: 60px;

      box-sizing: border-box;
      display: flex;
      // align-items: center;
      position: relative;
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
        width: 128px;
        height: 58px;
        background: #ebeefe;
        color: #eb4501;
        text-align: center;
        line-height: 58px;
        border-radius: 40px;
        position: absolute;
        right: 32px;
        font-size: 28px;
      }
      .lbj_Yig {
        color: #b7b7b7;
        font-size: 28px;
        background: #fff;
      }
    }
    .lbj_advantage {
      width: 100%;
      height: 100px;
      position: absolute;
      top: 200px;
      padding: 0 30px;
      box-sizing: border-box;
      .lbj_yous {
        width: 100%;
        display: flex;
        justify-content: space-around;
        > li {
          width: 146px;
          height: 48px;
          background: #ffe4d3;
          color: #e66712;
          font-size: 24px;
          border-radius: 30px;
          text-align: center;
          line-height: 48px;
        }
      }
    }
  }
  //   头部信息结束
  // 内容部分
  .lbj_con {
    width: 100%;
    height: 100%;
    background: #f0f2f5;
    padding-top: 190px;
    box-sizing: border-box;
    .lbj_neir {
      width: 100%;
      .lbj_li {
        width: 100%;
        display: flex;
        height: 106px;
        align-items: center;
        padding: 0 40px;
        box-sizing: border-box;
        background: #fff;
        > p:nth-child(1) {
          font-size: 28px;
          color: #727272;
        }
        > p:nth-child(2) {
          font-size: 28px;
          color: #727272;
          margin-left: 40px;
        }
      }
      .lbj_li1 {
        width: 100%;
        display: flex;
        // height: 106px;
        // align-items: center;
        padding: 0 40px;
        box-sizing: border-box;
        background: #fff;
        > p:nth-child(1) {
          font-size: 28px;
          color: #727272;
        }
        > p:nth-child(2) {
          font-size: 28px;
          width: 510px;
          color: #727272;
          margin-left: 40px;
          line-height: 46px;
        }
      }
      .lbj_btn {
        height: 80px;
        width: 100%;
        margin-top: 160px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        > button {
          width: 100%;
          text-align: center;
          line-height: 80px;
          color: #fff;
          font-weight: bold;
          background: #eb6100;
          border: none;
        }
      }
    }
  }

  .lbj_course {
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #f0f2f5;
    padding: 0 32px;
    box-sizing: border-box;

    > p {
      font-size: 30px;
      color: #363534;
      margin: 20px 22px;
      margin-top: 30px;
      margin-bottom: 20px;
      border-left: 10px solid #eb6003;
      border-width: 10px;
      padding-left: 15px;
      box-sizing: border-box;
    }
  }

  .lbj_course_list {
    width: 100%;
    background: #f0f2f5;
    > li {
      // width: 687px;
      height: 406px;
      background: #fff;
      margin-bottom: 28px;
      padding: 33px 28px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      //  justify-content: space-around;
      border-radius: 15px;
      > p:nth-child(1) {
        font-size: 32px;
        color: #0b0b0b;
        line-height: 48px;
      }
      > p:nth-child(2) {
        font-size: 24px;
        color: #4e4e4e;
        margin-top: 18px;
      }
    }
  }
  .lbj_course_item {
    width: 100%;
    display: flex;
    // align-items: center;
    margin-top: 57px;
    > img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      margin-bottom: 38px;
    }
    > p {
      font-size: 24px;
      color: #6b6b6b;
      margin-left: 18px;
      margin-top: 16px;
    }
  }
  .lbj_course_nei {
    width: 100%;
    padding-top: 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #eee;

    > span:nth-child(1) {
      font-size: 22px;
      color: #858585;
    }
    > span:nth-child(2) {
      font-size: 28px;
      color: #2b9709;
      .lbj_money {
        width: 32px;
        height: 32px;
        border-radius: 0px;
      }
    }
  }
  .lbj_tu_wai {
    width: 100%;
    height: 100%;
    background: #f0f2f5;
    position: relative;
    .lbj_xuey_zi {
      width: 100%;
      padding: 0 42px;
      box-sizing: border-box;
      background: #fff;
      .lbj_list {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding-top: 10px;
        box-sizing: border-box;
        > li {
          width: 178px;
          height: 50px;
          border: 1px solid #f3b389;
          text-align: center;
          line-height: 50px;
          color: #e14000;
          font-size: 24px;
          margin-right: 14px;
          margin-top: 18px;
          border-radius: 10px;
        }
      }
      .lbj_jiantqh {
        position: absolute;
        right: 16px;
        top: 28px;
        > img {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #dcdcdc;
        }
      }
      // 下面评价内容
      .lbj_pjneir {
        width: 100%;
        margin-top: 45px;
        .lbj_pjlist {
          width: 100%;
          display: flex;
          margin-left: 18px;
          > img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }

          .lbj_pjitem {
            width: 570px;
            .lbjpj_shuj {
              width: 570px;
              margin-left: 18px;
              display: flex;
              // flex-direction: column;
              flex-wrap: wrap;
              > li {
                width: 160px;
                height: 45px;
                background: #f5f5f5;
                color: #7a7a7a;
                text-align: center;
                line-height: 45px;
                display: flex;
                justify-content: space-around;
                margin-right: 20px;
                margin-top: 18px;
                font-size: 24px;
                border-radius: 6px;
              }
            }
            .lbj_py {
              margin-left: 18px;
              font-size: 24px;
              color: #777777;
              margin-top: 28px;
            }
            .lbj_pjxing {
              width: 570px;
              margin-left: 18px;
            }
          }
        }
      }
    }

    .lbj_tu {
      width: 100%;
      text-align: center;
      background: #fff;
      margin-bottom: 10px;
      > img {
        width: 312px;
        height: 314px;
      }
      > p {
        font-size: 30px;
        color: #858585;
        margin-top: 34px;
      }
    }
  }

  /deep/.van-tab__text,
  .van-tab__text--ellipsis {
    // height: 100px;
    line-height: 100px;
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
    height: 100px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  /deep/.van-tabs__line {
    background-color: #f5b384;
  }
  // 内容部分结束
}
</style>
