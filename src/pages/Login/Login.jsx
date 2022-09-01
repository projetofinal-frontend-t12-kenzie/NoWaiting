import {
  LoginContainer,
  LoginForm,
} from "../../components/Login/Login.style.js";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup.string().email().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

function Login() {
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
          <h2>LOGIN</h2>
          <input
            type="text"
            placeholder="email"
            id="email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <input
            type="password"
            placeholder="senha"
            id="password"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>

          <button className="btnSingIn">Entrar</button>
          <span>
            Ainda não possui cadastro?
            <button type="submit" className="btnSingUp">
              <strong>Cadastre-se aqui!</strong>
            </button>
          </span>
        </LoginForm>
      </div>
    </LoginContainer>
  );
}

export default Login;
