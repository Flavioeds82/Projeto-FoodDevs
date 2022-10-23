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
  }
`;

export default Container;