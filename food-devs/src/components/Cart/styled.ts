import styled from 'styled-components';

export const Container = styled.div`
   width: 23rem;
   max-height: 75vh;
   background-color: rgba(19,103,18,150);
   position: fixed;
   bottom: 0;
   right: 3rem;
   border-radius: 0.3rem 0.3rem 0 0;
   overflow: auto;
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
            margin-left: 5rem;
         }
        }
     }
     .cart-body{
        min-height: 40vh;
        margin: 1rem;
        color: #fff;
        

        .cart-products{
         display: flex;
         width: 100%;
         margin-bottom: 2rem;

         .cart-product-image img{
           height: 3.5rem;
            border-radius: 0.8rem;
         }
         .container-info{
            display: flex;
            width: 100%;
            justify-content: space-between;
            .cart-product-info{
               margin-left: 1rem;
               text-align: left;

               .title{
                  font-weight: bold;
                  font-size: 1rem;
                  line-height: 1rem;
                  margin-bottom: 0.5rem;
               }
               .price{
                  font-size: 0.8rem;

               }
            }
            .product-quant{
               display: flex;
               align-items: center;
               font-weight: bold;
               text-align: right;
               width: 5rem;
               margin-left: 1rem;
               .number-qt{
                  margin: 0 1rem;
               }
               img{
                  width: 1rem;
               }
            }
         
         }
        }
        .address-title{
         font-weight: bold;
         text-align: left;
        }
        .address-container{
         display: flex;
         justify-content: space-between;
         margin-bottom: 2rem;

         .address-info{
            text-align: left;
            font-size: 0.8rem;
         }
         .edit-address-icon img{
            width: 1rem;
         }

        }
        .discount-title{
         font-weight: bold;
         text-align: left;
         margin-bottom: 0.5rem;
        }
        .discount-input{
         width: 100%;
         margin-bottom: 2rem;
         input{
            width: 100%;
            background-color: #FFF;
            border: none;
            height: 1.5rem;
            border-radius: 0.5rem;
         }
        }
        .cart-subtotal{
         width: 100%;
         margin-bottom: 2rem;
         .subtotal{
            display: flex;
            justify-content: space-between;
            font-weight: bold;
         }

        }
        .checkout{
         background-color: #073d07;
         padding: 0.8rem;
         border-radius: 0.8rem;

        }
     }
  }
`;