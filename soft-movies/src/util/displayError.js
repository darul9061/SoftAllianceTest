import router from '../router'

export default function(err){
    
    let errDet = err.response
    let errDetStat = err.response.status
    if(errDetStat == 401){
      router.push({name: 'HelloWorld'})

    }else if(errDetStat == 400){
      let strin = errDet.data.errors[0]
      this.$store.commit('addError', strin)

    }else if(errDetStat == 500){

      this.$store.commit('addError', "Server error, please try again later")
    }else if(errDetStat == 422){

      this.$store.commit('addError', "Unprocessable entity, try again later")
    }else if(errDetStat == 404){

      this.$store.commit('addError', "Not found")
    }
}