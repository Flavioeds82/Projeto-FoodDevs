import React, { useState } from 'react';
import { AsideMenu } from '../../components/AsideMenu';
import { PageBody } from '../../components/Page-Body';
import { Container } from "./styled";
import { Cart } from '../../components/Cart';




interface indexProps {
   
}

export const Profile: React.FC<indexProps> = () => {

   const [modalActive, setModalActive] = useState<boolean>(false);
   


   return (
      <Container>
         <div className="container">
            <AsideMenu/>
            <PageBody>
               <h1>Profile</h1>
            </PageBody>
            <Cart modalActive={modalActive} setModalActive={setModalActive}/>
          </div>
      </Container>
   );
};
