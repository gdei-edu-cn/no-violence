<template>
  <div>
          <!-- 头部 -->
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light"></nav> -->
    <nav class="fixed-top navbar navbar-light bg-light justify-content-between">
      <a class="navbar-brand">个人中心</a>
    </nav>
    

    <!-- 内容 -->
    <section class="myContent">
      <div class="myHead">
        <i class="iconfont icon-ren2"></i>
        <div class="myHeadText">
          未登录
        </div>
        <a class="myHeadMore" href="javascript:;">
          >
        </a>
      </div>
      <div class="myContentItem">
        <i class="iconfont icon-ren2"></i>
        <a href="javascript:;">收藏</a>
        <span>></span>
      </div>
      <div class="myContentItemS">
        <div class="myContentItem">
          <i class="iconfont icon-ren2"></i>
          <a href="javascript:;">钱包</a>
          <span>></span>
        </div>
        <div class="myContentItem">
          <i class="iconfont icon-ren2"></i>
          <a href="javascript:;">关于</a>
          <span>></span>
        </div>
        <div class="myContentItem">
          <i class="iconfont icon-ren2"></i>
          <a href="javascript:;">帮助</a>
          <span>></span>
        </div>
        <div class="myContentItem">
          <i class="iconfont icon-ren2"></i>
          <a href="javascript:;">更多</a>
          <span>></span>
        </div>
      </div>
      <div class="myContentItem">
        <i class="iconfont icon-ren2"></i>
        <a href="javascript:;">设置</a>
        <span>></span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'My',
}
</script>

<style lang="less" scoped>
// 我的页面
section.myContent{
    height: 90vh;
    background-color: #eee;
    padding-top: 4vw;
    .myHead{
        background-color: white;
        height: 25vw;
        padding: 0 5vw;
        display: flex;
        align-items: center;
        i{
            font-size: 15vw;
        }
        .myHeadText{
            margin-left: 3vw;
            font-size: 5vw;
            color: #007BFF;
            width: 66vw;
        }
        .myHeadMore{
            font-size: 8vw;
            color: black;
        }
    }
    .myContentItem{
        padding: 0 5vw;
        height: 12vw;
        margin: 4vw 0;
        background-color: white;
        display: flex;
        align-items: center;
        i{
            font-size: 8vw;
        }
        a{
            display: inline-block;
            margin-left: 4vw;
            font-size: 4vw;
            width: 74vw;
        }
        span{
            font-size: 5vw;
            color: black;
        }
    }
    .myContentItemS>.myContentItem{
        margin: 0;
        border-bottom: 1px solid #eee;
    }
}
</style>
