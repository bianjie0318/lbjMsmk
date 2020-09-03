<template>
  <div class="wrap">
    <!-- 练习头部 -->
    <div class="lbj_head">练习</div>
    <!-- 练习九宫格 -->
    <div class="lbj_jiu">
      <div class="lbj_jiu_list">
        <ul class="lbj_list">
          <!-- <li v-for="(item,index) in lbj_jiugg" :key="index">
            <img :src="item.tu" alt />
            <p>{{ item.name }}</p>
          </li>-->
          <li @click="enterZl">
            <div>
              <img src="../assets/jiu/笔记.png" alt />
            </div>
            <p>专点专练</p>
          </li>
          <li @click="enterTl">
            <div>
              <img src="../assets/jiu/书.png" alt />
            </div>

            <p>套卷练习</p>
          </li>
          <li @click="enterMn">
            <div>
              <img src="../assets/jiu/ben.png" alt />
            </div>

            <p>仿真模考</p>
          </li>
          <li @click="enterLianx">
            <div>
              <img src="../assets/jiu/笔.png" alt />
            </div>

            <p>错题练习</p>
          </li>
          <li @click="enterNode">
            <div>
              <img src="../assets/jiu/记录.png" alt />
            </div>

            <p>测评记录</p>
          </li>
          <li @click="enterHouse">
            <div>
              <img src="../assets/jiu/心.png" alt />
            </div>

            <p>习题收藏</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 进期模考 -->
    <div class="lbj_mok">
      <p>进期模考</p>
      <div class="lbj_mok_nei">
        <p class="lbj_title">
          <span>默认排序</span>
          <span>时间</span>
        </p>
        <img src="../assets/jiqiren.png" alt="">
        <p class="lbj_title_tis">暂无模考安排，敬请期待</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      // lbj_jiugg: [
      //   { tu: "../assets/jiu/笔记.png", name: "专点专练" },
      //   { tu: "../assets/jiu/书.png", name: "套卷练习" },
      //   { tu: "../assets/jiu/ben.png", name: "仿真模考" },
      //   { tu: "../assets/jiu/笔.png", name: "错题练习" },
      //   { tu: "../assets/jiu/记录.png", name: "测评记录" },
      //   { tu: "../assets/jiu/心.png", name: "习题收藏" }
      // ]
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
    // 点击专点练习
    enterZl(){
      this.$router.push("/lbjzl")
    },
    // 点击套卷练习
    enterTl(){
      this.$router.push("/lbjtl")
    },
    // 点击进入模拟
    enterMn(){
      this.$router.push("/lbjmn")
    },
    // 点击进入错题练习
    enterLianx(){
      this.$router.push("/lbjlianx")
    },
    // 点击进入测评记录
    enterNode(){
      this.$router.push("/lbjNode")
    },
    // 点击进入习题收藏
    enterHouse(){
      this.$router.push("/lbjHouse")
    }
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  background: #F0F2F5;
  overflow-x:hidden;
  // 头部
  .lbj_head {
    width: 100%;
    text-align: center;
    height: 87px;
    font-size: 36px;
    color: #232323;
    line-height: 87px;
    background: #fff;
  }
  // 九宫格
  .lbj_jiu {
    width: 100%;
    background: #f0f2f5;
    padding-top: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;

    .lbj_jiu_list {
      width: 100%;
      height: 356px;
      box-sizing: border-box;
      background: #f0f2f5;

      .lbj_list {
        width: 710px;
        height: 356px;
        background: #fff;
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        // justify-content: space-between;
        padding: 26px 35px;
        box-sizing: border-box;
        >li:nth-child(4){
          margin-right: 0;
        }
        > li {
          width: 105px;
          display:flex;
          height: 160px;
          flex-direction: column;
          justify-content: space-between;
          font-size: 26px;
          color: #151515;
          text-align: center;
          align-items: center;
          margin-right: 66px;
          // margin-top: 10px;
          // box-sizing: border-box;

          > div {
            width: 80px;
            height: 70px;
            border-radius:50px;
            line-height: 70px;
            box-shadow: 0px 0px 50px 15px rgba(0,0,0,0.04);
            margin-top: 10px;
            > img {
              width: 38px;
              height: 38px;
            }
          }
        }
      }
    }
  }
  //底部 
  .lbj_mok{
    width: 100%;
    height: 480px;
    background: #fff;
    // position:relative;
    // left: 0;
    // right: 0;
    // bottom: 300px;6   
    margin-tbottom: 300px;
    >p{
      width: 100%;
      height: 82px;
      padding: 0 28px;
      box-sizing: border-box;
      font-size: 30px;
      color: #787878;
      line-height: 82px;
    }
    .lbj_mok_nei{
      width: 100%;
      text-align: center;
      .lbj_title{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 30px;
        box-sizing: border-box;
        >span:nth-child(1){
          font-size: 26px;
          color: #E63900;
          font-weight: bold;
        }
        >span:nth-child(2){
          font-size: 26px;
          color: #868686;
        }
      }
      >img{
        width: 183px;
        height: 235px;
        margin-top: 34px;
      }
      .lbj_title_tis{
        font-size: 28px;
        color: #646464;
        margin-top: 34px;
      }
    }
  }
}
</style>
