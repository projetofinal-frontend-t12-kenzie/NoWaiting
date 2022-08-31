import {
  RegisterContainer,
  RegisterForm,
} from "../../components/Register/Register.style.js";

function Register() {
  return (
    <RegisterContainer>
      <RegisterForm>
        <button className="btnCloseRegister">X</button>
        <h2>NoWaiting</h2>
        <input type="text" placeholder="nome do restaurante" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="senha" />
        <input type="text" placeholder="confirmação da senha" />
        <input type="text" placeholder="link de imagem do perfil" />
        <button className="btnRegister">Cadastrar</button>
      </RegisterForm>
    </RegisterContainer>
  );
}

export default Register;
