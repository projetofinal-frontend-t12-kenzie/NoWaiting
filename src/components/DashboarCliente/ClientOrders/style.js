import styled from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 430px;
  /* min-height: 100%; */

  padding: 10px;

  background-color: #141414;

  font-family: "Inter";
  font-style: normal;

  .block {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 48%;

    .header {
      width: 100%;
      height: 50px;

      .title.header {
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;

        color: #fa7b12;
      }
    }

    .list.orders {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      padding: 0 0 0 13px;

      overflow-y: scroll;

      width: 100%;
      height: 400px;

      gap: 5px;

      ::-webkit-scrollbar {
        display: none;
      }

      .order {
        display: flex;

        width: 90%;
        height: 80px;

        background: #000000;

        border-radius: 10px;

        gap: 5px;

        position: relative;

        .img {
          width: 80px;
          height: 100%;

          border-radius: 10px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }

        .description {
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          height: 100%;

          .description-title {
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;

            color: #ffffff;
          }

          .price {
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            text-align: center;

            color: #fa7b12;
          }
        }

        .assests {
          display: flex;
          justify-content: flex-end;

          position: absolute;

          right: 12px;
          top: 63px;

          gap: 10px;

          .amount {
            font-weight: 700;
            font-size: 10px;
            line-height: 12px;

            color: #ffffff;
          }

          .button {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 11px;
            height: 11px;

            background: #fa7b12;

            border-radius: 1px;
            border: none;
          }
        }
      }
    }

    /* 
    .invoice {
      height: 207px;
      position: relative;
      width: 80%;

      .invoice-amount {
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        background-color: #ffffff;
        height: 130px;
        position: relative;
        width: 100%;
        margin: 0px;
        border-radius: 20px 20px 0px 0px;
        padding: 10px;
      }

      .invoice-amount {
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        background-color: #ffffff;
        height: 130px;
        position: relative;
        width: 100%;
        margin: 0px;
        border-radius: 20px 20px 0px 0px;
        padding: 10px;
      }
    } */

    /* .send {
      width: 303px;
      height: 57px;
      left: 1178px;
      top: 900px;

      background: #fa7b12;
      border-radius: 10px;
      border: none;

      color: #ffffff;

      font-size: 16px;
    } */

    // .invoice {
    //     background-color: #09156E;
    //     height: 100px;
    //     position: relative;
    //     width: 200px;
    //     margin: 0px;
    //     border-radius: 20px 20px 0px 0px;
    //   }
    //   hr{
    //     margin:0px;
    //     width: 200px;
    //     background-color: #000;
    //     height: 4px;
    //   }
    //   .bolaesquerda {
    //     position: absolute;
    //       width: 40px;
    //       height: 40px;
    //       border-radius:40px;
    //       background-color: #fff;
    //       top: 80px;
    //       left: -20px;
    //       z-index: 1;
    //   }
    //   .boladireita {
    //     position: absolute;
    //       width: 40px;
    //       height: 40px;
    //       border-radius:40px;
    //       background-color: #fff;
    //       top: 80px;
    //       right: -20px;
    //       z-index: 1;
    //   }
    //   .subtotal{
    //     margin: 0px;
    //     background-color: #09156E;
    //     height: 100px;
    //     position: absolute;
    //     width: 200px;
    //     border-radius: 0px 0px 20px 20px;
    //   }
  }
  #total {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 48%;

    .invoice {
      height: 207px;
      position: relative;
      width: 80%;

      .invoice-amount {
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        background-color: #ffffff;
        height: 130px;
        position: relative;
        width: 100%;
        margin: 0px;
        border-radius: 20px 20px 0px 0px;
        padding: 10px;
      }

      .invoice-amount {
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        background-color: #ffffff;
        height: 130px;
        position: relative;
        width: 100%;
        margin: 0px;
        border-radius: 20px 20px 0px 0px;
        padding: 10px;
      }

      .invoice-cut {
        .left {
          color: var(--grey-0);
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }

        .line {
          background-color: var(--grey-3);
          height: 2px;
        }

        .rigth {
        }
      }

      .invoice-total {
        flex-direction: column;
        background-color: #ffffff;
        height: 40px;
        position: relative;
        width: 100%;
        margin: 0px;
        border-radius: 0px 0px 20px 20px;
        padding: 10px;

        div {
          margin-top: 10px;
        }
      }
    }
    .send {
      width: 303px;
      height: 57px;
      left: 1178px;
      top: 900px;

      background: #fa7b12;
      border-radius: 10px;
      border: none;

      color: #ffffff;

      font-size: 16px;
    }
  }
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;
