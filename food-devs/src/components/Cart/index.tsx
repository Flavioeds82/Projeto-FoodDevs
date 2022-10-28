import React, {ChangeEvent, ReactNode, Reducer, SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from "./styled";
import cart from "../../assets/images/cart.png";
import minus from "../../assets/images/minus.png";
import plus from "../../assets/images/plus.png";
import down from "../../assets/images/down.png";
import edit from "../../assets/images/edit.png";
import { initialStateCart, Product } from '../../types';
import { CombinedState } from 'redux';
import Modal from '../Modal';
import styled from 'styled-components';
import { createEmptyAction } from 'react-redux-typescript';
import { Navigate, useNavigate } from 'react-router';
import api from '../../api';



interface indexProps {
   modalActive: boolean;
   setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Cart: React.FC<indexProps> = () => {

   const products = useSelector((state:any) => state.cart.products);
   const discount = useSelector((state:any) => state.cart.discount);
   const delivery = useSelector((state:any) => state.cart.delivery);
   const address = useSelector((state:any) => state.cart.address);
   const token = useSelector((state:any) => state.user.token);
   const [modalActive, setModalActive] = useState<boolean>(false);
   const [activeCart, setActiveCart] = useState<boolean>(false);
   const dispatch = useDispatch();
   const [total, setTotal] = useState<number>(0);
   const [addressTitle, setAddressTitle] = useState<string>(address.title);
   const [street, setStreet] = useState<string>(address.street1);
   const [number, setNumber] = useState<string>(address.number);
   const [city, setCity] = useState<string>(address.city);
   const [state, setState] = useState<string>(address.state);
   const [zipcode, setZipcode] = useState<string>(address.zipcode);
   const navigate = useNavigate();
   

   function handleCartProductChange(key: number, type: string){
      dispatch({
         type: "CHANGE_PRODUCT",
         payload:{key, type}
      })
   }
   function setAddress(){
      dispatch(({
         type: "CHANGE_ADDRESS",
         payload: {
            title: addressTitle,
            street1: street,
            number: number,
            zipcode: zipcode,
            city: city,
            state: state
            } 
      }));
  
   }
   async function checkout() {
      setActiveCart(false);
      const json = await api.getUser(token);
      if(json.error == ''){
         const lastAdrress = json.result.addresses.length -1;
         console.log("teste " + json.result.addresses[lastAdrress].title)
         setAddressTitle( json.result.addresses[lastAdrress].title)
         setStreet (json.result.addresses[lastAdrress].street1)
         setNumber(json.result.addresses[lastAdrress].number)
         setZipcode(json.result.addresses[lastAdrress].zipcode)
         setCity(json.result.addresses[lastAdrress].city)
         setState( json.result.addresses[lastAdrress].state)
      }else{
         console.log('error' + json.error)
         if(json.error != ''){
            alert('Tempo expirado, faça login novamente')
            navigate('/login')
            return;
         }
      }
      setAddress();
      navigate("/orders")
   }

   function closeModal(e:any){
      if(e.target.classList.contains("container-outside")){
         setActiveCart(false);

      }
      return true;
   }

   const handleChangeAddress = (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      setModalActive(false);
  }
  const handleAddressTitle = (value: string) => {
      setAddressTitle( value );
   }
   const handleStreet = (e: ChangeEvent<HTMLInputElement>) => {
      setStreet( e.target.value );
   }
   const handleNumber = (e: ChangeEvent<HTMLInputElement>) => {
      setNumber( e.target.value );
   }
   const handleCity = (e: ChangeEvent<HTMLInputElement>) => {
      setCity( e.target.value );
   }
   const handleState = (e: ChangeEvent<HTMLInputElement>) => {
      setState( e.target.value );
   }
   const handleZipcode = (e: ChangeEvent<HTMLInputElement>) => {
      setZipcode( e.target.value );
   }
   
   

   useEffect(() => {
      let temp = 0;
      products.map((item:Product)=>{
         temp += ((item.price)*item.qt)
      })  
      setTotal(temp)
   }, [products]);

   


   return (
      <Container>
         {activeCart && products.length > 0 &&
            <div className="container-outside" onClick={closeModal}></div>
         }
         <div className="container">
            
            <div className="cart-header" onClick={()=>setActiveCart(!activeCart)}>
               <div className="cart-icon"><img src={cart} alt="" /></div>
               <div className="cart-text"> Meu Carrinho {products.length > 0 ?`( ${products.length} )`  : ''}</div>
               {activeCart &&
                  <div className="arrow-down"><img src={down} alt="" /></div>
               }
            </div>

            {activeCart && products.length <= 0 &&
             <div className='cart-empty'>Adicione um produto</div>
            }
            
            {activeCart && products.length > 0 &&
               <div className="cart-body">
                  {products.map((item: Product, index: number)=>
                  
                     <div className="cart-products" key={index}>
                        <div className="cart-product-image">
                           <img src={item.image} alt="" />
                        </div>
                        <div className="container-info">
                           <div className="cart-product-info">
                              <div className="title">{item.name}</div>
                              <div className="price">{`R$ ${(item.price*item.qt).toFixed(2)}`}</div>
                           </div>
                           <div className="product-quant">
                              <div className="minus" onClick={()=> handleCartProductChange(index, '-')}><img src={minus} alt="" /></div>
                              <div className="number-qt">{item.qt}</div>
                              <div className="plus" onClick={()=> handleCartProductChange(index, '+')}><img src={plus} alt="" /></div>
                           </div>
                        </div>
                        
                     </div>
                     
                  )}
                  
                  <div className="address-title">Entrega</div>
                  <div className="address-container">
                     <div className="address-info">
                        <div className="addres-name">{addressTitle}</div>
                        <div className="addres-street">{`${street} / ${number}`}</div>
                        <div className="address-city">{`${city} / ${state}- ${zipcode}` }</div>
                     </div>
                     <div className="edit-address-icon" onClick={()=>setModalActive(true)}><img src={edit} alt="" /></div>
                  </div>
                  <div className="discount-title">Cupon de desconto</div>
                  <div className="discount-input">
                     <input type="text" />
                  </div>
                  <div className="cart-subtotal">
                     <div className="subtotal">
                        <div className="label">SubTotal</div>
                        <div className="value">{`R$ ${(total).toFixed(2)}`}</div>
                     </div>
                     <div className="subtotal">
                        <div className="label">Desconto</div>
                        <div className="value">{`- R$ ${(discount).toFixed(2)}`}</div>
                     </div>
                     <div className="subtotal">
                        <div className="label">Taxa de Entrega</div>
                        <div className="value">{`R$ ${(delivery).toFixed(2)}`}</div>
                     </div>
                     <div className="subtotal">
                        <div className="label total">Total</div>
                        <div className="value total">{`R$ ${((total-discount)+delivery).toFixed(2)}`}</div>
                     </div>
                  </div>
                  <div className="checkout" onClick={()=>checkout()}>FINALIZAR COMPRA</div>
               </div>
            }
            {modalActive &&
            
               <Modal  modalActive={modalActive}  setModalActive={setModalActive}>
                  <form className="modal--cart" onSubmit={handleChangeAddress}>
                     <div className="add--address">Adicionar/Editar Endereço</div>

                     <div className="input--conteiner ">
                        <div className="input--name" id="title" >Casa ou Trabalho?</div>
                        <input type="radio" name="work--or--house" className='radio' id="house" onClick={() => handleAddressTitle("Minha Casa")} required checked/>
                        <label htmlFor="house">Minha Casa</label>
                        <input type="radio" name="work--or--house" className='radio' id="work" onClick={() => handleAddressTitle("Meu Trabalho")} required />
                        <label htmlFor="work">Meu Trabalho</label>
                     </div>

                     <div className="input--conteiner">
                        <div className="input--name">Rua</div>
                        <input type="text" value={street} onChange={handleStreet} required />                        
                     </div>

                     <div className="input--conteiner">
                        <div className="input--name">Número</div>
                        <input type="text" value={number} onChange={handleNumber} required />                        
                     </div>

                     <div className="input--conteiner">
                        <div className="input--name">Cidade</div>
                        <input type="text" value={city} onChange={handleCity} required />  
                     </div>

                     <div className="input--conteiner">
                        <div className="input--name">Estado</div>
                        <input type="text" value={state} onChange={handleState} required />  
                     </div>

                     <div className="input--conteiner">
                        <div className="input--name">CEP</div>
                        <input type="text" value={zipcode} onChange={handleZipcode} required />  
                     </div>

                     <button>Atualizar</button>

                     <button type="button" className="cancel" onClick={()=>setModalActive(false)}>Cancelar</button>
                  </form>
               </Modal>
            }

         </div>
         
      </Container>
   );
};
