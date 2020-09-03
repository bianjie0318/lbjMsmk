<template>
  <div class="wrap">
    <ul class="list">
      <router-link class="list_tu"  v-for="item in list" :key="item.id" :to="item.url">
        <svg class="icon">
          <use :xlink:href="`#icon-${item.svgName}`" />
        </svg>
        <span>{{ item.tabName }}</span>
      </router-link>
    </ul>
    <router-view />
  </div>
</template>

<script>

export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      active: 0,
      tel: "",
      page: 1,
      limit: 10,
      list: [
        { tabName: "首页", url: "/tabbar/home", svgName: "qianniu" },
        { tabName: "课程", url: "/tabbar/course", svgName: "ziyuan" },
        { tabName: "约课记录", url: "/tabbar/record", svgName: "dianji" },
        { tabName: "练习", url: "/tabbar/exercase", svgName: "benzi" },
        { tabName: "我的", url: "/tabbar/me", svgName: "wode" }
      ]
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
    //获取课程
    // getKec(){
    //   lessonList({
    //     page:this.page,
    //     limit:this.limit,
    //   }).then(res=>{
    //     console.log("课程列表",res)
    //   })
    // }
  }
};
</script>

<style scoped lang="scss">
.icon {
  font-size: 20px;
  color: #B6B6B6;
}
.ys {
  color: #fd5e01;
}
.wrap {
  width: 100%;
  overflow-x:hidden;
  background: #fff;
  .list {
    width: 100%;
    height: 102px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;

    .list_tu {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #fff;
      .icon {
        font-size: 36px;

      }
      span{
        font-size: 24px;
        color: #151515;
        margin-top: 10px;
      }
    }
  }
}
a {
  font-weight: bold;
  color: #2c3e50;
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
