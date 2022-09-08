import styled from "styled-components";

export const OrderContainer = styled.div`
  display: none;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;

  width: 100%;
  height: 100vh;

  padding: 10px;

  background-color: #141414;

  font-family: "Inter";
  font-style: normal;

  .block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 50%;

    .header {
      display: flex;
      justify-content: flex-start;
      align-items: center;

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

      overflow-y: scroll;

      width: 100%;
      height: 400px;

      margin-top: 20px;
      margin-bottom: 20px;

      gap: 18px;

      button {
        cursor: pointer;
      }

      ::-webkit-scrollbar {
        display: none;
      }

      .ghost {
        display: flex;

        width: 90%;
        height: 80px;

        background: #000000;

        border-radius: 10px;

        gap: 5px;

        position: relative;
        .ghost.img {
          width: 80px;
          height: 100%;

          border-radius: 10px;
          background-color: var(--grey-transparent);
          opacity: 50%;
        }

        .ghost.description {
          display: flex;
          justify-content: space-around;
          flex-direction: column;

          width: 70%;
          height: 80%;

          margin-top: 3px;
          margin-left: 5px;
          background: transparent;

          .ghost.title {
            width: 60%;
            height: 12px;
            background-color: var(--grey-transparent);
            opacity: 50%;
          }

          .ghost.config {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            width: 93%;
            height: 10px;

            .ghost.price {
              width: 40%;
              height: 12px;
              background-color: var(--grey-transparent);
              opacity: 50%;
            }
            .ghost.amount {
              width: 18%;
              height: 12px;
              background-color: var(--grey-transparent);
              opacity: 50%;
            }
          }
        }
      }

      .ghost:hover {
        transform: scale(1.02);
        transition: all 3s;
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

            margin: 0 auto;
          }
        }
      }
    }
  }

  .invoice {
    height: 200px;
    position: relative;

    width: 77%;
    .invoice-amount {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;

      background-color: #ffffff;
      height: 120px;
      position: relative;
      width: 100%;
      margin: 0px;
      border-radius: 5px;
      padding: 0 20px 10px 20px;

      font-size: 14px;
      font-weight: 600;

      border-bottom: 1.5px dashed black;
    }

    .left {
      position: absolute;
      width: 15px;
      height: 30px;
      border-radius: 0px 30px 30px 0px;
      background-color: #141414;
      top: 104px;
      z-index: 1;
    }

    .rigth {
      position: absolute;
      width: 15px;
      height: 30px;
      border-radius: 30px 0px 0px 30px;
      background-color: #141414;
      top: 104px;
      right: 0px;
      z-index: 1;
    }
  }

  .invoice-total {
    flex-direction: column;
    background-color: #ffffff;
    height: 52px;
    position: relative;
    width: 100%;
    margin: 0px;
    border-radius: 5px;
    padding: 10px 20px 0 20px;

    div {
      margin-top: 10px;
      font-size: 15px;
      font-weight: 600;
    }
  }

  .send-dashboard {
    width: 303px;
    height: 57px;
    left: 1178px;
    top: 900px;

    background: #fa7b12;
    border-radius: 10px;
    border: none;

    color: #ffffff;

    font-size: 16px;

    @media screen and (min-width: 1000px) {
      display: block;
    }
  }

  @media screen and (min-width: 1000px) {
    display: flex;
    /* display: block; */
    width: 347px;
    position: initial;
  }

  @media screen and (min-width: 1300px) {
    padding: 0 0 0 13px;
  }
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  .subdescription {
    opacity: 60%;
    font-weight: 400;
    line-height: 19px;
  }
  .total {
    font-weight: 400;
    line-height: 19px;
  }
`;
