<template>
  <div class="app">
    <div class="top-header">
      <div class="logo"><router-link to="/"><img src="./static/images/wui.png"/>WUI</router-link></div>
      <ul class="top-menu">
        <li><router-link to="/guide">指南</router-link></li>
        <li><router-link to="/guide">组件</router-link></li>
        <li><router-link to="/visual">可视化</router-link></li>
        <li><router-link to="/resource">资源</router-link></li>
        <li><router-link to="/feedback">反馈</router-link></li>
      </ul>
    </div>

    <section>
      <router-view></router-view>
    </section>

    <footer>
    </footer>

  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.component('App', {
  name: 'app',
  created(){
    console.log('created<>>>>>>>')
  }
})
</script>

<style lang="less-loader">
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  ul,li{list-style: none}
  a{text-decoration: none}
  
  .icon{
    display: inline-block;
    vertical-align: middle;
    width: 96px;
    height: 96px;
    background-size: 100% 100%;
  }
  .icon-start{
    background-image: url(./static/images/start.png);
  }
  .icon-component{
    width: 128px;
    height: 85px;
    background-image: url(./static/images/component.png);
  }
  .icon-resource{
    background-image: url(./static/images/resource.png);
  }

  .top-header{
    position: absolute;
    left: 0;
    top: 10px;
    width: 100vw;

    a{
      color: #fff;
    }

    .logo{
      height: 6vw;
      line-height: 6vm;
      color: #fff;
      font-size: 30px;
      padding: 10px;

      img{
        width: 5vw;
        height: 5vw;
        vertical-align: middle;
        margin-top: -10px;
        margin-right: 10px;
      }
    }

    .top-menu{
      position: absolute;
      right: 25vw;
      top: 30px;
      z-index: 10;
      display: flex;
      color: #ccc;
      li{
        width: 5vw;
      }
      li:hover{
        color: #fff;
        cursor: pointer;
      }
    }
  }

  footer{
    height: 50vh;
    background-color: #0c1f51;
  }
</style>