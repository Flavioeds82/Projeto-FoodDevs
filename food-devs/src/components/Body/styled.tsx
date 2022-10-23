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
  }
`;

export default Container;