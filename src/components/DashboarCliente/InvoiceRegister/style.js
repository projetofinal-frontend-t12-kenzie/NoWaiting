import styled from "styled-components";

export const InvoiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  align-items: center;

  width: 430px;

  padding: 10px;

  background-color: #141414;

  font-family: "Inter";
  font-style: normal;

  gap: 15px;

  .close {
    padding-left: 262px;
    z-index: 1;

    background: transparent;
    color: #fa7b12;

    border: none;

    font-size: 20px;
  }

  .invoice {
    height: 222px;
    position: relative;

    width: 77%;
    right: 18px;

    .register {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;

      background-color: #ffffff;
      height: 150px;
      position: relative;
      width: 100%;
      margin: 0px;
      border-radius: 5px;
      padding: 0 20px 10px 20px;

      font-size: 14px;
      font-weight: 600;

      .name {
        display: flex;

        width: 100%;

        gap: 10px;

        .container {
          width: 220px;

          gap: 5px;

          border-bottom: 1px solid #000;

          .setName {
            border: none;
            outline: 0;
          }

          .icon-name {
            font-weight: 300;
            font-size: 15px;
            line-height: 18px;
          }
        }
      }

      .table {
        display: flex;

        width: 100%;

        gap: 10px;

        .container {
          width: 220px;

          gap: 5px;

          border-bottom: 1px solid #000;

          .setTable {
            border: none;
            outline: 0;
          }

          .icon-table {
            font-weight: 300;
            font-size: 15px;
            line-height: 18px;
          }
        }
      }
    }

    .invoice-cut {
      .left {
        position: absolute;
        width: 15px;
        height: 30px;
        border-radius: 0px 30px 30px 0px;
        background-color: var(--grey-3);
        top: 147px;
        z-index: 1;
      }

      .line {
        margin: 0px;
        width: 200px;
        background-color: #000;
        height: 2px;
      }

      .rigth {
        position: absolute;
        width: 15px;
        height: 30px;
        border-radius: 30px 0px 0px 30px;
        background-color: var(--grey-3);
        top: 147px;
        right: -40px;
        z-index: 1;
      }
    }

    .invoice-total {
      flex-direction: column;
      background-color: #ffffff;
      height: 50px;
      position: relative;
      width: 100%;
      margin: 0px;
      border-radius: 5px;
      padding: 10px 20px 0 20px;

      div {
        margin-top: 15px;
        font-size: 15px;
        font-weight: 600;
      }
    }
  }
  .finish {
    display: flex;

    @media screen and (min-width: 1300px) {
      right: 30px;
      top: 510px;
    }
  }

  .send {
    width: 287px;
    height: 57px;

    background: #ffffff;
    border-radius: 10px;
    border: none;

    color: #fa7b12;

    font-size: 16px;
  }
`;
