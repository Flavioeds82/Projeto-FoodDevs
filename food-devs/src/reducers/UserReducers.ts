import { AnyAction } from "redux";



const initialState = {
   token: 123,
   name: 'teste',
   email: '',
   address: []
};

export default (state = initialState, action: AnyAction)=>{
   switch (action.type) {
      case "SET_TOKEN":
         return {...state, token: action.payload.token};
         break;
   
      case "SET_NAME":
         return {...state, name: action.payload.name};
         break;
   }
   return state;
}