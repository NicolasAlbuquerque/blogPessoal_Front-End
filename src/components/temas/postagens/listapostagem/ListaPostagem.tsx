import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../../models/Postagem';
import { busca } from '../../../../services/Service';
function ListaPostagem() {


  const [postagens, setPostagens]= useState <Postagem[]>([])
  const [token, setToken]= useLocalStorage('token');
  
  
  const history =useNavigate();

  async function getAllPostagens(){
      await busca('/postagens', setPostagens, {
        headers:{
          Authorization: token
        }
      })
  }

  useEffect(()=>{
    getAllPostagens()
  },[postagens.length])


  useEffect(()=>{
    if(token === ''){
      alert('Você precisa estar logado')
    history("/login") 
  }


  }, [token])



return (
<>
{
  postagens.map(postagem=>(

<Box m={2} >
<Card variant="outlined">
<CardContent>
<Typography color="textSecondary" gutterBottom>
Postagem
</Typography>
<Typography variant="h5" component="h2">
{postagem.titulo}
</Typography>
<Typography variant="body2" component="p">

{postagem.texto}

</Typography>
<Typography variant="body2" component="p">
  {postagem.tema?.id}

</Typography>
</CardContent>
<CardActions>
<Box display="flex" justifyContent="center" mb={1.5}>
<Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
<Box mx={1}>
<Button variant="contained" className="marginLeft" size='small' >
atualizar
</Button>
</Box>
</Link>
<Link to={`/deletarPostagem/${postagem.id}`}className="text-decorator-none">
<Box mx={1}>
<Button variant="contained" size='small' className='botãoVermelho' color="secondary">
deletar
</Button>
</Box>
</Link>
</Box>

</CardActions>
</Card>
</Box>
))}

</>)
}
export default ListaPostagem;