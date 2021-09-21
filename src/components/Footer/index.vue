<template>
  <!-- 底部导航 -->
    <div id="menu" class="menu fixed-bottom bg-light">
      <router-link replace to="/" class="menuItem">
        <div :class="{activeI:isHome}">
          <i class="iconfont icon-shouye-xiantiao"></i>
        </div>
        <a :class="{activeSpan:isHome}" href="javascript:;" style="text-decoration:none;">首页</a>
      </router-link>
      <router-link replace to="/community" class="menuItem">
        <div :class="{activeI:isCommunity}">
          <i class="iconfont icon-shequ1"></i>
        </div>
        <a :class="{activeSpan:isCommunity}" href="javascript:;">社区</a>
      </router-link>
      <router-link replace to="/me" class="menuItem">
        <div :class="{activeI:isMe}">
          <i class="iconfont icon-ren3"></i>
        </div>
        <a :class="{activeSpan:isMe}" href="javascript:;">我的</a>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data(){
      return{
          isHome:true,
          isCommunity:false,
          isMe:false,

      }
  },
  beforeMount(){
    //   this.routePath = this.$route.path
  },
  watch:{
    $route:{
      immediate:true,
      handler(){
        if(this.$route.path === '/'){
            this.isHome = true
            this.isCommunity = false
            this.isMe = false
        }else if(this.$route.path === '/community'){
            console.log(2222);
            this.isHome = false
            this.isCommunity = true
            this.isMe = false
        }else{
            this.isHome = false
            this.isCommunity = false
            this.isMe = true
        }
      }
    }
  },
  mounted(){

  }
}
</script>

<style lang="less" scoped>
// 底部导航栏样式
.menu{
    background-color: #eee;
    height: 16vw;
    display: flex;
    justify-content: space-around;

    .menuItem{
        width: 20vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        div{
            width: 9vw;
            height: 9vw;
            // background-color: red;
            border-radius: 50%;
            i{
                font-size: 6vw;
                margin-left: 1.5vw;
                margin-top: 1vw;
            }
        }
        a{
            font-size: 2vw;
            color: black;
        }
        
    }
    .activeI {
        color: white;
        background-image: linear-gradient(to top right, #FFC107, #fdf2d2);
    }
    .activeSpan{
        color: #FFC107 !important;
    }
}
</style>
