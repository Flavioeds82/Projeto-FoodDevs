import React, { ChangeEvent, ReactElement, SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import api from '../../api';
import { AsideMenu } from '../AsideMenu';
import { PageBody } from '../Page-Body';
import { Container } from './styled';



export const Register: React.FC = ()=> {

   const [name, setName] = useState<string>('');
   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [disabled, setDisabled] = useState<boolean>(false);
   const navigate = useNavigate();
   const dispatch = useDispatch();

  const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
   e.preventDefault();
   setDisabled(true);

   if(name && email && password){
      const json = await api.addUser(name, email, password);
      if(json.error){
         alert('Não foi possivel efetuar o login')
      }else{
         dispatch({
            type: "SET_TOKEN",
            payload:{token:json.result.token}
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
                  <div className="title--name">Cadastro</div>
                  <div className="title--bar"></div>
               </div>
               <form onSubmit={handleLogin}>
               <div className="input--area">
                        <label htmlFor="login--email">Nome</label>
                        <input 
                           id="login--email" 
                           type="text" 
                           value={name} 
                           onChange={(e)=>setName(e.target.value)} disabled={disabled} />
                  </div>
                  <div className="input--area">
                        <label htmlFor="login--email">Email</label>
                        <input 
                           id="login--email" 
                           type="text" 
                           value={email} 
                           onChange={(e)=>setEmail(e.target.value)} disabled={disabled} />
                  </div>
                  <div className="input--area">
                        <label htmlFor="password--login">Password</label>
                        <input 
                           id="password--login" 
                           type="password" 
                           value={password} 
                           onChange={(e)=>setPassword(e.target.value)} disabled={disabled} />
                  </div>
                  <div className="input--area">
                        <label htmlFor="password--login">Confirme Senha</label>
                        <input 
                           id="password--login" 
                           type="password" 
                           value={confirmPassword} 
                           onChange={(e)=>setConfirmPassword(e.target.value)} disabled={disabled} />
                  </div>
                  <button>Cadastrar</button>
               </form>  
               <div className="register--area">
               <Link to="/login" className='link'>Entrar</Link>
               </div>                
            </div> 
         </PageBody>
      </div>
   </Container>
   
   )
   
};
