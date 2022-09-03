import {
  LoginContainer,
  LoginForm,
} from "../../components/Login/Login.style.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { schema } from "../../validators/login.js";

function Login() {
  const [type, setType] = useState("password");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleLogin(data) {
    try {
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <LoginContainer>
      <div>
        <LoginForm onSubmit={handleSubmit(handleLogin)}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="E-mail"
            id="email"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <div className="container">

          <input
            type={type}
            placeholder="Senha"
            id="password"
            {...register("password")}
          />
          <div className="eye">
          {type === "password" ? (
            <EyeFilled onClick={() => setType("text")} />
          ) : (
            <EyeInvisibleFilled onClick={() => setType("password")} />
          )}
          </div>
          </div>
          {errors.password && <span>{errors.password.message}</span>}

          <button className="btnSingIn">Entrar</button>
          <p>
            Ainda não possui cadastro?
            <button type="submit" className="btnSingUp">
              <strong>Cadastre-se aqui!</strong>
            </button>
          </p>
        </LoginForm>
      </div>
    </LoginContainer>
  );
}

export default Login;
