import {
  LoginContainer,
  LoginForm,
} from "../../components/Login/Login.style.js";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

function Login() {
  const [type, setType] = useState("password");

  const schema = yup.object({
    email: yup.string().email().required("Campo obrigatório"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
        "A senha deve conter no mínimo 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
      )
      .required("Campo obrigatório"),
  });

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
