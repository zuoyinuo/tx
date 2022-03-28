<template>
  <div class="MyYuLe">
    <!-- <div class="Yule"> -->
    <div class="Video" v-for="(item, index) in arr2" :key="index">
      <img :src="item.imgSrc" />
      <div class="bottom">
        <img :src="item.icon" alt="" />
        <span>{{ item.txt }}</span>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "MyYule",
  data() {
    return {
      arr2: null,
    };
  },
  methods: {
    async getVideo() {
      let { data } = await axios.get("/api/yule");
      console.log(data);
      this.arr2 = data.Video;
    },
  },
  mounted() {
    this.getVideo();
  },
};
</script>
<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
.MyYuLe {
  width: 100%;
  overflow: hidden;
  padding: 0 0.18rem 0 0.18rem;
  box-sizing: border-box;
  .Video {
    width: 7.5rem;
    height: 4.8rem;
    margin-bottom:35px;
    .img1 {
      width: 100%;
      height: 4.21rem;
    }
    .bottom {
      width: 7.5rem;
      overflow: hidden;
      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin: 10px 0 0 10px;
        float: left;
      }
      span {
        float: left;
        font-size: 12px;
        margin: 10px 0 0 12px;
      }
    }
  }
}
</style>
