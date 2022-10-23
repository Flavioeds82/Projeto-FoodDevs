import styled from 'styled-components';

const Container = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: rgba(0,0,0,0.7);
   color: #000;

   .container{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;

      .modal-body{
         width: 80%;
         height: 70vh;
         background-color: #FFF;
      }
   }
`;

export default Container;