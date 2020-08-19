import styled from 'styled-components';
import { shade } from 'polished';

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
    width: 340px;
    text-align: center;

    h1 {
      text-align: left;
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
    }

    .painel-contaier label {
      margin-left: 10px;
      color: #9C98A6;
    }

    .painel-contaier a {
      margin-left: 60px;
      font-size: 14px;
      color: #9C98A6;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#9C98A6')};
      }
    }

    button {
      background: #DCDCE6;
      border-radius: 8px;
      border: 0;
      padding: 16px;
      color: #9C98A6;
      width: 100%;
      margin-top: 30px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#DCDCE6')};
      }
    }
  }

  .logon {
    width: 340px;
    font-size: 16px;
    margin-top: 100px;
    display: flex;
  }

  .logon span a {
    color: #8257E5;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#8257E5')}
    }
  } 

  .roxo {
    font-size: 12px;
    color: #9C98A6;
    margin-left: 120px
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  /* background-size: cover; */
  background-color: #8257E5;
`;