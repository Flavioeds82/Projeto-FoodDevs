import styled from 'styled-components';

export const Container = styled.div`
   
   .container-outside{
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0,0,0,0.7);
      color: #000;
   }
   
  .container{
      width: 22rem;
      max-height: 95vh;
      background-color: RGB(19, 103, 18);
      position: fixed;
      bottom: 0;
      right: 3rem;
      border-radius: 0.3rem 0.3rem 0 0;
      overflow: auto;
      z-index: 99;
      border:1px solid #00980D;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      height: auto;

     .cart-header{
        display: flex;
        height: 1.5rem;
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
     .cart-empty{
      margin-bottom: 1rem;
     }
     .cart-body{
        min-height: 40vh;
        margin: 1rem;
        color: #fff;
        .cart-products{
         display: flex;
         width: 100%;
         margin-bottom: 1rem;

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
                  margin-bottom: 0.2rem;
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
            line-height: 1rem;
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
         .total{
            font-size: 1.2rem;
         }

        }
        .checkout{
         background-color: #073d07;
         padding: 0.8rem;
         border-radius: 0.8rem;
         margin-bottom: 1rem;

        }
     }
     .modal--cart {
        color: #136713;
        width:100%;
        text-align: left;
        font-weight: bold;
        .add--address {
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 1rem;
            text-align: center;
        }
        #title{
         align-items: center;
        }
        .input--conteiner {
            margin-bottom: 0.5rem;
         }
         .input--name {
            margin-bottom: 5px;
        }
        .radio{
            background-color: #080;
        }
        label {
            margin-right: 20px;
            font-size: 13px;
        }
        input[type="radio"]{
         color: red;
        }
        
        input[type="text"] {
            height: 1.5rem;
            border: 1px solid #080;
            border-radius: 5px;
            outline: 0;
            font-size: 1.5rem;
            width:100%;
            background-color: #FFF;
            color: #080;
            height: 2rem;
        }
        button {
            border: 0;
            outline: 0;
            color: #fff;
            background-color: #073c07;
            box-shadow: 4px 5px 0px rgba(0, 0, 0, 0.16);
            cursor: pointer;
            border-radius: 5px;
            font-size: 20px;
            padding: 10px 20px;
            margin-top: 10px;
        }
        
        .cancel {
            font-size: 13px;
            padding: 8px 4px;
            margin-left: 15px;
        }
    }
  }
`;