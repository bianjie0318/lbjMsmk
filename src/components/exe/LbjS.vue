<template>
  <div>
    <!-- 搜索页面 -->
    <div class="lbj_wrap">
      <!-- 头部页面 -->
      <div class="lbj_head">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="lbj_search"
          @cancel="onClickLeft"
          @input="sjkong"
        />
      </div>
      <!-- 头部页面结束 -->
      <!-- 内容部分 -->
      <!-- 搜索结果 -->
      <div class="lbj_con">
        <ul class="lbj_list" v-show="show">
          <li v-for="(item,index) in search" :key="index">{{ item.name }}</li>
        </ul>
        <div class="lbj_nei" v-if="search.length === 0" v-show="show">
          <img src="../../assets/jiqiren.png" alt />
          <p>没有搜索到相关内容</p>
        </div>
      </div>
      <!-- 搜索历史 -->
      <div class="lbj_search" v-show="!show">
        <div class="lbj_item">
          <p>历史搜索</p>
          <p @click="detlete"><img src="../../assets/垃圾桶.png" alt=""></p>
        </div>
        <ul class="lbj_lieb">
            <li v-for="(item,index) in hisSearch" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { bankSearch } from "../../http/api";
export default {
  props: {}, // 组件参数 接收来自父组件的数据
  data() {
    return {
      //模拟数据
      show: true, //   showHis: true,
      value: "",
      search: [], //   历史记录
      hisSearch: [],
      isShow:false
    };
  },
  created() {
    //创建后
    // this.search()
  },
  components: {}, // 局部注册的组件
  mounted() {
    //加载后
    this.value = this.$route.query.bank;
    console.log(this.$route.query.bank);
    bankSearch({ params: { bank: this.value } }).then(res => {
      console.log(res);
      this.search = res.data.data;
    });
  },
  watch: {}, // 负责监听
  computed: {}, // 计算属性
  methods: {
    //方法集合
    // 取消
    onClickLeft() {
      this.$router.go(-1);
    }, // 搜索事件

    lbj_search() {
      this.hisSearch.push(this.value);
      bankSearch({ params: { bank: this.value } }).then(res => {
        console.log(res);
        this.search = res.data.data;
      });
    }, // 内容为空，出来搜索历史
    sjkong() {
      if (this.value === "") {
        this.show = false;
      } else {
        this.show = true;
      }
    }, // 删除历史记录
    detlete() {
      this.hisSearch = [];
    }
  }
};
</script>

<style scoped lang="scss">
.van-search {
  width: 680px;
  height: 120px;
  line-height: 120px;
  border-radius: 60px;
  /deep/.van-field__control {
    // display: flex;
    height: 100px;
  }
}
/deep/.van-search__content{
    border-radius: 55px;
}
.lbj_wrap {
  width: 100%;
  // 头部样式
  .lbj_head {
    width: 100%;
    height: 140px;
    padding: 0 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    > img {
      width: 30px;
      height: 32px;
    }
    > input {
      width: 544px;
      height: 64px;
      border-radius: 25px;
      background: #e4e7ed;
      border: none;
      padding-left: 54px;
      box-sizing: border-box;
      &::placeholder {
        color: #555553;
        font-size: 30px;
      }
    }
    > p {
      font-size: 28px;
      color: #555553;
    }
  }
}
//   内容部分样式


.lbj_item {
  width: 100%;
  padding: 0 36px;
  box-sizing: border-box;
  display: flex;
  height: 136px;
  align-items: center;
  justify-content: space-between;
  > p:nth-child(1) {
    font-size: 30px;
    font-weight: bold;
  }
  > p:nth-child(2) {
    > img {
      width: 40px;
      height: 40px;
    }
  }
}
.lbj_list {
  width: 100%;
  // padding: 0 36px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  > li {
    width: 100%;
    height: 80px;
    line-height: 80px;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    font-size: 30px;
    color: #505050;
  }
}
.lbj_lieb{
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

.lbj_nei {
  width: 100%;
  text-align: center; 
  img {
    width: 132px;
    height: 180px;
  }
  p {
    font-size: 30px;
    color: #ababab;
  }
}
/deep/.van-cell{
    align-items: center;
    margin-left: 8px;
}
</style>
