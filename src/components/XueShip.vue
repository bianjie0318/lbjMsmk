<template>
  <!-- 学习视频 -->
  <div class="lbj_wrap">
    <!-- 头部 -->
    <div class="lbj_head">
      <img @click="dianBack" src="../assets/back.png" alt />
      <p class="lbj_ming">{{ title }}</p>
      <p></p>
    </div>
    <!-- 头部结束 -->
    <div id="lbj_video"></div>
  </div>
</template>

<script>
import { getVideo, getMeis } from "../http/api";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      //   id: 189
      video_id: "",
      course_id: "",
      title: ""
    };
  },
  created() {
    //创建后

    this.course_id = this.$route.query.id;
    this.video_id = this.$route.query.video_id;
    this.title = this.$route.query.title;
    let id = this.$route.query.id;
    console.log(this.$route.query);
    let token = localStorage.getItem("token");
    getMeis({ token, id }).then(res => {
      this.title = res.data.data.periods[0].periods_title;
      console.log("视频*****", res);
    });
    this.lbjVideo();
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  methods: {
    //方法集合
    dianBack() {
      this.$router.go(-1);
    },
    // 视频
    lbjVideo() {
      let token = `Bearer ${localStorage.getItem("token")}`;

      return getVideo({ token, video_id:this.video_id,course_id:this.course_id }).then(res => {
        console.log('视频数据：',res);
         var player = new bjcPlayer("#lbj_video", {
          token: res.data.data.token,
          definition: "low", // hign 高清 low 低清
          // media: "video"
        });
        player.play(res.data.data.video_id);
      });
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
    padding: 0 25px;
    box-sizing: border-box;
    display: flex;
    height: 90px;
    align-items: center;
    justify-content: space-between;
    > img {
      width: 30px;
      height: 32px;
    }
    > .lbj_ming {
      width: 480px;
      font-size: 30px;
      color: #595959;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  // 头部结束
  #lbj_video{
    width: 100%;
    height: 400px;
  }
}
</style>
