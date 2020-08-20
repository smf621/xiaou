<template>
    <div class="detail">
        <CommonHead>
            <p>商品详情</p>
        </CommonHead>
        <main>
            <div class="img-box">
                <img :src="'http://localhost:3000'+list.img" alt />
            </div>
            <div class="context">
                <p>{{list.goodsname}}</p>
                <span class="price">￥{{list.price}}</span>
                <span></span>
            </div>
        </main>
        <footer>
            <div class="left" @click="goCart">
                <i class="iconfont icon-gouwuchezhengpin"></i>
                <p>购物车</p>
            </div>
            <div class="middle" @click="showVan">加入购物车</div>
            <div class="right">立即购买</div>
        </footer>

        <van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
            <div class="pop">
                <div class="img-box">
                    <img :src=" 'http://localhost:3000' + list.img" alt />
                    <div>
                        <p>{{ list.goodsname }}</p>
                        <p>&yen;{{ list.price }}</p>
                    </div>
                </div>

                <div class="color">
                    <p>{{list.specsname}}</p>
                    <div class="colors">
                        <div
                            v-for="(item,index) in specsattr"
                            :key="index"
                            @click="colorVal(item)"
                            :class="{active: item == color}"
                        >{{item}}</div>
                    </div>
                </div>
                <div class="count">
                    <p>购买数量</p>
                    <div class="count-box">
                        <div>-</div>
                        <span>{{num}}</span>
                        <div>+</div>
                    </div>
                </div>
                <div class="sure" @click="sure">确定</div>
            </div>
        </van-popup>
    </div>
</template>

<script>
import CommonHead from "@/components/common/commonHead";
import { Toast } from "vant";

export default {
    data() {
        return {
            list: [],
            show: false, //底部弹出框
            specsattr: [],
            color: "",
            num: 1,
        };
    },
    methods: {
        goCart() {
            this.$router.push("/home/cart");
        },
        showVan() {
            this.show = true;
        },
        colorVal(item) {
            this.color = item;
        },
        sure() {
            //判断登录状态
            //登陆成功之后存在了本地存储和vuex
            if (this.user.uid) {
                if (this.color) {
                    //调用购物车接口
                    this.$http
                        .post("/cartadd", {
                            uid: this.user.uid,
                            goodsid: this.list.id,
                            num: this.num,
                        })
                        .then((res) => {
                            console.log(res);
                            if (res.data.code == "200") {
                                Toast.success("添加商品成功");
                                this.show = false;
                            }
                        });
                } else {
                    Toast({
                        message: "请选择商品规格",
                        icon: "fail",
                    });
                }
            } else {
                Toast({
                    message: "将在2秒后自动跳转到登录页",
                    icon: "fail",
                });
                this.$router.push("/login");
            }
        },
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    mounted() {
        let id = this.$route.query.id;
        this.$http.get("/getgoodsinfo", { id: id }).then((res) => {
            console.log(res);
            this.list = res.data.list[0];
            this.specsattr = res.data.list[0].specsattr.split(",");
            console.log(this.specsattr);
        });
    },
    components: {
        CommonHead,
    },
};
</script>

<style scoped lang="stylus">
.detail
    width 100%
    height 100%
    display flex
    flex-direction column
    main
        flex 1
        .img-box
            height 7.5rem
        img
            width 100%
            height 100%
        .context
            padding 0 0.2rem
        .price
            color color
    footer
        width 100%
        height 1.15rem
        display flex
        text-align center
        line-height 1.15rem
        .left
            width 20%
        .middle
            width 40%
            background color
            color #fff
        .right
            width 40%
            background red
            color #fff
.pop
    width 100%
    height 100%
    .img-box
        display flex
        img
            width 2.2rem
            height 2.2rem
        div
            flex 1
            padding-left 0.3rem
    .color
        margin-top 0.1rem
        .colors
            display flex
            div
                margin-right 0.2rem
                width 2rem
                height 0.5rem
                border 0.01rem solid transparent
                line-height 0.5rem
                background-color #eee
                text-align center
                &.active
                    color color
                    border-color color
    .count-box
        display flex
        div
            width 0.6rem
            height 0.6rem
            background-color #EEEEEE
            text-align center
            line-height 0.6rem
        span
            margin 0 0.2rem
            font-size 0.3rem
            line-height 0.6rem
    .sure
        position absolute
        bottom 0.1rem
        left 50%
        transform translate(-50%)
        width 75%
        height 1rem
        border-radius 0.4rem
        background-color color
        text-align center
        line-height 1rem
        color #fff
</style>
