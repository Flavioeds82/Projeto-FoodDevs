import styled from 'styled-components';


export const Container = styled.div`
   overflow-y: auto;

   .container{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items:center;
      width: 90%;
      height: auto;
      background-color: rgba(19,103,18,150);
      margin: auto;
      margin-top: 1rem;
      border-radius: 0.3rem;
      padding: 1rem;

      .header-logo{
      padding: 0.5rem;
         img{
            width: 15rem;
         }
      }
      .header-search{
         display:flex;
         align-items: center;
         justify-content: center;
         

         .search-input{
            background-color: #fff;
            width: 20rem;
            height: 2rem;
            border-radius:  2rem 2rem 2rem 2rem ;



            input{
               width: 100%;
               height: 100%;
               border:0;
               padding:0 1rem;
               background-color: #FFF;
               border-radius:  2rem 2rem 2rem 2rem ;
               color: #444;
               font-size: 1.3rem;

               

            }
         }
         .search-icon{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            margin-right: 2rem;
            background-color: #fff;
            border-radius: 2rem 2rem 2rem 2rem;
            cursor: pointer;

            img{
               width: 1rem;
               height: 1rem;
               padding: 0.5rem;
            }
            
         }
        
      }
   }
   
`;