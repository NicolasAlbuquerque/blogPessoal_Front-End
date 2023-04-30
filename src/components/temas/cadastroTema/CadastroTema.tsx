import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import "./CadastroTema.css";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import Tema from "../../../models/Tema";
import { buscaId, post, put } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function CadastroTema() {
  const history = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado!", {
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

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("tema" + JSON.stringify(tema));

    if (id !== undefined) {
      console.log(tema);
      put(`/temas`, tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Tema atualizado com sucesso", {
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
      post(`/temas`, tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Tema cadastrado com sucesso", {
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
    history("/temas");
  }

  return (
    <>
      <Grid xs={12} className="Container topo ">
        <Grid xs={6} className="botao">
          <Container maxWidth="sm" className="topo">
            <form className="formulário" onSubmit={onSubmit}>
              <Typography
                variant="h3"
                color="textSecondary"
                component="h1"
                align="center"
              >
                Formulário de cadastro tema
              </Typography>
              <TextField
                value={tema.descricao}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
                id="descricao"
                label="descricao"
                variant="outlined"
                name="descricao"
                margin="normal"
                fullWidth
              />
              <Grid className="botao">
              <Button type="submit" variant="contained" color="primary">
                Finalizar
              </Button></Grid>
            </form>
          </Container>
        </Grid>
        <Grid xs={6}>
          <img className="It"         src="https://4.bp.blogspot.com/-mhorksf6otE/Wc1b_JRYq1I/AAAAAAAACF8/W4fU8G8EMWc0Opbp0VNtoMDcAaGbyla3QCEwYBhgL/s1600/it.png"
            alt=""
          />
        </Grid>
      </Grid>
    </>
  );
}

export default CadastroTema;
