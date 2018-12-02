<template>
  <div id="app">
    <footer class="navbar">
      <div class="bottom-nav">
        <div class="bar topmovies">
          <router-link :to="{'name':'index'}">
            <span>
              <j-icon name='homepage'></j-icon>
            </span>
            <span>TOP250</span>
          </router-link>
        </div>
        <div class="bar current">
        <router-link :to="{'name':'intheater'}"> 
          <span>
           <j-icon name='movie'></j-icon>
          </span>
          <span>正在热映</span>
        </router-link>
        </div>
        <div class="bar search">
          <router-link :to="{'name':'search'}"> 
          <span>
            <j-icon name='search'></j-icon>
          </span>
          <span>搜索</span>
          </router-link>
        </div>
      </div>
    </footer>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color: #666;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  width: 100%
}

.navbar {
  position: fixed;
  width: 100%;
  bottom: 0px;
  z-index: 10000;
}
.navbar .bottom-nav {
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 50px;
  background:#fff;
  opacity: 0.8;
  border-top: 0.5px solid #ccc;
}
.bottom-nav .bar {
  width: 20rem;
  flex: 1;
  text-align: center;
  vertical-align: middle
}
.router-link-exact-active{
  color: red
}
.router-link-exact-active .j-icon { 
  fill: red
}
</style>
