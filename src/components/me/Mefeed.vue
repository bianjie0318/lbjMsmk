<template>
  <!-- 意见反馈页 -->
  <div class="lbj_wrap">
    <!-- 头部 -->
    <div class="lbj_head">
      <img @click="dianBack" src="../../assets/back.png" alt />
      <p>意见反馈</p>
      <p></p>
    </div>
    <!-- 头部结束 -->
    <!-- 内容部分 -->
    <div class="lbj_con">
      <div class="lbj_wenz">
        <textarea class="lbj_wen" name id cols="30" rows="10"></textarea>
        <div class="lbj_zi">
          <p></p>
          <p>
            <span>0</span>/<span>500</span>
          </p>
        </div>
      </div>
    </div>
    <!-- btn -->
    <div class="lbj_btn">
        <button>提交</button>
    </div>
    <!-- 内容部分结束 -->
  </div>
</template>

<script>
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
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
    dianBack(){
        this.$router.go(-1)
    }
  }
};
</script>

<style scoped lang="scss">
.lbj_wrap {
  width: 100%;
  // 头部
  .lbj_head {
    width: 100%;
    display: flex;
    padding: 0 30px;
    box-sizing: border-box;
    height: 92px;
    align-items: center;
    justify-content: space-between;
    > img {
      width: 26px;
      height: 30px;
    }
    > p {
      font-size: 34px;
      color: #2b2b2b;
    }
  }
  // 头部结束
  //   内容部分
  .lbj_con {
    width: 100%;
    margin-top: 40px;
    .lbj_wenz {
      width: 90%;
      margin: 0 auto;
      position: relative;
      > .lbj_wen {
        width: 100%;
        border: 6px solid #eee;
      }
      > .lbj_zi {
        width: 100%;
        margin-top: 20px;
        p {
          width: 120px;
          position: absolute;
          right: 0;
            >span{
                font-size: 26px;
                color: #BFBFBF;
            }
        }
      }
    }
  }
//   提交
.lbj_btn{
    width: 100%;
    margin-top: 180px;
    text-align: center;
    button{
        width: 90%;
        height: 80px;
        background: #EB6100;
        text-align: center;
        line-height: 80px;
        color:#fff;
        border: none;
        margin: 0 auto;
        border-radius: 10px;

    }
}

  //   内容部分结束

}
</style>
