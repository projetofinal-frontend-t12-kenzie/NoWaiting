import styled from "styled-components";

export const InvoiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  position: absolute;

  width: 100%;
  height: 100vh;

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
    position: relative;

    width: 77%;
    height: 222px;

    .register {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;

      height: 167px;
      width: 100%;

      border-radius: 5px;
      padding: 0 20px 10px 20px;

      background-color: #ffffff;

      font-size: 14px;
      font-weight: 600;

      border-bottom: 3px dashed black;

      .name {
        display: flex;

        width: 100%;
        height: 30px;

        gap: 10px;

        .container {
          width: 220px;

          gap: 5px;

          border-bottom: 1px solid #000;

          .setName {
            padding-right: 20px;
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
        height: 30px;

        gap: 10px;

        .container {
          width: 220px;

          gap: 5px;

          border-bottom: 1px solid #000;

          .setTable {
            padding-right: 20px;
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

    .left {
      position: absolute;
      width: 15px;
      height: 30px;
      border-radius: 0px 30px 30px 0px;
      background-color: #141414;
      top: 150px;
      left: -1;
      z-index: 1;
    }

    .rigth {
      position: absolute;
      width: 15px;
      height: 30px;
      border-radius: 30px 0px 0px 30px;
      background-color: #141414;
      top: 150px;
      right: -1px;
      z-index: 1;
    }

    .invoice-total {
      flex-direction: column;
      background-color: #ffffff;
      height: 60px;
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

  .send {
    width: 287px;
    height: 57px;

    background: #ffffff;
    border-radius: 10px;
    border: none;

    color: #fa7b12;

    font-size: 16px;
  }

  .send-dashboard {
    width: 303px;
    height: 57px;
    left: 1178px;
    top: 900px;

    background: #ffffff;
    border-radius: 10px;
    border: none;

    color: #fa7b12;

    font-size: 16px;

    @media screen and (min-width: 1000px) {
      display: block;
    }
  }

  @media screen and (min-width: 1000px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    position: initial;

    width: 370px;
    height: 100vh;

    background-color: #141414;

    font-family: "Inter";
    font-style: normal;

    gap: 15px;
  }
`;
