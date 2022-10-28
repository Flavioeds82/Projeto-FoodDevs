import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import { AsideMenu } from '../../components/AsideMenu';
import { Cart } from '../../components/Cart';
import Header from '../../components/Header';
import { PageBody } from '../../components/Page-Body';
import UserReducers from '../../reducers/UserReducers';
import { Product } from '../../types';
import { Container } from './styled';

interface indexProps {
   
}

export const Orders: React.FC<indexProps> = () => {


   const [modalActive, setModalActive] = useState<boolean>(false);
   const products = useSelector((state:any) => state.cart.products);
   const discount = useSelector((state:any) => state.cart.discount);
   const delivery = useSelector((state:any) => state.cart.delivery);
   const address = useSelector((state:any) => state.cart.address);
   const [total, setTotal] = useState<number>(0);
   const navigate = useNavigate();


   // useEffect(() => {
   //    let temp = 0;
   //    if(products.length <= 0){
   //       navigate('/')
   //    }
   //    products.map((item:Product)=>{
   //       temp += (item.price*item.qt)
   //    })  
   //    setTotal(temp)
   // }, [products]);

   function dataAtualFormatada(){
      var data = new Date(),
          dia  = data.getDate().toString(),
          diaF = (dia.length == 1) ? '0'+dia : dia,
          mes  = (data.getMonth()+1).toString(),
          mesF = (mes.length == 1) ? '0'+mes : mes,
          anoF = data.getFullYear();
      return diaF+"/"+mesF+"/"+anoF;
  }



   return (
      <Container>
         <div className='container'>
            <AsideMenu/>
            <PageBody>
               <Header/>
               
                  <div className="container-order">
                     <div className="timeline-top"></div>
                     <div className="timeline-top-fine"></div>
                     <div className="timeline-bottom">
                        <div className="container-time-line">
                           <div className="time-line-ball active"></div>
                           <div className="time-label active">Pedido recebido</div>
                        </div>
                        <div className="container-time-line">
                           <div className="time-line-ball active"></div>
                           <div className="time-label active">Pedido enviado</div>
                        </div>
                        <div className="container-time-line">
                           <div className="time-line-ball"></div>
                           <div className="time-label">Pedido entregue</div>
                        </div>
                     </div>
                     <div className="container-order-info">

                        <div className='order-products'>
                           {products.map((item:Product, index:number)=>
                              <div className="order-product" key={index}>
                                 <div className="order-product-image">
                                    <img src={item.image} alt="" />
                                 </div>
                                 <div className="order-product-info">
                                    <div className="title">{item.name}</div>
                                    <div className="price">{`R$ ${(item.price*item.qt).toFixed(2)}`}</div>
                                 </div>
                              </div>
                           )}
                        </div>

                        <div className='order-address'>
                           <div className="order-date">
                              <div className="date-title">Data de entrega:</div>
                              <div className="date-info">{dataAtualFormatada()}</div>
                           </div>
                           <div className="address-info">
                              <div className="order-title">Endereço de entrega:</div>
                              <div className="addres-name">{address.title}</div>
                              <div className="addres-street">{`${address.street1} - ${address.state} ` }</div>
                              <div className="address-zipcode">{`${address.zipcode}`}</div>
                           </div>
                        </div>

                        
                        <div className="order-subtotal">
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
                        

                     </div>
                  </div>
                  <div className="container-other-orders">
                     <div className="other-orders-title">Outros pedidos</div>
                     <div className="other-orders-grid">

                        <div className="other-grid-item">
                           <div className="other-orders-address">
                              <div className="date-info">{dataAtualFormatada()}</div>
                              <div className="other-addres-name">{address.title}</div>
                              <div className="other-addres-street">{`${address.street1} - ${address.state} ` }</div>
                              <div className="other-address-zipcode">{`${address.zipcode}`}</div>
                           </div>
                           <div className="other-status">
                              <div className="status-info">Entregue</div>
                              <div className="other-total">{`R$ ${((total-discount)+delivery).toFixed(2)}`}</div>
                           </div>
                        </div>

                        <div className="other-grid-item">
                           <div className="other-orders-address">
                              <div className="date-info">{dataAtualFormatada()}</div>
                              <div className="other-addres-name">{address.title}</div>
                              <div className="other-addres-street">{`${address.street1} - ${address.state} ` }</div>
                              <div className="other-address-zipcode">{`${address.zipcode}`}</div>
                           </div>
                           <div className="other-status">
                              <div className="status-info">Entregue</div>
                              <div className="other-total">{`R$ ${((total-discount)+delivery).toFixed(2)}`}</div>
                           </div>
                        </div>

                        <div className="other-grid-item">
                           <div className="other-orders-address">
                              <div className="date-info">{dataAtualFormatada()}</div>
                              <div className="other-addres-name">{address.title}</div>
                              <div className="other-addres-street">{`${address.street1} - ${address.state} ` }</div>
                              <div className="other-address-zipcode">{`${address.zipcode}`}</div>
                           </div>
                           <div className="other-status">
                              <div className="status-info">Entregue</div>
                              <div className="other-total">{`R$ ${((total-discount)+delivery).toFixed(2)}`}</div>
                           </div>
                        </div>

                        <div className="other-grid-item">
                           <div className="other-orders-address">
                              <div className="date-info">{dataAtualFormatada()}</div>
                              <div className="other-addres-name">{address.title}</div>
                              <div className="other-addres-street">{`${address.street1} - ${address.state} ` }</div>
                              <div className="other-address-zipcode">{`${address.zipcode}`}</div>
                           </div>
                           <div className="other-status">
                              <div className="status-info">Entregue</div>
                              <div className="other-total">{`R$ ${((total-discount)+delivery).toFixed(2)}`}</div>
                           </div>
                        </div>
                        
                     </div>
                  </div>

                
               <Cart modalActive={modalActive} setModalActive={setModalActive}/>
            </PageBody>
         </div>
      </Container>
      
   );
};
