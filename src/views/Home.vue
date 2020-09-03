<template>
  <div class="wrap">
    <!-- 轮播 -->
    <van-swipe class="my-swipe lbj_ban" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item) in lbjBanner" :key="item.id">
        <img :src="item.banner_img" alt />
      </van-swipe-item>
    </van-swipe>

    <!-- 三块总结 -->
    <div class="lbj_class">
      <ul class="lbj_class_wai">
        <li @click="enterless">
          <img src="../assets/书.png" alt />
          <span>特色课</span>
        </li>
        <li @click="enterCoach">
          <img src="../assets/信息.png" alt />
          <span>一对一辅导</span>
        </li>
        <li @click="enterXue">
          <img src="../assets/书1.png" alt />
          <span>学习日历</span>
        </li>
      </ul>
    </div>
    <!-- 名师阵容 -->
    <div class="lbj_teacher" v-for="(value) in lbjTeacher" :key="value.id">
      <p>{{value.name}}</p>
      <ul
        class="lbj_teacher_list"
        v-for="(item,inde) in value"
        :key="inde"
        v-show="Array.isArray(value)"
      >
        <li @click="enterDetail(item.teacher_id)">
          <img :src="item.teacher_avatar" alt />
          <div class="lbj_teacher_item">
            <p>{{ item.teacher_name }}</p>
            <p>{{ item.introduction }}</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 精品课程 -->
    <div class="lbj_course" v-for="(value) in lbjCourse" :key="value.id">
      <p>{{ value.name }}</p>
      <ul
        class="lbj_course_list"
        v-for="(item,index) in value"
        :key="index"
        v-show="Array.isArray(value)"
      >
        <li @click="enterJingp(item.id)">
          <p>{{ item.title }}</p>
          <p>共1课时</p>
          <div class="lbj_course_item" v-for="(item,index) in item.teachers_list" :key="index">
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
    </div>

    <!-- 推荐课程 -->
    <div class="lbj_course" v-for="(value) in lbjGroom" :key="value.id">
      <p>{{ value.name }}</p>
      <ul
        class="lbj_course_list"
        v-for="(item,index) in value"
        :key="index"
        v-show="Array.isArray(value)"
      >
        <li @click="enterJingp(item.id)">
          <p>{{ item.title }}</p>
          <p>共1课时</p>
          <div class="lbj_course_item" v-for="(item,index) in item.teachers_list" :key="index">
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
    </div>

    <!-- 明星讲师 -->
    <div class="lbj_star" v-for="(value) in lbjStar" :key="value.id">
      <p>{{ value.name }}</p>
      <ul
        class="lbj_star_list"
        v-for="(item,index) in value"
        :key="index"
        v-show="Array.isArray(value)"
      >
        <li @click="enterDetail(item.teacher_id)">
          <img :src="item.teacher_avatar" alt />
          <div class="lbj_star_item">
            <p>
              {{ item.teacher_name }}
              <span>{{ item.level_name }}</span>
            </p>
            <p>{{ item.introduction }}</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- 邮箱图标
    <div class="lbj_email" @click="addEmail">
      <img src="../assets/email.png" alt />
    </div> -->
  </div>
</template>

<script>
import {
  setBanner,
  setTeacher,
  get_code,
  login,
  lessonList
} from "../http/api";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      // 轮播数据
      lbjBanner: [],
      // 名师阵容数据
      lbjTeacher: {},
      // 精品课程
      lbjCourse: {},
      // 推荐课程
      lbjGroom: {},
      // 明星讲师
      lbjStar: {}
    };
  },
  created() {
    //创建后
    this.getBanner();
    this.getTeacher();
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  methods: {
    //方法集合
    // 获取轮播数据
    getBanner() {
      setBanner().then(res => {
        // console.log(res);
        this.lbjBanner = res.data.data;
      });
    },
    //名师阵容
    getTeacher() {
      setTeacher({}).then(res => {
        // console.log(res);

        this.lbjTeacher = res.data.data[0];
        this.lbjCourse = res.data.data[1];
        this.lbjGroom = res.data.data[2];
        this.lbjStar = res.data.data[3];
        // console.log(this.lbjTeacher);
        // console.log(this.lbjTeacher.channel_info.name);
        // console.log(this.lbjTeacher.list);
      });
    },
    // // 点击进入邮箱
    // addEmail() {
    //   this.$router.push("/emailshuj")
    // },
    // 点特色课跳到课程
    enterless() {
      this.$router.push("/tabbar/course");
    },
    // 点击一对一辅导进入辅导页
    enterCoach() {
      this.$router.push("/coach");
    },
    // 点击学习日历
    enterXue() {
      this.$router.push("/learnril")
    },
    //点击进详情
    enterDetail(id) {
      // alert(id)
      this.$router.push({
        path:`/detail/${id}`,
      });
    },
    // 进入课程详情
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
// 最外层
.wrap {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  box-sizing: border-box;
}
// 轮播
.lbj_ban {
  width: 100%;
  height: 400px;
  position: relative;
}
.lbj_ban img {
  width: 100%;
  height: 400px;
}
// 三大块总结
.lbj_class {
  width: 100%;
  height: 165px;
}
.lbj_class_wai {
  // width: 100%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  left: 37px;
  top: 347px;
  right: 37px;
}
.lbj_class_wai li {
  width: 205px;
  height: 208px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 18px;
  padding: 55px 42px;
  box-sizing: border-box;
  font-size: 24px;
}
.lbj_class_wai img {
  width: 44px;
  height: 44px;
}
.lbj_class_wai span {
  margin-top: 32px;
  color: #8c8c8c;
}
// 名师阵容
.lbj_teacher {
  width: 100%;
  > p {
    font-size: 30px;
    color: #363534;
    margin: 30px 22px;
    border-left: 10px solid #eb6003;
    border-width: 10px;
    padding-left: 15px;
    box-sizing: border-box;
  }
}
.lbj_teacher_list {
  width: 100%;
  display: flex;
  // flex-direction: column;
  background: #f0f2f5;
  > li {
    width: 100%;
    height: 162px;
    margin: 0 22px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 15px;
    padding-left: 30px;
    box-sizing: border-box;

    > img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-right: 24px;
    }
    .lbj_teacher_item {
      width: 560px;
      height: 162px;
      padding-top: 40px;
      box-sizing: border-box;

      > p:nth-child(1) {
        font-size: 28px;
        color: #424242;
      }
      > p:nth-child(2) {
        font-size: 24px;
        color: #a8a8a8;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 22px;
      }
    }
  }
}
// 精品课程
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
// 明星讲师
.lbj_star {
  width: 100%;
  overflow: auto;
  background: #f0f2f5;
  padding: 0 32px;
  box-sizing: border-box;

  > p {
    font-size: 30px;
    color: #363534;
    margin: 0 22px;
    margin-bottom: 20px;
    border-left: 10px solid #eb6003;
    border-width: 10px;
    padding-left: 15px;
    box-sizing: border-box;
  }
  .lbj_star_list {
    width: 100%;
    margin-top: 18px;
    > li {
      width: 100%;
      display: flex;
      background: #fff;
      padding: 40px 30px;
      box-sizing: border-box;
      border-radius: 15px;

      > img {
        width: 80px;
        height: 80px;
      }
      > .lbj_star_item {
        width: 534px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 24px;
        > p:nth-child(1) {
          font-size: 30px;
          color: #171717;
          > span {
            font-size: 22px;
            color: #ea792d;
          }
        }
        > p:nth-child(2) {
          font-size: 22px;
          color: #a9a9a9;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
.lbj_email {
  width: 126px;
  height: 126px;
  background: #007aff;
  position: fixed;
  right: 30px;
  top: 1000px;
  text-align: center;
  line-height: 126px;
  border-radius: 50%;
  > img {
    width: 50px;
    height: 34px;
  }
}
</style>
