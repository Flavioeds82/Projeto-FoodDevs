import { AnyAction } from "redux";



const initialState = {
   token: '',
   name: 'teste',
   email: 'teste@mail.com',
   password: '000',
   last_login: '',
   last_address: -1,
   address: [{
      id: -1,
      title: '',
      street1: '',
      street2: '',
      zipcode: '',
      city: '',
      state: ''
   }]
};

export default (state = initialState, action: AnyAction)=>{
   switch (action.type) {
      case "SET_TOKEN":
         return {...state, token: action.payload.token};
         break;
      
      case "SET_USER":
         return{...state,
            name : action.payload.name,
            email : action.payload.email,
            password : action.payload.password

         }
         break;
   
      case "SET_NAME":
         return {...state, name: action.payload.name};
         break;

      case "SET_EMAIL":
         return {...state, name: action.payload.name};
         break;

      case "SET_PASSWORD":
         return {...state, name: action.payload.password};
         break;

      case "SET_ADDRESS_ID":
         return {...state, name: action.payload.address.id};
         break;

      case "SET_ADDRESS_TITLE":
         return {...state, name: action.payload.address.title};
         break;

      case "SET_ADDRESS_STREET":
         return {...state, name: action.payload.address.street1};
         break;

      case "SET_ADDRESS_ZIPCODE":
         return {...state, name: action.payload.address.zipcode};
         break;

      case "SET_ADDRESS_CITY":
         return {...state, name: action.payload.address.city};
         break;

      case "SET_ADDRESS_STATE":
         return {...state, name: action.payload.address.state};
         break;
   }
   return state;
}