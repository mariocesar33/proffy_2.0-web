import styled from 'styled-components';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 900px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 40px;
    }

    input {
      background: #FAFAFC;
      border: 2px solid #E6E6F0;
      padding: 16px;
      width: 100%;

      & + input {
        margin-top: 0;
      }
    }

    input[type=email] {
      border-radius: 8px 8px 0px 0px;
    }

    input[type=password] {
      border-radius: 0px 0px 8px 8px;
    }

    .painel-contaier {
      margin-top: 20px;
      align-items: center;
      display: flex;
    }

    .painel-contaier input {
      margin-left: 5px;
      width: 20px;
      height: 20px;
      margin-left: 0;
      background: #FAFAFC;
      border: 1px solid #E6E6F0;
      box-sizing: border-box;
      border-radius: 5px;
    }

    .painel-contaier label {
      margin-left: 10px;
      color: #9C98A6;
    }

    .painel-contaier a {
      margin-left: 60px;
      font-size: 14px;
      line-height: 24px;
      text-align: right;
      color: #9C98A6;
      text-decoration: none;
    }

    button {
      background: #DCDCE6;
      border-radius: 8px;
      border: 0;
      padding: 16px;
      color: #9C98A6;
      width: 100%;
      font-weight: 500;
      margin-top: 30px;
    }
  }

  .logon {
    margin-top: 80px;
    align-items: center;
    display: flex;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  /* background-size: cover; */
  background-color: #8257E5;
`;