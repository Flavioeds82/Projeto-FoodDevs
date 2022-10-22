import React from 'react';
import { Container } from "./styled";

type IProps = {
   children: React.ReactNode;
}


export const PageBody = ({children}:IProps) => {

   


   return (
      <Container>
         <div className="container">
            {children}
          </div>
      </Container>
   );
};
