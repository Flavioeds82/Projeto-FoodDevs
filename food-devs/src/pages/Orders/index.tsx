import React, { useState } from 'react';
import { AsideMenu } from '../../components/AsideMenu';
import { Cart } from '../../components/Cart';
import { PageBody } from '../../components/Page-Body';
import { Container } from './styled';

interface indexProps {
   
}

export const Orders: React.FC<indexProps> = () => {
   const [modalActive, setModalActive] = useState<boolean>(false);
   return (
      <Container>
         <div className='container'>
            <AsideMenu/>
            <PageBody>
               <h1>Orders</h1> 
               <Cart modalActive={modalActive} setModalActive={setModalActive}/>
            </PageBody>
         </div>
      </Container>
      
   );
};
