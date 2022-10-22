import React from 'react';
import { AsideMenu } from '../../components/AsideMenu';
import { PageBody } from '../../components/Page-Body';
import { Container } from "./styled";



interface indexProps {
   
}

export const Profile: React.FC<indexProps> = () => {

   


   return (
      <Container>
         <div className="container">
            <AsideMenu/>
            <PageBody>
               <h1>Profile</h1>
            </PageBody>
          </div>
      </Container>
   );
};
