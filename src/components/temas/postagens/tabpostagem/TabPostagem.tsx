import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';
import { Box } from '@mui/material';



function TabPostagem() {
const [value, setValue] = useState('1')
function handleChange(event: React.ChangeEvent<{}>, newValue: string){
setValue(newValue);
}
return (
<>
<TabContext value={value}>


<AppBar position="static" className='barra'>
<Tabs centered indicatorColor="secondary" onChange={handleChange}>
<Tab label="Todas as postagens" value="1"/>
<Tab label="Sobre-nós" value="2" />
</Tabs>
</AppBar>
<TabPanel value="1" >
<Box display="flex" flexWrap="wrap" justifyContent="center">
<ListaPostagem />
</Box>
</TabPanel>
<TabPanel value="2">
<Typography variant="h5" gutterBottom color="textPrimary" component="h5" ></Typography>
<Typography variant="body1" gutterBottom color="textPrimary"></Typography>
</TabPanel>
</TabContext>
</>
);
}
export default TabPostagem;