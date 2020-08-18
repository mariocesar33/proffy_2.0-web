import React from 'react';

import purpleHeartIcon from '../../assets/coracao-roxo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <form>
        <h1>Fazer login</h1>

        <input type="email" placeholder="E-mail" />

        <input type="password" placeholder="Senha" />

        <div className="painel-contaier">
          <input type="checkbox" id="box" />
          <label>Lembrar-se</label>

          <a href="forgot">Esqueci minha senha</a>
        </div>

        <button type="submit" >Entrar</button>
      </form>

      <div className="logon">
        <p>
          Não tem conta?
          
        </p>
        <span>
            É de graça <img src={purpleHeartIcon} alt="Coração roxo" />
          </span>
      </div>
      <a href="forgot">Cadastre-se</a>
    </Content>
  </Container>
);

export default SignIn;