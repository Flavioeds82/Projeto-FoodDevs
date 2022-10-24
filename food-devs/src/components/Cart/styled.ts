import styled from 'styled-components';

export const Container = styled.div`
   width: 18rem;
   max-height: 80vh;
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
        .arrow-down{
         img{
            width: 1rem;
            margin-left: 3rem;
         }
        }
     }
     .cart-body{
        min-height: 40vh;
     }
  }
`;