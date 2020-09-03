<template>
  <!-- 点击习题收藏 -->
  <div class="lbj_wrap">
    <!-- 头部数据 -->
    <div class="lbj_head">
      <img @click="dianBack" class="lbj_tu1" src="../../assets/back.png" alt />
      <p>习题收藏</p>
      <img class="lbj_tu2" src="../../assets/sou.png" alt />
    </div>
    <!-- 头部数据结束 -->
    <!-- 内容部分开始 -->
    <div class="lbj_con">
      <van-dropdown-menu>
        <van-dropdown-item title="题目类型" ref="item">
          <ul class="lbj_zt">
            <li v-for="(item) in lbjshuj" :key="item.id">{{ item.name }}</li>
          </ul>
        </van-dropdown-item>
        <van-dropdown-item title ref>
          <!-- <ul class="lbj_zt">
                <li v-for="(item) in lbjYou" :key="item.id">
                    {{ item.name }}
                </li>
          </ul>-->
        </van-dropdown-item>
      </van-dropdown-menu>
      <!-- 有试题时 -->
      <div class="lbjT">
        <ul class="lbj_gex">
          <li v-for="(item) in lbjscxq" :key="item.id">
            <div class="lbj_wai">
              <!-- <div class="lbj_xzth"> -->
              <span>[单选题]</span>
              <!-- </div> -->
              <p v-html="item.ques_stem"></p>
            </div>
            <p class="lbj_xq" @click="lbjxtXq(item.ques_id)">查看详情</p>
          </li>
        </ul>
      </div>
      <!-- 无试题时 -->
      <!-- <div class="lbj_kong">
              <img src="../../assets/empty.0d284c2e.png" alt="">
              <p>暂无收藏记录</p>
      </div>-->
    </div>
    <!-- 内容部分结束 -->
  </div>
</template>

<script>
import { getXssc } from "../../http/api";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      activeKey: 0,
      lbjshuj: [
        { id: 1, name: "单选" },
        { id: 2, name: "多选" },
        { id: 3, name: "判断" },
        { id: 4, name: "连线" }
      ],
      lbjYou: [
        { id: 1, name: "全部" },
        { id: 2, name: "今天" },
        { id: 3, name: "7天" }
        // { id: 4, name: "已结束" }
      ],
      lbjzt: [
        { id: 2, name: "全部" },
        { id: 3, name: "已做" },
        { id: 4, name: "未做" }
      ],
      lbjscxq: []
      // id:""
    };
  },
  created() {
    //创建后
    this.lbjSco();
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  methods: {
    //方法集合
    lbjDuiy(id) {},
    // 点击返回上一级
    dianBack() {
      this.$router.go(-1);
    },
    // 显示收藏内容
    lbjSco() {
      getXssc({
        page: 1,
        limit: 10,
        type: 3,
        ques_type: 1,
        mix_keyword: ""
      }).then(res => {
        console.log(res);
        this.lbjscxq = res.data.data.list;
      });
    },
    // 点击进入习题详情
    lbjxtXq(id) {
      this.$router.push({
        path: "/lbjxtDetail",
        query: {
          id: id
        }
      });
        console.log(id)

    }
  }
};
</script>

<style scoped lang="scss">
.lbj_wrap {
  width: 100%;
  .lbj_head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #ddd;
    > .lbj_tu1 {
      width: 30px;
      height: 32px;
    }
    > p {
      font-size: 30px;
      color: #595959;
    }
    > .lbj_tu2 {
      width: 40px;
      height: 42px;
    }
  }
  /deep/.van-dropdown-menu__bar {
    height: 80px;
    box-shadow: 0 0.26667vw 1.6vw rgba(0, 0, 0, 0.06);
  }
  /deep/.van-dropdown-menu__title {
    font-size: 30px;
  }
  /deep/.van-ellipsis {
    font-size: 30px;
    color: #8c8c8c;
    overflow: inherit;
  }
  /deep/.van-dropdown-menu__title::after {
    top: 6px;
    border: 6px solid;
    right: -4.53333vw;
    border-color: transparent transparent #dcdee0 #dcdee0;
  }
  //   套卷分类里面的
  /deep/.van-sidebar {
    width: 240px;
    text-align: center;
  }
  /deep/.van-sidebar-item {
    line-height: 58px;
    font-size: 26px;
    color: #595959;
  }
  //   点击显示选择
  .lbj_lic {
    width: 100%;
    display: flex;
    /deep/.van-sidebar {
      width: 192px;
      text-align: center;
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
      }
    }
  }
  .lbj_kong {
    width: 100%;
    text-align: center;
    > img {
      width: 300px;
      height: 300px;
      margin-top: 20px;
    }
    > p {
      font-size: 28px;
      color: #8c8c8c;
      margin-top: 30px;
    }
  }
  .lbj_zt {
    width: 100%;
    > li {
      text-align: center;
      width: 100%;
      height: 80px;
      line-height: 80px;
      font-size: 28px;
      color: #595959;
      border-bottom: 1px solid #eee;
    }
  }
  // 有面试题时，
  .lbjT {
    width: 100%;
    .lbj_gex {
      width: 720px;
      margin: 0 auto;

      > li {
        width: 100%;
        height: 300px;
        padding: 20px 26px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        margin-top: 20px;
        border-radius: 15px;
        background: #fff;
        box-shadow: 1px 0px 0px 0px;

        .lbj_wai {
          display: flex;
          > span {
            font-size: 30px;
            margin-right: 10px;
            color: #26a6fb;
          }
          > p {
            width: 540px;
            line-height: 40px;
            font-size: 30px;
          }
        }
        .lbj_xq {
          font-size: 30px;
          position: absolute;
          right: 60px;
          border: 1px solid #ee741f;
          color: #ee741f;
          padding: 15px 28px;
          box-sizing: border-box;
          border-radius: 30px;
        }
      }
    }
  }
}
</style>
