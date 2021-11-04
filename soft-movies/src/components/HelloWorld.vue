<template>
  <div class="hello">
    <h4 class="blue-text">
      Top Rated Movies
    </h4>
    <div class="film-cover">
      <div class="film" @click="goTo(movie)" v-for="(movie, index) in top" :key="index">
          <img class="film-image" :src="image+movie.photo" alt="" srcset="">
          <h6 style="position: absolute; top: 0; left: 0;" class="white-text"> {{movie.name}} </h6>
          <h6 style="position: absolute; bottom: 0; right: 0;padding: 0 30px 0 0; display: flex; align-items: center;"> 
            <img style="margin: 15;" width="20" height="20" src="../assets/orange-star.png"> 
            <p style="margin: 15;" class="white-text"> {{movie.rating}} </p>
          </h6>
      </div>
    </div>
    <h4 class="blue-text">
      New Movies
    </h4>
    <div class="film-cover">
      <div class="film" @click="goTo(movie)" v-for="(movie, index) in newMovie" :key="index">
          <img class="film-image" :src="image+movie.photo" alt="" srcset="">
          <h6 style="position: absolute; top: 0; left: 0;" class="white-text"> {{movie.name}} </h6>
          <h6 style="position: absolute; bottom: 0; right: 0;padding: 0 30px 0 0; display: flex; align-items: center;"> 
            <img style="margin: 15;" width="20" height="20" src="../assets/orange-star.png"> 
            <p style="margin: 15;" class="white-text"> {{movie.rating}} </p>
          </h6>
      </div>
    </div>
    <h4 class="blue-text">
      Random Movies
    </h4>
    <div class="film-cover">
      <div class="film" @click="goTo(movie)" v-for="(movie, index) in random" :key="index">
          <img class="film-image" :src="image+movie.photo" alt="" srcset="">
          <h6 style="position: absolute; top: 0; left: 0;" class="white-text"> {{movie.name}} </h6>
          <h6 style="position: absolute; bottom: 0; right: 0;padding: 0 30px 0 0; display: flex; align-items: center;"> 
            <img style="margin: 15;" width="20" height="20" src="../assets/orange-star.png"> 
            <p style="margin: 15;" class="white-text"> {{movie.rating}} </p>
          </h6>
      </div>
    </div>
  </div>
</template>

<script>
// import displayError from "../util/displayError";
// import axios from "../util/axios";

import axios from "../util/axios";
// import displayError from "../util/displayError";

export default {
  data() {
    return {
        top: [],
        newMovie: [],
        random: [],
        image: "http://localhost:80/softalliance/"
    };
  },
  created(){
      this.getMovies()
  },
  methods: {
    getMovies() {
      axios(
          "/home",
          "GET",
      )
      .then((res) => {
        // console.log(res.data);

        let getting = res.data
        if(getting.status == true){
          this.$store.commit('addError', null)
          this.top = res.data.movies.top
          this.newMovie = res.data.movies.new
          this.random = res.data.movies.random
        }else{
          this.$store.commit('addError', getting.message)
        }
      })
      .catch((err) => {
        console.log(err);
      });
        
    },
    goTo(movie){
      this.$store.commit("addMovie", movie);
      this.$router.push({name: "Movie"})
    }
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h6{
  font-size:25px !important;
}
.film-image{
  width: 220px;
  height: 300px;
  object-fit: cover;
}
.film{
  cursor: pointer;
  overflow: hidden;
  position: relative;
  height: 300px;
  background: -webkit-linear-gradient(130Deg, rgb(53, 52, 52), rgb(114, 114, 114));
  box-shadow: 0px 1px 30px #ADADAD;
  border-radius: 20px;
}
.film-cover{
  width: 100%;
  display: grid;
  gap: 14% 5.8%;
  grid-template-columns: 220px 220px 220px 220px;
  justify-content: center;
  align-self: flex-start;
}
h3 {
  margin: 40px 0 0;
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
