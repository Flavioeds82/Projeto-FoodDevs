import { AnyAction } from "redux";
import { Address, initialStateCart, Product } from "../types";



const initialState = {
   products: [],
   address: {
      id: 123,
      title:'Minha Casa',
      street1: 'Rua das Pedras',
      number: '123',
      zipcode: '12312-123',
      city: 'Búzios',
      state:'RJ'
   },
   discount: 0,
   delivery: 10
};

export default (state = initialState, action: AnyAction)=>{
   let products:Product[] = [...state.products];
   switch (action.type) {

      case "ADD_PRODUCT":
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

      case "CHANGE_ADDRESS":
         
            state.address.title =  action.payload.title,
            state.address.street1 =  action.payload.street,
            state.address.number =  action.payload.number,
            state.address.zipcode =  action.payload.zipcode,
            state.address.city =  action.payload.city,
            state.address.state = action.payload.state
         
         return {state};
         break;
   
      case "CHANGE_PRODUCT":
         if(products[action.payload.key]){
            switch (action.payload.type) {
               case '-':
                  products[action.payload.key].qt--;
                  if(products[action.payload.key].qt === 0){
                     products = products.filter((item, index)=> index != action.payload.key);
                  }
                  break;
            
               case '+':
                  products[action.payload.key].qt++;
                  break;
            }
         }
         
         return {...state, products: products};
         break;
   }
   return state;
}