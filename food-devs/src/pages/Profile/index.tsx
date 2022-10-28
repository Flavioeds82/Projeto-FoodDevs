import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AsideMenu } from '../../components/AsideMenu';
import { PageBody } from '../../components/Page-Body';
import { Container } from "./styled";
import { Cart } from '../../components/Cart';
import Header from '../../components/Header';
import { json, useNavigate } from 'react-router';
import profile from "../../assets/images/profile.png";
import api from '../../api';
import Modal from '../../components/Modal';




interface indexProps {
   
}

export const Profile: React.FC<indexProps> = () => {

   const [modalActive, setModalActive] = useState<boolean>(false);
   const [modalActiveUser, setModalActiveUser] = useState<boolean>(false);
   const [editUser, setEditUser] = useState(0);
   const [editAddress, setEditAddress] = useState(0);
   const [showSearch, setShowSearch] = useState<boolean>(false);
   const navigate = useNavigate();
   const userEmail = useSelector((state:any) => state.user.email);
   const userName = useSelector((state:any) => state.user.name);
   const token = useSelector((state:any) => state.user.token);
   const userPassword = useSelector((state:any) => state.user.password);
   const dispatch = useDispatch();

   const [name, setName] = useState<string>('');
   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const [confirm_password, setConfirm_password] = useState<string>('');

   const [addressTitle, setAddressTitle] = useState<string>('');
   const [street, setStreet] = useState<string>('');
   const [number, setNumber] = useState<string>('');
   const [city, setCity] = useState<string>('');
   const [state, setState] = useState<string>('');
   const [zipcode, setZipcode] = useState<string>('');
   const address = useSelector((state:any)=> state.cart.address);


   async function handleChangeAddress(e: SyntheticEvent<HTMLFormElement>){
      e.preventDefault();
      const data = {
         newaddress:
            {  
               title: addressTitle,
               street1: street,
               number: number,
               zipcode: zipcode,
               city: city,
               state: state
            }
      }
      const res = await api.editAddress(token, data);
      console.log(res)
      setModalActive(false);
  }

   async function handleChangeUser (e: SyntheticEvent<HTMLFormElement>) {
   e.preventDefault();
   const data = {
      name : '',
      email : '',
      password : '',
      confirm_password : ''
   };
   if(name){
      data.name = name;
   }
   if(email){
      data.email = email;
   }
   if(password){
      data.password =password;
   }
   if(confirm_password){
      data.confirm_password = confirm_password;
   }
   if(password !== confirm_password ){alert("Senhas não conferem")}
   const res = await api.editUser(token, data);
   console.log(res);
   clearUserInfo();
   setModalActiveUser(false);
   setEditUser(editUser+1);
}

   function clearUserInfo() {
      setName('');
      setEmail('');
      setPassword('');
      setConfirm_password('');
      setModalActiveUser(false);
   }

   useEffect(() => {
      
     
   }, []);

   useEffect(() => {
      if(token != ''){
         async function getUser (){
         const json = await api.getUser(token);
         if(json.error == ''){
            dispatch({
               type: 'SET_USER',
               payload:{
                  name:json.result.user.name,
                  email:json.result.user.email,
                  password:'123'
               }
            });
           
         }
         console.log(userPassword)
      }
      getUser();
      }
      if(token == ''){
         navigate('/login')
      } 
   }, [editUser]);

   async function logout() {
      const json = await api.logout(token);
      dispatch({
         type: 'SET_TOKEN',
         payload:{token:''}
      })
      
      navigate('/');
   }


   return (
      <Container>
         <div className="container">
            <AsideMenu/>
            <PageBody>
               {/* <Header search={headerSearch} onSearch={setHeaderSearch} showSearch={showSearch}/> */}
               <div className="profile-image">
                  <div className="left">
                     <img src={profile} alt="" />
                     <div className="welcome">{userName} </div>
                  </div>
                  <div className="right" onClick={()=>logout()}>Sair</div>
                  
               </div>
               <div className="container-profile-body">
                  <div className="user-info">
                     <div className="user-title">Informações Pessoais</div>
                     <div className="container-info">
                        <div className="label">Nome:</div>
                        <div className="info">{userName}</div>
                     </div>
                     <div className="container-info">
                        <div className="label">Email:</div>
                        <div className="info">{userEmail}</div>
                     </div>
                     <div className="container-info">
                        <div className="label">Senha:</div>
                        <div className="info">{userPassword}</div>
                     </div>
                     <div className="edit-bt" onClick={()=>setModalActiveUser(true)}>Editar Dados</div>
                  </div>
                  <div className="user-address">
                     <div className="user-address-title">Endereço Principal</div>
                     <div className="container-address-info">
                        <div className="label">Rua:</div>
                        <div className="info">{address.street1}</div>
                     </div>
                     <div className="container-address-info">
                        <div className="label">CEP:</div>
                        <div className="info">{address.zipcode}</div>
                     </div>
                     <div className="container-address-info">
                        <div className="label">Cidade:</div>
                        <div className="info">{address.city}</div>
                     </div>
                     <div className="container-address-info">
                        <div className="label">Bairro:</div>
                        <div className="info">{address.district}</div>
                     </div>
                     <div className="container-address-info">
                        <div className="label">Estado:</div>
                        <div className="info">{address.state}</div>
                     </div>
                     <div className="edit-bt" onClick={()=> setModalActive(true)}>Editar endereço</div>
                  </div>
               </div>
            </PageBody>

            {modalActive &&
               <Modal  modalActive={modalActive}  setModalActive={setModalActive}>
                  <form className="modal--profile" onSubmit={handleChangeAddress}>
                     <div className="add--address">Adicionar/Editar Endereço</div>

                     
                     <div className="input--conteiner">
                        <div className="input--name">Título do Endereço</div>
                        <input type="text" value={addressTitle} onChange={(e)=> setAddressTitle( e.target.value )} required />                        
                     </div>
                     
                     <div className="input--conteiner">
                        <div className="input--name">Rua</div>
                        <input type="text" value={street} onChange={(e)=>setStreet( e.target.value )} required />                        
                     </div>

                     <div className="input--conteiner">
                        <div className="input--name">Número</div>
                        <input type="text" value={number} onChange={(e)=>setNumber( e.target.value )} required />                        
                     </div>

                     <div className="input--conteiner">
                        <div className="input--name">Cidade</div>
                        <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} required />  
                     </div>

                     <div className="input--conteiner">
                        <div className="input--name">Estado</div>
                        <input type="text" value={state} onChange={(e)=>setState(e.target.value)} required />  
                     </div>

                     <div className="input--conteiner">
                        <div className="input--name">CEP</div>
                        <input type="text" value={zipcode} onChange={(e)=>setZipcode(e.target.value)} required />  
                     </div>

                     <button>Atualizar</button>

                     <button type="button" className="cancel" onClick={()=>setModalActive(false)}>Cancelar</button>
                  </form>
               </Modal>
            }
             {modalActiveUser &&
               <Modal  modalActive={modalActiveUser}  setModalActive={setModalActiveUser}>
                  <form className="modal--profile" onSubmit={handleChangeUser}>
                     <div className="add--address">Editar Dados</div>

                     
                     <div className="input--conteiner">
                        <div className="input--name">Nome</div>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  />                        
                     </div>
                     

                     <div className="input--conteiner">
                        <div className="input--name">Email</div>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  />                        
                     </div>

                     <div className="input--conteiner">
                        <div className="input--name">Senha</div>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />                        
                     </div>

                     <div className="input--conteiner">
                        <div className="input--name">Confimar Senha</div>
                        <input type="password" value={confirm_password} onChange={(e)=>setConfirm_password(e.target.value)} />  
                     </div>

                     <button>Atualizar</button>

                     <button type="button" className="cancel" onClick={clearUserInfo}>Cancelar</button>
                  </form>
               </Modal>
            }

            <Cart modalActive={modalActive} setModalActive={setModalActive}/>
          </div>
      </Container>
   );
};
