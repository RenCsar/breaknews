import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Formato de e-mail inválido")
    .required("O e-mail é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("A senha é obrigatória"),
});
