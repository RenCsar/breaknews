import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { Fade } from "react-awesome-reveal";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../schemas/loginSchema';
import { RootState, Store } from '../../store/store';
import { Auth } from '../../store/reducers/AuthSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const SigninForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    type TDataLogin = {
        email: string,
        password: string,
    }

    const logar = async (data: TDataLogin) => {
        const result = await Store.dispatch(Auth(data));
        reset();
        if (result.payload?.redirectTo) {
            navigate(result.payload.redirectTo);
        }
    }

    const data = useSelector((state: RootState) => state.auth);

    return (
        <Fade direction="left" delay={100} duration={400} triggerOnce cascade>
            <Box className="login" >
                <div>
                    <h1>Entrar</h1>
                </div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    className="form"
                    onSubmit={handleSubmit(logar)}
                >
                    <TextField
                        id="email"
                        {...register('email')}
                        error={!!errors.email}
                        label={errors?.email?.message ? errors.email?.message : "E-mail"}
                        variant="outlined"
                        size="small"
                        sx={{
                            width: "100%",
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: `var(--preto-fonte)`,
                                }
                            },
                            '& label.Mui-focused': {
                                color: `var(--preto-fonte)`,
                            }
                        }}
                    />
                    <TextField
                        id="password"
                        {...register("password")}
                        error={!!errors.password}
                        label={errors?.password?.message ? errors.password?.message : "Senha"}
                        variant="outlined"
                        size="small"
                        type="password"
                        sx={{
                            width: "100%",
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: `var(--preto-fonte)`,
                                }
                            },
                            '& label.Mui-focused': {
                                color: `var(--preto-fonte)`,
                            }
                        }}
                    />
                    <input type="submit" value="Continuar" className="submit" />
                    <div className="divisao">
                        <p></p>
                        <p>Ou</p>
                        <p></p>
                    </div>
                    <div className="btn-container">
                        <button><FcGoogle size={20} /><p>Google</p></button>
                        <button><BsFacebook size={20} /><p>Facebook</p></button>
                    </div>
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

export default SigninForm;