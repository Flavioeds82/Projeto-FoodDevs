import React, { ReactElement } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { AsideMenu } from '../AsideMenu';
import { PageBody } from '../Page-Body';
import { Container } from './styled';



export const Login: React.FC = ()=> {
   return(
      <Container>
      <div className='container'>
         <AsideMenu/>
         <PageBody>
            <h1>Login</h1> 
         </PageBody>
      </div>
   </Container>
   
   )
  
};
