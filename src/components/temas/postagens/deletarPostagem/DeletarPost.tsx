import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../../models/Postagem';
import { buscaId, deletarId } from '../../../../services/Service';

function DeletarPost() {

 const history = useNavigate();
    const {id} = useParams<{id: string}>();
    const [token, setToken] = useLocalStorage('token');
    const [postagem, setPostagem] = useState<Postagem>()

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
        buscaId(`/postagens/${id}`,setPostagem,{
            headers:{
                'Authorization':token
            }
        })
    }

    function sim (){
      history('/postagens')
      deletarId (`/postagens/${id}`,{
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
      <Card variant="outlined" >
        <CardContent>
          <Box justifyContent="center">
            <Typography color="textSecondary" gutterBottom>
              Deseja deletar a Postagem:
            </Typography>
            <Typography color="textSecondary" >
            Tema
            </Typography>
          </Box>

        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
            <Box mx={2}>
            <Button  variant="contained" className="marginLeft" size='large' color="primary">
              Sim
            </Button>
            </Box>
            <Box>
            <Button   variant="contained" size='large' color="secondary">
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

export default DeletarPost
