import React, { Dispatch, SetStateAction, useState } from 'react';
import { Container } from "./styled";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { AsideMenu } from '../../components/AsideMenu';
import { PageBody } from '../../components/Page-Body';
import { Cart } from '../../components/Cart';
import Header from '../../components/Header';
import Body from '../../components/HomeBody';
import Modal from '../../components/Modal';



interface indexProps {
   
}

export const Home: React.FC<indexProps> = () => {

   const [headerSearch, setHeaderSearch] = useState<string>('');
   const [modalActive, setModalActive] = useState<boolean>(false);
   const [showSearch, setShowSearch] = useState<boolean>(false);


   return (
      <Container>
         <div className="container">
            <AsideMenu/>
            <PageBody>
               <Header search={headerSearch} onSearch={setHeaderSearch} showSearch={true}/>
               <Body 
                  search={headerSearch} 
                  onSearch={setHeaderSearch} 
                  modalActive={modalActive} 
                  setModalActive={setModalActive}
               />
               <Cart modalActive={modalActive} setModalActive={setModalActive}/>
            </PageBody>
          </div>
      </Container>
      
   );
};
