// 节流：连续点击触发的事件，固定每嗝一段时间执行一次
var throttle = function (func, wait) {
    var timer = null;
    return function () {
        //非空终止程序
        if (timer) return
        //timer为空
        timer = setTimeout(function () {
            func();
            timer = null;
        }, wait)
    }
}
export default throttle