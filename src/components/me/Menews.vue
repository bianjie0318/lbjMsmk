<template>
  <!-- 我的消息页面 -->
  <div class="lbj_wrap">
    <!-- 头部 -->
    <div class="lbj_head">
      <img @click="dianBack" src="../../assets/back.png" alt />
      <p>消息通知</p>
      <p></p>
    </div>
    <!-- 头部结束 -->
    <!-- 内容部分 -->
    <div class="lbj_con">
      <ul class="lbj_item">
        <li @click="enterNotice1">
          <p><img src="../../assets/xiaox/课程.png" alt /></p>
          <div class="lbj_title">
            <p>课程通知</p>
            <p>{{ lbjshuj.content }}</p>
          </div>
        </li>
        <li @click="enterNotice2">
          <p><img src="../../assets/xiaox/系统.png" alt /></p>
          <div class="lbj_title">
            <p>系统通知</p>
            <p>暂无消息</p>
          </div>
        </li>
        <li @click="enterNotice3">
          <p><img src="../../assets/xiaox/购物车满.png" alt /></p>
          <div class="lbj_title">
            <p>订单通知</p>
            <p>{{ lbjshuj1.content }}</p>
          </div>
        </li>
        <li @click="enterNotice4">
          <p><img src="../../assets/xiaox/书.png" alt /></p>
          <div class="lbj_title">
            <p>约课通知</p>
            <p>暂无消息</p>
          </div>
        </li>
        <li @click="enterNotice5">
          <p><img src="../../assets/xiaox/笔.png" alt /></p>
          <div class="lbj_title">
            <p>考试通知</p>
            <p>暂无消息</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 内容部分结束 -->
  </div>
</template>

<script>
import { getDope } from '../../http/api'
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      lbjshuj:[],
      lbjshuj1:[],
    };
  },
  created() {
    //创建后
    this.lbjNews()
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  methods: {
    //方法集合
    // 点击课程通知
    enterNotice1(){
        this.$router.push("/menotice1")
    },
     // 点击系统通知
    enterNotice2(){
        this.$router.push("/menotice2")
    },
     // 点击订单通知
    enterNotice3(){
        this.$router.push("/menotice3")
    },
     // 点击约课通知
    enterNotice4(){
        this.$router.push("/menotice4")
    },
     // 点击考试通知
    enterNotice5(){
        this.$router.push("/menotice5")
    },
    // 点击回退上一级
    dianBack(){
        this.$router.go(-1)
    },
    // 获取消息内容
    lbjNews(){
      getDope({}).then(res=>{
        console.log(res)
        this.lbjshuj=res.data.data[0]
        this.lbjshuj1=res.data.data[1]
      })
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
.lbj_con{
    width:100%;
    .lbj_item{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        >li{
            width: 100%;
            display:flex;
            align-items: center;
            height: 138px;
            padding: 0 32px;
            box-sizing: border-box;
            border-top: 1px solid #eee;
            >p{
                width:84px;
                height: 84px;
                background: #2AC8B7;
                border-radius: 50%;
                text-align: center;
                line-height:84px;
                >img{
                    width: 50px;
                    height: 40px;
                }
            }
            .lbj_title{
                margin-left: 30px;
                height:100px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                >p:nth-child(1){
                    font-size: 32px;
                    color: #363636;
                }
                 >p:nth-child(2){
                    width: 580px;
                    line-height: 40px;
                    font-size: 26px;
                    color: #363636;
                }
            }
        }
        // 第一个li
        >li:nth-child(1){
            >p{
                width:84px;
                height: 84px;
                background: #2AC8B7;
                border-radius: 50%;
                text-align: center;
                line-height: 84px;
                >img{
                    width: 50px;
                    height: 40px;
                }
            }
        }
        // 第二个li
        >li:nth-child(2){
            >p{
               width:84px;
                height: 84px;
                background: #B7B7B7;
                border-radius: 50%;
                text-align: center;
                line-height: 84px;
                >img{
                    width: 48px;
                    height: 42px;
                }
            }
        }
        // 第三个li
        >li:nth-child(3){
            >p{
               width:84px;
                height: 84px;
                background: #EA7A2F;
                border-radius: 50%;
                text-align: center;
                line-height: 84px;
                >img{
                    width: 46px;
                    height: 40px;
                }
            }
        }
        // 第四个li
        >li:nth-child(4){
            >p{
 width:84px;
                height: 84px;
                background: #2AC8B7;
                border-radius: 50%;
                text-align: center;
                line-height: 90px;
                >img{
                    width: 48px;
                    height: 36px;
                }
            }
        }
        // 第五个li
        >li:nth-child(5){
            >p{
                 width:84px;
                height: 84px;
                background: #3AA6FF;
                border-radius: 50%;
                text-align: center;
                line-height: 84px;
                >img{
                    width: 44px;
                    height: 48px;
                }
            }
        }
    }
}
//   内容部分结束

}
</style>
