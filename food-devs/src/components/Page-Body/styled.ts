import styled from 'styled-components';
import bg from "../../assets/images/bg.png";


export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #00980D;
    background-image: url(${bg});
    text-align: center;
    overflow-y: auto;
    margin-left: 6.5rem;


    .container{
        display: flex;
        flex-direction: column;


        p{
        text-align: left;
    }
    }
    
`;