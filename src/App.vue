<template>
  <div>
    <router-link to="/">
      <div id="top">
        <img class="icon" src="./assets/icon.png">
        <span class="title">RIFLE</span>
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
      <!--<img src="./assets/logo.png">-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navData from './nav.config.json'

// try {
//   x = y
// } catch (e) {
//   console.log(e.name, e.message, e.lineNumber)
//   console.log(e.__proto__)
// }

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
body {
  margin: 0
}
a {
  color: currentColor;
  cursor: auto;
  text-decoration: none;
}
h1, h2, h3, h4, h5, h6, h7, p, pre {
  text-align: left;
}
table {
  border-collapse: collapse;
  margin-bottom: 20px;
}
table th {
  padding: 10px 8px;
  text-align: left;
  border-top: 1px solid #eaeefb;
  background-color: #eff2f7;
  white-space: nowrap;
}
table td {
  border-bottom: 1px solid #eaeefb;
  padding: 10px;
  max-width: 250px;
  text-align: left;
}
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
  font-size: 40px;
  position: absolute;
  top: 6px;
}
#sidebar {
  position: absolute;
  left: 0;
  top: 70px;
  width: 240px;
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
</style>
