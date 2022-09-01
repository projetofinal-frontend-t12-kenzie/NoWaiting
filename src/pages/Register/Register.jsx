import {
  RegisterContainer,
  RegisterForm,
} from "../../components/Register/Register.style.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Register() {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email().required("Campo obrigatório"),
    password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
      "A senha deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
    )
    .min(8)
    .required("Campo obrigatório"),
    
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não conferem")
      .required("Campo obrigatório"),

    contact: yup.string().required("Campo obrigatório"),

    img: yup.string().required("Campo obrigatório"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleRegister(data) {
    try {
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit(handleRegister)}>
        <button className="btnCloseRegister">X</button>
        <h2>Cadastre-se</h2>
        <input
          type="text"
          placeholder="Nome do restaurante"
          id="name"
          {...register("name")}
        />
        {errors.name && <span>{errors.name.message}</span>}

        <input
          type="text"
          placeholder="E-mail"
          id="email"
          {...register("email")}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <input
          type="password"
          placeholder="Senha"
          id="password"
          {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <input
          type="password"
          placeholder="Confirmação da senha"
          id="passwordConfirm"
          {...register("passwordConfirm")}
        />
        {errors.passwordConfirm && <span>{errors.passwordConfirm.message}</span>}

        <input
          type="text"
          placeholder="Contato"
          id="contact"
          {...register("contact")}
        />
        {errors.contact && <span>{errors.contact.message}</span>}

        <input
          type="text"
          placeholder="Link de imagem do perfil"
          id="img"
          {...register("img")}
        />
        {errors.img && <span>{errors.img.message}</span>}

        <button type="submit" className="btnRegister">
          Cadastrar
        </button>
      </RegisterForm>
    </RegisterContainer>
  );
}

export default Register;
