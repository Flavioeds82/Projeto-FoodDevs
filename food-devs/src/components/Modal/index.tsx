import React, { DetailedHTMLProps, MouseEventHandler, useEffect } from 'react';
import Container from "./styled";

interface ModalProps {
   children: React.ReactNode;
   modalActive: boolean;
   setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({children, modalActive, setModalActive}) => {

   function closeModal(e:any){
      if(e.target.classList.contains("container")){
         setModalActive(false);

      }
      return true;
   }

   return (
      <Container>
         <div className="container" onClick={closeModal}>
            <div className="modal-body">
               {children}
            </div>
         </div>
      </Container>
   );
};

export default Modal;