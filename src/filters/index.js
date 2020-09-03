import moment from "moment";
moment.locale("zh-cn");

//定义处理日期的全局过滤器
// Vue.filter("dateTime", function (v1) {

//   const result = moment(v1*1000).format("YYYY年MM月DD日，HH时mm分SS秒");

//   return result;
// });

//处理日期
export function dateTime(v1) {
  const result = moment(v1 * 1000).format("MM月DD日 HH:mm");
  return result;
}

//处理课程详情日期
export function lessDate(v1) {
  const result = moment(v1 * 1000).format("YYYY-MM-DD HH:mm");
  return result;
}

//处理我的学习日期
export function MeLess(v1) {
  const result = moment(v1 * 1000).format("MM月-DD日 HH:mm");
  return result;
}

//处理余额明细
export function MeYe(v1) {
  const result = moment(v1 * 1000).format("YYYY-MM-DD");
  return result;
}


//处理课程明细
export function LessMx(v1) {
  const result = moment(v1 * 1000).format("MM月-DD日 HH:mm");
  return result;
}