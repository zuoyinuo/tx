<template>
  <div class="dongman">
    <!-- 轮播 -->
    <van-swipe @change="onChange"
               class="lunbo">
      <van-swipe-item>
        <img src="https://puui.qpic.cn/tv/0/1242203467_1080607/0?max_age=7776000"
             alt="">
        <p>星辰变[更新]：境界突破，去秘境夺宝！</p>
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://puui.qpic.cn/tv/0/1242165624_1080607/0?max_age=7776000"
             alt="">
        <p>星辰变[更新]：境界突破，去秘境夺宝！</p>
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://puui.qpic.cn/tv/0/1242183954_1080607/0?max_age=7776000"
             alt="">
        <p>星辰变[更新]：境界突破，去秘境夺宝！</p>
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://puui.qpic.cn/tv/0/1242169794_1080607/0?max_age=7776000"
             alt="">
        <p>星辰变[更新]：境界突破，去秘境夺宝！</p>
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://puui.qpic.cn/tv/0/1242129575_1080607/0?max_age=7776000"
             alt="">
        <p>星辰变[更新]：境界突破，去秘境夺宝！</p>
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://puui.qpic.cn/tv/0/1242058498_1080607/0?max_age=7776000"
             alt="">
        <p>星辰变[更新]：境界突破，去秘境夺宝！</p>
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://puui.qpic.cn/tv/0/1242019854_1080607/0?max_age=7776000"
             alt="">
        <p>星辰变[更新]：境界突破，去秘境夺宝！</p>
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://puui.qpic.cn/tv/0/1241982347_1080607/0?max_age=7776000"
             alt="">
        <p>星辰变[更新]：境界突破，去秘境夺宝！</p>
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/8</div>
      </template>
    </van-swipe>
    <!--  -->
    <div class="main-man1">
      <h6 class="title-h">最近更新</h6>
      <ul>
        <li v-for="(item,index) in arrs"
            :key="index">
          <img :src="item.image"
               alt="">
          <h5>{{item.title}}</h5>
          <p>{{item.Rititle}}</p>
        </li>
      </ul>
    </div>
    <!--  -->
    <div class="main-man1">
      <h6 class="title-h">每日更新</h6>
      <ul>
        <li v-for="(item,index) in arra"
            :key="index">
          <img :src="item.image"
               alt="">
          <h5>{{item.title}}</h5>
          <p>{{item.Rititle}}</p>
        </li>
      </ul>
    </div>
    <!--  -->
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "MyDongMan",
  data () {
    return {
      current: 0,
      arrs: null,
      arra: null
    };
  },
  methods: {
    onChange (index) {
      this.current = index;
    },
    async getdongman () {
      let { data } = await axios.get("/api/dongman")
      console.log(data)
      this.arrs = data.meiri
      this.arra = data.tuijian
    },
  },
  created () {
    this.getdongman()
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
.dongman {
  height: 100%;
  padding: 0.2rem 0.2rem;
  color: #000;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  font-size: 12px;
  color: #000;
  margin-right: 0.1rem;
}
.lunbo {
  width: 100%;
  height: 4rem;
}
.lunbo img {
  width: 100%;
  height: 3.5rem;
}
.lunbo p {
  font-size: 0.12rem;
  color: #000;
  height: 0.5rem;
  line-height: 0.2rem;
}
.main-man1 {
  width: 100%;
  margin-top: 12px;
}
.main-man1 .title-h {
  font-size: 0.4rem;
  margin: 0.2rem 0;
}
.main-man1 ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.main-man1 ul li {
  width: 49%;
  margin: 0.2rem 0;
}
.main-man1 ul li img {
  width: 3.5rem;
}
.main-man1 ul li p {
  font-size: 0.12rem;
}
.main-man1 ul li h5 {
  font-size: 0.2rem;
  margin: 0 0 0.1rem 0;
}
</style>

