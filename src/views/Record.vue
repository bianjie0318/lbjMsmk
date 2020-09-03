<template>
<!-- 约课记录 -->
  <div class="wrap">
    <div class="lbj_head">约课记录</div>
    <div class="lbj_record">
      <van-tabs v-model="active">
        <van-tab title="待上课">
          <div class="lbj_con">
            <img src="../assets/nodetu.png" alt />
          </div>
          <p class="lbj_node">还没有待上课记录哦</p>
          <p class="lbj_btn">
            <button>立即约课</button>
          </p>
        </van-tab>
        <van-tab title="已上课">
          <div class="lbj_con">
            <img src="../assets/nodetu.png" alt />
          </div>
          <p class="lbj_node">还没有上课记录哦</p>
          <p class="lbj_btn">
            <button>立即约课</button>
          </p>
        </van-tab>
        <van-tab title="已取消">
          <div class="lbj_con">
            <img src="../assets/nodetu.png" alt />
          </div>
          <p class="lbj_node">还没有取消上课记录哦</p>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      active: 0
    };
  },
  created() {
    //创建后
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  methods: {
    //方法集合
  }
};
</script>

<style scoped lang="scss">

.wrap {
  width: 100%;
  overflow-x:hidden;
  .lbj_head {
    width: 100%;
    height: 90px;
    line-height: 90px;
    text-align: center;
    color: #353535;
  }
  .lbj_record {
    width: 100%;
    background: #f0f2f5;
    position: absolute;
    left: 0;
    right: 0;
    top: 100px;
    bottom: 101px;
    .lbj_con {
      width: 100%;
      height: 100%;
      text-align: center;
      margin-top: 200px;
      background: #f0f2f5;

      > img {
        width: 356px;
        height: 262px;
      }
    }
    .lbj_node {
      font-size: 30px;
      color: #acabab;
      text-align: center;
      margin-top: 20px;
    }
    .lbj_btn {
      width: 100%;
      text-align: center;
      margin-top: 58px;
      button {
        width: 170px;
        height: 52px;
        background: #eb6100;
        color: #fff;
        font-weight: bold;
        border: none;
        font-size: 30px;
        border-radius: 6px;
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
  /deep/.van-tabs__wrap{
      height: 100px;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
  }
  /deep/.van-tabs__line{
      background-color: #F5B384;
  }

}
</style>
