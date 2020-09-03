<template>
  <!-- 个人信息页 -->
  <div class="wrap">
    <!-- 头部 -->
    <div class="wai">
      <div class="lbj_head">
        <img @click="dianBack" src="../assets/back.png" alt />
        <p>个人信息</p>
        <p></p>
      </div>
      <!-- 头部结束 -->
      <!-- 信息 -->
      <div class="lbj_xinx">
        <!-- 获取头像 -->
        <div class="lbj_toux" @click="showPopup">
          <p>头像</p>
          <p>
            <img :src="img" alt />
            <img src="../assets/右箭头.png" alt />
          </p>
        </div>
        <!-- 获取头像结束 -->

        <!-- 获取昵称 -->
        <div class="lbj_toux" @click="lbjNickname">
          <p>昵称</p>
          <p>
            <span>{{ lbj_ger.nickname }}</span>
            <img src="../assets/右箭头.png" alt />
          </p>
        </div>
        <!-- 获取昵称结束 -->

        <!-- 获取手机号 -->
        <div class="lbj_toux">
          <p>手机号</p>
          <p>
            <span>{{ lbj_ger.mobile }}</span>
            <img src alt />
          </p>
        </div>
        <!-- 获取手机结束 -->

        <!-- 获取性别 -->
        <div class="lbj_toux">
          <p>性别</p>
          <p>
            <span>{{ lbj_ger.sex | sex }}</span>
            <img src="../assets/右箭头.png" alt />
          </p>
        </div>
        <!-- 获取性别结束 -->

        <!-- 获取出生日期 -->
        <div class="lbj_toux">
          <p>出生日期</p>
          <p>
            <span>{{ lbj_ger.birthday }}</span>
            <img src="../assets/右箭头.png" alt />
          </p>
        </div>
        <!-- 获取出生日期结束 -->

        <!-- 获取所在城市 -->
        <div class="lbj_toux">
          <p>所在城市</p>
          <p>
            <span>{{ lbj_ger.province_name }} ,</span>
            <span>{{ lbj_ger.city_name }} ,</span>
            <span>{{ lbj_ger.district_name }}</span>
            <img style=" width: 20px;height: 20px;" src="../assets/右箭头.png" alt />
          </p>
        </div>
        <!-- 获取所在城市结束 -->

        <!-- 获取学科 -->
        <div class="lbj_toux">
          <p>学科</p>
          <p>
            <span>{{ lbj_xuek.attr_value }}</span>
            <img src="../assets/右箭头.png" alt />
          </p>
        </div>
        <!-- 获取学科结束 -->

        <!-- 获取年级 -->
        <div class="lbj_toux">
          <p>年级</p>
          <p>
            <span>{{ lbj_nianj.attr_value }}</span>
            <img src="../assets/右箭头.png" alt />
          </p>
        </div>
        <!-- 获取年级结束 -->
      </div>

      <div class="lbj_btn">
        <button @click="enterMe">提交信息</button>
      </div>
      <!-- 信息结束 -->
    </div>

    <!-- 弹出层 -->
    <van-popup v-model="show" position="bottom">
      <ul class="lbj_tanc">
        <li @change="lbjPaiz($event)">
          拍照
          <input class="lbj_li" type="file" accept="image/*" capture="camera" />
        </li>
        <li>
          从手机相册选择
          <input class="lbj_li" type="file" accept="image/*" @change="lbjPaiz($event)" />
        </li>
        <li @click="cancelTanc">取消</li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
import { getUserinfo, getPai, getTu, getLuj } from "../http/api";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      //   个人信息获取
      lbj_ger: [],
      //   xueke
      lbj_xuek: [],
      // 年级
      lbj_nianj: [],

      lbjqieh: true,
      // 弹出层
      show: false,
      img: ""
    };
  },
  created() {
    //创建后
    this.lbjGer();
    this.setPai();
    // this.lbjLuj()
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  filters: {
    sex(val) {
      if (val == 0) {
        return "男";
      } else {
        return "女";
      }
    }
  },
  methods: {
    //方法集合
    // 拍照的个人信息
    setPai() {
      getPai({}).then(res => {
        // console.log(res);
        this.img = res.data.data.avatar;
      });
    },
    // 拍照的图片
    lbjPaiz(e) {
      console.log(e);
      // alert(111)
      let formData = new FormData();
      formData.append("file", e.target.files[0]);
      getTu(formData).then(res => {
        console.log(res);
        if (res.data.code === 200) {
          // 获取图像接口
          getLuj({ avatar: res.data.data.path }).then(res => {
            console.log(res);
            this.img = res.data.data.avatar;
            this.show = false;
          });
        }
      });
    },

    // 图片历经

    // 获取个人信息
    lbjGer() {
      getUserinfo({}).then(res => {
        // console.log(res);
        this.lbj_ger = res.data.data;
        this.lbj_xuek = res.data.data.attr[0];
        this.lbj_nianj = res.data.data.attr[1];
      });
    },
    dianBack() {
      this.$router.go(-1);
    },
    // 跳转至我的页面
    enterMe() {
      this.$router.push("/tabbar/me");
    },

    // 弹出层
    showPopup() {
      this.show = true;
    },
    // 关闭弹出层
    cancelTanc() {
      this.show = false;
    },
    // 跳转至修改昵称页面
    lbjNickname(){
      this.$router.push("/nickname")
    } 
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  background: #f0f2f5;

  // 弹层开始

  .lbj_tanc {
    li {
      width: 100%;
      height: 105px;
      border-bottom: 4px solid #f8f8f8;
      padding: 0 28px 0 36px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      .lbj_li {
        width: 100%;
        right: 0;
        left: 0;
        top: 0;
        position: absolute;
        opacity: 0;
        border: 1px solid red;
      }
    }
  }

  // 弹层结束
  // 头部
  .lbj_head {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    box-sizing: border-box;
    align-items: center;
    background: #fff;
    > img {
      width: 28px;
      height: 30px;
    }
    > p {
      font-size: 36px;
      color: #525252;
    }
  }
  // 头部结束
  //   信息
  .lbj_xinx {
    width: 100%;
    margin-top: 20px;
    // margin-bottom: 80px;
    .lbj_toux {
      width: 100%;
      display: flex;
      padding-left: 32px;
      padding-right: 28px;
      box-sizing: border-box;
      align-items: center;
      justify-content: space-between;
      height: 115px;
      border-bottom: 1px solid #eee;
      background: #fff;
      > p:nth-child(1) {
        font-size: 24px;
        color: #141414;
      }
      > p:nth-child(2) {
        display: flex;
        align-items: center;

        > span {
          font-size: 20px;
          color: #7a7a7a;
        }
        > img:nth-child(1) {
          width: 74px;
          height: 74px;
          border-radius: 50%;
          margin-right: 25px;
        }
        > img:nth-child(2) {
          width: 30px;
          height: 32px;
        }
      }
    }
  }
  //   信息结束
  .lbj_btn {
    width: 100%;
    text-align: center;
    button {
      width: 95%;
      height: 80px;
      background: #e73c00;
      text-align: center;
      line-height: 80px;
      border: none;
      color: #fff;
      font-weight: bold;
      border-radius: 15px;
      margin-top: 30px;
    }
  }
}
</style>
