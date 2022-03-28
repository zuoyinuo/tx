<template>
  <div class="MyZongYi">
    <div class="header">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img
            src="https://puui.qpic.cn/tv/0/1242095970_1080607/0?max_age=7776000"
            alt=""
          />
          <div class="head-con">
            <p>【闪亮】高秋梓健身初体验 赵奕欢变私人教练</p>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://puui.qpic.cn/tv/0/1241484635_1080607/0?max_age=7776000"
            alt=""
          />
          <div class="head-con">
            <p>【环游记游戏版】未播高光→贾玲杨洋无实物滑雪</p>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://puui.qpic.cn/tv/0/1241376082_1080607/0?max_age=7776000
    "
            alt=""
          />
          <div class="head-con">
            <p>【大伙之家】甘望星林墨挑扁担神似奥特曼</p>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://puui.qpic.cn/tv/0/1242038470_1080607/0?max_age=7776000"
            alt=""
          />
          <div class="head-con">
            <p>【告白5】小伙突破心理障碍反转告白前女友</p>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="content">
      <p class="con-p">热播推荐☀</p>
      <ul class="con-list" v-for="(item, index) in arr" :key="index">
        <li>
          <div class="imgUrl">
            <img :src="item.imgUrl" alt="" />
            <p class="p3">{{ item.score }}</p>
          </div>
          <p class="p1">{{ item.title }}</p>
          <p class="p2">{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "MyZongYi",
  data() {
    return {
      arr: null,
    };
  },
  methods: {
    async getDian() {
      let { data } = await axios.get("/api/zongyi");
      this.arr = data;
    },
  },
  mounted() {
    this.getDian();
  },
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
.MyZongYi {
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
.con-list {
  width: 100%;
}
.con-list li {
  float: left;
  margin: 0 0.1rem 0 0;
}
.con-list .imgUrl {
  width: 3.4rem;
  height: 1.9rem;
  margin-bottom: 0.1rem;
  position: relative;
}
.con-p {
  font-size: 16px;
  margin-bottom: 0.1rem;
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
