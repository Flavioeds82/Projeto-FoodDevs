import React, { useEffect } from 'react';
import { Router, useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux';
import {Login} from '../Login';
import { Product } from '../../types';


type IProps = {
   children: React.ReactNode;
   
}

export const PrivateRoute = ({ children, ...rest}:{children: JSX.Element}) => {

   const token = useSelector<any>(state => state.user.token);
   const products = useSelector<any>(state => state.cart.products);
   // const token = 123;
   let navigate = useNavigate();
   console.log(`Token : ${token}`);

   useEffect(() => {
      if (!token || token === '') {
        navigate('/login')
      }
      if(products == ''){ 
         navigate('/')
      }
      
    }, []);
    return children;
   
     
};
