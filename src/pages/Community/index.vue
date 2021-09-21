<template>
  <div>
    <!-- 头部 -->
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light"></nav> -->
    <nav class="fixed-top navbar navbar-light bg-light justify-content-between">
      <a class="navbar-brand">社区</a>
      <form class="form-inline">
        <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">+</button> -->
        <button
          type="button"
          class="communityBtn btn btn-secondary"
          data-container="body"
          data-toggle="popover"
          data-placement="bottom"
          data-content="发布贴子"
        >
          +
        </button>
      </form>
    </nav>

    <!-- 内容 -->
    <section class="communityContent">
      <!-- 滑动门 -->
      <!-- <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
            >Profile</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="pills-contact-tab"
            data-toggle="pill"
            href="#pills-contact"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
            >Contact</a
          >
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque libero
          laudantium quia ad, facere odio exercitationem sit eius laboriosam
          magni dicta eligendi! Error soluta debitis quibusdam aperiam ex hic
          nisi!
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          2
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          3
        </div>
      </div> -->

      <div class="nav-tabs-wrapper">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">今日热贴</a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">每日一学</a>
            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">最新关注</a>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">你吃饭了吗，我吃了，吃的什么，好吃的</div>
          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">今天真开心</div>
          <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">关注关注关注Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet voluptatibus quos rerum eaque deserunt voluptate! Laborum repellat praesentium aperiam atque, quasi tempore cumque consequuntur, culpa aliquid molestias perspiciatis perferendis?</div>
        </div>
      </div>

      <!-- 帖子栏 -->
      <div class="ivitationWrapper">
        <div class="ivitationItem">
          <h3 class="ivitationTitle">打车软件为何如此稀缺</h3>
          <div class="ivitaionName">
            <i class="iconfont icon-ren"></i>
            <span>吴中生有</span>
          </div>
          <div class="ivitaionText">
            今天天气真的好啊真的好真的好啊真的好，今天天气真的好啊真的好真的好啊真的好
          </div>
          <div class="ivitaionEval">
            <span>81点赞</span>
            <span>65评论</span>
          </div>
        </div>
        <div class="ivitationItem">
          <h3 class="ivitationTitle">打车软件为何如此稀缺</h3>
          <div class="ivitaionName">
            <i class="iconfont icon-ren"></i>
            <span>吴中生有</span>
          </div>
          <div class="ivitaionText">
            今天天气真的好啊真的好真的好啊真的好，今天天气真的好啊真的好真的好啊真的好
          </div>
          <div class="ivitaionEval">
            <span>81点赞</span>
            <span>65评论</span>
          </div>
        </div>
        <div class="ivitationItem">
          <h3 class="ivitationTitle">打车软件为何如此稀缺</h3>
          <div class="ivitaionName">
            <i class="iconfont icon-ren"></i>
            <span>吴中生有</span>
          </div>
          <div class="ivitaionText">
            今天天气真的好啊真的好真的好啊真的好，今天天气真的好啊真的好真的好啊真的好
          </div>
          <div class="ivitaionEval">
            <span>81点赞</span>
            <span>65评论</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Community",
};
</script>

<style lang="less" scoped>
// 社区内容
section.communityContent{
    padding-bottom: 15vw;
    // padding: 0 5vw;
    .nav-tabs-wrapper{
      // border: 1px solid black;
      height: 40vw;
      .nav-tabs{
          // border: 1vw solid black;
          margin: 8vw 5vw 0 5vw;
          font-size: 4vw;
      }
      .tab-content{
          border: 1px solid #DEE2E6;
          border-top: none;
          margin: 0 5vw;
          padding: 3vw 4vw;
          height: 30vw;
          overflow: auto;
      }
    }
    .ivitationWrapper{
        .ivitationItem{
            margin: 4.5vw 0;
            padding: 5vw 5vw 1vw 5vw;
            background-color: #F6F6F6;
            box-shadow: 0vw 0vw 1vw 1vw #eee;
            .ivitationTitle{
                font-size: 5vw;
                font-weight: 600;
            }
            .ivitaionName{
                font-size: 3.5vw;
                color: #4b4b4b;
                font-weight: 500;
            }
            .ivitaionText{
                font-size: 4.5vw;
                margin: 1.5vw 0;
            }
            .ivitaionEval{
                font-size: 3.5vw;
                color: #909090;
                line-height: 8vw;
                align-items: center;
            }
        }
    }
}
</style>
