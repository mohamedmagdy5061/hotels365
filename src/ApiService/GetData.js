import axios from "../../node_modules/axios";


const url = "http://my-json-server.typicode.com/fly365com/code-challenge"


export const GetData = ()=>{
 return( axios.get(`${url}/hotels`).then(res => {
      return res.data;
   })
   .catch(error => console.error("Response Error ===>:",error)))
}

export const GetDataById = (id)=>{
    return( axios.get(`${url}/hotelDetails/`, {
        params: {id}
    })
    .then(res => {
         return res.data;
      })
      .catch(error => console.error("Response Error ID ===>:",error)))
   }
   
   