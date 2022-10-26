import styled from 'styled-components';

export const Container = styled.div`
  .container{
    display: flex;
    
    h1{
        text-align: center;
        margin: auto;
    }
    .container-order{
      display: flex;
      flex-direction: column;
      width: 85%;
      margin:auto;
      background-color: #FFF;
      border-radius: 1rem;
      margin-top: 2rem;
      padding: 2rem;
      color: #136610;
      
      .timeline-top{
        width: 50%;
        height:0.2rem;
        background-color: #136610;
        margin-left: 4rem;
        margin-bottom: -0.7rem;
      }
      .timeline-bottom{
        display: flex;
        justify-content: space-between;

        .container-time-line{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* border: 2px solid #136610; */


        .time-line-ball{
          width: 1rem;
          height: 1rem;
          border: 2px solid #136610;
          border-radius: 50%;
        }
        .time-line-ball.active{
          background-color: #136610;
        }
        .time-label.active{
          font-weight: bold;
        }
      }
      
      }   
      .container-order-info{
      display:flex;
      justify-content: space-between;
      margin-top: 2rem;

      .order-products{
        display: flex;
        flex-direction: column;

        .order-product{
          display:flex;
          margin-bottom: 1rem;
          text-align: left;

          .order-product-image img{
            width: 5rem;
            margin-right: 0.5rem;
            border-radius: 1rem;
            
          }
          .order-product-info{
            .title{
              font-weight: bold;
            }
          }
        }
      }
      .order-address{
        text-align: left;

        .order-date{
          margin-bottom: 1rem;
          .date-title{
            font-weight: bold;
          }
        }
        .address-info{
          .order-title{
            font-weight: bold;
          }
        }
      }
      .order-subtotal{
        .subtotal{
          display: flex;
          justify-content: space-between;
          .label{
            font-weight: bold;
          }
          .value{
            margin-left: 2rem;
          }
        }
      }
      }
    }
    .container-other-orders{
      display: flex;
      flex-direction: column;
      width: 90%;
      margin:auto;
      margin-top: 1rem;
      text-align: left;
      .other-orders-title{
        color: #FFF;
        margin-bottom: 1rem;
      }
      .other-orders-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-bottom: 2rem;
        

        .other-grid-item{
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 90%;
          height: 8rem;
          padding: 1rem;
          background-color: #FFF;
          border-radius: 1rem;
          color: #275826;

          .other-orders-address{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 1rem;
            line-height: 1rem;
            .date-info{
              flex:1;
              margin-top: 0;
              margin-bottom: 3rem;
              font-size: 1.2rem;
            }
          }
          .other-status{
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .status-info{
              margin-bottom: 3rem;
            }
            .other-total{
              font-weight: bold;
            }
          }

        }
      }
    }
      
     
}
`;