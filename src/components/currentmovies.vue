<template>
  <div class="citymovies container">
   <div class="choose">
     <span class="choose-cities">请选择您所在的城市(默认为北京)</span>
     <select class="js-city-selector" v-model='cityName'>
        <!-- <option value="null">选择城市</option> -->
        <option :value="p" v-for="p in addressData" >{{p}}</option>
     </select>
     </div> 
    <ul
      class="citymovies-container"
      v-infinite-scroll="getList"
      infinite-scroll-disabled="isLoading"
      infinite-scroll-distance="80"
    >
      <li v-for="(item,index) in inTheaterList" class="item" :key="index">
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
</template>

<script>
const addressData = ["北京", "上海", "成都", "广州", "贵阳","杭州"];
export default {
  name: "inTheater",
  data() {
    return {
      cityName: '北京',
      addressData: addressData,
      inTheaterList: null,
      index: 0,
      isLoading: false,
      isLoaded: false,
      allLoaded: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      if (this.isLoading || this.allLoaded) return;
      this.isLoading = true;
      $.ajax({
        url: "https://api.douban.com/v2/movie/in_theaters",
        type: "GET",
        data: {
          city: this.cityName 
        },
        dataType: "jsonp"
      })
        .done(res => {
          console.log(res);
            this.inTheaterList = res.subjects;
            this.allLoaded = true
        })
        .always(() => {
          this.isLoading = false;
        });
    }
  },
  computed: {
    directorList() {
      let directorList = [];
      if (this.inTheaterList) {
        this.inTheaterList.forEach(item => {
          let directors = item.directors;
          directorList.push(directors);
        });
      }
      return directorList;
    },
    actorList() {
      let actorList = [];
      if (this.inTheaterList) {
        this.inTheaterList.forEach(item => {
          let actors = item.casts;
          actorList.push(actors);
        });
      }
      return actorList;
    }
  },
  watch: {
    cityName: {
      handler(val) {
        if (!val) return;
        this.inTheaterList = null
        this.allLoaded = false;
        this.getList();
      }
    }
  }
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
.citymovies {
  -webkit-overflow-scrolling: touch;
  overflow: scroll;
  height: calc(100vh);
}
.bottom {
  text-align: center;
  font-size: 18px;
  color: #ccc;
}
.citymovies .citymovies-container .item a {
  color: #42b983;
  text-decoration: none;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.citymovies .citymovies-container .item img {
  width: 120px;
}
.citymovies .citymovies-container .item {
  width: 100%;
}
.citymovies .citymovies-container .item .detail {
  flex: 1;
  padding-left: 15px;
}
</style>
