<template>
  <div>
          <!-- 头部 -->
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light"></nav> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#">
        <i class="iconfont icon-xinaixin-fuben"></i>
        No Violence
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <!-- <ul class="navbar-nav mr-auto text-center"> -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >首页<span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">介绍</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">帮助</a>
          </li>
        </ul>
        <!-- <form class="form-inline justify-content-center"> -->
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="请输入你想要搜索的内容"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            <i class="iconfont icon-sousuotubiao"></i>
            搜索
          </button>
        </form>
      </div>
    </nav>

    <!-- 内容 -->
    <section>
      <!-- 轮播 -->
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide><img class="swiperImg" src="./img/1.jpg" alt=""></swiper-slide>
        <swiper-slide><img class="swiperImg" src="./img/2.jpg" alt=""></swiper-slide>
        <swiper-slide><img class="swiperImg" src="./img/3.jpg" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <!-- 卡片栏 -->
      <div class="container cardWrapper">
        <div class="row justify-content-between ml-1 mr-1 text-light">
          <div @click="help" class="firstCard card text-center mt-3 bg-warning oneToOneHelp">
            <div class="card-body longCard">
              <i class="iconfont icon-woshou"></i>
              <span class="card-text">一对一帮扶</span>
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
          <div
            class="evidenceCard evenCard card text-center mt-3 bg-primary"
            style="width: 9.5rem; height: 7rem"
            @click="getEvidence()"
          >
            <div class="card-body">
              <h5 class="card-title"><i class="iconfont icon-xiangji1"></i></h5>
              <p class="card-text">一键保留证据</p>
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
          <div
            class="card text-center mt-3 bg-warning"
            style="width: 9.5rem; height: 7rem"
          >
            <div
              class="card-body"
              data-toggle="modal"
              data-target="#policeModal"
            >
              <h5 class="card-title">
                <i class="iconfont icon-icon-life-alarm"></i>
              </h5>
              <p class="card-text">一键报警</p>
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
            <!-- 报警弹出框 -->
            <div
              class="modal fade"
              id="policeModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-warning" id="exampleModalLabel">
                      警告
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body bg-warning">你确定要报警吗？</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      取消
                    </button>
                    <button type="button" class="btn bg-warning text-white real">
                      确认
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="card text-center mt-3 bg-warning"
            style="width: 9.5rem; height: 7rem"
          >
            <div class="card-body">
              <h5 class="card-title"><i class="iconfont icon-jiancha"></i></h5>
              <p class="card-text">申请验伤</p>
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
          <div
            class="evenCard card text-center mt-3 bg-primary"
            style="width: 9.5rem; height: 7rem"
          >
            <div class="card-body">
              <h5 class="card-title">
                <i
                  class="
                    iconfont
                    icon-shi-jiduantianqiqingkuangxiabihuzhongxinchuliqingkuang
                  "
                ></i>
              </h5>
              <p class="card-text">申请庇护所</p>
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
          <div
            class="evenCard card text-center mt-3 bg-primary"
            style="width: 9.5rem; height: 7rem"
          >
            <div class="card-body">
              <h5 class="card-title">
                <i class="iconfont icon-kuaidirenshubeifen"></i>
              </h5>
              <p class="card-text">申请人身保护令</p>
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
          <div
            class="card text-center mt-3 bg-warning"
            style="width: 9.5rem; height: 7rem"
          >
            <div
              class="card-body"
              data-toggle="modal"
              data-target="#exampleModal"
              data-whatever="@mdo"
            >
              <h5 class="card-title"><i class="iconfont icon-feedback"></i></h5>
              <p class="card-text">反馈</p>
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
            <!-- 反馈按钮弹出框 -->
            <div
              class="modal fade feelback"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-primary" id="exampleModalLabel">
                      新建反馈
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="form-group">
                        <label
                          for="recipient-name"
                          class="col-form-label text-primary"
                          >收件人:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="recipient-name"
                          disabled
                          placeholder="2856289572@qq.com"
                        />
                      </div>
                      <div class="form-group">
                        <label
                          for="message-text"
                          class="col-form-label text-primary"
                          >信息内容:</label
                        >
                        <textarea
                          class="form-control"
                          id="message-text"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      关闭
                    </button>
                    <button type="button" class="btn btn-primary real">
                      发送反馈
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 一对一帮扶加载栏 -->
      <div class="loadAnimaBg" ref="loadAnimaBg" :class="{show:isShow,hidden:isHidden}">
        <div class="loadAnima" ref="loadAnima" :class="{show:isShow,hidden:isHidden}">
          <img src="./img/loadingImg.gif" alt="" />
          <div>正在为你匹配</div>
          <a href="javascript:;" @click="cancelChoose()">取消匹配</a>
        </div>
        <div class="phoneOrwx" ref="phoneOrwx" :class="{show:isShow,hidden:isHidden}">
          <a href="javascript:;" @click="submit()" class="phone">
            <i class="iconfont icon-dianhua"></i>
          </a>
          <a href="javascript:;" @click="submit()" class="wx">
            <i class="iconfont icon-weixin"></i>
          </a>
          <a href="javascript:;" @click="cancelChoose()" class="cancel">退出</a>
        </div>
      </div>

      <!-- 一键获取证据弹出栏 -->
      <div class="getEvidenceBg hidden">
        <div class="picOrFile hidden">
          <a href="javascript:;" class="pic">
            <i class="iconfont icon-xiangji"></i>
            <input
              type="file"
              class="subImg"
              id="image"
              accept="image/*"
              capture="camera"
            />
          </a>
          <a href="javascript:;" class="vedio">
            <i class="iconfont icon-shexiangji"></i>
            <input
              type="file"
              class="subVideo"
              id="video"
              accept="video/*"
              capture="camcorder"
            />
          </a>
          <a href="javascript:;" class="file">
            <i class="iconfont icon-iconwenjian"></i>
            <input type="file" class="subFile" />
          </a>
          <a href="javascript:;" @click="cancelPic()" class="cancelPic"
            >退出</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Home',
  data(){
    return{
      isShow:false,
      isHidden:true,
      swiperOptions: {
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
    }
  },
  methods:{
    showHelp(){
      // let {loadAnimaBg,loadAnima,phoneOrwx} = this.$refs
      this.isShow = true
      this.isHidden = false
    },
    help (){
      // 黑色背景显示
      $('.loadAnimaBg').removeClass('hidden');
      $('.loadAnimaBg').addClass('show');

      // 微信等按钮显示
      $('.phoneOrwx').removeClass('hidden');
      $('.phoneOrwx').addClass('show');

      // 正在匹配显示
      // $('.loadAnima').removeClass('hidden');
      // $('.loadAnima').addClass('show');

      // clearTimeout(timer)
      // timer = setTimeout(() => {
      //     $('.loadAnima').removeClass('show');
      //     $('.loadAnima').addClass('hidden');
      //     $('.phoneOrwx').removeClass('hidden');
      //     $('.phoneOrwx').addClass('show');
      // },2500)
    },
    submit(){

          // 微信等按钮隐藏
          $('.phoneOrwx').removeClass('show');
          $('.phoneOrwx').addClass('hidden');

          // 正在匹配显示
          $('.loadAnima').removeClass('hidden');
          $('.loadAnima').addClass('show');

          // clearTimeout(timer)
          // $('.phoneOrwx').removeClass('show');
          // $('.phoneOrwx').addClass('hidden');

          // $('.loadAnimaBg').addClass('hidden');
          // $('.loadAnimaBg').removeClass('show');
    },
    cancelChoose(){
          // clearTimeout(timer)
          $('.loadAnima').removeClass('show');
          $('.loadAnima').addClass('hidden');
          $('.phoneOrwx').removeClass('show');
          $('.phoneOrwx').addClass('hidden');
          $('.loadAnimaBg').addClass('hidden');
          $('.loadAnimaBg').removeClass('show');
    },
    getEvidence(){
      $('.getEvidenceBg').removeClass('hidden');
      $('.picOrFile').removeClass('hidden');
      $('.getEvidenceBg').addClass('show');
      $('.picOrFile').addClass('show');
    },
    cancelPic(){
      $('.getEvidenceBg').removeClass('show');
      $('.getEvidenceBg').addClass('hidden');
      $('.picOrFile').removeClass('show');
      $('.picOrFile').addClass('hidden');
    }
  }
}
</script>

<style lang="less" scoped>
// 定义颜色变量
// @themeColor:#40A070;
@themeColor:#4E7CA0;
@bgColor:#edeeed;

// 头部
.navbar{
  background-color: @bgColor !important;
  // 左侧logo与文字
  .navbar-brand{
    color: @themeColor !important;
    i{

    }
  }
  // 下拉菜单按钮
  .navbar-toggler{
  }
  // 下拉菜单
  .collapse{
    button{
      color: @themeColor !important;
      border-color: @themeColor !important;
    }
  }
}
// 内容
section{
    background-image: linear-gradient(@bgColor,#fff) !important;
    padding-bottom: 20vw;
    .swiper-pagination{
      span.swiper-pagination-bullet-active{
        color: @themeColor !important;
      }
    }
    .swiperImg{
      width: 100vw;
      height: 58vw;
    }
    .cardWrapper{

        .card{
            background-color: white !important;
            color: @themeColor;
            box-shadow: 0 0 1vw 0.5vw #e7e7e7;
            border: none;
            padding: 0 !important;
            .card-body{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 3vw;
                .card-title{
                    margin: 0;
                    width: 15vw;
                }
                .card-text{
                    width: 20vw;
                }
                i{
                    font-size: 12vw;
                }
            }
            .longCard{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0;
                text-align: center;
                .card-text{
                    width: 25vw;
                }
                span{
                    display: inline-block;
                    // margin-top: 15vw;
                }
            }
            #policeModal{
              color: @themeColor;
              #exampleModalLabel{
                // background-color: @themeColor !important;
                color: @themeColor !important;
              }
              .modal-body{
                background-color: white !important;
                color: @themeColor !important;
              }
              .modal-footer{
                .real{
                  background-color: @themeColor !important;
                }
                
              }
            }
            .feelback{
              .modal-header{
                .modal-title{
                  color: @themeColor !important;
                }
              }
              .modal-body{
                .col-form-label,.form-control{
                  color: @themeColor !important;
                }
                
              }
              .modal-footer{
                .real{
                  background-color: @themeColor !important;
                }
              }
            }
        }
        .firstCard{
            width: 100% !important;
        }
    }
    // 一对一帮扶加载栏
    .loadAnimaBg{ 
        position: fixed;
        top: 0vh;
        z-index: 9999999999;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100vh;
        width: 100vw;
        // overflow: hidden;
        .loadAnima{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            text-align: center;
            div{
                margin-top: 2vw;
                color: white;
            }
        }
        .phoneOrwx{
            
            position: absolute;
            top: 50%;
            left: 50%;
            width: 60%;
            margin: 0 auto;
            transform: translateX(-50%) translateY(-50%);
            .phone,.wx,.cancel{
                float: left;
                height: 16vw;
                width: 16vw;
                border-radius: 50%;
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 2vw;
                background-color: #1FD56D;
                text-decoration: none;
                i{
                    font-size: 8.5vw;
                    color: white;
                }
            }
            .cancel{
                float: left;
                height: 16vw;
                width: 16vw;
                border-radius: 50%;
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 2vw;
                text-decoration: none;

                font-size: 4vw;
            }
        }
    }
    // 一键获取证据弹出栏
    .getEvidenceBg{
        position: fixed;
        top: 0vh;
        z-index: 9999999999;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100vh;
        width: 100vw;
        .picOrFile{
            position: absolute;
            top: 50%;
            left: 50%;
            width: 40%;
            margin: 0 auto;
            transform: translateX(-50%) translateY(-50%);
            .pic,.file,.vedio{
                
                float: left;
                height: 16vw;
                width: 16vw;
                border-radius: 50%;
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 2vw 2vw;
                background-color: #1FD56D;
                text-decoration: none;
                i{
                    font-size: 8.5vw;
                    color: white;
                }
            }
            .file{
                i{
                }
            }
            .cancelPic{
                float: left;
                height: 16vw;
                width: 16vw;
                border-radius: 50%;
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 2vw 2vw;
                text-decoration: none;

                font-size: 4vw;
            }
        }
    }
    // 上传文件按钮
    .subFile,.subImg,.subVideo{
        position: absolute;
        opacity: 0;
        width: 15vw;
        height: 15vw;
        border-radius: 50%;
    }
    .hidden{
        display: none !important;
    }
    .show{
        display: block !important;
    }
} 
</style>

<style>
/* 
  swiper分页是操作DOM生成的，所以应该在它的CSS style里面不写Scpoed，
  如果你的组件已经有了一个写过scpoed的style，
  那可以另写一个style用来设置swiper分页样式。
*/
section .swiper-pagination-bullet-active{
  background :#4E7CA0 !important;
}  
</style>
