import React from 'react'
import './CadastroUsuario.css'
import { GridOff } from '@material-ui/icons'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function CadastroUsuario() {
    return (

        <Grid container direction='row-reverse' justifyContent='center' alignItems='center' className="fundo" >
        <Grid alignItems='center' xs={6}>
            <Box paddingX={10}>
            <form className="forms">
                        <Typography variant="h3" gutterBottom component='h3' align="center" style={{fontWeight:'bold'}}>Entrar
                        </Typography>
                        <TextField id= 'nome' label='nome' variant="outlined" name='nome' margin='normal' fullWidth></TextField>
                        <TextField id='usuario' label='usuario' variant="outlined" name='usuario' margin='normal' fullWidth></TextField>
                        <TextField id= 'senha' label='senha' variant="outlined" name='senha' margin='normal' type="password"  fullWidth></TextField>
                        <TextField id='senha' label='senha' variant="outlined" name='senha' margin='normal' type="password" fullWidth></TextField>
                    <Box marginY={2} textAlign='center'>


                        <Link to='/login' className="text-decoration-none">
                            <Button  variant="contained" color='secondary' className='botãoCancelar'>
                                Cancelar
                            </Button>
                        </Link>


                        <Link to='/home' className="text-decoration-none">
                            <Button  variant="contained" type='submit' color='primary'>
                                Cadastrar
                            </Button>
                        </Link>


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