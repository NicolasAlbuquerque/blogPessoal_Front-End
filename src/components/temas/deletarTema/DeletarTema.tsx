import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import { Box, Grid } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import Tema from '../../../models/Tema';
import './DeletarTema.css'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { buscaId, deletarId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function DeletarTema() {
    const history = useNavigate();
    const {id} = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState['tokens']>(
      (state) => state.tokens
      );
    const [tema, setTema] = useState<Tema>()

    useEffect(()=> {
        if(token ==  ""){
          toast.error("Você precisa estar logado!", {
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
      toast.success("Tema deletad com sucesso!", {
        position:"top-right",
        autoClose: 2000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:false,
        draggable:false,
        theme:"colored",
        progress:undefined,
      });
    }

    function não(){
      history('/temas')
    } 
    

  return (
    <>
    <Grid className='centrinho' xs = {2}m={2}>
      <Card variant="outlined">
        <CardContent>
          <Box justifyContent="center">
            <Typography color="textSecondary" variant='h6'  gutterBottom>
              Deseja deletar o Tema:
            </Typography>
            <Typography color="textSecondary" variant='h5' align='center'>
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
              onClick={não} variant="contained" size='large' className='botaoVermelho'>
                Não
              </Button>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Grid>
    </>

  )
}

export default DeletarTema

