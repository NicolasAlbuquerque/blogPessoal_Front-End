import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import { Box } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import Tema from '../../../models/Tema';

import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { buscaId, deletarId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function DeletarTema() {
    const history = useNavigate();
    const {id} = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState['tokens']>(
      (state) => state.tokens
      );
    const [tema, setTema] = useState<Tema>()

    useEffect(()=> {
        if(token ==  ""){
            alert("Você precisa efetuar o Login")
            history("/login")
        }
    }, [token])

    useEffect(()=> {
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id:string){
        buscaId(`/temas/${id}`,setTema,{
            headers:{
                'Authorization':token
            }
        })
    }

    function sim (){
      history('/temas')
      deletarId (`/temas/${id}`,{
        headers:{
          'Authorization': token
        }
      });
      alert('Tema Deletado com sucesso!')
    }

    function não(){
      history('/temas')
    } 
    

  return (
    <>
    <Box m={2}>
      <Card variant="outlined">
        <CardContent>
          <Box justifyContent="center">
            <Typography color="textSecondary" gutterBottom>
              Deseja deletar o Tema:
            </Typography>
            <Typography color="textSecondary">
              {/* este é meu state. */}
              {tema?.descricao}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
            <Box mx={2}>
              <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
            </Box>
            <Box mx={2}>
              <Button  
              onClick={não} variant="contained" size='large' color="secondary">
                Não
              </Button>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Box>
    </>

  )
}

export default DeletarTema

