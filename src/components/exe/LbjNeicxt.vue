<template>
  <!-- 内层习题 -->
  <div class="lbj_wrap">
    <!-- 头部内容 -->
    <div class="lbj_head">
      <img @click="dianHui" src="../../assets/back.png" alt />
      <p>{{ name }}</p>
      <p></p>
    </div>
    <!-- 头部内容结束 -->
    <!-- 内容 -->
    <div class="lbj_con">
      <div class="lbj_item" @click="dianBack">
        <img src="../../assets/题库.png" alt />
        <p>题库选择</p>
      </div>
      <img @click="dianShezhi" src="../../assets/shez.png" alt />
    </div>
    <!-- 设置里的 -->
    <div class="lbj_she" v-if="show">
      <!-- 自定义图标 -->
      <van-popup
        v-model="show"
        closeable
        close-icon="close"
        position="bottom"
        :style="{ height: '30%' }"
      >
        <p class="lbj_zi">专点专练设置</p>
        <p class="lbj_zi1">设置考点专练出题数量</p>
        <div class="lbj_xuanz">
          <div class="lbj_xuanli">
            <input type="radio" name="xuan" />
            <p>随机15道</p>
          </div>
          <div class="lbj_xuanli">
            <input type="radio" name="xuan" />
            <p>按顺序做题</p>
          </div>
        </div>
        <div class="lbj_btn">确定</div>
      </van-popup>
    </div>
    <!-- 内容结束 -->
    <!-- 内容里的练习题部分 -->
    <div class="lbj_xit">
      <ul class="lbj_lieb">
        <li v-for="(item) in lbjxitshuj" :key="item.id">
          <img class="lbj_tu1" src="../../assets/shanco.png" alt />
          <div class="lbj_list">
            <div class="lbj_myx">
              <p>{{ item.name }}</p>
              <p>{{ item.finished_amount }}/{{ item.question_amount }}</p>
            </div>
            <van-progress color="#f2826a" stroke-width="6px" track-color="#F5F5F5" :percentage="0" />
          </div>
          <img class="lbj_tu2" @click="enterGelt(item.id,item.parent_id)" src="../../assets/右箭头.png" alt />
        </li>
      </ul>
    </div>

    <!-- 内容里的练习题部分结束 -->
  </div>
</template>

<script>
import { getTim, getYouczl } from "../../http/api";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      show: false,
      id: "",
      classify_id: "",
      name: "",
      lbjxitshuj: [],
      isShow: false,
      parent_id:""
    };
  },
  created() {
    //创建后
    this.id = this.$route.query.classify_id;
    this.classify_id = this.$route.query.id;
    this.name = this.$route.query.name;
    console.log(this.id);
    console.log(this.classify_id);
    console.log(this.name);
    this.lbjXits();
    // this.lbjHead();
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  methods: {
    //方法集合
    // 点击题库选择返回上一级
    dianBack() {
      this.$router.go(-1);
    },
    showPopup() {
      this.show = true;
    },
    // 点击返回箭头回到练习页面
    dianHui() {
      this.$router.push("/tabbar/exercase");
    },
    // 接收到的数据信息
    lbjXits() {
      getTim({
        params: {
          id: this.id,
          classify_id: this.classify_id
          //   name:this.name
        }
      }).then(res => {
        console.log(res);
        this.lbjxitshuj = res.data.data;
        // console.log(id);
        // console.log(classify_id);
      });
    },
    // 点击出现设置内容
    dianShezhi() {
      this.show = true;
    },
    // 点击右箭头进入各种题目页面
    enterGelt(id,parent_id) {
      this.$router.push({
        path: "/lbjglt",
        query: {
          id: id,
          parent_id:parent_id
        }
      });
        console.log(id)
        console.log(parent_id)
    }
  }
};
</script>

<style scoped lang="scss">
.lbj_wrap {
  width: 100%;
  background: #f0f2f5;
  //   头部样式
  .lbj_head {
    width: 100%;
    height: 80px;
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    > img {
      width: 36px;
      height: 32px;
    }
    > p {
      font-size: 34px;
      color: #595959;
    }
  }
  // 头部样式结束
  // 内容部分
  .lbj_con {
    width: 100%;
    padding: 0 26px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin-top: 24px;
    background: #fff;
    .lbj_item {
      display: flex;

      > img {
        width: 32px;
        height: 32px;
      }
      > p {
        font-size: 34px;
        color: #262626;
        margin-left: 20px;
      }
    }
    > img {
      width: 30px;
      height: 32px;
    }
  }
  // 内容部分结束
  // 习题部分
  .lbj_xit {
    width: 100%;
    background: #fff;
    .lbj_lieb {
      width: 100%;
      height: 100%;
      background: #fff;
      padding-top: 15px;
      box-sizing: border-box;
      > li {
        width: 680px;
        border: 1px solid #e1e1e1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 120px;
        padding: 0 20px;
        box-sizing: border-box;
        margin: 0 auto;
        border-radius: 10px;
        flex-wrap: wrap;
        margin-top: 30px;
        .lbj_tu1 {
          width: 40px;
          height: 40px;
        }
        .lbj_myx {
          width: 500px;
          display: flex;
          justify-content: space-between;
          height: 60px;
          > p:nth-child(1) {
            font-size: 26px;
            color: #595959;
          }
          > p:nth-child(2) {
            font-size: 26px;
            color: #8c8c8c;
          }
        }
        .lbj_tu2 {
          width: 30px;
          height: 32px;
        }
      }
    }
  }
  /deep/.van-popup {
    border-radius: 25px 25px 0 0;
  }
  .lbj_zi {
    text-align: center;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
  }
  /deep/.van-popup__close-icon {
    font-size: 40px;
  }
  .lbj_zi1 {
    font-size: 26px;
    color: #949494;
    margin-top: 50px;
    padding: 0 30px;
    box-sizing: border-box;
  }
  .lbj_xuanz {
    width: 100%;
    padding: 0 26px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    margin-top: 30px;
    .lbj_xuanli {
      width: 50%;
      display: flex;
      font-size: 30px;
      color: #595959;
    }
  }
  .lbj_btn {
    width: 100%;
    height: 98px;
    background: #eb6100;
    text-align: center;
    line-height: 98px;
    font-size: 32px;
    color: #fff;
    position: absolute;
    bottom: 0;
  }
}
</style>
