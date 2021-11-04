<template>
  <div class="body">
      
      <center style="margin-top: 30px">
        <div class="film">
            <img class="film-image" :src="image+movie.photo" alt="" srcset="">
            <h6 style="position: absolute; top: 0; left: 0;" class="white-text"> {{movie.name}} </h6>
            <h6 style="position: absolute; bottom: 0; right: 0;padding: 0 30px 0 0; display: flex; align-items: center;"> 
              <img style="margin: 15;" width="20" height="20" src="../assets/orange-star.png"> 
              <p style="margin: 15;" class="white-text"> {{movie.rating}} </p>
            </h6>
        </div>
        </center>
        <h4 style="font-weight: 500 !important;">Movie Details</h4>
      <div v-for="(item, index) in Object.values(movie)" :key="index">
          <h5 v-if="index <= 6 && index > 0">
            <Span class="blue-text"> {{Object.keys(movie)[index]}}</span> {{Object.values(movie)[index]}}
          </h5>
      </div>

      
      <h4 style="font-weight: 500 !important;">Comments</h4>
      <div v-for="(item, index) in comments" :key="index">
          {{item.comment}}
      </div>
      <div class="input-field">
        <textarea placeholder="make comment" v-model="comment" name="comment" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="btn blue" @click="save()">
        Comment
      </div>
  </div>
</template>
<script>
import axios from "../util/axios";
// import displayError from "../util/displayError";

export default {
  data() {
    return {
        movie: this.$store.state.movie,
        comments: [],
        comment: null,
        genres: [],
        image: "http://localhost:80/softalliance/"
    };
  },
  created(){
      if(!this.$store.state.movie){
          this.$router.push({name: 'HelloWorld'})
      }else{
          this.comments = this.$store.state.movie.comments
          this.genres = this.$store.state.movie.genres
        console.log(this.comments)
      }
  },
  methods: {
    save() {
            axios(
                "/postComment",
                {
                    movie_id: this.movie.id,
                    comment: this.comment
                },
                "POST",
                { 
                    "Authorization": localStorage.getItem("token"),
                    "Content-Type": "application/json"
                }
            )
            .then((res) => {
              console.log(res.data);
              this.$router.push({name: "HelloWorld"})
            })
            // .catch((err) => {
            //   console.log(err);
            //   displayError(err)
            // });
        
    },
  },
};
</script>
<style>
textarea::placeholder{
  color: rgb(73, 73, 73)
}
.film{
  overflow: hidden;
  position: relative;
  height: 300px;
  width: 220px;
  background: -webkit-linear-gradient(130Deg, rgb(53, 52, 52), rgb(114, 114, 114));
  box-shadow: 0px 1px 30px #ADADAD;
  border-radius: 20px;
}
</style>