import styled from 'styled-components';

export const Container = styled.div`
  .container{
     .menu-aside{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 6.5rem;
        min-height: 100vh;
        
        
        background-color: rgba(19,103,18,150);
      .aside-icon{
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         width: 4rem;
         height: 4rem;
         margin-bottom: 2rem;
         border-radius: 1rem;
           img{
               width: 2rem;
               height: 2rem;
               padding: 1rem;
            } 
         }
      .aside-icon:hover{
         
      }
      .aside-icon.active{
         background-color: #0a4e0a;
      }
        
     }
  }
`;