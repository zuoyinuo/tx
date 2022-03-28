<template>
  <div class="about">
    <van-swipe :autoplay="10000" class="swiper">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" @click="Preview_img(images, index)" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
    import {ImagePreview} from 'vant';//引入预览
    export default {
        name: 'HelloWorld',
        data() {
            return {
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ],
        
            }
        },
        methods: {
            // 轮播图预览
            Preview_img(images, index) {
                ImagePreview({
                    images: images,//图片数组
                    showIndex: true,
                    loop: false,
                    startPosition: index
                })
            }
        }
    }
</script>
<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

</style>