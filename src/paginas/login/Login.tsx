import React, {useState, useEffect , ChangeEvent} from "react";
import './Login.css'
import { Grid, Box, Typography, TextField, Button} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import {  login } from "../../services/Service";
import UsuarioLogin from "../../models/UsuarioLogin";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";



function Login() {
    const dispatch = useDispatch();
    const history = useNavigate();
    const[token, setToken]=useState ('');

    const[userLogin, setUserLogin]= useState<UsuarioLogin>(
    {
        id: 0,
        usuario:'',
        senha:'' ,
        token:'',
        foto:''
    }
)

    function updateModel(e: ChangeEvent<HTMLInputElement>){
        setUserLogin({
            ...userLogin,
            [e.target.name]:e.target.value
        })
    }

    useEffect(()=>{
        if(token!= ''){
            dispatch(addToken(token));
            history('/home')
        }

    }, [token])

    async function onSubmit(event :ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
    try{
            await login ('/usuarios/logar', userLogin ,setToken) 
            toast.success("Usuário Logado com sucesso!", {
                position:"top-right",
                autoClose: 2000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:false,
                draggable:false,
                theme:"colored",
                progress:undefined,
              });
            
    }catch(error){
        console.log(error);
        toast.error("Usuário ou senha inválidos.", {
            position:"top-right",
            autoClose: 2000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:false,
            draggable:false,
            theme:"colored",
            progress:undefined,
          });
            

    }
        
    }



    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className="fundo" >
            <Grid alignItems='center' xs={6}>
                <Box padding={20}>
                    <form onSubmit={onSubmit} className="forms">
                        <Typography variant="h3" gutterBottom component='h3' align="center" style={{fontWeight:'bold'}}>Entrar
                        </Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>)=> updateModel(e)} id= 'usuario' label='usuário' variant="outlined" name='usuario' margin='normal' fullWidth></TextField>
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=> updateModel(e)} id='senha' label='senha' variant="outlined" name='senha' margin='normal' type="password" fullWidth></TextField>
                    <Box marginY={2} textAlign='center'>
                        
                            <Button type='submit' variant="contained" color='primary'>
                                Logar
                            </Button>
                        
                    </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle2" gutterBottom align="center" color={'white'}    >
                                Não tem uma conta?
                            </Typography>
                        </Box>
                        <Link to={"/usuarios/cadastrar"}>
                        <Typography variant="subtitle2" gutterBottom align="center" style={{fontWeight:'bold'}} color={'white'}>
                            Cadastre-se
                        </Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="fotoBlog">
            </Grid>
        </Grid>

    );
}

export default Login;