import * as yup from "yup";

export const SchemaLogin = yup.object().shape({
  email: yup.string().email().required("Email é obrigatorio"),
  password: yup.string().required("Senha é obrigatorio"),
});

export const SchemaRegister = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatorio")
    .min(3, "O nome precisa de pelo menos 3 caracteres"),
  email: yup
    .string()
    .required("O email é obrigatorio")
    .email("O email deve ser: exemplo@email.com"),
  password: yup
    .string()
    .required("A senha é obrigatorio")
    .matches(/(?=.*?[A-Z])/, "É nescessário pelo menos uma letra maiúscula!")
    .matches(/(?=.*?[a-z])/, "É nescessário pelo menos uma letra minúscula!")
    .matches(/(?=.*?[0-9])/, "É nescessário pelo menos um número!")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É nescessário pelo menos um caractere especial!"
    )
    .min(6, "A senha precisa de pelo menos 6 caracteres"),
  confirm_password: yup
    .string()
    .required("A senha é obrigatorio")
    .oneOf([yup.ref("password")], "Senha deve ser igual"),
});
