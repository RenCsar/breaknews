import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { cadastroSchema } from '../../schemas/cadastroSchemas';
import { Store } from '../../store/store';
import { Cadastrar } from '../../store/reducers/cadastroSlice';
import { TCadastrarEntries } from '../../utils/types';

const CadastroForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(cadastroSchema)
    });

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
    });

    const cadastrar = async (data: TCadastrarEntries) => {
        const result = await Store.dispatch(Cadastrar(data));
        reset();
        if (Cadastrar.fulfilled.match(result)) {
            const redirectTo = result.payload.redirectTo;
            navigate(redirectTo);
        }
    };

    return (
        <Fade direction="right" delay={100} duration={400} triggerOnce cascade>
            <Box className="signup">
                <div>
                    <h1>Cadastrar</h1>
                </div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: "8px 0px" },
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
                        {...register("username")}
                        id="username"
                        error={!!errors.username}
                        label={errors?.username?.message ? errors.username?.message : "Username"}
                        variant="outlined"
                        size="small"
                        sx={sharedStyled(errors.username)}
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