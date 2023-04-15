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
                style={{ color: "white", fontWeight: "bold" }}
            >
                Seja bem vindo(a)!
            </Typography>
            <Typography
                variant="h5"
                gutterBottom
                color="textPrimary"
                component="h5"
                align="center"
                style={{ color: "white", fontWeight: "bold" }}
            >
                <img src="" alt="" className="logoBanner"/>
            </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button style={{borderColor: 'black', backgroundColor: '#f00',
        color: 'white'}}>
                Ver Postagens
            </Button>
            </Box>
        </Grid>
        <Grid item xs={6}>
            <img src="https://i.imgur.com/DYnbKky.png" alt="fredie"/>
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}></Grid>
                
        </Grid>
    </>
);
}

export default Home;
