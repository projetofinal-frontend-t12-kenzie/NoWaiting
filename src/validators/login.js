import * as yup from 'yup';

export const schema = yup.object({
    email: yup.string().email().required("Campo obrigatório"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
        "A senha deve conter no mínimo 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
      )
      .required("Campo obrigatório"),
  });