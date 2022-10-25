import { fieldList } from "./types";
import Cookies from "js-cookie";

const BASE = "https://api.b7web.com.br/devsfood/api";

async function apiFetchPost(
   endpoint: string, 
   body: {
      name ?:string, 
      email:string, 
      state?:string,  
      password:string, 
      token ?: string}
   ) {

   if(!body.token){
      let token = Cookies.get('token');
      if(token){
         body.token = token;
      }
   }

   try{
      const res = await fetch(BASE+endpoint, {
      method: 'POST',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(body)
      });
      console.log(body)
      const json = await res.json();
      if(json.notallowed){
         window.location.href = '/signin';
      }
      return json;
   }catch{
     return('não foi possivel efetuar o login');
   }  
};

export default {
   getCategories: async ()=>{
      try {
         const response = await fetch(`${BASE}/categories`);
         const json = await response.json();
         if(json.error != ""){throw json.error;}
         return json.result;
      } catch (error) {
         return error;
      }  
   },
   getProducts: async (category?: number, search?: string)=>{
      try {
         let fields: any = {};

         if(category !== 0){
            fields.category = category;
         }
         
         if(search !== ''){
            fields.search = search;
         }

         let query = new URLSearchParams(fields).toString();
         // console.log(category)
         const response = await fetch(`${BASE}/products?${query}`);
         const json = await response.json();
         if(json.error != ""){throw json.error;}
         return json.result;


      } catch (error) {
         return error;
      }
   },
   login:async (email: string, password: string) => {
      const json = await apiFetchPost(
         '/login',
         {email, password}
      );
      console.log(json)
      return json;
   }
};