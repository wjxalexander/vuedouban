<template>
  <div id="app">
    <footer class="navbar">
      <div class="bottom-nav">
        <div class="bar topmovies">
          <router-link :to="{'name':'index'}">
            <span>
              <i class="fas fa-award"></i>
            </span>
            <span>TOP250</span>
          </router-link>
        </div>
        <div class="bar america">
          <span>
            <i class="fas fa-award"></i>
          </span>
          <span>正在热映</span>
        </div>
        <div class="bar search">
          <span>
            <i class="fas fa-search"></i>
          </span>
          <span>搜索</span>
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
  text-decoration:none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}

.navbar {
  position: fixed;
  width: 100%;
  bottom: 0px;
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
}
</style>
