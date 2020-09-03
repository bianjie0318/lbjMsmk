<template>
  <!-- 我的关注 -->
  <div class="wrap">
    <!-- 头部 -->
    <div class="lbj_head">
      <img @click="dianBack" src="../../assets/back.png" alt />
      <p class="lbj_wenz">我的关注</p>
      <p></p>
    </div>
    <!-- 头部结束 -->
    <!-- 内容部分 -->
    <div class="lbj_con_neir" v-if="lbj_Gzlist.length>0">
      <ul class="lbj_con_list">
        <li v-for="(item) in lbj_Gzlist" :key="item.teacher_id">
          <img :src="item.avatar" alt />
          <div class="lbj_con_item">
            <p>
              <span>{{ item.teacher_name }}</span>
              <span>{{ item.level_name }}</span>
            </p>
            <p>{{ item.introduction }}</p>
          </div>
          <p @click="Qux(item.collect_id)">取消关注</p>
        </li>
      </ul>
      <p class="noMore">没有更多了</p>
    </div>
    <!-- 没有关注东西 -->
    <div class="lbj_con" v-else>
      <div class="lbj_photo">
        <img src="../../assets/empty.0d284c2e.png" alt />
        <p>暂无关注</p>
      </div>
    </div>
    <!-- 内容部分结束 -->
  </div>
</template>

<script>
import { getDetailYg, getDetailYgQ } from "../../http/api";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      page: "",
      limit: "",
      // // type:""
      // id:""
      lbj_Gzlist: [],
      lbjShow: true
    };
  },
  created() {
    //创建后
    this.lbjYig();
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  methods: {
    //方法集合
    // 点击返回键
    dianBack() {
      this.$router.go(-1);
    },
    // 已经关注了的
    lbjYig() {
      getDetailYg({
        page: 1,
        limit: 10,
        type: 2
      }).then(res => {
        console.log(res);
        this.lbj_Gzlist = res.data.data.list;
      });
    },
    // 取消关注
    Qux(id) {
      getDetailYgQ(id).then(res => {
        console.log(res);
        // this.lbjShow=!this.lbjShow
        this.lbj_Gzlist = res.data.data.list;
        location.reload();
      });
    }
  }
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  // 头部
  .lbj_head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 92px;
    padding: 30px;
    box-sizing: border-box;
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
  // 获取到内容时显示
  .lbj_con_neir {
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #f0f2f5;
    position: absolute;
    .noMore {
      font-size: 26px;
      color: #767577;
      margin-top: 34px;
      text-align: center;
    }
    .lbj_con_list {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 28px;
      flex-wrap: wrap;
      > li {
        width: 706px;
        height: 142px;
        background: #fff;
        border-radius: 10px;
        padding: 30px 0;
        padding-left: 18px;
        padding-right: 28px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        > img {
          width: 82px;
          height: 82px;
        }
        .lbj_con_item {
          margin-left: 18px;
          display: flex;
          flex-direction: column;
          height: 88px;
          justify-content: space-around;
          > p:nth-child(1) {
            > span:nth-child(1) {
              font-size: 28px;
              color: #212121;
            }
            > span:nth-child(2) {
              font-size: 22px;
              color: #e6620a;
              margin-left: 12px;
            }
          }
          > p:nth-child(2) {
            width: 392px;
            font-size: 24px;
            color: #9c9c9c;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        > p {
          width: 152px;
          height: 58px;
          background: #fdefe5;
          text-align: center;
          line-height: 58px;
          border-radius: 30px;
          font-size: 26px;
          color: #e95705;
        }
      }
    }
  }
  // 没有内容时显示
  .lbj_con {
    width: 100%;
    background: #f0f2f5;
    padding-top: 146px;
    box-sizing: border-box;
    position: absolute;
    top: 92px;
    left: 0;
    bottom: 0;
    right: 0;

    .lbj_photo {
      width: 100%;
      text-align: center;
      background: #f0f2f5;

      > img {
        width: 268px;
        height: 298px;
      }
      > p {
        font-size: 28px;
        color: #807f7f;
        margin-top: 38px;
      }
    }
  }
}
</style>
