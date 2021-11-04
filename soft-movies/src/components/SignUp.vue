<template>
  <div class="body">
      <center>
            <form @submit.prevent="register()">
            <div class="reg-cov-txt">
                <h4 class="login-reg-txt black-text">Sign Up</h4>
                <div class="reg-underline1"></div>
            </div>

            <div class="input-field">
                <input v-model="name" class="white" type="text" id="name" />
                <label for="name"> Full Name </label>
            </div>
            <div class="input-field">
                <input v-model="email" class="white" type="email" id="email" />
                <label for="email"> Email</label>
            </div>
            <div class="input-field">
                <input
                v-model="password"
                class="white"
                type="password"
                id="password"
                />
                <label for="password"> Password</label>
            </div>

            <center>
                <button class="btn waves-effect waves-black login-btn">Sign Up</button>
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
import axios from "axios";

export default {
  data() {
    return {
      email: null,
      password: null,
      name: null,
      error: undefined,
      profile: {
        user: " ",
      },
    };
  },
  methods: {
    register() {
      axios
        .get("http://localhost:80/softalliance/public/sanctum/csrf-cookie")
        .then(() => {
          axios
            .post(
              "http://localhost:80/softalliance/public/api/signup",
              {
                email: this.email,
                password: this.password,
                name: this.name,
              },
              {
                "Access-Control-Allow-Origin": "*",
                // "X-CSRF-TOKEN": window.csrf_token,
                // "X-Requested-With": 'XMLHttpRequest',
                "content-type": "application/json",
              }
            )
            .then((res) => {

              let getting = res.data
              if(getting.status == true){
                this.$store.commit('addError', null)
                this.$router.push({name: 'HelloWorld'})
              }else{
                this.$store.commit('addError', getting.message)
              }
              // console.log(res.data);
            })
            .catch((err) => {
              let errDet = err.response.status
              if(errDet == 401){
                this.$store.commit('addError', err.response.data.message)

              }else if(errDet == 400){
                let strin = Object.values(err.response.data.errors)[0][0]
                this.$store.commit('addError', strin)

              }else if(errDet == 500){
                this.$store.commit('addError', "Server error, please try again later")

              }else if(errDet == 422){
                this.$store.commit('addError', Object.values(err.response.data.errors)[0][0])

              }else if(errDet == 404){
                this.$store.commit('addError', "Not found")
              }
              // console.log(err.response);
            });
        });
    },
  },
};
</script>
<style scope>

    form{
      width: 500px;
    }
    center{
      margin-bottom: 30px;
    }
</style>