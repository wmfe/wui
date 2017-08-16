<template>
  <div class="index-page">
    <header>
      <ul class="side-menu">
        <li><i class="icon icon-start"></i><p>5分钟入门</p></li>
        <li><i class="icon icon-component"></i><p>组件</p></li>
        <li><i class="icon icon-resource"></i><p>资源</p></li>
      </ul>

      <div class="banner">
        <img src="../static/images/oval.svg"/>
        
        <div class="slogan">
          一套高交互性和高性能的UI库
          <p>
            <a href="">demo</a>
            <a href="">可视化工具</a>
          </p>
        </div>
      </div>

    </header>

    <section class="page-body">

    </section>
  </div>
</template>

<script> 
export default {
  name: 'index'
}
</script>

<style lang="less-loader">

  .index-page{
    header{
      width: 100vw;
      height: 100vh;
      background-color: #0c1f51;
      font-size: 18px;

      .side-menu{
        position: absolute;
        right: 0;
        top: 0;
        background-color: #1b45a7;
        height: 100vh;
        text-align: center;
        width: 20vw;
        font-size: 20px;
        li{
          height: 33.33333vh;
          color: #ffffff;
          padding-top: 8vh;
          i{
            margin-bottom: 20px;
          }
        }
        li:first-child{
          background-color: #2255ce;
        }
        li:last-child{
          background-color: #153684;
        }
      }

      .banner{
        position: relative;
        width: 80vw;
        img{
          width: 100%;
          transform: scale(1.25) translate3d(4vw, 1vw, 0);
        }
        .slogan{
          position: absolute;
          left: 10%;
          top: 40%;
          color: #fff;
          font-size: 50px;
          p{
            padding: 30px 0;
            display: flex;
            a{
              border: 1px #ccc solid;
              border-radius: 50px;
              padding: 10px 50px;
              color: #fff;
              text-decoration: none;
              font-size: 20px;
              margin: 10px;
            }
          }
        }
      }
      
    }

    .page-body{
      min-height: 100vh;
      background-color: #f5f5f5;
    }
  }
  
</style>