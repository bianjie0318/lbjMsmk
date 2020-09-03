import Vue from "vue";
import VueRouter from "vue-router";
// 首页
import Home from "../views/Home.vue";
import About from "../views/About.vue";
// 课程
import Course from "../views/Course.vue";
// 约课记录
import Record from "../views/Record.vue";
// 练习
import Exercase from "../views/Exercase.vue";
// 我的
import Me from "../views/Me.vue";
// tabbar
import Tabbar from "../views/Tabbar.vue";
// 找回密码
import Findmim from "../components/login/Findmim.vue";
// 邮箱
import Emailshuj from "../components/Emailshuj.vue";
// 设置密码
import Setpass from "../components/Setpass.vue";
// 我的学习
import Melearn from "../components/me/Melearn.vue";
// 我的余额
import Mebalance from "../components/me/Mebalance.vue";
// 我的关注
import Mefollow from "../components/me/Mefollow.vue";
// 我的收藏
import Mecollection from "../components/me/Mecollection.vue";
// 课程订单
import Melesson from "../components/me/Melesson.vue";
// 会员订单
import Mevip from "../components/me/Mevip.vue";
// 约课订单
import Meyuek from "../components/me/Meyuek.vue";
// 我的优惠券
import Mecoupon from "../components/me/Mecoupon.vue";
// 我的学习卡
import Melearnk from "../components/me/Melearnk.vue";
// 开通会员
import Mekvip from "../components/me/Mekvip.vue";
// 一对一辅导
import Coach from "../components/Coach.vue";
//个人信息页
import Getuser from "../components/Getuser.vue";
//学习日历
import Learnril from "../components/Learnril.vue";
//详情
import Detail from "../views/Detail.vue";
//课程详情
import BoutiqueDetail from "../views/BoutiqueDetail.vue";

//设置
import Meshez from "../components/me/Meshez.vue";
//登录
import Login from "../views/Login.vue";
//我的消息页
import Menews from "../components/me/Menews.vue";
//我的消息页课程通知
import Menotice1 from "../components/me/Menotice1.vue";
//我的消息页系统通知
import Menotice2 from "../components/me/Menotice2.vue";
//我的消息页订单通知
import Menotice3 from "../components/me/Menotice3.vue";
//我的消息页约课通知
import Menotice4 from "../components/me/Menotice4.vue";
//我的消息页考试通知
import Menotice5 from "../components/me/Menotice5.vue";
//意见反馈页
import Mefeed from "../components/me/Mefeed.vue";
//意见提交成功
import EmailSucc from "../components/EmailSucc.vue";
//预约课程
import DetailYuy from "../components/DetailYuy.vue";
//立即学习
import PromptlyLearn from "../views/xuex/PromptlyLearn.vue";
//学习视频
import XueShip from "../components/XueShip.vue";
//学习视频
import LearnTij from "../views/xuex/LearnTij.vue";
//修改昵称页面
import Nickname from "../components/geren/Nickname.vue";
//搜索页面
import Lbjsearch from "../components/Lbjsearch.vue";
//点击专点练习
import Lbjzl from "../components/exe/Lbjzl.vue";
//点击套卷练习
import Lbjtl from "../components/exe/Lbjtl.vue";
//点击进入搜索页
// import LbjSsy from "../components/exe/LbjSsy.vue";
//点击进入搜索页
import LbjS from "../components/exe/LbjS.vue";
//点击仿真模拟
import Lbjmn from "../components/exe/Lbjmn.vue";
//点击进错题练习
import Lbjlianx from "../components/exe/Lbjlianx.vue";
//点击进测评记录
import LbjNode from "../components/exe/LbjNode.vue";
//点击进习题收藏
import LbjHouse from "../components/exe/LbjHouse.vue";
//点击内层习题
import LbjNeicxt from "../components/exe/LbjNeicxt.vue";
//点击进入各种题目页面
import Lbjglt from "../components/exe/Lbjglt.vue";
//点击进入习题详情
import LbjxtDetail from "../components/exe/LbjxtDetail.vue";
//点击进入错题反馈
import LbjCtfk from "../components/exe/LbjCtfk.vue";
//点击进入学习卡
import LbjXxk from "../components/me/LbjXxk.vue";
//点击进入余额明细
import Lbjyemx from "../components/me/Lbjyemx.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/tabbar'
  },
  {
    path: "/tabbar",
    name: "Tabbar",
    component: Tabbar,
    redirect: "/tabbar/home",
    children: [
      // 首页
      {
        path: "home",
        name: "Home",
        component: Home
      },
      // 课程
      {
        path: "course",
        name: "Course",
        component: Course
      },
      // 约课记录
      {
        path: "record",
        name: "Record",
        component: Record
      },
      // 练习
      {
        path: "exercase",
        name: "Exercase",
        component: Exercase
      },
      // 我的
      {
        path: "me",
        name: "Me",
        component: Me
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  //找回密码
  {
    path: "/findmim",
    name: "Findmim",
    component: Findmim
  },
  // 邮箱数据
  {
    path: "/emailshuj",
    name: "Emailshuj",
    component: Emailshuj
  },
  // 设置密码
  {
    path: "/setpass",
    name: "Setpass",
    component: Setpass
  },
  // 我的学习
  {
    path: "/melearn",
    name: "Melearn",
    component: Melearn
  },
  // 我的余额
  {
    path: "/mebalance",
    name: "Mebalance",
    component: Mebalance
  },
  // 我的关注
  {
    path: "/mefollow",
    name: "Mefollow",
    component: Mefollow
  },
  // 我的收藏
  {
    path: "/mecollection",
    name: "Mecollection",
    component: Mecollection
  },
  // 课程订单
  {
    path: "/melesson",
    name: "Melesson",
    component: Melesson
  },
  // 会员订单
  {
    path: "/mevip",
    name: "Mevip",
    component: Mevip
  },
  // 约课订单
  {
    path: "/meyuek",
    name: "Meyuek",
    component: Meyuek
  },
  // 我的优惠券
  {
    path: "/mecoupon",
    name: "Mecoupon",
    component: Mecoupon
  },
  // 我的学习卡
  {
    path: "/melearnk",
    name: "Melearnk",
    component: Melearnk
  },
  // 开通会员
  {
    path: "/mekvip",
    name: "Mekvip",
    component: Mekvip
  },
  // 一对一辅导
  {
    path: "/coach",
    name: "Coach",
    component: Coach
  },
  // 个人信息页
  {
    path: "/getuser",
    name: "Getuser",
    component: Getuser
  },
  // 学习日历
  {
    path: "/learnril",
    name: "Learnril",
    component: Learnril
  },
  //详情
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail
  },
  //设置
  {
    path: "/meshez",
    name: "Meshez",
    component: Meshez
  },
  //登录
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  //我的消息页
  {
    path: "/menews",
    name: "Menews",
    component: Menews
  },
  //我的消息页课程通知
  {
    path: "/menotice1",
    name: "Menotice1",
    component: Menotice1
  },
  //我的消息页系统通知
  {
    path: "/menotice2",
    name: "Menotice2",
    component: Menotice2
  },
  //我的消息页订单通知
  {
    path: "/menotice3",
    name: "Menotice3",
    component: Menotice3
  },
  //我的消息页约课通知
  {
    path: "/menotice4",
    name: "Menotice4",
    component: Menotice4
  },
  //我的消息页考试通知
  {
    path: "/menotice5",
    name: "Menotice5",
    component: Menotice5
  },
  //意见反馈页
  {
    path: "/mefeed",
    name: "Mefeed",
    component: Mefeed
  },
  //意见提交成功
  {
    path: "/emailSucc",
    name: "EmailSucc",
    component: EmailSucc
  },
  //课程详情
  {
    path: "/boutiqueDetail/:id",
    name: "BoutiqueDetail",
    component: BoutiqueDetail
  },
  //预约课程
  {
    path: "/detailYuy/:id",
    name: "DetailYuy",
    component: DetailYuy
  },
  //立即学习
  {
    path: "/promptlyLearn",
    name: "PromptlyLearn",
    component: PromptlyLearn
  },
  //学习视频
  {
    path: "/xueShip",
    name: "XueShip",
    component: XueShip
  },
  //学习提交
  {
    path: "/learnTij",
    name: "LearnTij",
    component: LearnTij
  },
   //修改昵称页面
   {
    path: "/nickname",
    name: "Nickname",
    component: Nickname
  },
   //搜索页面
   {
    path: "/lbjsearch",
    name: "Lbjsearch",
    component: Lbjsearch
  },
   //专点练习
   {
    path: "/lbjzl",
    name: "Lbjzl",
    component: Lbjzl
  },
  //套卷练习
  {
    path: "/lbjtl",
    name: "Lbjtl",
    component: Lbjtl
  },
  //点击进入搜索页面
  // {
  //   path: "/lbjSsy",
  //   name: "LbjSsy",
  //   component: LbjSsy
  // },
  //点击进入搜索页面
  {
    path: "/lbjS",
    name: "LbjS",
    component: LbjS
  },
    //点击进入仿真模拟
    {
      path: "/lbjmn",
      name: "Lbjmn",
      component: Lbjmn
    },
    //点击进入错题练习
    {
      path: "/lbjlianx",
      name: "Lbjlianx",
      component: Lbjlianx
    },
    //点击进入测评记录
    {
      path: "/lbjNode",
      name: "LbjNode",
      component: LbjNode
    },
    //点击进入习题收藏
    {
      path: "/lbjHouse",
      name: "LbjHouse",
      component: LbjHouse
    },
      //点击进入内层习题
      {
        path: "/lbjNeicxt",
        name: "LbjNeicxt",
        component: LbjNeicxt
      },
      //点击进入各类题
      {
        path: "/lbjglt",
        name: "Lbjglt",
        component: Lbjglt
      },
       //点击进入习题详情页
       {
        path: "/lbjxtDetail",
        name: "LbjxtDetail",
        component: LbjxtDetail
      },
      //点击进入错题反馈
      {
        path: "/lbjCtfk",
        name: "LbjCtfk",
        component: LbjCtfk
      },
      //点击进入学习卡
      {
        path: "/lbjXxk",
        name: "LbjXxk",
        component: LbjXxk
      },
       //点击进入余额明细
       {
        path: "/lbjyemx",
        name: "Lbjyemx",
        component: Lbjyemx
      },
 

];

const router = new VueRouter({
  routes
});

export default router;
