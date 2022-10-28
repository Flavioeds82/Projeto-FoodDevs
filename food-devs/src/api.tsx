import { fieldList } from "./types";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import qs from 'qs';
import axios from "axios";
import { Navigate } from "react-router";

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

   editAddress: async (
      token:string,
      data: 
         {
         newaddress:{
              
               title ?:string, 
               street1 ?:string, 
               number ?:string,  
               zipcode ?:string, 
               city ?: string,
               state ?: string
            }
         }
         )=>{

         let query = new URLSearchParams(token).toString();
         console.log("QUERY "+ query)
         try {
            const req = await axios.put(BASE+`/user?token=${query}`, data)
            return req.data
         } catch (error) {
            alert("Não foi possivel alterar o endereço, faça o login e tente novamente.")
            console.log("Error : " + error)
         }
         
},
   addUser: async( name :string, email:string, password:string )=>{
     
         const body = {
            name,
            email,
            password
         }
         try{
            const res = await fetch(BASE+"/user", {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify(body)
            });
            const json = await res.json();
            if(json.notallowed){
               window.location.href = '/register';
            }
            console.log(json)
            return json;
         }catch{
           return('não foi possivel efetuar o login');
         }  

},
   editUser: async (
      token:string,
      data: 
      {
         name ?:string, 
         email ?:string, 
         password ?:string,  
         password_confirm ?:string 
      }
         
         )=>{

         let query = new URLSearchParams(token).toString();
         console.log("QUERY "+ query)
         try {
            const req = await axios.put(BASE+`/user?token=${query}`, data)
            return req.data
         } catch (error) {
            alert("Não foi possivel alterar o endereço, faça o login e tente novamente.")
            console.log("Error : " + error)
         }
         
   },


      

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
         const response = await fetch(`${BASE}/products?${query}`);
         const json = await response.json();
         if(json.error != ""){throw json.error;}
         return json.result;


      } catch (error) {
         return error;
      }
   },

   login: async (email: string, password: string) => {
      const json = await apiFetchPost(
         '/login',
         {email, password}
      );
      return json;
   },

   logout: async (token: string) => {
      let query = new URLSearchParams(token).toString();
      const response = await fetch(`${BASE}/logout?token=${query}`);
      const json = await response.json();
      return json;
   },

   getUser: async function(token: string) {
      let query = new URLSearchParams(token).toString();
      const response = await fetch(`${BASE}/user?token=${query}`);
      const json = await response.json();
      return json;
   },
   getDelivery: async function(token: string, id?:number, street1?:string, city?:string, state?:string) {
      let query = new URLSearchParams(token).toString();
      const response = await fetch(`${BASE}/deliverycalc?token=${query}`);
      const json = await response.json();
      return json;
   }
};