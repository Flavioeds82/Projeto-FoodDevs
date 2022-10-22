const BASE = "https://api.b7web.com.br/devsfood/api";

export default {
   getCategories: async ()=>{
      try {
         const response = await fetch(`${BASE}/categories`);
         const json = await response.json();
         if(json.error != ""){throw json.error;}
         return json.result;
      } catch (error) {
         return "Categorias não encontradas(api)"
      }
      
      
   }
};