import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GitHub, { GridOff } from "@material-ui/icons";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { useDispatch, useSelector } from "react-redux";

function Footer() {
    const dispatch = useDispatch();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;
    if (token !== "") {
        footerComponent = (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#000", height: "11   0px" }}>
                        <Box
                            paddingTop={1}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        ></Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            paddingTop={3}
                        >
                            <a
                                href="https://www.instagram.com/generationbrasil/"
                                target="_blank"
                            >
                                <GitHubIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            <a
                                href="https://www.linkedin.com/school/generationbrasil/"
                                target="_blank"
                            >
                                <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#000", height: "60px" }}>
                        <Box paddingTop={1}>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography
                                    variant="subtitle2"
                                    align="center"
                                    gutterBottom
                                    style={{ color: "white" }}
                                >
                                    © 2020 Copyright: brasil.generation.org
                                </Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        );
    }

    return <>{footerComponent}</>;
}

export default Footer;
// rfce atalho para criar automaticamente a function
