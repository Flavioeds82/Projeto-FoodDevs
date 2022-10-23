import { fieldList } from "./types";

const BASE = "https://api.b7web.com.br/devsfood/api";

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
   }
};