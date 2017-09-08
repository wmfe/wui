<template>
  <div>
    <router-link to="/">
      <div id="top">
        <img class="icon" src="./images/wui.png">
        <span class="title">WUI</span>
        <span>移动端组件库</span>
      </div>
    </router-link>
    <div id="sidebar">
        <div class="bar-list">
          组件列表
        </div>
        <router-link :to="v.path" v-for="v in routerData" :key="v.name" active-class="bar-item-active">
          <div class="bar-item">
            {{v.title}}
          </div>
        </router-link>
    </div>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navData from './nav.config.json'

export default {
  name: 'app',
  data () {
    return {
      routerData: navData.slice(1) || []
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{ text-decoration: none }
section{ text-align: left }

#top {
  width: 100%;
  height: 70px;
  background-color: #20a0ff;
}
.icon {
  width: 55px;
  margin-left: 50px;
  margin-top: 8px;
}
.title {
  font-size: 36px;
  position: absolute;
  top: 6px;
  color: #fff;
}
#sidebar {
  position: absolute;
  left: 0;
  top: 70px;
  width: 240px;
  border-right: 1px solid #eee;
  min-height: 100vh;
}
.bar-item, .bar-list {
    display: block;
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    padding: 0 24px;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.router-link-exact-active, .bar-item-ative, .bar-item:hover {
  color: dodgerblue;
}
.bar-list {
  cursor: auto;
  font-weight: bold;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 240px;
}
#app>section{
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  overflow: auto;
}
</style>
