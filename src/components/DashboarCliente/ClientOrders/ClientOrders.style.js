import styled from "styled-components";

export const OrderContainer = styled.div`
  display: none;
  justify-content: space-between;
  flex-direction: column;
  position: relative;

  width: 430px;
  /* min-height: 100%; */

  padding: 10px;

  background-color: #141414;

  font-family: "Inter";
  font-style: normal;

  @media screen and (min-width: 1000px) {
    display: flex;
  }

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
      padding: 0 0 0 27px;

      @media screen and (min-width: 1300px) {
        padding: 0 0 0 13px;
      }

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
      right: 21px;
      top: -18px;
      width: 70%;

      .invoice-amount {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;

        background-color: #ffffff;
        height: 110px;
        position: relative;
        width: 100%;
        margin: 0px;
        border-radius: 20px 20px 0px 0px;
        padding: 0 20px 10px 20px;

        font-size: 14px;
        font-weight: 600;
      }

      .invoice-cut {
        .left {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 40px;
          background-color: var(--grey-3);
          top: 101px;
          left: -26px;
          z-index: 1;
        }

        .line {
          margin: 0px;
          width: 200px;
          background-color: #000;
          height: 4px;
        }

        .rigth {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 40px;
          background-color: var(--grey-3);
          top: 101px;
          right: -64px;
          z-index: 1;
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
        padding: 10px 20px 0 20px;

        div {
          margin-top: 10px;
          font-size: 15px;
          font-weight: 600;
        }
      }
    }

    .finish {
      position: absolute;
      top: 505px;
      right: 12px;

      @media screen and (min-width: 1300px) {
        right: 30px;
        top: 510px;
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
