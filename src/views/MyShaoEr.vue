<template>
  <div class="ShaoEr">
    <van-swipe class="my-swipe" :autoplay="3000">
      <van-swipe-item v-for="(item,index) in arr" :key="index">
        <img :src="item.src"/>
        <div class="txt">
          <span>{{item.txt}}</span>
        </div>
      </van-swipe-item>
    </van-swipe>
    <div class="LM">
      <h3>大家都在刷的宝藏动画</h3>
      <img src="//puui.qpic.cn/tv/0/1230139064_540304/0?max_age=7776000" class="img1">
      <p>侦探大联盟</p>
    </div>
    <div class="VIP">
      <h3>我是尊享VIP</h3>
      <div class="VIP_content">
        <div class="left" v-for="(item,index) in arr1" :key="index">
          <img :src="item.img" alt="">
          <p>{{item.title}}</p>
          <p>{{item.title1}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "MyShaoEr",
  data(){
      return {
          arr:null,
          arr1:null
      }
  },
  methods: {
    async getMy() {
      let { data } = await axios.get("/api/shaoer");
      console.log(data)
      this.arr = data.swiper;
    },
    async getVip() {
      let { data } = await axios.get("/api/shaoer");
      console.log(data)
      this.arr1 = data.VIP;
    }
  },
  mounted() {
    this.getMy();
    this.getVip()
  },
};
</script>
<style lang="less" scoped>
.ShaoEr {
  width: 100%;
  overflow: hidden;
  padding: 0 .18rem 0 .18rem;
  /deep/.van-swipe {
    width: 100%;
    height: 100%;
    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.1);
    }
    .van-swipe-item {
      width: 100%;
      height: 100%;
      // padding: 0 0.18rem;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 86%;
      }
      .txt {
        width: 100%;
        height: .7rem;
        font-size: 0.14rem;
      }
    }
  }
  .LM{
    width:7.5rem;
    height:3.5rem;
    h3{
      font-size:16px;
    }
    .img1{
      width:100%;
      height:2.5rem;
      margin-top:.15rem;
    }
    p{
      font-size:.12rem;
    }
  }
  .VIP{
    width:7.5rem;
    height:3.5rem;
    margin-top:10px;
    h3{
      font-size:16px;
    }
    .VIP_content{
      width:7.5rem;
      height:2.36rem;
      .left{
        width:3.54rem;
        height:2.36rem;
        float:left;
        margin-right:11px;
        margin-bottom:20px;
        img{
          width:100%;
        }
        p{
          font-size:12px;
        }
      }
    }
  }
}
</style>