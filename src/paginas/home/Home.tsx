import React from "react";
import ResponsiveAppBar from "../../components/statics/navbar/Navbar";
import { Grid, Box, Typography, Button } from "@mui/material";
import './Home.css'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home() {
    return (
    <>
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
        >
        <Grid alignItems="center" item xs={6}>
            <Box paddingX={20}>
            <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className="texto"
            >
                Seja bem vindo(a)!
            </Typography>
            <Typography
                variant="h5"
                gutterBottom
                color="textPrimary"
                component="h5"
                align="center"
                className="texto"
            >
                <img src="" alt="" className="logoBanner"/>
            </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button className="botão" >
                Ver Postagens
            </Button>
            </Box>
        </Grid>
        <Grid item xs={6}>
            <img src="https://i.imgur.com/DYnbKky.png" alt="fredie"/>
        </Grid>
        <Grid xs={12} className="fundo" ></Grid>
                
        </Grid>
    </>
);
}

export default Home;
