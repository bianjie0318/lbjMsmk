<template>
  <!-- 开通会员 -->
  <div class="lbj_wrap">
    <!-- 头部 -->
    <div class="lbj_head">
      <img @click="dianBack" src="../../assets/back.png" alt />
      <p class="lbj_wenz">开通会员</p>
      <p></p>
    </div>
    <!-- 头部结束 -->
    <!-- 获取到的内容信息 -->
    <div class="lbj_shuj">
      <div class="lbj_con">
        <img :src="lbjTou.avatar" alt />
        <div class="lbj_wenz">
          <p>{{ lbjTou.mobile }}</p>
          <p>开通会员免费学习</p>
        </div>
      </div>
    </div>
    <!-- 获取到的内容信息结束 -->
    <div class="lbj_neir">
      <p>
        购买会员
        <span>购买会员后可免费观看会员课程</span>
      </p>
      <ul class="lbj_vip">
        <li v-for="(item) in lbjneir" :key="item.id">
          <p>{{ item.name }}</p>
          <div class="lbj_wenz">
            <img src="../../assets/钱.png" alt />
            <p>{{ item.price/100+".00" }}</p>
          </div>
        </li>
      </ul>
      <div class="lbj_btn" @click="isMay">立即支付</div>
      <div class="tan" v-if="show">
        <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
        <van-popup v-model="show">
          <div class="lbj_tis">
            <p>提示</p>
            <p  @click="quxl">X</p>
          </div>
          <p class="lbj_zit"><img src="../../assets/警告.png" alt="">您确定购买此会员吗？</p>
          <div class="lbj_ann">
            <button @click="quxl">取消</button>
            <button @click="quezf">确定</button>
          </div>
        </van-popup>
      </div>
        <!-- 余额不足 -->
      <div class="tan" v-if="show1">
        <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
        <van-popup v-model="show">
          <div class="lbj_tis">
            <p>提示</p>
            <p @click="quxl">X</p>
          </div>
          <p class="lbj_zit"><img src="../../assets/警告.png" alt="">很抱歉，学习币余额不足，无法完成支付！</p>
          <div class="lbj_ann">
            <button @click="quxl">取消</button>
            <button @click="Lbjchong">去充值</button>
          </div>
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserinfo, getHuiy } from "../../http/api";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      // 头像数据
      lbjTou: [],
      lbjneir: [],
       show: false,
       show1: false,
       isShow: false
    };
  },
  created() {
    //创建后
    this.huiyT();
    this.lbjh();
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  methods: {
    //方法集合
    // showPopup() {
    //   this.show = true;
    // },
    // 点击返回上一级
    dianBack() {
      this.$router.go(-1);
    },
    // 获取头部数据
    huiyT() {
      getUserinfo({}).then(res => {
        console.log(res);
        this.lbjTou = res.data.data;
      });
    },
    // 获取里面的数据
    lbjh() {
      getHuiy({}).then(res => {
        console.log(res);
        this.lbjneir = res.data.data;
      });
    },
    // 是否购买
    isMay() {
      this.show=!this.show
    },
    // 点击取消
    quxl(){
      this.show=!this.show

    },
    // 点击确认支付按钮
    quezf(){
      this.show1=!this.show1
    },
    // 点击去充值
    Lbjchong(){
      this.$router.push("/mebalance")
    }
  }
};
</script>

<style scoped lang="scss">
.lbj_wrap {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  // 头部
  .lbj_head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 92px;
    padding: 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    background: #fff;
    > img {
      width: 26px;
      height: 30px;
    }
    > p {
      font-size: 36px;
      color: #4e4e4e;
    }
  }
  // 头部结束
  //   获取头像数据
  .lbj_shuj {
    width: 100%;
    .lbj_con {
      width: 100%;
      display: flex;
      padding: 0 32px;
      box-sizing: border-box;
      height: 142px;
      align-items: center;
      background: #fff;
      > img {
        width: 86px;
        height: 86px;
      }
      > .lbj_wenz {
        display: flex;
        height: 86px;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 20px;
        > p:nth-child(1) {
          font-size: 18px;
          color: #2b2b2b;
        }
        > p:nth-child(2) {
          font-size: 24px;
          color: #7c7c7c;
        }
      }
    }
  }
  //   获取头像数据结束
  // 获取内容
  .lbj_neir {
    width: 100%;
    // height: 100%;
    margin-top: 40px;
    padding: 0 26px;
    box-sizing: border-box;
    background: #f0f2f5;
    > p {
      font-size: 34px;
      color: #595959;
      > span {
        font-size: 30px;
        color: #959595;
        margin-left: 15px;
      }
    }
    .lbj_vip {
      width: 100%;
      margin-top: 40px;
      display: flex;
      > li {
        width: 210px;
        height: 220px;
        border: 1px solid #e2e3e4;
        text-align: center;
        border-radius: 15px;
        background: #fff;
        margin-right: 20px;
        > p {
          font-size: 32px;
          color: #595959;
          font-weight: bold;
          margin-top: 50px;
        }
        .lbj_wenz {
          width: 210px;
          display: flex;
          justify-content: center;
          margin-top: 30px;
          > img {
            width: 30px;
            height: 34px;
          }
          > p {
            font-size: 56px;
            color: #d5a322;
            font-weight: bold;
          }
        }
      }
    }
    .lbj_btn {
      width: 700px;
      height: 90px;
      background: #e1bf86;
      color: #fff;
      text-align: center;
      line-height: 90px;
      border-radius: 30px;
      position: absolute;
      bottom: 140px;
    }
  }
  // 提示框
  .lbj_tis{
    width: 360px;
    padding: 0 20px;
    // box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    >p:nth-child(1){
      font-size: 26px;

    }
    >p:nth-child(2){
      font-size: 26px;
    }
  }
  .lbj_zit{
    width: 400px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    height: 70px;
    align-items: center;
    >img{
      width: 30px;
      height: 30px;

    }
   
      font-size: 28px;
      color: #606266;
    
  }
  .lbj_ann{
    width: 400px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    height: 50px;
    align-items: center;
    // position: absolute;
    right: 20px;
    >button:nth-child(1){
      width:100px;
      height: 46px;
      font-size: 24px;
      color: #64666A;
      text-align: center;
      // line-height: 46px;
      border-radius: 8px;
      border: none;
      margin-right: 16px;
      margin-left: 140px;
      background: #fff;
      border: 1px solid #ddd;

    }
      >button:nth-child(2){
      width:100px;
      height: 46px;
      font-size: 24px;
      color: #fff;
      text-align: center;
      // line-height: 46px;
      background: #EB6100;
      border-radius: 8px;
      border: none;

    }
  }
  // 获取内容结束
}
</style>
