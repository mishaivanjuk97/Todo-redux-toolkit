import React, { useState } from 'react'
import { Card, CardContent, TextField, Typography, IconButton, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/list';


const AddTodo = () => {
   const [todo, setTodo] = useState('')
   const dispatch = useDispatch();
  return (
   <Card sx={{padding: '0 20px', textAlign: 'center', mt: 10}}>
      <Typography variant="h4" sx={{mt: 2, color: "primary.main"}}>Add Todo</Typography>
      <CardContent>
         <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
               <TextField value={todo} onChange={(e) => setTodo(e.target.value)} id="outlined-basic" label="Todo" variant="outlined" fullWidth />
               <IconButton aria-label="delete" size="large" onClick={() => {
                  dispatch(addTodo(todo))
                  setTodo('')
                  }}>
               <AddIcon sx={{color: "primary.main"}} fontSize="inherit"/>
               </IconButton>
         </Stack>      
      </CardContent>
   </Card>
  )
}

export default AddTodo