import React from 'react';
import { Container } from "./styled";
import cart from "../../assets/images/cart.png";



interface indexProps {
   
}

export const Cart: React.FC<indexProps> = () => {

   const active = false;

   return (
      <Container>
         <div className="container">
            
            <div className="cart-header">
               <div className="cart-icon"><img src={cart} alt="" /></div>
               <div className="cart-text">Meu Carrinho (2)</div>
            </div>
            
            {active &&
               <div className="cart-body">
                  <h1>Cart Body</h1>
               </div>
            }
            

         </div>
      </Container>
   );
};
