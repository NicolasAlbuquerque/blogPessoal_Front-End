import React, { useEffect } from "react";
import ResponsiveAppBar from "../../components/statics/navbar/Navbar";
import { Grid, Box, Typography, Button } from "@mui/material";
import './Home.css'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TabPostagem from "../../components/temas/postagens/tabpostagem/TabPostagem";
import ModalPostagem from "../../components/temas/postagens/modalPostagem/ModalPostagem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function Home() {
    const history = useNavigate();
    const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
    );


    useEffect(()=> {
        if(token ==  ""){
            toast.error("Você Precisa estar Logado", {
                position:"top-right",
                autoClose: 2000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:false,
                draggable:false,
                theme:"colored",
                progress:undefined,
              });
            history("/login")
        }
    }, [token])

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
            <Box marginRight={1}>
            <Link to ='/postagens'>
            <Button className="botão" >
                Ver Postagens
            </Button>
            </Link>
            </Box>
            <ModalPostagem/>
            </Box>
        </Grid>
        <Grid item xs={6}>
            <img  src="https://i.imgur.com/UBw6mEK.png" alt="fredie"/>
        </Grid>
        <Grid xs={12} className="fundo" >
            <TabPostagem />
        </Grid>
                
        </Grid>
    </>
);
}

export default Home;
