import React, { ChangeEvent, useEffect, useState } from 'react'
import './CadastroUsuario.css'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastroUsuario } from '../../services/Service'


function CadastroUsuario() {
    const history = useNavigate()

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    senha: ''
  })
  
  const [usuarioResult, setUsuarioResult] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    senha: ''
  })

  const [confirmarSenha,setConfirmarSenha] = useState<String>("")
  
  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>){
    setConfirmarSenha(event.target.value)
}

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value
    })
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>){
    event.preventDefault()
    if(confirmarSenha === usuario.senha) {
      try {
        await cadastroUsuario("/usuarios/cadastrar", usuario, setUsuarioResult);
        alert('Usuário cadastrado com sucesso')
      } catch (error) {
        alert('Por favor, verifique os campos')
      }
    } else {
      alert('As senhas não coincidem')
      setConfirmarSenha('')
      setUsuario({
        ...usuario,
        senha: ''
      })
    }
  }

  useEffect(() => {
    console.log('rodou')
  }, [usuario.nome])

useEffect(() => {
    if(usuarioResult.id !== 0) {
        history('/login')
    }
    }, [usuarioResult])

    function back() {
    history('/login')
}



    return (

        <Grid container direction='row-reverse' justifyContent='center' alignItems='center' className="fundo" >
        <Grid alignItems='center' xs={6}>
            <Box paddingX={10}>
            <form className="forms" onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom component='h3' align="center" style={{fontWeight:'bold'}}>Entrar
                        </Typography >
                        <TextField value={usuario.nome}
onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id= 'nome' label='nome' variant="outlined" name='nome' margin='normal' fullWidth></TextField>
                        <TextField value={usuario.usuario}
onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='usuario' label='usuario' variant="outlined" name='usuario' margin='normal' fullWidth></TextField>

<TextField
              variant="outlined"
              name="foto"
              value={usuario.foto}
              onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
              label="Foto (URL)"
              margin="normal"
              fullWidth
            ></TextField>



                        <TextField value={usuario.senha}
onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}id= 'senha' label='senha' variant="outlined" name='senha' margin='normal' type="password"  fullWidth></TextField>
                        <TextField value={confirmarSenha}
            onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)} id='senha' label='Confirmar Senha' variant="outlined" name='confirmarSenha' margin='normal' type="password" fullWidth></TextField>
                    <Box marginY={2} textAlign='center'>
                        
                            <Button className='botãoCancelar' onClick={back} variant="contained" color='primary'>
                                Cancelar
                            </Button>
                        

                            <Button type='submit'  variant="contained" >
                                Cadastrar
                            </Button>

                    </Box>
                    </form>
                <Box display='flex' justifyContent='center' marginTop={2}>
                </Box>
            </Box>
        </Grid>
        <Grid xs={6} className="imgCadastro">
        </Grid>
    </Grid>




        // <Grid container direction='row' justifyContent='center' alignItems='center'>
        //     <Grid item xs={6} className='imgCadastro'></Grid>
        //     <Grid item xs={6}></Grid>
        //         <Box paddingX={10}>
        //         <form className="forms">
        //                 <Typography variant="h3" gutterBottom component='h3' align="center" style={{fontWeight:'bold'}}>Entrar
        //                 </Typography>
        //                 <TextField id= 'nome' label='nome' variant="outlined" name='nome' margin='normal' fullWidth></TextField>
        //                 <TextField id='usuario' label='usuario' variant="outlined" name='usuario' margin='normal' fullWidth></TextField>

        //                 <TextField id= 'senha' label='senha' variant="outlined" name='senha' margin='normal' type="password"  fullWidth></TextField>
        //                 <TextField id='senha' label='senha' variant="outlined" name='senha' margin='normal' type="password" fullWidth></TextField>
        //             <Box marginY={2} textAlign='center'>
        //                 <Link to='/home' className="text-decoration-none">
        //                     <Button type='submit' variant="contained" color='primary'>
        //                         Cadastrar
        //                     </Button>
        //                 </Link>
        //             </Box>
        //             </form>
        //         </Box>
        // </Grid>
)
}

export default CadastroUsuario