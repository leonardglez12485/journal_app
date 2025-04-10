import { LoginOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth';

export const NavBar = ({drawerWidth = 240}) => {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  }

  return (
   <AppBar
   position='fixed'
   sx= {{
    width: {sm: `calc(100% - ${drawerWidth}px)`},
    ml: {sm: `${drawerWidth}px`},
   }}
   >
   <Toolbar>
    <IconButton
    color='inherit'
    edge='start'
    sx={{mr: 2, display: {sm: 'none'}}}
    >
      <MenuOutlined/>   

    </IconButton>
    <Grid
      container
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      sx={{ width: '100%' }}
      >
       <Typography variant='h6' noWrap component='div' >
    Journal App
  </Typography>

       <IconButton
        color='error'
        onClick={onLogout}
        >
        <LoginOutlined/>
       </IconButton>

      </Grid>

   </Toolbar>
   </AppBar>
  )
}
