

import './Navbar.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <AppBar position="static" className='menu'>
        <Toolbar variant="dense" >
          <Box display={'flex'} justifyContent={'space-between'} width={'100%'} >
            <Box className='cursor'>
              <Typography variant="h5" color="inherit">
                <img className='logopequeno' src="https://i.imgur.com/rFkCI60.png" alt="loguinho"/>
              </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
              <Box mx={1} className='cursor'>
               <Link className='text-decoration-none' to='/home'> <Typography className='text-decoration-none' variant="h6" color="inherit">
                  home
                </Typography></Link>
              </Box>
              <Box mx={1} className='cursor'>
               <Link to= '/postagens'><Typography variant="h6" color="inherit">
                  postagens
                </Typography></Link> 
              </Box>
              <Box mx={1} className='cursor'>
             <Link to='/temas'><Typography variant="h6" color="inherit">
                  temas
                </Typography></Link>
              </Box>
              <Box mx={1} className='cursor'>
                <Typography className='login' variant="h6" color="inherit">
                  cadastrar tema
                </Typography>
              </Box>
              <Box mx={1}>
                <Link to='/login'>
                  <Typography className='login' variant="h6" color="inherit" >
                    logout
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;