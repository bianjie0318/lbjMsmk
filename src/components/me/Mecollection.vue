<template>
  <!-- 我的收藏 -->
  <div class="wrap">
    <!-- 头部 -->
    <div class="lbj_head">
      <img @click="dianBack" src="../../assets/back.png" alt />
      <p class="lbj_wenz">我的收藏</p>
      <p></p>
    </div>
    <!-- 头部结束 -->
    <!-- 内容部分 -->
    <!-- 收藏有数据时 -->
    <div class="lbj_shouc" >
      <ul class="lbj_list_wai">
        <li v-for="(item) in lbj_enshrine" :key="item.collect_id">
          <div class="lbj_zi">
            <p>{{ item.title }}</p>
            <p @click="removeSc(item.collect_id)">
              <img src="../../assets/xing_active.png" alt />
            </p>
          </div>
          <p class="lbj_kes">共{{ item.section_num }}课时</p>
          <div class="lbj_tu">
            <img :src="item.teachersAvatar" alt />
            <p>{{ item.teachers }}</p>
          </div>
          <p class="lbj_bao">
            <span>{{ item.sales_num }}人已报名</span>
            <span>
              <img src="../../assets/钱.png" alt />
              {{ item.price }}.00
            </span>
          </p>
        </li>
      </ul>
      <p class="lbj_tis">没有更多了</p>
    </div>

    <!-- 收藏无数据时 -->
    <!-- <div class="lbj_con" >
      <div class="lbj_photo">
        <img src="../../assets/empty.0d284c2e.png" alt />
        <p>暂无收藏</p>
      </div>
    </div> -->
    <!-- 内容部分结束 -->
  </div>
</template>

<script>
import { getShoucLie,getShoucQxLie } from "../../http/api";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      // 收藏的列表
      lbj_enshrine: [],
      lbjShow:true,
    };
  },
  created() {
    //创建后
    this.shouClist();
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
    // 收藏过来的列表
    shouClist() {
      getShoucLie({
        page: 1,
        limit: 10,
        type: 1
      }).then(res => {
        console.log(res);
        this.lbj_enshrine = res.data.data.list;
      });
    },

    // 取消收藏
    removeSc(id) {
      getShoucQxLie(id).then(res => {
        console.log(res)
        this.lbj_enshrine = res.data.data.list;
        location.reload()
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
  // 有收藏时的数据渲染布局
  .lbj_shouc {
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #f0f2f5;
    position: absolute;
    .lbj_tis {
      font-size: 26px;
      color: #8e8e90;
      text-align: center;
      margin-top: 24px;
    }
    .lbj_list_wai {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 28px;
      flex-wrap: wrap;
      > li {
        width: 712px;
        height: 332px;
        background: #fff;
        border-radius: 15px;
        padding: 18px;
        box-sizing: border-box;
        margin-bottom: 20px;
        .lbj_zi {
          width: 100%;
          display: flex;
          > p:nth-child(1) {
            font-size: 30px;
            color: #000;
          }
          > p:nth-child(2) {
            > img {
              width: 28px;
              height: 28px;
            }
          }
        }
        .lbj_kes {
          font-size: 26px;
          color: #4e4e4e;
          margin-top: 20px;
        }
        .lbj_tu {
          display: flex;
          align-items: center;
          margin-top: 58px;
          margin-bottom: 28px;
          border-bottom: #eee;
          > img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
          }
          > p {
            font-size: 20px;
            color: #767676;
            margin-left: 16px;
          }
        }
        .lbj_bao {
          display: flex;
          justify-content: space-between;
          margin-top: 45px;
          > span:nth-child(1) {
            font-size: 22px;
            color: #848484;
          }
          > span:nth-child(2) {
            font-size: 30px;
            color: #ec0e0e;
            > img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }

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
