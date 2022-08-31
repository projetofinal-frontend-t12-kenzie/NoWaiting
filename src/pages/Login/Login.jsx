import {
  LoginContainer,
  LoginForm,
} from "../../components/Login/Login.style.js";

function Login() {
  return (
    <LoginContainer>
      <div>
        <LoginForm>
          <h2>LOGIN</h2>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button className="btnSingIn">Entrar</button>
          <span>
            Ainda não possui cadastro?
            <button className="btnSingUp">
              <strong>Cadastre-se aqui!</strong>
            </button>
          </span>
        </LoginForm>
      </div>
    </LoginContainer>
  );
}

export default Login;
