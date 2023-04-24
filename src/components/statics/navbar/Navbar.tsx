

import './Navbar.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function Navbar() {

    const[token, setToken]=useLocalStorage('token');
    const history =useNavigate();

    function goLogout(){
      setToken('')
      alert('Usuário Deslogado')
      history('/login')
    }

  return (
    <>
      <AppBar position="static" className='menu'>
        <Toolbar variant="dense" >
          <Box display={'flex'} justifyContent={'space-between'} width={'100%'} >
            <Box className='cursor'>
            <Link className='text-decoration-none' to='/home'> 
                <img className='logopequeno' src="https://i.imgur.com/rFkCI60.png" alt="loguinho"/>
            </Link> 
            </Box>

            <Box display="flex" alignItems={'center'} justifyContent="center">
              <Box mx={1} className='cursor'>
                <Link className='text-decoration-none' to='/home'> 
              <Typography className='text-decoration-none login' variant="h6" color="inherit">
                  home
                </Typography></Link>
              </Box>
              <Box mx={1} className='cursor'>
               <Link to= '/postagens'><Typography variant="h6" className='login' color="inherit">
                  postagens
                </Typography></Link> 
              </Box>
              <Box mx={1} className='cursor'>
             <Link to='/temas'><Typography variant="h6" className='login' color="inherit">
                  temas
                </Typography></Link>
              </Box>
              <Box mx={1} className='cursor login'>
                <Typography className='login' variant="h6" color="inherit">
                  cadastrar tema
                </Typography>
              </Box>
              <Box mx={1}>
                
                  <Typography className='login' variant="h6" color="inherit" onClick={goLogout} >
                    logout
                  </Typography>
              
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;