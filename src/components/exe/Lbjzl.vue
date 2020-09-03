<template>
  <!-- 点击专点练习进去题库选择 -->
  <div class="lbj_wrap">
    <!-- 头部样式布局开始 -->
    <div class="lbj_head">
      <img @click="dianBack" src="../../assets/back.png" alt />
      <p>题库选择</p>
      <p></p>
    </div>
    <div class="lbj_sou">
      <input type="text" placeholder="请输入题库名称关键字" />
      <img @click="enterSsy" src="../../assets/sous1.png" alt />
    </div>
    <!-- 头部样式布局结束 -->
    <!-- 内容部分开始 -->
    <div class="lbj_con">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="(item) in lbjzdlx"
          :key="item.id"
          @click="lbjDuiy(item.id)"
          :title="item.name"
        />
      </van-sidebar>
      <div class="lbj_wai">
        <div class="lbj_he" v-for="(item) in lbjxb" :key="item.id">
          <p class="lbj_zi">{{ item.name }}</p>
          <!-- <p v-for="(value) in item.bank" :key="value.id">{{ value.name }}</p> -->
          <ul class="lbj_list">
            <li
              v-for="(value) in item.bank"
              @click="enterLicnr(value.classify_id,value.id,value.name)"
              :key="value.id"
            >{{ value.name }}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 内容部分结束 -->
  </div>
</template>

<script>
import { getZhuanl, getYouczl } from "../../http/api";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      activeKey: 0,
      //   专点练习数据获取
      lbjzdlx: [],
      //   右侧数据
      lbjxb: [],
      id: "",
      name:""
    };
  },
  created() {
    //创建后
    this.lbjExercise();
    // this.lbjYouc();
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  methods: {
    //方法集合
    // 点击返回上一级
    dianBack() {
      this.$router.go(-1);
    },
    // 专点练习数据获取
    lbjExercise() {
      getZhuanl({}).then(res => {
        // console.log(res);
        this.lbjzdlx = res.data.data;
      });
    },
    // 右侧的对应数据
    lbjDuiy(id) {
      getYouczl(id).then(res => {
        console.log(res);
        this.lbjxb = res.data.data;
        this.id = id;
        console.log(this.id);
        // this.lbjtitle = res.data.data[0].bank[0].name
      });
    },
    // 点击进入搜索页面
    enterSsy() {
      this.$router.push("/lbjS");
    },
    // 点击进入里层习题
    enterLicnr(id, classify_id,name) {
      this.$router.push({
        path: "/lbjNeicxt",
        query: {
          id:id,
          classify_id:classify_id,
          name:name
        }
      });
      console.log(id, classify_id,name);
    }
  }
};
</script>

<style scoped lang="scss">
.lbj_wrap {
  width: 100%;
  // 头部样式布局
  .lbj_head {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    > img {
      width: 30px;
      height: 32px;
    }
    > p {
      font-size: 34px;
      color: #595959;
    }
  }
  // 搜索
  .lbj_sou {
    width: 100%;
    text-align: center;
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    > input {
      width: 660px;
      height: 100px;
      margin: 0 auto;
      margin-top: 20px;
      border-radius: 35px;
      border: none;
      background: #f7f8fa;
      position: relative;
      padding-left: 40px;
      &::placeholder {
        font-size: 24px;
      }
    }
    > img {
      width: 40px;
      height: 40px;
      position: absolute;
      right: 60px;
      top: 130px;
    }
  }
  // 头部样式布局结束
  //   内容部分样式
  .lbj_con {
    width: 100%;
    // position: relative;
    display: flex;
    /deep/.van-sidebar {
      width: 192px;
      text-align: center;
      //   position: absolute;
      /deep/.van-sidebar-item {
        // width: 140px;
        font-size: 30px;
        // line-height: 50px;
        line-height: 84px;
      }
    }
    .lbj_wai {
      width: 550px;
      display: flex;
      flex-direction: column;
      .lbj_he {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 0 24px;
        box-sizing: border-box;
        > p:nth-child(1) {
          font-size: 26px;
          color: #595959;
          margin-top: 58px;
        }
        .lbj_list {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          margin-top: 58px;
          > li {
            background: #f5f5f5;

            margin-right: 20px;
            font-size: 26px;
            color: #595959;
            padding: 16px 20px;
            box-sizing: border-box;
          }
        }
      }
    }
  }

  //   内容部分样式结束
}
</style>
