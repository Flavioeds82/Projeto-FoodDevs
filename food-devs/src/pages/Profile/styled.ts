import styled from 'styled-components';

export const Container = styled.div`
  .container{
     display: flex;
     justify-content: center;
     .profile-image{
      display:flex;
      width: 95%;

      .left{
        flex:1;
        display:flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        margin-left:3rem;
        /* border: 1px solid; */
        text-align: right;
        img{
          width:3rem;
        }
        .welcome{
          margin-left: 1rem;
          font-size: 2rem;
          font-weight: bold;
        }
      }
      .right{
        display:flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-top: 2rem;
        background-color: RGB(19, 103, 18);
        color: #FFF;
        width:5rem;
        padding: 0.4rem;
        border-radius: 1rem;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
      }
      .right:hover{
        background-color: #011f04;
        opacity: 0.8;
      }
      
     }

     .container-profile-body{
      display: flex;
      justify-content: space-evenly;
      width: 90%;
      height: auto;
      margin: 0 auto;
      margin-top: 1rem;
      margin-bottom: 5rem;
      background-color: #FFF;
      border-radius: 1rem;
      padding: 1rem;
      color: RGB(19, 103, 18);

      .user-info{
        width: 50%;
        /* border: 1px solid red; */
        margin-right: 1rem;
        padding: 1rem;

        .user-title{
          font-size: 1.5rem;
          font-weight: bold;
          text-align: center;
        }
        .container-info{
          display: flex;
          border: 1px solid;
          border-radius: 1rem;
          margin-top: 1.5rem;
          .label{
            font-size: 1rem;
            font-weight: bold;
            padding:0.5rem;
          }
          .info{
            font-size: 1rem;
            padding:0.5rem;
          }
        }
        .edit-bt{
          margin: auto;
          margin-top: 1rem;
          background-color: RGB(19, 103, 18);
          color: #FFF;
          width:10rem;
          padding: 0.4rem;
          border-radius: 1rem;
          font-size: 1rem;
          font-weight: bold;
        }
        .edit-bt:hover{
          opacity: 0.8;
        }
      }
      .user-address{
        width: 50%;
        margin-left: 1rem;
        padding: 1rem;

        .user-address-title{
          font-size: 1.5rem;
          font-weight: bold;
          text-align: center;
        }
        .container-address-info{
          display: flex;
          border: 1px solid;
          border-radius: 1rem;
          margin-top: 1.5rem;
          .label{
            font-size: 1rem;
            font-weight: bold;
            padding:0.5rem;
          }
          .info{
            font-size: 1rem;
            padding:0.5rem;
          }
        }
        .edit-bt{
          margin: auto;
          margin-top: 1rem;
          background-color: RGB(19, 103, 18);
          color: #FFF;
          width:10rem;
          padding: 0.4rem;
          border-radius: 1rem;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
        }
        .edit-bt:hover{
          opacity: 0.8;
        }
      }
     }

     .modal--profile {
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
        input[type="password"] {
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
        input[type="email"] {
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