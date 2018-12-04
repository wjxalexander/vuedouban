<template>
  <div class="topmovies container">
    <ul
      class="topmovies-container"
      v-infinite-scroll="getList"
      infinite-scroll-disabled="isLoading"
      infinite-scroll-distance="80"
    >
      <li v-for="(item,index) in topMoviesList" class="item" :key="index">
        <a :href="item.alt">
          <div class="image">
            <img :src="item.images.small" alt>
          </div>
          <div class="detail">
            <h2>{{item.title}}</h2>
            <div class="extra">
              <span class="score">{{item.rating.average}}分</span>
            </div>
            <div class="extra">
              <span class="year">{{item.year}}年</span>
            </div>
            <div class="extra">
              导演：
              <span class= "director"
              v-for="item in directorList[index]" 
              >{{item.name}}</span>
            </div>
            <div class="extra">
              演员：
              <span class= "actor"
               v-for="item in actorList[index]" 
              >{{`${item.name} `}}</span>
              </div>
          </div>
        </a>
      </li>
    </ul>
    <div class="loading" v-if="isLoading">
      <span class="icon">
        <j-icon name='loading' class="icon-active"></j-icon>
      </span>
    </div>
    <p class = "bottom" v-if="allLoaded">我是有底线的</p>
  </div>
</template>

<script>
export default {
  name: "top250",
  data() {
    return {
      topMoviesList: null,
      index: 0,
      isLoading: false,
      isLoaded: false,
      allLoaded: false,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      if (this.isLoading||this.allLoaded) return;
      this.isLoading = true;
      $.ajax({
        url: "https://api.douban.com/v2/movie/top250",
        data: {
          start: this.index || 0
        },
        dataType: "jsonp"
      }).done(res => {
        console.log(res);
        if(!this.topMoviesList){
         this.topMoviesList = res.subjects;
        }else{
          this.topMoviesList = this.topMoviesList.concat(res.subjects)
        }
        this.index += 20;
        if (this.index >= res.total) {
          this.isLoading = true;
          this.allLoaded = true;
        }
      }).always(()=>{
        this.isLoading = false
      });
    },
  },
  computed:{
    directorList(){
      let directorList = []
      if(this.topMoviesList){
         this.topMoviesList.forEach(item=>{
        let directors = item.directors
        directorList.push(directors)
      })
      }
      return directorList
    },
    actorList(){
      let actorList=[]
      if(this.topMoviesList){
        this.topMoviesList.forEach(item=>{
          let actors = item.casts
          actorList.push(actors)
        })
      }
      return actorList
    }
  },
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
  text-decoration: none
}
.topmovies{
  -webkit-overflow-scrolling: touch;
  overflow: scroll;
  height: calc(100vh);
}
.bottom{
  text-align: center;
  font-size: 18px;
  color: #ccc;
}
.topmovies .topmovies-container .item a{
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.topmovies .topmovies-container .item img{
  width: 120px;
}
.topmovies .topmovies-container .item{
  width: 100%;
}
.topmovies .topmovies-container .item .detail{
  flex: 1;
  padding-left: 15px
}
@keyframes rotate{
  from{
    transform: rotate(360deg);
  }
}
.topmovies .loading{
  display: flex;
  text-align: center;
  justify-content: center
}
.topmovies .loading .icon-active{
  padding: 15px;
  display: block;
  text-align: center;
  animation: rotate linear infinite;
  fill: #ccc;
  font-size: 30px;
  animation-duration: 2s
}
</style>
