<template>
 <div class="topMovies container">
   <ul class="topmovies-container">
     <li v-for="(item,index) in topMoviesList" class='item' :key="index">
       <a :href="item.alt">
         <div class="image">
           <img :src="item.images.small" alt="">
         </div>
         <div class="detail">
           <h2>{{item.title}}</h2>
         </div>
       </a>
     </li>
   </ul>
 </div>
</template>

<script>
export default {
  name: 'top250',
  data () {
    return {
      topMoviesList: null,
      index: 0,
      isLoading: false,
      isLoaded: false,
      allLoaded: false,
    }
  },
  created(){
    this.getList()
  },
  methods:{
    getList(){
      if(this.isLoading) return;
      this.isLoading = true;
      $.ajax({
      url: 'https://api.douban.com/v2/movie/top250',
      data: {
      start: this.index||0
    },
      dataType: 'jsonp'
    }).done(res=>{
      console.log(res)
      this.topMoviesList = res.subjects
      this.index += 20
      if(this.index >= res.total){
        this.allLoaded = true;
      }
    })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
