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
   let navigate = useNavigate();

   useEffect(() => {
      switch (token) {
         case (!token):
            navigate('/login')
            break;
         case (token == ''):
            navigate('/login')
            break;
         case (token == undefined):
            navigate('/login')
            break;
      }
   }, []);

   return children;  
};
