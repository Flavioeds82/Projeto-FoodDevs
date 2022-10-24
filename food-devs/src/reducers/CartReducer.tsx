import { AnyAction } from "redux";
import { Product } from "../types";



const initialState = {
   products: [],
   address: [],
   discount: 0,
   delivery: 0
};

export default (state = initialState, action: AnyAction)=>{
   switch (action.type) {
      case "ADD_PRODUCT":
         let products:Product[] = [...state.products];
         let id = action.payload.selectedProduct.id;
         let index = products.findIndex((item) => item.id === id);
         if(index > -1){
            products[index].qt += action.payload.modalQt;
         }else{
            products.push({
               ...action.payload.selectedProduct,
               qt: action.payload.modalQt

            })
         }

         console.log(products)
         return {...state, products: products};
         break;
   
      // case "SET_NAME":
      //    return {...state, name: action.payload.name};
      //    break;
   }
   return state;
}