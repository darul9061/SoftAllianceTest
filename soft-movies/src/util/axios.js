import axios from "axios";
import store from '../store'
import router from '../router'

export default function (
  url = "",
  data = {},
  method = "GET",
  headers = { "Content-Type": "application/json" }
) {
    return axios({
            baseURL: "http://localhost:80/softalliance/public/api",
            url: url,
            data: data,
            method: method,
            headers: headers,
        })
        .catch((err) => {
            console.log(err.response);
    
            let errDet = err.response
            let errDetStat = err.response.status
            if(errDetStat == 401){
              router.push({name: 'Login'})
        
            }else if(errDetStat == 400){
              let strin = errDet.data.errors[0]
              store.commit('addError', strin)
        
            }else if(errDetStat == 500){
        
              store.commit('addError', "Server error, please try again later")
            }else if(errDetStat == 422){
        
              store.commit('addError', "Unprocessable entity, try again later")
            }else if(errDetStat == 404){
        
              store.commit('addError', "Not found")
            }
        });;

  
//   "Authorization": localStorage.getItem("token"),
}
