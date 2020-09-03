import { login } from '../../http/api';
<template>
  <!-- 修改昵称 -->
  <div class="lbj_wrap">
    <!-- 头部开始 -->
    <div class="lbj_head">
      <img @click="dianBack" src="../../assets/back.png" alt />
      <p>修改个人信息</p>
      <p>保存</p>
    </div>
    <!-- 头部结束 -->
    <!-- 内容部分 -->
    <div class="lbj_con">
      <div class="lbj_nei">
        <input type="text" />
        {{ lbjXinx }}
      </div>
    </div>
  </div>
</template>

<script>
import { getUserinfo } from "../../http/api";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      lbjXinx: []
    };
  },
  created() {
    //创建后
    this.lbjUser();
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  methods: {
    //方法集合
    // 获取个人信息
    lbjUser() {
      getUserinfo({}).then(res => {
        console.log(res);
        this.lbjXinx = res.data.data.nickname;
      });
    },

    dianBack(){
        this.$router.go(-1)
    }
  }
};
</script>

<style scoped lang="scss">
.lbj_wrap {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  position: relative;
  // 头部
  .lbj_head {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    box-sizing: border-box;
    background: #fff;
    > img {
      width: 30px;
      height: 32px;
    }
    > p {
      font-size: 30px;
      color: #595959;
    }
  }
  // 头部结束
  // 内容部分
  .lbj_con {
    width: 100%;
    margin-top: 20px;
    .lbj_nei {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: left;
      align-items: center;
      background:#fff;
      padding-left: 20px;
      box-sizing: border-box;
      > input {
        // width: 100%;
        height: 80px;
        border: none;
        background: #fff;
      }
    }
  }
}
</style>
