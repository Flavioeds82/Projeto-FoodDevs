import styled from 'styled-components';

const Container = styled.div`
   width: 100%;

  .container{
      width: 90%;
      margin: auto;

      .category{
         display: flex;
         flex-direction: column;
         text-align: left;

         .category-label h4{
            font-weight: bold;
         }
         .category-icons{
            display: flex;
            .category-icon-default{
               display: flex;
               justify-content: center;
               align-items: center;
               background-color: rgba(171,224,154,255); 
               border-radius: 1rem;
               width: 5rem;
               height: 5rem;
               margin-right: 1.5rem;
               cursor: pointer;

               img{
                  width: 4rem;
               }
            }
            .category-icon-default.active{
               background-color: #FFF;
            }
           

            .category-item{
               display: flex;
               justify-content: center;
               align-items: center;
               background-color: rgba(171,224,154,255); 
               border-radius: 1rem;
               width: 5rem;
               height: 5rem;
               margin-right: 1.5rem;
               cursor: pointer;


               img{
                  width: 4rem;
               }
            }
            .category-item.active{
               background-color: #FFF;
            }
         }
      }

      .products{
         margin-top: 2rem;
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         gap: 1rem;
         .product-item{
            display: flex;
            background-color: #FFF;
            border-radius: 0.5rem;
            cursor: pointer;
            box-shadow: 0 3px 6px rgba(0,0,0,0.4);

            .product-image img{
               width: 6rem;
               padding: 0.8rem;
               border-radius: 1.5rem;
            }
            .product-text{
               margin-top: 1rem;
               color: rgba(29,94,29,255);
               text-align: left;
               width: 55%;
               .product-title{
                  font-weight: bold;
               }
               .product-price{
                  font-size: 0.9rem;
               }
               .product-ingredients{
                  font-size: 0.8rem;
               }
            }
            .product-icon{
               display: flex;
               justify-content: center;
               align-items: center;
               /* margin-left: 2rem; */
               img{
                  width: 1.5rem;
               }
            }
         }
      }
      
      .modal-content{
         width: 60vw;
         padding: 1rem;
         .content-top{
            display: flex;

            .modal-image img{
               width: 25rem;
               border-radius: 1rem;
            }
            .modal-text{
               flex:1;
               display: flex;
               flex-direction: column;
               color: #0A4E0A;
               margin: 1rem;
               margin-left: 2rem;
               text-align: left;
               

               .modal-title{
                  font-size: 2rem;
                  font-weight: bold;
                  margin-bottom: 1rem;
               }
               .modal-weight{
                  font-size: 1rem;
                  margin-bottom: 0.5rem;
               }
               .modal-ingredients{
                  font-size: 1rem;
                  margin-bottom: 0.5rem;
               }
               .container-price-quantity{
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  width: 100%;
                  margin-top: 7rem;

                  .modal-quantity{
                     display: flex;
                     justify-content: center;
                     align-items: center;

                     .bt-minus{
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-right: 1.5rem;
                        cursor: pointer;
                        .minus{
                           background-color: #0A4E0A;
                           height: 0.3rem;
                           width: 1.5rem;
                           
                        }
                     }
                     .quantity-number{
                        font-size: 2rem;
                        font-weight: bold;
                        
                     }
                     .bt-plus{
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-left: 1.5rem;
                        cursor: pointer;
                        .plus1{
                           background-color: #0A4E0A;
                           height: 0.3rem;
                           width: 1.5rem;

                        }
                        .plus2{
                           background-color: #0A4E0A;
                           height: 0.3rem;
                           width: 1.5rem;
                           transform: rotate(90deg);
                           margin-left: -1.5rem;
                        }
                     }
                  }
                  .modal-price{
                     font-size: 2rem;
                     font-weight: bold;
                  }
               }
            }
         }
         .content-bottom{
            display: flex;
            justify-content: right;
            width: 100%;
            border: 1px solid;
            color: #FFF;
            margin: 1rem;

            .bt-cancelar{
               display: flex;
               background-color: #073d07;
               height: 1.5rem;
               padding: 1rem;
               font-size: 1rem;
               font-weight: bold;
               border-radius: 0.5rem;
               margin-top: 2rem;
               box-shadow: 1px 1px 10px #000;
               cursor: pointer;
            }
            .bt-cancelar:hover{
               background-color: #0a660a;
            }
            .bt-addCart{
               background-color: #073d07;
               margin: 0 2rem;
               padding: 2rem;
               font-size: 1.5rem;
               font-weight: bold;
               border-radius: 0.5rem;
               box-shadow: 1px 1px 10px #000;
            }
            .bt-addCart:hover{
               background-color: #0a660a;
            }
         }
      }
  }
`;

export default Container;