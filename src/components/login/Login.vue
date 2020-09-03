<template>
  <div class="wrap">
    
    <!-- 我的引入 -->
    <!-- <Me v-else></Me> -->

  </div>
</template>

<script>
import Me from '../../views/Me'

export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
     
    };
  },
  created() {
    //创建后
  },
  components: {
    Me
  }, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
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
          // 定时器
          let shij = window.setInterval(() => {
            this.time--;
            this.lbj_content = "获取验证码" + this.time;
            if (this.time < 0) {
              // 清除定时器
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
          localStorage.setItem("token", res.data.data.remember_token);
          this.$router.push("/setpass");
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
          this.lbjSwitch = !this.lbjSwitch;
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
            // this.$router.push({ path: "/tabbar/home" }); // 跳转到首页
          } else {
            this.$toast({ message: res.data.message, duration: 1500 }); // ui弹窗提示
          }
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  overflow-x: hidden;
  
}
</style>
