import {
    Container,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Select,
    FormHelperText,
    Button,
    Grid,
} from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tema from "../../../../models/Tema";
import Postagem from "../../../../models/Postagem";
import { busca, buscaId, post, put } from "../../../../services/Service";
import { MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import { TokenState } from "../../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import "./CadastroPost.css";



export default function CadastroPost() {


    const history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([]);
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error("usuário deslogado", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history("/login");
        }
    }, [token]);

    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: "",
    });
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: "",
        texto: "",
        tema: null,
    });

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
        });
    }, [tema]);

    useEffect(() => {
        getTemas();
        if (id !== undefined) {
            findByIdPostagem(id);
        }
    }, [id]);

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                Authorization: token,
            },
        });
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
        });
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    Authorization: token,
                },
            });
            toast.success("Postagem autualizada com Sucesso", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    Authorization: token,
                },
            });
            toast.success("Postagem cadastrada com sucesso", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
        back();
    }

    function back() {
        history("/postagens");
    }
    return (
        <Container maxWidth="sm" className="topo">
            <form className="forms" onSubmit={onSubmit}>
                <Typography
                    variant="h3"
                    color="textSecondary"
                    component="h1"
                    align="center"
                >
                    Formulário de cadastro postagem
                </Typography>
                <TextField
                    id="titulo"
                    label="titulo"
                    variant="outlined"
                    name="titulo"
                    value={postagem.titulo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    value={postagem.texto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
                    id="texto"
                    label="texto"
                    name="texto"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) =>
                            buscaId(`/temas/${e.target.value}`, setTema, {
                                headers: {
                                    Authorization: token,
                                },
                            })
                        }
                    >
                        {temas.map((tema) => (
                            <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    );
}
