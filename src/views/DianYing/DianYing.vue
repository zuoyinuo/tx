<template>
  <div class="DianYing">
    <div class="header">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img
            src="https://puui.qpic.cn/tv/0/1242102447_1080607/0?max_age=7776000"
            alt=""
          />
          <div class="head-con">
            <p>【不要忘记我爱你】娜扎刘以豪甜蜜暴击</p>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://puui.qpic.cn/tv/0/1242203181_1080607/0?max_age=7776000"
            alt=""
          />
          <div class="head-con">
            <p>【狙击手·张艺谋】志愿军以血肉之躯保家卫国</p>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://puui.qpic.cn/tv/0/1241922109_1080607/0?max_age=7776000
"
            alt=""
          />
          <div class="head-con">
            <p>【十年一品温如言】丁禹兮任敏十年甜虐大赏</p>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://puui.qpic.cn/tv/0/1240730047_1080607/0?max_age=7776000"
            alt=""
          />
          <div class="head-con">
            <p>【穿过寒冬拥抱你·会员免费】黄渤贾玲演温情大片</p>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="content">
      <h4>重磅热播</h4>
      <ul class="con-list">
        <li>
          <div class="imgUrl">
            <img
              src="https://puui.qpic.cn/tv/0/1242203112_1080607/0?max_age=7776000"
              alt=""
            />
            <p class="p3">7.6</p>
          </div>
          <p class="p1">东北往事我叫黄中华</p>
          <p class="p2">血性时代！东北江湖纷争再起</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DianYing",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
ul,
li {
  list-style: none;
}
.DianYing {
  padding: 0 0.25rem;
  box-sizing: border-box;
}
.header {
  width: 100%;
  margin-bottom: 0.18rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.head-con {
  width: 100%;
  height: 0.7rem;
  background: rgb(245, 246, 247);
}
.head-con p {
  color: #000;
  font-size: 14px;
  line-height: 0.7rem;
}
.DianYing .content h4 {
  font-size: 16px;
  margin-bottom: 0.2rem;
}
.con-list {
  display: flex;
}
.con-list .imgUrl {
  width: 3rem;
  height: 1.8rem;
  margin-bottom: 0.1rem;
  position: relative;
}
.con-list .p1 {
  font-size: 12px;
  color: #000028;
  margin-bottom: 0.1rem;
}
.con-list .p2 {
  font-size: 12px;
  color: #a2a2b6;
  margin-bottom: 0.1rem;
}
.con-list .p3 {
  position: absolute;
  font-size: 12px;
  bottom: 0.1rem;
  right: 0.1rem;
  color: #fff;
  background: rgba(162, 162, 182, 0.5);
}
</style>