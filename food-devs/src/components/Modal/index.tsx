import React from 'react';
import Container from "./styled";

interface ModalProps {
   
}

const Modal: React.FC<ModalProps> = () => {
   return (
      <Container>
         <div className="container">
            <div className="modal-body">body</div>
         </div>
      </Container>
   );
};

export default Modal;