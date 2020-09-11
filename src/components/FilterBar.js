import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FilterButtons from './FilterButtons';
import Box from '@material-ui/core/Box';




const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    justifyContent:'center',
    
    height:'100px',
    width: '100%'
  },
  colorPrimary:{
    background:'#136D74',
    width:'initial',
    
}
 
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box width='100%'>
      <AppBar position="sticky" className={classes.colorPrimary}>
        <Toolbar className={classes.root}>
         <FilterButtons bfruit={props.fruit} bveggie={props.veggie} bmilk={props.milk} bdessert={props.dessert} bclear={props.clear}/>
        </Toolbar>
      </AppBar>
      </Box>
    </div>
  );
}