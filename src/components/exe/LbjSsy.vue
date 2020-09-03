<template>
  <!-- 搜索页面 -->
  <div class="lbj_wrap">
    <!-- 头部数据 -->
    <div class="lbj_head">
      <div class="lbj_li">
        <img src="../../assets/sous1.png" alt />
        <input type="search"   v-model="value"  @click="sjkong" placeholder="请输入题库名称关键词" />
      </div>
      <p>取消</p>
    </div>
    <!-- 头部数据结束 -->
    <!-- 内容部分 -->
    <div class="lbj_con">
        <div class="lbj_tou">
            <p>历史搜索</p>
            <p><img src="../../assets/垃圾桶.png" alt=""></p>
        </div>
        <ul class="lbj_list">
            <li>xfbdb</li>
            <li>fdbdfbdfb</li>
        </ul>
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
      value:""
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
.lbj_wrap {
  width: 100%;
//   头部样式
  .lbj_head {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 26px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    .lbj_li {
      width: 616px;
      height: 98px;
      background: #f7f8fa;
      display: flex;
      align-items: center;
      border-radius: 45px;

      > input {
        width: 616px;
        height: 98px;
        border: none;
        border-radius: 45px;
        background: #f7f8fa;
        position: relative;
        padding: 0 16px;
        box-sizing: border-box;
        &::placeholder {
          font-size: 28px;
          color: #838486;
        }
      }
      > img {
        width: 30px;
        height: 30px;
        padding-left: 26px; 
        // box-sizing: border-box;
      }
    }
    >p{
        font-size: 30px;
        color: #323233;
    }
  }
//   头部样式结束
// 内容部分
.lbj_con{
    width: 100%;
    .lbj_tou{
        width: 100%;
        padding: 0 30px;
        height: 70px;
        box-sizing: border-box;
        display:flex;
        justify-content: space-between;
        align-items: center;
        >p:nth-child(1){
            font-size: 28px;
        }
         >p:nth-child(2){
            >img{
                width: 32px;
                height: 34px;
            }
        }
    }
    .lbj_list{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 0 30px;
        box-sizing: border-box;
        >li{
            padding: 16px 20px;
            box-sizing: border-box;
            background: #F7F7F7;
            font-size: 28px;
            color: #595959;
            border-radius: 30px;
            margin-right: 16px;
        }
    }
}
// 内容部分结束


}
</style>
