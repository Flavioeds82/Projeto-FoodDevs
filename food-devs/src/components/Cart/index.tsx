import React, { ReactNode, Reducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from "./styled";
import cart from "../../assets/images/cart.png";
import minus from "../../assets/images/minus.png";
import plus from "../../assets/images/plus.png";
import down from "../../assets/images/down.png";
import edit from "../../assets/images/edit.png";
import { initialStateCart, Product } from '../../types';
import { CombinedState } from 'redux';



interface indexProps {
   
}

export const Cart: React.FC<indexProps> = () => {

   const products = useSelector((state:any) => state.cart.products)
   const [active, setActive] = useState<boolean>(false);

   return (
      <Container>
         <div className="container">
            
            <div className="cart-header" onClick={()=>setActive(!active)}>
               <div className="cart-icon"><img src={cart} alt="" /></div>
               <div className="cart-text"> Meu Carrinho {products.length > 0 ?`( ${products.length} )`  : ''}</div>
               {active &&
                  <div className="arrow-down"><img src={down} alt="" /></div>
               }
            </div>
            
            {active && products.length > 0 &&
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
                              <div className="minus"><img src={minus} alt="" /></div>
                              <div className="number-qt">{item.qt}</div>
                              <div className="plus"><img src={plus} alt="" /></div>
                           </div>
                        </div>
                        
                     </div>
                     
                  )}
                  
                  <div className="address-title">Entrega</div>
                  <div className="address-container">
                     <div className="address-info">
                        <div className="addres-name">Minha Casa</div>
                        <div className="addres-street">Rua A -  Nº 123</div>
                        <div className="address-city">Itaguaí / Rj</div>
                     </div>
                     <div className="edit-address-icon"><img src={edit} alt="" /></div>
                  </div>
                  <div className="discount-title">Cupon de desconto</div>
                  <div className="discount-input">
                     <input type="text" />
                  </div>
                  <div className="cart-subtotal">
                     <div className="subtotal">
                        <div className="label">Desconto</div>
                        <div className="value">R$ 0,00</div>
                     </div>
                     <div className="subtotal">
                        <div className="label">Taxa de Entrega</div>
                        <div className="value">R$ 0,00</div>
                     </div>
                     <div className="subtotal">
                        <div className="label">Total</div>
                        <div className="value">R$ 0,00</div>
                     </div>
                  </div>
                  <div className="checkout">FINALIZAR COMPRA</div>
               </div>
            }
            

         </div>
      </Container>
   );
};
