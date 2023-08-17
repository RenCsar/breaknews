import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { cadastroSchema } from '../../schemas/cadastroSchemas';

const CadastroForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(cadastroSchema)
    });

    const cadastrar = (data: any) => {
        console.log(data);
        reset();
    }

    const sharedStyled = (error: FieldError | undefined) => ({
        width: "100%",
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: error ? 'secundary' : `var(--preto-fonte)`,
            }
        },
        '& label.Mui-focused': {
            color: error ? 'secundary' : `var(--preto-fonte)`,
        }
    })

    return (
        <Fade direction="right" delay={100} duration={400} triggerOnce cascade>
            <Box className="signup">
                <div>
                    <h1>Cadastrar</h1>
                </div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    className="form"
                    onSubmit={handleSubmit(cadastrar)}
                >
                    <TextField
                        {...register('name')}
                        id="name"
                        variant="outlined"
                        size="small"
                        error={!!errors.name}
                        label={errors?.name?.message ? errors.name?.message : "Nome"}
                        sx={sharedStyled(errors.name)}
                    />
                    <TextField
                        {...register("nickname")}
                        id="nickname"
                        error={!!errors.nickname}
                        label={errors?.nickname?.message ? errors.nickname?.message : "Nickname"}
                        variant="outlined"
                        size="small"
                        sx={sharedStyled(errors.nickname)}
                    />
                    <TextField
                        {...register("img")}
                        id="img"
                        error={!!errors.img}
                        label={errors?.img?.message ? errors.img?.message : "Link da foto"}
                        variant="outlined"
                        size="small"
                        sx={sharedStyled(errors.img)}
                    />
                    <TextField
                        {...register("background")}
                        id="background"
                        error={!!errors.background}
                        label={errors?.background?.message ? errors.background?.message : "Link da foto para o Banner"}
                        variant="outlined"
                        size="small"
                        sx={sharedStyled(errors.background)}
                    />
                    <TextField
                        {...register("email")}
                        id="email"
                        error={!!errors.email}
                        label={errors?.email?.message ? errors.email?.message : "E-mail"}
                        variant="outlined"
                        size="small"
                        sx={sharedStyled(errors.email)}
                    />
                    <TextField
                        {...register("password")}
                        id="password"
                        error={!!errors.password}
                        label={errors?.password?.message ? errors.password?.message : "Senha"}
                        variant="outlined"
                        size="small"
                        type="password"
                        sx={sharedStyled(errors.password)}
                    />
                    <TextField
                        {...register('confirmpassword')}
                        id="confirmpassword"
                        error={!!errors.confirmpassword}
                        label={errors?.confirmpassword?.message ? errors.confirmpassword?.message : "Confirmar Senha"}
                        variant="outlined"
                        size="small"
                        type="password"
                        sx={sharedStyled(errors.confirmpassword)}
                    />
                    <input type="submit" value="Criar Conta" className="submit" />
                    <div className="termos">
                        <p>
                            By continuing, you agree to the updated <span>Terms of Sale</span>, <span>Terms of Service</span>, and <span>Privacy Policy</span>.
                        </p>
                    </div>
                </Box>
            </Box>
        </Fade>
    )
}

export default CadastroForm;