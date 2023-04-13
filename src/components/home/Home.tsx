import React from 'react';
import ResponsiveAppBar from '../statics/navbar/Navbar';
import { Grid, Box, Typography, Button } from '@mui/material';

import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub';




function Home() {
    return (
      <>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#101010" }}>
          <Grid alignItems="center" item xs={6}>
              <Box paddingX={20} >
                  <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                  <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Aqui falamos sobre Filmes de Terror!!</Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                  <Box marginRight={1}>
                  </Box>
                  <Button variant="outlined" style={{ borderColor: "black", backgroundColor: "#f00", color: "white" }}>Ver Postagens</Button>
              </Box>
          </Grid>
          <Grid item xs={6} >
              <img src="../../assets/img/fred.png" alt="" width="500px" height="500px" />
          </Grid>
          <Grid xs={12} style={{ backgroundColor: "white" }}>
          </Grid>
      </Grid>
  </>
    )
}

export default Home;

