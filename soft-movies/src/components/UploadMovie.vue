<template>
  <div class="body">
      
      <center>
            <form @submit.prevent="register()">

            <div class="input-field">
                <input v-model="name" class="white" type="text" id="name" />
                <label for="name"> Name </label>
            </div>
            <div class="input-field">
                <input v-model="description" class="white" type="text" id="name" />
                <label for="name"> Description </label>
            </div>
            <div class="input-field">
                <input v-model="reease_date" class="white" type="text" id="name" />
                <label for="name"> Release Date </label>
            </div>
            <div class="input-field">
                <input v-model="rating" class="white" type="number" id="name" />
                <label for="name"> Rating </label>
            </div>
            <div class="input-field">
                <input v-model="ticket_price" class="white" type="number" id="name" />
                <label for="name"> Ticket Price </label>
            </div>
            <div class="input-field">
                <input v-model="country" class="white" type="text" id="name" />
                <label for="name"> Country </label>
            </div>
            <center>
                <button class="btn waves-effect waves-black login-btn">Create</button>
            </center>

          <center>
            <router-link to="/login">
              <div class="btn center signup blue center-align">Login</div>
            </router-link>
          </center>
            </form>
      </center>
  </div>
</template>
<script>
import axios from "../util/axios";
// import displayError from "../util/displayError";

export default {
  data() {
    return {
        name: null,
        description: null,
        rating: null,
        ticket_price: null,
        country: null
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
                "/create",
                {
                    name: this.name,
                    description: this.description,
                    rating: this.rating,
                    ticket_price: this.ticket_price,
                    country: this.country
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

    form{
      width: 500px;
    }
    center{
      margin-bottom: 30px;
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