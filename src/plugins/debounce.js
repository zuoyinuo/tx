// 防抖：在短时间内用户多次执行触发事件，无论触发多少次只执行最后一次
var debounce = function (func, wait) {
    var timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            func();
        }, wait)
    }
}
export default debounce