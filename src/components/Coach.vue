import { getUserinfo } from '../http/api';
<template>
  <!-- 一对一辅导页 -->
  <div class="lbj_wrap">
    <!-- 头部 -->
    <div class="lbj_head">
      <img @click="dianback" class="lbj_back" src="../assets/back.png" alt />
      <p>一对一辅导</p>
      <img class="lbj_sou" src="../assets/sousuo.png" alt />
    </div>
    <!-- 头部结束 -->
    <!-- 切换不同场景 -->
    <van-dropdown-menu>
      <van-dropdown-item title="选择上课时间" ref="item">
        <div class="lbj_btn">
          <p>重置</p>
          <p>确定</p>
        </div>
      </van-dropdown-item>
      <van-dropdown-item title="选择老师条件" ref="item">
        <!-- 老师类型 -->
        <div class="lbj_one">
          <p>老师类型</p>
          <ul class="lbj_one_list">
            <li v-for="(item) in lbj_xuanz" :key="item.level_id">
              <p>{{ item.level_name }}</p>
            </li>
          </ul>
        </div>
        <!-- 老师类型结束 -->

        <!-- 只看布局 -->
        <div class="lbj_two">
          <p>只看</p>
          <div class="lbj_two_list">
            <p>
              <input type="checkbox" />已关注
            </p>
            <p>
              <input type="checkbox" />上过课的
            </p>
          </div>
        </div>
        <!-- 只看布局结束 -->

        <!-- 性别布局 -->
        <div class="lbj_three">
          <p>性别</p>
          <div class="lbj_three_list">
            <p>男</p>
            <p>女</p>
          </div>
        </div>
        <!-- 性别布局结束 -->
        <!-- 年级布局 -->
        <div class="lbj_four">
          <p>年级</p>
          <ul class="lbj_four_list">
            <li v-for="(item) in lbjNj" :key="item.attr_val_id">
              <p>{{ item.attr_val_name }}</p>
            </li>
          </ul>
        </div>
        <!-- 年级布局结束 -->
        <!-- 学科布局 -->
        <div class="lbj_five">
          <p>学科</p>
          <ul class="lbj_five_list">
            <li v-for="(item) in lbjXk" :key="item.attr_val_id">
              <p>{{ item.attr_val_name }}</p>
            </li>
          </ul>
        </div>
        <!-- 学科布局结束 -->
        <div class="lbj_btn">
          <p>重置</p>
          <p>确定</p>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
    <!-- 切换不同场景结束 -->
    <!-- 数据渲染显示 -->
    <div class="lbj_list">
      <ul class="lbj_item">
        <li v-for="(item) in lbj_mlist" :key="item.id">
          <img :src="item.avatar" alt />
          <div class="lbj_nei">
            <p>{{ item.real_name }}</p>
            <p>
              <span>{{ item.sex | sex }}</span>
              {{ item.teach_age }}年教龄
            </p>
          </div>
          <p>预约</p>
        </li>
      </ul>
    </div>
    <!-- 数据渲染显示结束 -->
  </div>
</template>

<script>
import { getMings, getChoice } from "../http/api";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      //   名师列表
      lbj_mlist: [],
      //   选择老师条件
      lbj_xuanz: [],
    //   年级 xuek
    lbjNj:[],
    // 学科
        lbjXk:[]
    };
  },
  created() {
    //创建后
    this.lbjTeach();
    this.lbjChoice();
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  //   过滤
  filters: {
    sex(val) {
      if (val == 0) {
        return "男";
      } else {
        return "女";
      }
    }
  },
  computed: {}, // 计算属性
  methods: {
    //方法集合
    //    点击返回上一级
    dianback() {
      this.$router.go(-1);
    },
    onConfirm() {
      this.$refs.item.toggle();
    },
    // 获取名师列表
    lbjTeach() {
      getMings({}).then(res => {
        // console.log(res.data.data);
        this.lbj_mlist = res.data.data;
      });
    },
    // 选择老师条件获取数据
    lbjChoice() {
      getChoice({}).then(res => {
        console.log(res);
        this.lbj_xuanz = res.data.data.otoTeacherLevel;
        this.lbjNj = res.data.data.attrList[0].child;
        this.lbjXk = res.data.data.attrList[1].child;
      });
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 86px;
    padding-left: 30px;
    padding-right: 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    > .lbj_back {
      width: 24px;
      height: 30px;
    }
    > p {
      font-size: 36px;
      color: #474747;
    }
    > .lbj_sou {
      width: 42px;
      height: 40px;
    }
  }
  //   头部结束
  /deep/.van-dropdown-menu__bar {
    height: 84px;
  }
  /deep/.van-ellipsis {
    font-size: 30px;
    color: #8c8c8c;
    overflow: inherit;
  }
  /deep/.van-dropdown-menu__title::after {
    width: 18px;
    height: 18px;
    right: -24px;
    top: 0;
  }
  //   名师数据list
  .lbj_list {
    width: 100%;
    background: #f0f2f5;
    .lbj_item {
      width: 100%;
      display: flex;
      background: #f0f2f5;
      justify-content: center;
      flex-wrap: wrap;
      > li {
        width: 705px;
        height: 164px;
        background: #fff;
        border-radius: 10px;
        margin-top: 18px;
        display: flex;
        padding: 0 30px;
        box-sizing: border-box;
        align-items: center;
        position: relative;
        > img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
        > .lbj_nei {
          margin-left: 26px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 90px;
          > p:nth-child(1) {
            font-size: 28px;
            color: #1c1c1c;
          }
          > p:nth-child(2) {
            font-size: 24px;
            color: #adadad;
          }
        }
        > p {
          position: absolute;
          right: 30px;
          width: 138px;
          height: 64px;
          text-align: center;
          line-height: 64px;
          background: #ebeefe;
          color: #eb3d00;
          border-radius: 26px;
        }
      }
    }
  }
  //   名师数据list结束

  // 点击切换后的
  .van-dropdown-item {
    height: 100%;
  }
  /deep/.van-overlay {
    background: #fff;
    // position: relative;
  }
  // 点击切换后的结束
  .lbj_btn {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-around;
    padding: 0;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    > p:nth-child(1) {
      width: 50%;
      height: 90px;
      background: #fff;
      color: #e84e03;
      text-align: center;
      line-height: 90px;
    }
    > p:nth-child(2) {
      width: 50%;
      height: 90px;
      background: #eb6100;
      color: #fff;
      text-align: center;
      line-height: 90px;
    }
  }
  // 老师类型布局
  .lbj_one {
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    > p {
      font-size: 24px;
      color: #1f1f1f;
      margin-top: 30px;
      margin-bottom: 8px;
    }
    .lbj_one_list {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      > li {
        width: 140px;
        height: 66px;
        background: #f5f5f5;
        text-align: center;
        line-height: 66px;
        border-radius: 10px;
        margin-top: 20px;
        color: #6d6d6d;
        font-size: 22px;
      }
      > li:nth-last-child(1) {
        margin-bottom: 26px;
      }
    }
  }
  // 老师类型布局结束
  // 只看布局
  .lbj_two {
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;

    > p {
      font-size: 24px;
      color: #1f1f1f;
      margin-top: 30px;
      margin-bottom: 8px;
    }
    .lbj_two_list {
      width: 100%;
      display: flex;
      align-items: center;
      height: 80px;
      > p:nth-child(1) {
        font-size: 24px;
        color: #8f8f8f;
      }
      > p:nth-child(2) {
        margin-left: 58px;
        font-size: 24px;
        color: #8f8f8f;
      }
    }
  }
  // 只看布局结束

//   性别布局
.lbj_three{
     width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;

    > p {
      font-size: 24px;
      color: #595959;
      margin-top: 30px;
      margin-bottom: 8px;
    }
    .lbj_three_list{
        width: 100%;
        display:flex;
        height: 110px;
        align-items: center;
        border-bottom: 1px solid #eee;
        >p{
            width: 142px;
            height: 66px;
            background: #F5F5F5;
            text-align: center;
            line-height: 66px;
            margin-right: 42px;
            font-size: 26px;
            color: #292929;
            border-radius: 10px;


        }
    }

}
//   性别布局结束

// 年级布局
 .lbj_four {
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    > p {
      font-size: 24px;
      color: #595959;
      margin-top: 30px;
      margin-bottom: 8px;
    }
    .lbj_four_list {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      > li {
        width: 140px;
        height: 66px;
        background: #f5f5f5;
        text-align: center;
        line-height: 66px;
        border-radius: 10px;
        margin-top: 20px;
        color: #6d6d6d;
        font-size: 22px;
      }
      > li:nth-last-child(1) {
        margin-bottom: 26px;
      }
    }
  }
// 年级布局结束
// 学科布局
 .lbj_five {
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    // border-bottom: 1px solid #eee;
    > p {
      font-size: 24px;
      color: #595959;
      margin-top: 30px;
      margin-bottom: 8px;
    }
    .lbj_five_list {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      > li {
        width: 140px;
        height: 66px;
        background: #f5f5f5;
        text-align: center;
        line-height: 66px;
        border-radius: 10px;
        margin-top: 20px;
        color: #6d6d6d;
        font-size: 22px;
      }
      > li:nth-last-child(1) {
        margin-bottom: 26px;
      }
    }
  }
// 学科布局结束
}
</style>
