<template>
  <div class="mytitle">
    <div class="mylogo">
      <div class="myloimg">
        <img
          src="https://puui.qpic.cn/vupload/0/1570516378024_vr59hnsql8.png/0"
          alt=""
        />
      </div>
      <div class="mydenglu">
        <div>
          <van-icon name="search" />
        </div>
        <div class="delu">登录</div>
        <div class="mybtn">打开APP</div>
      </div>
    </div>
    <div class="mydiv">
      <ul class="myui">
        <li>
          <router-link tag="span" to="/jingxuan">精选</router-link>
        </li>
        <li>
          <router-link tag="span" to="/dianshiju">电视剧</router-link>
        </li>
        <li>
          <router-link tag="span" to="/vip">VIP</router-link>
        </li>
        <li>
          <router-link tag="span" to="/nba">NBA</router-link>
        </li>
        <li>
          <router-link tag="span" to="/dianying">电影</router-link>
        </li>
        <li>
          <router-link tag="span" to="/zongyi">综艺</router-link>
        </li>
        <li>
          <router-link tag="span" to="/dongman">动漫</router-link>
        </li>
        <li>
          <router-link tag="span" to="/shaoer">少儿</router-link>
        </li>
        <li>
          <router-link tag="span" to="/yule">娱乐</router-link>
        </li>
        <li>
          <router-link tag="span" to="/youxi">游戏</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyTitle",
};
</script>
<style lang="less" scoped>
.mytitle {
  .mylogo {
    padding: 0 0.24rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .myloimg {
      img {
        width: 2.06rem;
      }
    }
    .mydenglu {
      width: 3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .delu {
        font-size: 0.26rem;
      }
      .mybtn {
        width: 1.42rem;
        height: 0.48rem;
        line-height: 0.48rem;
        background: #ff6022;
        color: #fff;
        text-align: center;
        font-size: 0.24rem;
        border-radius: 0.5rem;
      }
    }
  }
  .mydiv {
    width: 7.26rem;
    overflow: auto;
    .myui {
      line-height: 0.8rem;
      font-size: 0.34rem;
      font-weight: 800;
      width: 12rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
    }
  }
}
</style>
