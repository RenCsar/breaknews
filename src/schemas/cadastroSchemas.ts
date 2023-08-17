import * as yup from "yup";

const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

export const cadastroSchema = yup.object({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter no mínimo 3 letras")
    .max(50, "O nome deve ter no máximo 50 letras")
    .matches(regex, "O nome deve ter apenas letras e espaços")
    .test("nome", "O nome deve ter no mínimo sobrenome", (value: any) => {
      if (value) {
        const [nome, sobrenome] = value.split(" ");
        return nome && sobrenome;
      }
      return false;
    }),
  email: yup
    .string()
    .required("O email é obrigatório")
    .min(3, "O email deve ter no mínimo 3 letras")
    .max(50, "O email deve ter no máximo 50 letras")
    .email("O email deve ser um endereço de email válido"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("A senha é obrigatória"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
    .required("A confirmação de senha é obrigatória"),
  nickname: yup
    .string()
    .required("O nickname é obrigatório")
    .min(3, "O nickname deve ter no mínimo 3 letras")
    .max(15, "O nickname deve ter no máximo 15 letras")
    .matches(
      /^[a-z0-9]+$/,
      "O nickname deve conter apenas letras minúsculas e números"
    )
    .trim(),
  img: yup
    .string()
    .required("O link da foto é obrigatório")
    .url("Insira uma URL válida para a imagem"),
  background: yup
    .string()
    .required("O link do Banner é obrigatório")
    .url("Insira uma URL válida para a imagem"),
});