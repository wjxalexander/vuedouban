<template>
<div class="searchcontainer">
   <div class="container">
       <div class="searcharea">
         <input type="text" class="search" placeholder ='请输入想搜索的电影' v-model="keyword">
       <span @click="getList"><j-icon class="searchicon" name='search' ></j-icon></span>
       </div> 
      </div>
    <div class="search container">
    <ul
      class="search-container"
      v-infinite-scroll="getList"
      infinite-scroll-disabled="isLoading"
      infinite-scroll-distance="80"
    >
      <li v-for="(item,index) in movieList" class="item" :key="index">
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
    <p class = "bottom" v-if="allLoaded">我是有底线的</p>
  </div>
</div>

</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      movieList: null,
      keyword: null,
      isLoading: false,
      isLoaded: false,
      allLoaded: false,
    };
  },
  methods: {
    getList() {
      if(!this.keyword)return
      if(this.keyword.trim()===''){
        Toast({
          message:'输入不能为空',
          className: 'mint-toast'
        });
        return
      }
      this.isLoading = false;
      $.ajax({
        url: "https://api.douban.com/v2/movie/search",
        data: {
          q: this.keyword
        },
        dataType: "jsonp"
      }).done(ret=> {
          console.log(ret);
          this.movieList = ret.subjects
          this.isLoading =true
        })
        .fail(function() {
          console.log("searcherro");
        }).always(function(){
          console.log('done')
          this.isLoading = false;
        });
    }
  },
  computed: {
    directorList() {
      let directorList = [];
      if (this.movieList) {
        this.movieList.forEach(item => {
          let directors = item.directors;
          directorList.push(directors);
        });
      }
      return directorList;
    },
    actorList() {
      let actorList = [];
      if (this.movieList) {
        this.movieList.forEach(item => {
          let actors = item.casts;
          actorList.push(actors);
        });
      }
      return actorList;
    }
  },
};
</script>
<style scoped>
li {
  display: inline-block;
}
.searchcontainer .searcharea {
  position: relative;
  padding: 10px;
  border-bottom: 1px #ccc solid;
  margin-bottom: 10px;
}
.searchcontainer .container .search {
  width: 100%;
  height: 32px;
}
.searchcontainer .container .searchicon {
  position: absolute;
  fill: #ccc;
  right: 20px;
  top: 20px;
  cursor: pointer;
}
.searchcontainer {
  -webkit-overflow-scrolling: touch;
  overflow: scroll;
  height: calc(100vh);
}
.searchcontainer .container .item {
  width: 100%;
}
.searchcontainer .container .item a {
  color: #42b983;
  text-decoration: none;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.searchcontainer .container .item img {
  width: 120px;
}
.searchcontainer .container .item .detail {
  flex: 1;
  padding-left: 15px;
}
</style>
