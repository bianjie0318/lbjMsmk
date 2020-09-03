import request from "./request"

//封装业务的各种接口

// 轮播图获取
export function setBanner() {
    return request({
        url: '/api/app/banner',
        method: 'GET'
    })
}

// 用户获取验证码
export function get_code(data) {
    return request({
        url: '/api/app/smsCode',
        method: 'Post',
        data: data
    })
}

// 用户登录
export function login(data) {
    return request({
        url: '/api/app/login',
        method: 'Post',
        data: data
    })
}
// 验证码登陆
export function loginyz(data) {
    return request({
        url: '/api/app/login',
        method: 'Post',
        data: data
    })
}

//获取课程列表

export function lessonList(params) {
    let token = localStorage.getItem("token");
    return request({
        url: '/api/app/courseBasis?',
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        headers: {},
        params
    })
}

//获取名师阵容数据
export function setTeacher() {
    return request({
        url: '/api/app/recommend/appIndex',
        method: 'GET',
    })
}

//获取课程分类
export function getKec() {
    return request({
        url: '/api/app/courseClassify?',
        method: 'GET'
    })
}

//获取用户信息
export function getUserinfo(params) {
    let token = localStorage.getItem("token");
    return request({
        url: '/api/app/userInfo',
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        params,

    })
}

// 获取名师阵容数据
// export function getUserInfo(data){
//     return request({
//         url:'/api/app/userInfo',
//         method:'POST',
//         data,
//         header:{
//             Authorization: `Bearer ${token}`
//         }
//     })
// }
// 

// 名师列表
export function getMings() {
    return request({
        url: '/api/app/otoCourse',
        method: 'GET',
    })
}

// 一对一辅导的选择条件渲染
export function getChoice() {
    return request({
        url: '/api/app/otoCourseOptions?',
        method: 'GET',
    })
}

//杨德胜详情
export function getDetail(id) {
    return request({
        url: `/api/app/teacher/${id}`,
        method: 'GET',
    })
}
// 杨德胜详情内容
export function getDetailNei(id) {
    return request({
        url: `/api/app/teacher/info/${id}`,
        method: 'GET',
    })
}

// 杨德胜主讲
export function getDetailZhuj(data) {
    return request({
        url: '/api/app/teacher/mainCourse',
        method: 'Post',
        data
    })
}
// 课程详情
export function getlessDetail(id) {
    let token = localStorage.getItem("token");

    return request({
        url: `/api/app/courseInfo/basis_id=${id}`,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },


    })
}
// 课程详情评论
export function getlessdiscuss(data) {
    return request({
        url: '/api/app/courseComment',
        method: 'Post',
        data
    })
}
// 讲师详情学员评价
export function jsDetail(data) {
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/teacher/comment`,
        method: 'Post',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        data
    })
}
// //进预约课程
export function getDetailY(id) {
    let token = localStorage.getItem("token");

    return request({
        url: `/api/app/teacher/${id}?`,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },

    })
}

//关注
export function getDetailG(id) {
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/teacher/collect/${id}`,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },

    })
}


//我的关注了的列表
export function getDetailYg(params) {
    let token = localStorage.getItem("token");
    return request({
        url: '/api/app/collect',
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        params

    })
}

//我的关注了的列表取消
export function getDetailYgQ(id) {
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/collect/cancel/${id}/2`,
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },


    })
}


//点击我的收藏
export function getShouc(data) {
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/collect`,
        method: 'Post',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        data


    })
}

//获取到的收藏列表

export function getShoucLie(params) {
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/collect`,
        method: 'Get',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        params

    })
}


//取消收藏
export function getShoucQxLie(id) {
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/collect/cancel/${id}/1
        `,
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },


    })
}


//报名
export function getBaom(data) {
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/order/downOrder
        `,
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        data

    })
}

//非免费的报名
export function shopInfo(data) {
    let token = localStorage.getItem("token")


    return request({
        url: `/api/app/order/shopInfo`,
        headers: {
            Authorization: token
        },
        method: "POST",
        data
    })
}



//收费接口
export function getShouf(data) {
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/order/shopInfo
        `,
        method: 'Post',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        data

    })
}

// 每时每刻学习
export function getMeis({ id }) {
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/myStudy/course/${id}`,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },

    })
}



// 拍照的个人信息接口
export function getPai(params) {
    let token = localStorage.getItem("token");

    return request({
        url: `/api/app/userInfo`,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        params

    })
}

// 拍照的图片接口
export function getTu(data) {
    let token = localStorage.getItem("token");

    return request({
        url: `/api/app/public/img`,
        method: 'Post',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        data

    })
}

// 拍照的图片路径
export function getLuj(data) {
    let token = localStorage.getItem("token");

    return request({
        url: `/api/app/user`,
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        data

    })
}

// 视频
export function getVideo({ token, video_id, course_id }) {
    return request({
        url: `/api/app/getPlayToken/video_id=${video_id}/course_id=${course_id}`,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            // DeviceID: "AD11D691-BECE-AE86-1ABB-F5ADCE883D9F",
            Authorization: token
        },

    })
}

// 预约课程里的日期
export function getDate(data) {
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/teacher/invite`,
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        data
    })
}

// 点击专点练习
export function getZhuanl(params) {
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/wap/classify?`,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        params
    })
}

// 点击专点练习右侧数据
export function getYouczl(id) {
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/wap/quesBank/${id}?`,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },

    })
}

// 点击套卷练习里的数据
export function getTlx() {
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/exam/classify?`,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },

    })
}

// 考点专练搜索接口
export function bankSearch(params) {
    // console.log(params.params.bank)
    let bank = params.params.bank
    return request({
        url: "api/app/wap/search/bank?",
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        params: {
            bank: bank
        }
    });
}

// 点击题库选择进入内层
export function getTim(params) {
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/examPoint/${params.params.classify_id}/${params.params.id}`,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    })
}

// 点击右侧小箭头进习题选择页的导航
export function getNav(id) {
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/point/info/${id}`,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        // params
    })
}


// 点击右侧小箭头进习题选择页
export function getDuoxt(params) {
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/examPoint/questions/${params.params.id}/${params.params.parent_id}?`,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        // params
    })
}


// 点击交卷里的收藏
export function getJusc(data) {
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/collect`,
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        data
    })
}

// 点击交卷里的显示收藏
export function getXssc(params) {
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/collect?`,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        params
    })
}

// 点击习题详情
export function getXtxq(id) {
    // console.log(id)
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/myCollect/detail/${id}`,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        // paramsvf
    })
}

// 获取课程订单全部
export function getclassdd(data) {
    // console.log(id)
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/myOrder`,
        method: 'Post',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        data
    })
}

// 获取我的学习里的数据
export function getLearnsj(type) {
    // console.log(id)
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/myStudy/${type}`,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        // params
    })
}

// 获取我的学习里的数据
export function getHuiy() {
    // console.log(id)
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/vip/grade?`,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        // params
    })
}

// 获取余额明细
export function getMx() {
    // console.log(id)
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/coin/item?page=1&`,
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        // params
    })
}


// 获取课程通知
export function getTzo(data) {
    // console.log(id)
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/message/getMessage`,
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        data
    })
}

// 获取订单通知
export function getDdTz(data) {
    // console.log(id)
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/message/getMessage`,
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        data
    })
}

// 进入消息通知里的内容
export function getDope(params) {
    // console.log(id)
    let token = localStorage.getItem("token");
    return request({
        url: `/api/app/message/classifyMessage`,
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        params
    })
}


