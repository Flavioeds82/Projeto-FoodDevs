import React, { useEffect, useState } from 'react';
import { AsideMenu } from '../../components/AsideMenu';
import { PageBody } from '../../components/Page-Body';
import { Container } from "./styled";
import { Cart } from '../../components/Cart';
import Header from '../../components/Header';
import { useNavigate } from 'react-router';




interface indexProps {
   
}

export const Profile: React.FC<indexProps> = () => {

   const [modalActive, setModalActive] = useState<boolean>(false);
   const [headerSearch, setHeaderSearch] = useState<string>('');
   const [showSearch, setShowSearch] = useState<boolean>(false);
   const navigate = useNavigate();

   useEffect(() => {
      if(headerSearch != ''){
          navigate('/')
      }
     
      
   }, [headerSearch]);


   return (
      <Container>
         <div className="container">
            <AsideMenu/>
            <PageBody>
               <Header search={headerSearch} onSearch={setHeaderSearch} showSearch={showSearch}/>
               <h1>Profile</h1>
            </PageBody>
            <Cart modalActive={modalActive} setModalActive={setModalActive}/>
          </div>
      </Container>
   );
};
