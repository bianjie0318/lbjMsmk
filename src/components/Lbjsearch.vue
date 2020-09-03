<template>
  <!-- 搜索页面 -->
  <div class="lbj_wrap">
    <!-- 头部页面 -->
    <div class="lbj_head">
      <img @click="dianBack" src="../assets/back.png" alt />
      <input @click="lbjSou" type="text" placeholder="请输入内容" v-model="keywords" />
      <p v-if="show" @click="dianBack">取消</p>
      <p v-else @click="lbjSous">搜索</p>
    </div>
    <!-- 头部页面结束 -->
    <!-- 内容部分 -->
    <div class="lbj_con" v-if="showHis">
      <div class="lbj_item">
        <p>历史搜索</p>
        <p>
          <img @click="delHis" src="../assets/垃圾桶.png" alt />
        </p>
      </div>
      <ul class="lbj_list">
        <li v-for="(item,index) in historyList" :key="index" @click="jiakeywords(item,index)">{{ item }}</li>
      </ul>
    </div>
    <!-- 内容部分结束 -->

    <!-- 分类开始 -->
    <div class="lbj_course" v-else>
      <ul class="lbj_course_list" v-for="(item,index) in determinelist" :key="index">
        <li @click="enterJingp(item.id)">
          <p>{{ item.title }}</p>
          <p>
            <img src="../assets/clock.png" alt />
            <span
              v-if="item.price==0"
            >{{ item.start_play_date | dateTime }}~{{ item.end_play_date | dateTime }}</span>
            |
            <span>共{{ item.total_periods }}课时</span>
          </p>
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
    <!-- 分类结束 -->
  </div>
</template>

<script>
import { lessonList } from "../http/api";

export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      show: true,
      determinelist: [],
      showHis:true,
      page: 0,
      limit: 10,
      keywords: "",
      course_type: "",
      lbjxinSou: [],
      lbjqie: false,
      historyList:JSON.parse(localStorage.getItem("historyList"))||[]
    };
  },
  created() {
    //创建后
    // this.lbjCart();
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
    // 点击input搜索的
    lbjSou() {
      this.show = !this.show;
      this.showHis=!this.showHis
      if(this.keywords==''){

      }
    },
    // 分类数据获取
    lbjCart() {},
    // 点击搜索
    lbjSous() {
      lessonList({
        page: this.page,
        limit: this.limit,
        course_type: this.course_type,
        keywords: this.keywords
      }).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          if (res.data.data.list.length > 0) {
            this.determinelist = res.data.data.list;
          }else{
            //   this.lbjqie = true
          }
        }
      });
      this.historyList.unshift(this.keywords);
      if (this.historyList.length > 5) {
        this.historyList.pop(this.historyList.length - 1);
      }
      console.log(this.keywords);
    },
    // 点击删除按钮删除历史
    delHis(){
        localStorage.removeItem("historyList")
        this.historyList=[]
    },
    // 点击历史记录继续搜索
    jiakeywords(item,index){
        this.keywords = item;
        this.historyList.splice(index,1);
        this.show = !this.show
    },
    // 点击取消返回上一级
    dianBack(){
        this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss" scoped>
.lbj_wrap {
  width: 100%;
  // 头部样式
  .lbj_head {
    width: 100%;
    height: 90px;
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    > img {
      width: 30px;
      height: 32px;
    }
    > input {
      width: 544px;
      height: 64px;
      border-radius: 25px;
      background: #e4e7ed;
      border: none;
      padding-left: 54px;
      box-sizing: border-box;
      &::placeholder {
        color: #555553;
        font-size: 30px;
      }
    }
    > p {
      font-size: 28px;
      color: #555553;
    }
  }
  // 头部样式结束
  //   内容部分样式
  .lbj_con {
    width: 100%;
    .lbj_item {
      width: 100%;
      padding: 0 36px;
      box-sizing: border-box;
      display: flex;
      height: 136px;
      align-items: center;
      justify-content: space-between;
      > p:nth-child(1) {
        font-size: 30px;
        font-weight: bold;
      }
      > p:nth-child(2) {
        > img {
          width: 40px;
          height: 40px;
        }
      }
    }
    .lbj_list {
      width: 100%;
      padding: 0 36px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      > li {
        background: #f7f7f7;
        border-radius: 25px;
        padding: 15px;
        margin-right: 15px;
      }
    }
  }
  //   内容部分样式结束

  // 分类列表
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
    > li:nth-child(1) {
      margin-top: 28px;
    }

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
        > img {
          width: 28px;
          height: 28px;
        }
      }
    }
  }

  .lbj_course_item {
    width: 100%;
    display: flex;

    margin-top: 57px;
    > img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      margin-bottom: 38px;
    }
    > p {
      font-size: 24px;
      color: #5d2424;
      margin-left: 18px;
      box-sizing: border-box;
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
}
</style>
