<template>
  <div>
    <header>
      <div class="img-box">
        <img src="../../assets/logo.jpg" alt />
      </div>
      <input type="text" placeholder="寻找商品" />
      <i class="iconfont icon-gengduo"></i>
    </header>

    <div class="banner">
      <Swiper ref="mySwiper" :options="swiperOptions">
        <Swiper-slide v-for="(item) in bannerList" :key="item.id">
          <img :src="'http://localhost:3000'+item.img" alt="img" />
        </Swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </Swiper>
    </div>
    <div class="nav">
      <ul>
        <li v-for="(item,index) in navList" :key="index" @click="category(index)">
          <i :class="['iconfont',item.iconfont]"></i>
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
    <div class="goods-tab" v-if="goodsList.length > 0">
      <div class="tab">
        <ul>
          <li
            v-for="(item,index) in arr"
            :key="index"
            :class="{active:index==ind}"
            @click="changTab(index)"
          >{{item}}</li>
        </ul>
      </div>
      <div class="goods">
        <ul>
          <li v-for="(item,index) in goodsList[ind].content" :key="index">
            <div class="img-box">
              <img :src="'http://localhost:3000'+item.img" alt />
            </div>
            <div class="contont">
              <p class="name">{{item.goodsname}}</p>
              <p>{{item.price}}</p>
              <p class="count">已售8000</p>
              <div class="button">立即抢购</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      ind: 0,
      arr: ["热门推荐", "新品推荐", "全部商品"],
      goodsList: [],
      bannerList: [],
      navList: [
        {
          title: "限时抢购",
          iconfont: "icon-xianshiqianggou",
        },
        {
          title: "积分商城",
          iconfont: "icon-jifenshangcheng",
        },
        {
          title: "联系我们",
          iconfont: "icon-lianxiwomen-copy",
        },
        {
          title: "商品分类",
          iconfont: "icon-shangpinfenlei",
        },
      ],
      swiperOptions: {
        autoplay: true,
        loop: true,
      },
    };
  },
  methods: {
    category(i) {
      if (i == 3) {
        this.$router.push("/category");
      }
    },
    changTab(i) {
      this.ind = i;
    },
  },
  mounted() {
    this.$http.get("/getbanner").then((res) => {
      this.bannerList = res.data.list;
    });
    this.$http.get("/getindexgoods").then((res) => {
      console.log(res);
      this.goodsList = res.data.list;
    });
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style scoped lang="stylus">
header 
    padding 0 .23rem
    width 100%
    height 0.88rem
    border-bottom 0.01rem solid #eee
    display flex
    align-items center
    justify-content space-between
    .img-box 
      width 1.5rem
      height .3rem
      img
        width 100%
        height 100%
    input
      width 3rem
      height .39rem
      background: #eee;
      text-align center
      // border-radius: .06rem;
    .icon-gengduo
      font-size .5rem
.swiper-container
  width 100%
  height 2.38rem
  img
    width 100%
.nav
  width 100%
  height 1.7rem
  ul
    width 100%
    height 100%
    display flex
    align-items center
    color #000
  li
    flex 1
    text-align center
.goods-tab
  display flex
  flex-direction column
  width 100%
  .tab
    ul
      display flex
      li
        border 0.01rem solid #ccc
        height 0.68rem
        line-height 0.68rem
        flex 1
        text-align center
        font-size 0.28rem
        color #1c1c1c
        &.active
          background color
          color #fff
  .goods
    ul
      display flex
      flex-direction column
      li
        display flex
        .img-box
          width 2.9rem
          height 100%
          img
            width 100%
            height 100%
        .contont
          display flex
          flex-direction column
          justify-content space-around
          padding 0.25rem 0
          font-size 0.28rem
          .name
            color #333
          .count
            font-size 0.22rem
            color #666
          .button
            width 1.6rem
            height 0.5rem
            background color
            color #fff
            text-align center
            line-height 0.5rem
</style>