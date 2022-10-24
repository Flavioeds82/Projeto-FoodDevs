import React, { ReactNode, Reducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from "./styled";
import cart from "../../assets/images/cart.png";
import down from "../../assets/images/down.png";
import { initialStateCart } from '../../types';
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
                  <h1>Cart Body</h1>
               </div>
            }
            

         </div>
      </Container>
   );
};
