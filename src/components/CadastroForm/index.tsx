import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Fade } from "react-awesome-reveal";

const CadastroForm = () => {
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
                >
                    <TextField
                        id="name"
                        label="Nome"
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
                        id="nickname"
                        label="Nickname"
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
                    <TextField
                        id="img"
                        label="Link da foto"
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
                        id="background"
                        label="Link da foto para o Banner"
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
                    <TextField
                        id="email"
                        label="E-mail"
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
                        label="Senha"
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
                    <TextField
                        id="cofirmpassword"
                        label="Cnfirmar Senha"
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