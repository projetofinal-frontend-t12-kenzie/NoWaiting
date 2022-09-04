import {
  RegisterContainer,
  RegisterForm,
} from "../../components/Register/Register.style.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useContext, useState } from "react";
import { schema } from "../../validators/register.js";
import { Contexts } from "../../contexts/provider.jsx";

function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [type, setType] = useState("password");

  const {registerUser} = useContext(Contexts)

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit(registerUser)}>
        <a href="/login" className="btnCloseRegister">X</a>
        <h2>Cadastre-se</h2>
        <input
          type="text"
          placeholder="Nome do restaurante"
          id="name"
          {...register("name")}
        />
        {errors.name && <span>{errors.name?.message}</span>}

        <input
          type="text"
          placeholder="E-mail"
          id="email"
          {...register("email")}
        />
        {errors.email && <span>{errors.email?.message}</span>}

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
        {errors.password && <span>{errors.password?.message}</span>}

        <input
          type="password"
          placeholder="Confirmação da senha"
          id="passwordConfirm"
          {...register("passwordConfirm")}
        />
        {errors.passwordConfirm && (
          <span>{errors.passwordConfirm?.message}</span>
        )}

        <input
          type="text"
          placeholder="Contato"
          id="contact"
          {...register("contact")}
        />
        {errors.contact && <span>{errors.contact?.message}</span>}

        <input
          type="text"
          placeholder="Link de imagem do perfil"
          id="img"
          {...register("img")}
        />
        {errors.img && <span>{errors.img?.message}</span>}

        <button type="submit" className="btnRegister">
          Cadastrar
        </button>
      </RegisterForm>
    </RegisterContainer>
  );
}

export default Register;
