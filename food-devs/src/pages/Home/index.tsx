import React, { Dispatch, SetStateAction, useState } from 'react';
import { Container } from "./styled";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { AsideMenu } from '../../components/AsideMenu';
import { PageBody } from '../../components/Page-Body';
import { Cart } from '../../components/Cart';
import Header from '../../components/Header';
import Body from '../../components/Body';
import Modal from '../../components/Modal';



interface indexProps {
   
}

export const Home: React.FC<indexProps> = () => {

   const [headerSearch, setHeaderSearch] = useState<string>('');

   return (
      <Container>
         <div className="container">
            <AsideMenu/>
            <PageBody>
               <Header search={headerSearch} onSearch={setHeaderSearch}/>
               <Body search={headerSearch} onSearch={setHeaderSearch}/>
               <Cart/>
            </PageBody>
            <Modal/>
          </div>
      </Container>
      
   );
};
