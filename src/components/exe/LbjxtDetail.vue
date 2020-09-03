<template>
  <!-- 习题详情 -->
  <div class="lbj_wrap">
    <!-- 头部内容 -->
    <div class="lbj_head">
      <img @click="dianBack" src="../../assets/back.png" alt />
      <p></p>
      <p class="lbj_tub">
        <img @click="lbjDtk" src="../../assets/答题卡.png" alt />
        <img src="../../assets/xing_active.png" alt />
        <img @click="lbjFk" src="../../assets/反馈.png" alt />
      </p>
    </div>
    <!-- 头部内容结束 -->
    <!-- 内容部分开始 -->
    <div class="lbj_waicxh">
      <div class="lbj_xit">
        <div class="lbj_tou">
          <div class="tim">
            <span class="wenz1">单选</span>
            <span>1、</span>
          </div>
          <p v-html="lbjshujXx.ques_stem_text"></p>
        </div>

        <div class="lbj_xuanx">
          <div class="lbj_myx" v-for="(value) in lbjshujXxq" :key="value.id">
            <input type="radio" name="xuanz" />
            <div class="lbj_neil">
              <p>{{ value.id | id }}</p>
              <p v-html="value.content"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lbj_daa">
      <p>正确答案：</p>
    </div>
    <div class="lbj_xs">
      <p>考点：</p>
      <ul class="lbj_meiy">
        <li>物理学史</li>
      </ul>
    </div>
    <div class="lbj_jx">
      <p>解析：暂无解析</p>
    </div>

    <van-popup
      class="lbj_tan"
      v-if="show"
      v-model="show"
      position="right"
      :style="{ height: '100%' }"
    >
      <div class="lbjtan_li">
        <img @click="dianBack" src="../../assets/back.png" alt />
        <p>答题卡</p>
        <p></p>
      </div>
      <div class="lbj_datk">
        <p>物理</p>
        <p>
          <span>0</span>/
          <span>15</span>
        </p>
      </div>
      <div class="lbj_xh">
        <ul class="lbj_xh_li">
          <li v-for="(item) in lbjXh" :key="item.id">{{ item.xuh }}</li>
        </ul>
      </div>
      <!-- <div class="btn" @click="lbjJj">交卷并查看结果</div> -->
    </van-popup>


     <!-- 进入错题反馈 -->
      <van-popup v-if="lbjfk" v-model="lbjfk" position="top" :style="{ height: '100%' }" >
        <div class="lbj_fktou">
          <img @click="dianBack" src="../../assets/back.png" alt="">
          <p>题目纠错反馈</p>
          <p></p>
        </div>
        <!-- 纠错类型 -->
        <div class="lbjjc_lx">
          <p>纠错类型</p>
          <ul class="lbjjc_li">
            <li v-for="(item) in lbjjc" :key="item.id">
              <input type="radio" name="jiu">
              <p>{{ item.title }}</p>
            </li>
          </ul>
        </div>
        <!-- 输入 -->
        <div class="lbj_shur">
          <textarea class="lbj_txt" name="" id="" cols="30" rows="10" v-model="txtshu" placeholder="请输入题目纠错信息，最多不超过500个字"></textarea>
        </div>
        <div class="lbjfk_btn">
          <div @click="lbjTj">提交</div>
        </div>
      </van-popup>
      <!-- 结束错题反馈 -->
    <!-- 内容部分结束 -->
  </div>
</template>

<script>
import { getXtxq } from "../../http/api";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      id: "",
      lbjshujXx: [],
      lbjshujXxq: [],
      show:false,
      lbjshow:false,
      lbjfk:false,
      lbjXh: [
        { id: 1, xuh: 1 },
        { id: 2, xuh: 2 },
        { id: 3, xuh: 3 },
        { id: 4, xuh: 4 },
        { id: 5, xuh: 5 },
        { id: 6, xuh: 6 },
        { id: 7, xuh: 7 },
        { id: 8, xuh: 8 },
        { id: 9, xuh: 9 },
        { id: 10, xuh: 10 },
        { id: 11, xuh: 11 },
        { id: 12, xuh: 12 },
        { id: 13, xuh: 13 },
        { id: 14, xuh: 14 },
        { id: 15, xuh: 15 }
      ],
      lbjjc:[
        {id:1,title:"错别字"},
        {id:2,title:"答案解析不匹配"},
        {id:3,title:"解析错误"},
        {id:4,title:"其他"},
      ],
      txtshu:""
    };
  },
  created() {
    //创建后
    this.id = this.$route.query.id;
    this.lbjXq();
    // console.log(this.id)
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  filters: {
    id(val) {
      if (val == 1) {
        return "A、";
      } else if (val == 2) {
        return "B、";
      } else if (val == 3) {
        return "C、";
      } else if (val == 4) {
        return "D、";
      }
    }
  },
  computed: {}, // 计算属性
  methods: {
    //方法集合
      // 点击回退至上一级
    dianBack() {
      this.lbjshow = true;
      this.$router.go(-1);
    },
    lbjXq() {
      getXtxq(this.id).then(res => {
        console.log(res);
        this.lbjshujXx = res.data.data;
        this.lbjshujXxq = res.data.data.ques_option;
      });
    },
     // 点击答题卡
    lbjDtk() {
      this.show = !this.show;
    },
     // 提交
    lbjTj(){
      if(this.txtshu==""){
        this.$toast("请填写原因")
      }else{
        this.$toast("提交成功")
      }
    },
        // 反馈
    lbjFk(){
      // this.$route.push("/lbjCtfk")
      this.lbjfk=!this.lbjfk
    },
  }
};
</script>

<style scoped lang="scss">
.lbj_wrap {
  width: 100%;
  background: #f0f2f5;
  .lbj_head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    box-sizing: border-box;
    height: 90px;
    align-items: center;
    border-bottom: 1px solid #ddd;
    background: #fff;
    > img {
      width: 36px;
      height: 34px;
    }
    .lbj_tub {
      width: 200px;
      display: flex;
      justify-content: space-around;
      > img:nth-child(1) {
        width: 30px;
        height: 30px;
      }
      > img:nth-child(2) {
        width: 30px;
        height: 30px;
      }
      > img:nth-child(3) {
        width: 30px;
        height: 30px;
      }
    }
  }
  .lbj_waicxh {
    width: 100%;
    background: #fff;
    .lbj_xit {
      width: 100%;
      padding: 0 20px;
      padding-top: 60px;
      box-sizing: border-box;

      .lbj_tou {
        display: flex;
        > p {
          width: 540px;
          font-size: 30px;
          color: #333333;
          line-height: 40px;
        }
        .wenz1 {
          background: #0097fa;
          color: #fff;
          border-radius: 10px 2px 10px 2px;
          padding: 3px 8px;
          box-sizing: border-box;
          margin-right: 15px;
          font-size: 26px;
        }
      }
      .lbj_xuanx {
        width: 100%;
        .lbj_myx {
          width: 100%;
          display: flex;
          margin-top: 20px;
          > input {
            margin-right: 20px;
          }
          .lbj_neil {
            display: flex;
            > p:nth-child(2) {
              font-size: 30px;
              color: #333333;
              line-height: 40px;
            }
          }
        }
      }
      .lbj_btn {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 200px;
        > button:nth-child(1) {
          width: 170px;
          height: 70px;
          background: #fff;
          color: #595959;
          border: none;
          border: 1px solid #ddd;
          border-radius: 10px;
          font-size: 30px;
        }
        > button:nth-child(2) {
          width: 170px;
          height: 70px;
          background: #fff;
          color: #595959;
          border: none;
          border: 1px solid #ddd;
          border-radius: 10px;
          font-size: 30px;
        }
      }
    }
  }
  .lbj_daa {
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    margin-top: 30px;
    background: #fff;
    height: 80px;
    line-height: 80px;
    > p {
      font-size: 30px;
      color: #666666;
    }
  }
  .lbj_xs {
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    background: #fff;
    > p {
      font-size: 28px;
      color: #8c8c8c;
    }
    .lbj_meiy {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      > li {
        padding: 10px 20px;
        background: #0097fa;
        color: #fff;
        box-sizing: border-box;
        font-size: 30px;
        border-radius: 20px;
        margin-top: 30px;
      }
    }
   
  }
   .lbj_jx{
       background: #fff;
        width:100%;
        padding: 0 20px;
        padding-top: 60px;
        box-sizing: border-box;
        >p{
            font-size: 30px;
            color: #8C8C8C;
        }
    }
    .lbjtan_li {
    width: 100%;
    height: 80px;
    display: flex;
    padding: 0 20px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    > img {
      width: 32px;
      height: 34px;
    }
    > p {
      font-size: 34px;
      color: #222222;
    }
  }
  .lbj_datk {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    height: 90px;
    align-items: center;
    > p:nth-child(1) {
      font-size: 30px;
      color: #595959;
    }
    > p:nth-child(2) {
      font-size: 30px;
      color: #595959;
      > span:nth-child(1) {
        font-size: 40px;
        color: #1ea3fb;
      }
    }
  }
  .lbj_xh {
    width: 100%;
    .lbj_xh_li {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 0 20px;
      box-sizing: border-box;
      > li {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid #f3f3f3;
        color: #b8b8b8;
        font-size: 30px;
        text-align: center;
        line-height: 80px;
        margin-right: 40px;
        margin-top: 30px;
      }
    }
  }
  .btn {
    width: 100%;
    height: 100px;
    background: #eb6100;
    color: #fff;
    text-align: center;
    line-height: 100px;
    position: absolute;
    bottom: 0;
  }

   // 反馈开始
  .lbj_fktou{
    width: 100%;
    height: 80px;
    display:flex;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    justify-content: space-between;
    border-bottom: 1px solid #eee;

    >img{
      width: 36px;
      height: 34px;
    }
    >p{
      font-size: 34px;
    }
  }
  // 纠错
  .lbjjc_lx{
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    >p{
      font-size: 30px;
      color: #8C8C8C;
      margin-top: 30px;
    }
    >.lbjjc_li{
      width: 100%;
      padding: 0 30px;
      box-sizing: border-box;
      display:flex;
      flex-wrap:wrap;
      >li{
        font-size: 30px;
        color: #595959;
        display:flex;
        margin-right: 30px;
        margin-top: 20px;
      }
    }
  }
  // 输入
  .lbj_shur{
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    margin-top: 30px;
    .lbj_txt{
      border: 1px solid #ccc;
      width: 680px;
      border-radius: 10px;
      font-size: 30px;
      padding: 10px 0 0 20px;
      box-sizing: border-box;
    }
  }
  // 提交
  .lbjfk_btn{
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    margin-top: 500px;
    >div{
      width: 680px;
      height: 80px;
      border:1px solid #1EA3FB;
      color: #1EA3FB;
      text-align: center;
      line-height: 80px;
      
    }
  }
}
</style>
