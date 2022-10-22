import styled from 'styled-components';

export const Container = styled.div`
   width: 18rem;
   height: auto;
   background-color: rgba(19,103,18,150);
   position: fixed;
   bottom: 0;
   right: 3rem;
   border-radius: 0.3rem 0.3rem 0 0;
  .container{
     display: flex;
     flex-direction: column;
     cursor: pointer;

     .cart-header{
        display: flex;
        height: auto;
        padding: 0.8rem;

        .cart-icon{

            img{
            width: 1.4rem;
            margin: 0rem 1rem;
            } 
        }
        .cart-text{
           color: #fff;
           font-size: 1rem;
        }
     }
     .cart-body{
        min-height: 40vh;
     }
  }
`;