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
         display: flex;
         justify-content: center;
         align-items: center;
         min-width: 15rem;
         max-width: 80%;
         min-height: 10rem;
         max-height: 90vh;
         background-color: rgba(254,254,255,255);
         border-radius: 1rem;
         box-shadow: 0px 0px 10rem #000;
         padding: 1rem;
         overflow: auto;
      }
   }
`;

export default Container;