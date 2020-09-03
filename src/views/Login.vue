<template>
    <div class="wrap">
       <!-- 登录 -->
    <div class="lbj_zong" v-if="lbjisdeng">
      <div class="lbj_head">
        <img src="../assets/deng.png" alt />
      </div>
      <div class="lbj_entry" v-if="lbjShow">
        <input type="text" placeholder="请输入手机号" v-model="mobile" />
        <input type="password" placeholder="请输入密码" v-model="password" />
        <div class="lbj_entry_fo">
          <p @click="find">找回密码</p>
          <p @click="register">注册/验证码登陆</p>
        </div>
        <button class="btn" @click="getLogin">登录</button>
      </div>
      <div class="lbj_entry1" v-else>
        <div class="huom">
          <input type="text" v-model="mobile" placeholder="请输入手机号" />
          <div @click="getYZM">{{ lbj_content }}</div>
        </div>
        <input type="text" placeholder="请输入短信验证码" v-model="lbjYanzm" />
        <div class="lbj_entry_fo">
          <p @click="find">*未注册的手机号将自动注册</p>
          <p @click="register">使用密码登陆</p>
        </div>
        <button class="btn" @click="getyzlogin">登录</button>
      </div>
    </div>
    </div>
</template>

<script>
import { login, get_code, loginyz } from "../http/api";

export default {
    props: {},   // 组件参数 接收来自父组件的数据
    data() {
        return {
     //模拟数据
         //模拟数据
      lbjShow: true,
      // 手机号
      mobile: "",
      // 密码
      password: "",
      type: 1,
      lbjYanzm: "",
      lbjisdeng: true,
      time: 60,
      lbjYzm: true,
      // 获取验证码
      lbj_content: "获取验证码",
      canClick: true, //添加canClick
     
        };
    },
    created() {
      //创建后
    },
    components: {},    // 局部注册的组件
    mounted() {
      //加载后
    },
    watch: {},         // 负责监听
    computed: {},      // 计算属性
    methods: {
       //方法集合
       


        // 点击跳转至找回密码页
    find() {
      this.$router.push({
        path: "/findmim"
      });
    },

    // 点击进行切换登录方式
    register() {
      this.lbjShow = !this.lbjShow;
    },

    // 登陆获取验证码
    getYZM() {
      get_code({
        mobile: this.mobile, //手机号
        sms_type: "login"
      }).then(res => {
        console.log(res);
        // this.lbjYanzm = res;
        if (res.data.code != 0) {
          if (!this.canClick) return;
          this.canClick = false;
          this.lbj_content = "获取验证码" + this.time;
          let shij = window.setInterval(() => {
            this.time--;
            this.lbj_content = "获取验证码" + this.time;
            if (this.time < 0) {
              window.clearInterval(shij);
              this.lbj_content = "获取验证码";
              this.time = 60;
              this.canClick = true; //重新开启
            }
          }, 1000);
          this.$toast(res.data.msg);
          this.lbjYzm = !this.lbjYzm;
        }
      });
    },

    //验证码登陆数据获取

    getyzlogin() {
      if (this.mobile == "" || this.lbjYanzm == "") {
        this.$toast("请输入完整");
        return false;
      } else {
        loginyz({
          mobile: this.mobile, //手机号
          sms_code: this.lbjYanzm, //验证码
          type: 2 //登陆类型
        }).then(res => {
          console.log(res);

          if (res.data.code != 0) {
            this.$toast(res.data.msg);
          }
          // this.$toast("登陆成功");
          // }
          localStorage.setItem("token", res.data.data.remember_token);
          // this.getuserInfo(num);
          this.$router.push("/setpass");
          // this.$router.push("/tabbar/me");
        });
      }
    },

    // 登陆获取数据
    getLogin() {
      if (this.mobile == "" || this.password == "") {
        this.$toast("请输入完整");
        return false;
      } else {
        login({
          mobile: this.mobile, //手机号
          password: this.password, //密码
          type: 1 //登陆类型
        }).then(res => {
          console.log(res);
          this.lbjisdeng = !this.lbjisdeng;
          if (res.data.code == 200) {
           
            var userInfo = res.data.data;
            console.log(userInfo);
            this.lbjTou = userInfo;
            this.$store.commit("$_setToken", userInfo.remember_token);
            this.$toast({
              message: "登录成功",
              type: "success",
              duration: 1500
            }); // ui弹窗提示
            this.$router.push({ path: "/tabbar/me" }); // 跳转到我的
          } else {
            this.$router.push("/login"); // 跳转到登录
            this.$toast({ message: res.data.message, duration: 1500 }); // ui弹窗提示
          }
        });
      }
    },

    }
};
</script>

<style scoped lang="scss">
.wrap{
  width: 100%;
  // 登录
   .lbj_zong {
    width: 100%;
    .lbj_head {
      width: 100%;
      text-align: center;
      margin-top: 100px;
      margin-bottom: 130px;
      > img {
        width: 470px;
        height: 103px;
      }
    }
    .lbj_entry {
      width: 100%;
      padding: 0 67px;
      box-sizing: border-box;
      > input {
        padding: 10px;
        box-sizing: border-box;
        width: 608px;
        height: 94px;
        border: none;
        line-height: 94px;
        border-bottom: 2px solid #ddd;
        font-size: 30px;
      }
      .lbj_entry_fo {
        width: 608px;
        height: 94px;
        line-height: 94px;
        display: flex;
        padding: 10px;
        box-sizing: border-box;
        justify-content: space-between;
        > p:nth-child(1) {
          font-size: 24px;
          color: #7d7d7d;
        }
        > p:nth-child(2) {
          font-size: 26px;
          color: #7d7d7d;
        }
      }
      .btn {
        margin-top: 76px;
        width: 608px;
        height: 90px;
        color: #fff;
        font-weight: bold;
        border: none;
        border-radius: 38px;
        border: 1px solid #ff8e3f;
        background-image: linear-gradient(to right, #ff944b, #fc4500);
      }
    }

    .lbj_entry1 {
      width: 100%;
      padding: 0 67px;
      box-sizing: border-box;
      .huom {
        width: 100%;
        display: flex;
        padding: 0 4px;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #eee;
        .van-count-down {
          font-size: 26px;
          color: #c4c4c4;
        }

        input {
          width: 380px;
          height: 92px;
          border: none;
          font-size: 30px;
          color: #bababa;
        }
        > div:nth-child(1) {
          font-size: 28px;
          color: #e84600;
        }
        > div:nth-child(2) {
          font-size: 28px;
          color: #c4c4c4;
        }
      }
      > input {
        padding: 10px;
        box-sizing: border-box;
        width: 608px;
        height: 94px;
        border: none;
        line-height: 94px;
        border-bottom: 2px solid #ddd;
        font-size: 30px;
      }
      .lbj_entry_fo {
        width: 608px;
        height: 94px;
        line-height: 94px;
        display: flex;
        padding: 10px;
        box-sizing: border-box;
        justify-content: space-between;
        > p:nth-child(1) {
          font-size: 24px;
          color: #7d7d7d;
        }
        > p:nth-child(2) {
          font-size: 26px;
          color: #7d7d7d;
        }
      }
      .btn {
        margin-top: 76px;
        width: 608px;
        height: 90px;
        color: #fff;
        font-weight: bold;
        border: none;
        border-radius: 38px;
        border: 1px solid #ff8e3f;
        background-image: linear-gradient(to right, #ff944b, #fc4500);
      }
    }
  }
}
</style>
