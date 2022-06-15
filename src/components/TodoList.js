import React from 'react'
import { Card, CardContent, Typography, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import Todo from './Todo';


const TodoList = () => {
   const { list } = useSelector(state => state.list);
  return (
   <Card sx={{padding: '0 20px', textAlign: 'center', mt: 10}}>
      <Typography variant="h4" sx={{mt: 2, color: "primary.main"}}>Your Todos</Typography>
      <CardContent>
         <Stack direction="column" justifyContent="center" alignItems="center" spacing={0}>
            {list.map((todo) => (
               <Todo todo={todo} />
            ))}               
         </Stack>      
      </CardContent>
   </Card>
  )
}

export default TodoList