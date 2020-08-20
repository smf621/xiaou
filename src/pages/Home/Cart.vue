<template>
    <div class="cart">
        <CommonHead>
            <p>购物车</p>
        </CommonHead>

        <ul>
        <li ref="lis" @touchstart="start"  @touchend="end(index,$event)" v-for="(item,index) in cartList" :key="index">
            <div class="content">
                <i class="iconfont icon-quanxuan" :class="{active:item.checked}" @click="changeColor(item)"></i>
                <img :src="'http://localhost:3000'+item.img" alt="">
                <div>
                    <p>{{item.goodsname}}</p>
                    <p>{{item.price}}</p>
                </div>
                <div>
                    <button>-</button>
                    <span>{{item.num}}</span>
                    <button>+</button>
                </div>
            </div>
            <div class="del">删除</div>
        </li>
        </ul>
        <div class="total">
            <i @click="changAll" class="iconfont icon-quanxuan" :class="{'active': checkAll}"></i>
            <div class="totalPrice">
                总计：￥{{totalPrice}}
            </div>
            <div class="goSet">去结算({{goodsNum}}件)</div>
        </div>


    </div>
</template>

<script>
    import CommonHead from "../../components/common/commonHead";

    export default {
        data() {
            return {
                cartList: [],
                checkAll: false,
                startX:'',
            }
        },
        watch: {
            cartList: {
                deep: true,
                handler() {
                    this.checkAll = this.cartList.every(item => {
                        return item.checked
                    })
                }
            }
        },
        methods: {
            changeColor(item) {
                item.checked = !item.checked
            },
            changAll() {
                this.checkAll = !this.checkAll
                this.cartList.forEach(item => {
                    item.checked = this.checkAll
                })
            },
            start(e){
                // console.log(e);
                 this.startX = e.touches[0].clientX
            },
            end(i,e){
                console.log(i);
                // console.log(e);
                let endX = e.changedTouches[0].clientX;
                if(this.startX - endX > 50 ){
                    this.$refs.lis[i].style.transform = "translateX(-1rem)"
                }
                 if(endX - this.startX> 50 ){
                    this.$refs.lis[i].style.transform = "translateX(0rem)"
                }
                
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            },
            totalPrice(){
                let sum = 0
                this.cartList.forEach( item => {
                    if(item.checked){
                        sum += item.price * item.num
                    }
                })
                return sum
            },
            goodsNum(){
                return this.cartList.filter( item =>{
                    return item.checked
                }).length
            }
        },
        mounted() {
            this.$http.get('/cartlist', {
                uid: this.user.uid
            }).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.cartList = res.data.list
                    this.cartList = res.data.list.map(item => {
                        return {...item, checked: false}
                    })
                }
            })
        },
        components: {
            CommonHead
        }

    }
</script>

<style scoped lang="stylus">
.cart
    width 100%
    height 100%
    display flex
    flex-direction column
    ul
        flex 1
        overflow-y auto
        overflow-x hidden

    .total
        height 1rem
        display flex
        justify-content space-between
        line-height 1rem
        margin-left .3rem 
        .icon-quanxuan
            font-size .5rem
        .totalPrice
            font-size .24rem
        .goSet
            width 25%
            height 100%
            background color
            text-align center
            color #fff
            font-size .26rem

li
    width 100%
    height 2rem
    position relative
    padding 0 .3rem
    transition  all 1s
    .content
        width 100%
        display flex
        justify-content space-between
        align-items center

        i
            font-size .4rem

            &.active
                color color

        img
            width 1.5rem
            height 1.5rem

    .del
        position absolute
        right -1rem
        top 0
        height 100%
        width: 1rem;
        background darkred
        color #fff
        line-height: 2rem;
        text-align center

    button
        width .6rem
        height .4rem

.total
    i
        &.active
            color color

</style>
