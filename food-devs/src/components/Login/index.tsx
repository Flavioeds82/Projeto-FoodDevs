import React, { ChangeEvent, ReactElement, SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { json, Navigate, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import api from '../../api';
import { AsideMenu } from '../AsideMenu';
import { PageBody } from '../Page-Body';
import { Container } from './styled';



export const Login: React.FC = ()=> {


   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const [disabled, setDisabled] = useState<boolean>(false);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
      setEmail( e.target.value );
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
      setPassword( e.target.value );
  }
  
  const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
   e.preventDefault();
   setDisabled(true);
   if(email && password){
      const json = await api.login(email, password);
      if(json.error){
         console.log(json.error)
      }else{
         dispatch({
            type: "SET_TOKEN",
            payload: {token: json.result.token}
         })
         navigate('/')
      }
   }else{
      alert('Preencha todos os campos!');
   }
   setDisabled(false);
  }

 return(
      <Container>
      <div className='container'>
         <AsideMenu/>
         <PageBody>
            <div className="login--container">
               <div className="title--area">
                  <div className="title--name">Login</div>
                  <div className="title--bar"></div>
               </div>
               <form onSubmit={handleLogin}>
                  <div className="input--area">
                        <label htmlFor="login--email">Email</label>
                        <input id="login--email" type="text" value={email} onChange={handleEmail} disabled={disabled} />
                  </div>
                  <div className="input--area">
                        <label htmlFor="password--login">Password</label>
                        <input id="password--login" type="password" value={password} onChange={handlePassword} disabled={disabled} />
                  </div>
                  <button>Fazer Login</button>
               </form>  
               <div className="register--area">
               <Link to="/register" className='link'>Criar nova conta</Link>
               </div>                
            </div> 
         </PageBody>
      </div>
   </Container>
   
   )
   
};
