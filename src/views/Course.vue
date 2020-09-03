<template>
  <!-- 课程页面 -->
  <div class="wrap">
    <!-- 头部数据开始 -->
    <div class="lbj_head">
      <p></p>
      <p>特色课</p>
      <p @click="enterSearch">
        <img src="../assets/sou.png" alt />
      </p>
    </div>
    <!-- 头部数据结束 -->
    <div class="lbj_box">
      <van-dropdown-menu>
        <van-dropdown-item title="分类" ref="lessonlist">
          <div class="lbj_nianj">
            <p>年级</p>
            <ul>
              <li
                v-for="(item,index) in lessonlist"
                :key="index"
                :class="iNow == index ? 'active':''"
                @click="dianToggle(index,item.id)"
              >{{ item.name }}</li>
            </ul>
          </div>
          <div class="Subject">
            <p>学科</p>
            <ul>
              <li
                v-for="(item,index) in lessonlist1"
                :key="index"
                :class="iNows == index ? 'actives':''"
                @click="dianToggle1(index,item.id)"
              >{{ item.name }}</li>
            </ul>
          </div>
          <div class="btnS">
            <van-button type="default" @click="lbj_reset">重置</van-button>
            <van-button type="default" color="#eb6100" @click="lbj_determine">确定</van-button>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="排序" ref="sortlist">
          <div class="lbj_cart_pai">
            <p
              v-for="(item,index) in sortlist"
              :key="index"
                :class="lbj_pai == index ? 'active1':''"
              @click="lbjsort(item.order_by,index)"
            >{{ item.name }}</p>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="筛选" ref="lbj_shai">
          <div class="lbj_cart_shai">
            <ul class="lbj_lieb">
              <li
                v-for="(item,index) in lbj_shai"
                :key="index"
                :class="lbj_xuan == index ? 'active2':''"
                @click="lbjshai(index,{course_type:item.course_type,is_vip:item.is_vip})"
              >
                <p>{{ item.name }}</p>
              </li>
            </ul>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
      <!-- </div> -->
    </div>

    <!-- 分类数据排序结束 -->
    <!-- 分类开始 -->
    <div class="lbj_course">
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
import { lessonList, getKec } from "../http/api";

export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      // 分类数据
      lbj_cart: [],
      //初始下标为零
      iNow: -1,
      iNows:-1,
      
      lbj_pai:-1,    
      lbj_xuan:-1,    
      page: 0,
      limit: 10,
      // 显示隐藏分类名
      isFen: false,
      attr_val_id: "", //年级分类参数
      order_by: "", //排序
      course_type: "", //筛选课程种类
      is_vip: "", //是否是会员
      // 年级
      lbj_nianj: [
        { id: 1, name: "初一" },
        { id: 2, name: "初二" },
        { id: 3, name: "初三" },
        { id: 4, name: "高一" },
        { id: 5, name: "高二" }
      ],
      // 学科
      lbj_xuek: [
        { name: "语文" },
        { name: "数学" },
        { name: "英语" },
        { name: "物理" },
        { name: "化学" }
      ],
      // 筛选
      lbj_shai: [
        { id: 1, name: "全部", course_type: 0, is_vip: 0 },
        { id: 2, name: "大班课", course_type: 2, is_vip: 0 },
        { id: 3, name: "小班课", course_type: 3, is_vip: 0 },
        { id: 4, name: "公开课", course_type: 4, is_vip: 0 },
        { id: 5, name: "点播课", course_type: 5, is_vip: 0 },
        { id: 6, name: "面授课", course_type: 7, is_vip: 0 },
        { id: 7, name: "音频课", course_type: 8, is_vip: 0 },
        { id: 8, name: "系统课", course_type: 9, is_vip: 0 },
        { id: 9, name: "图文课", course_type: 0, is_vip: 1 },
        { id: 10, name: "会员课", course_type: 0, is_vip: 1 }
      ],
      // 排序列表
      sortlist: [
        { name: "综合排序", order_by: 0 },
        { name: "最新", order_by: 1 },
        { name: "最热", order_by: 2 },
        { name: "价格从低到低", order_by: 3 },
        { name: "价格从高到低", order_by: 4 }
      ],
      // 课程列表
      lessonlist: [],
      lessonlist1: [],
      // 特色课
      determinelist: [],
      flag: true //开关
    };
  },
  created() {
    //创建后

    // 获取分类
    this.lbjCart();
    // 获取课程
    this.setlesson();
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      window.addEventListener("scroll", vm.getMore);
    });
  },
  beforeRouteLeave(to, from, next) {
    window.removeEventListener("scroll", this.getMore);
    next();
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  methods: {
    //方法集合
    // 年级分类
    dianToggle(index,id) {
      this.iNow = index;

      this.attr_val_id = id; //保存下标
    },
     dianToggle1(index,id) {
      this.iNows = index;

      this.attr_val_id = id; //保存下标
    },
    // 点击分类年级改变样式
    // BL(index, id) {
    //   console.log(index);
    //   this.iNow = index;
    //   this.attr_val_id = id; //保存下标
    // },
    // 分类数据获取
    lbjCart() {
      lessonList({
        page: this.page,
        limit: this.limit,
        attr_val_id: this.attr_val_id,
        order_by: this.order_by,
        course_type: this.course_type,
        is_vip: this.is_vip
      }).then(res => {
        console.log(res.data.data);
        if (res.data.code == 200) {
          this.determinelist = res.data.data.list;
        }
      });
    },
    // 点击分类
    // dianFen() {
    //   this.isFen = !this.isFen;
    // },
    onConfirm() {
      this.$refs.item.toggle();
    },
    // 重置
    lbj_reset() {
      this.attr_val_id = "";
      this.page = 1;
      this.limit = 10;
      this.lbjCart(
        this.attr_val_id,
        this.order_by,
        this.course_type,
        this.is_vip
      );
      this.$refs.lessonlist.toggle(); //下拉菜单开关
    },
    // 确定
    lbj_determine() {
      this.page = 1;
      this.limit = 10;
      this.lbjCart(
        this.attr_val_id,
        this.order_by,
        this.course_type,
        this.is_vip
      ); //获取数据
      this.$refs.lessonlist.toggle(); //下拉菜单开关
    },
    // 排序
    lbjsort(order_by,index) {
      this.lbj_pai = index;

      this.order_by = order_by; //保存数据
      this.page = 1;
      this.limit = 10;
      this.lbjCart(
        this.attr_val_id,
        this.order_by,
        this.course_type,
        this.is_vip
      ); //获取数据
      this.$refs.sortlist.toggle(); //下拉菜单开关
    },

    // 筛选
    lbjshai(index,{ course_type, is_vip }) {
      this.lbj_xuan=index
      this.course_type = course_type; //保存数据
      this.is_vip = is_vip; //保存数据
      this.page = 1;
      this.limit = 10;
      this.lbjCart(
        this.attr_val_id,
        this.order_by,
        this.course_type,
        this.is_vip
      ); //获取数据
      this.$refs.lbj_shai.toggle(); //下拉菜单开关
    },

    // 获取课程分类
    setlesson() {
      getKec({}).then(res => {
        console.log(res);
        this.lessonlist = res.data.data.attrclassify[0].child;
        this.lessonlist1 = res.data.data.attrclassify[1].child;
        // console.log(this.lessonlist);
        console.log(res.data.data.attrclassify);
      });
    },
    //下拉加载
    getMore() {
      // 判断开关的属性,如果为false 则return false
      if (this.flag == false) {
        return false;
      }
      let clientHeight = document.documentElement.clientHeight; //获取html的可视高度
      let scrollTop = document.documentElement.scrollTop; //获取元素的滚动高度
      let scrollHeight = document.documentElement.scrollHeight; //获取文档的实际高度
      // console.log(clientHeight, scrollTop, scrollHeight);
      if (clientHeight + scrollTop + 170 > scrollHeight) {
        this.flag = false;
        lessonList({
          page: this.page,
          limit: this.limit
        }).then(res => {
          if (res.data.code == 200) {
            this.determinelist.push(...res.data.data.list);
            this.page++;
            this.flag = true;
            console.log(this.determinelist);
          }
        });
      }
    },
     // 进入课程详情
    enterJingp(id){
      // console.log(item)
      this.$router.push({
        path:`/boutiqueDetail/${id}`
      })
    },
    // 点击跳转至搜索
    enterSearch(){
      this.$router.push("/lbjsearch")
    }
  }
};
</script>

<style scoped lang="scss">
/deep/ .van-dropdown-menu__title,
.van-ellipsis {
  height: 100px;
  line-height: 100px;
  font-size: 30px;
  color: #707274;
  overflow: inherit;
}
.wrap {
  width: 100%;
  // position: relative;
  // 头部
  .lbj_head {
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
    }
    p {
      font-size: 32px;
      color: #a19292;
    }
  }
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
  // 点击显示隐藏盒子
  .lbj_box {
    width: 100%;
    display: flex;
    height: 92px;
    align-items: center;
    justify-content: space-around;
    > .van-dropdown-item {
      height: 92px;
      line-height: 92px;
    }
    .van-ellipsis {
      font-size: 28px;
      color: #3b3b3b;
    }
    .van-dropdown-menu {
      width: 100%;
      border: none;
    }
    .van-ellipsis {
      // overflow: hidden;
    }
    .van-dropdown-menu__title::after {
      width: 20px;
      height: 20px;
    }
    // 点击分类里的内容
    .lbj_nianj {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    height: 200px;
    p {
      font-size: 28px;
      margin-bottom: 10px;
      color: #696969;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin: 0 17px 17px 0;
        font-size: 26px;
        width: 160px;
        color: #3a3a3a;
        text-align: center;
        line-height: 60px;
        height: 60px;
        border-radius: 6px;
        background-color: #f5f5f5;
      }
      .active {
        color: #EB6100;
      }
    }
  }
  .Subject {
    width: 100%;
    padding: 20px;
    height: 200px;
    p {
      font-size: 28px;
      margin-bottom: 10px;
      color: #696969;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin: 0 17px 17px 0;
        font-size: 26px;
        width: 160px;
        text-align: center;
        color: #3a3a3a;
        line-height: 60px;
        height: 60px;
        border-radius: 10px;
        background-color: #f5f5f5;
      }
      .actives {
        color: #EB6100;
      }
    }
  }
  .btnS {
    width: 100%;
    padding: 20px;
    height: 100px;
    display: flex;
    justify-content: space-around;
    .van-button--default {
      width: 300px;
      height: 80px;
      border-radius: 14px;
    }
  }

    // 排序
    .lbj_cart_pai {
      width: 100%;
      background: #fff;
      border-top: 1px solid #dbdada;
      > p {
        width: 100%;
        border-bottom: 1px solid #f9f9f9;
        text-align: center;
        height: 98px;
        line-height: 98px;
        font-size: 32px;
        color: #414141;
      }
       .active1 {
        color: #EB6100;
      }
    }
    // 筛选
    .lbj_cart_shai {
      width: 100%;
      .lbj_lieb {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 0 20px;
        box-sizing: border-box;
        margin-top: 26px;
        margin-bottom: 35px;
        > li {
          // padding: 18px 26px;
          // box-sizing: border-box;
          width: 138px;
          height: 64px;
          background: #f5f5f5;
          font-size: 26px;
          color: #323232;
          margin: 11px 0;
          margin-right: 46px;
          text-align: center;
          line-height: 64px;
          border-radius: 10px;
        }
         .active2 {
        color: #EB6100;
      }
        > li:nth-child(4) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
