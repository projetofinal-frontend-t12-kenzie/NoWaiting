import {
  RegisterContainer,
  RegisterForm,
} from "../../components/Register/Register.style.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api.jsx";
import { Link } from "react-router-dom";

const schema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email().required("Campo obrigatório"),
  password: yup
    .string()
    .min(6)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
      "A senha deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
    )
    .required("Campo obrigatório"),
  confirmPassword: yup.string().oneOf([yup.ref("password")]),
  contact: yup.string().required("Campo obrigatório"),
  img: yup.string().required("Campo obrigatório"),
});

function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleRegister(data) {
    console.log(data);
    /*  try{
    api.post("/register", data).then((_) => navigation("/login") )}
    catch(err) {console.log(err)}
  */
  }

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit(handleRegister)}>
        <Link /* to="/login" */>
          <button className="btnCloseRegister">X</button>
        </Link>
        <h2>NoWaiting</h2>
        <input
          type="text"
          placeholder="nome do restaurante"
          id="name"
          {...register("name")}
        />
        <span>{errors.name?.message}</span>

        <input
          type="text"
          placeholder="email"
          id="email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>

        <input
          type="text"
          placeholder="senha"
          id="password"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>

        <input
          type="text"
          placeholder="confirmação da senha"
          id="passwordConfirmation"
        />
        <span>{errors.passwordConfirmation?.message}</span>

        <input
          type="text"
          placeholder="contato"
          id="contact"
          {...register("contact")}
        />
        <span>{errors.contact?.message}</span>

        <input
          type="text"
          placeholder="link de imagem do perfil"
          id="img"
          {...register("img")}
        />
        <span>{errors.img?.message}</span>

        <button type="submit" className="btnRegister">
          Cadastrar
        </button>
      </RegisterForm>
    </RegisterContainer>
  );
}

export default Register;
