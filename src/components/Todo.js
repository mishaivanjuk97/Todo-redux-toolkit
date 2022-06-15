import React, { useState, useRef, useEffect } from 'react'
import { Card, CardContent, TextField, Typography, IconButton, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { useSelector, useDispatch } from 'react-redux';
import { editTodo, removeTodo } from '../redux/list';

const Todo = ({todo}) => {
   const [showEdit, setShowEdit] = useState(false);
   const [updatedTodo, setUpdatedTodo] = useState(todo);
   const dispatch = useDispatch();
   const todoInput = useRef();

   return (
      <>
         {showEdit && <Stack direction="row" justifyContent="space-between" alignItems="center" width="90%">
                        <TextField value={updatedTodo} onChange={(e) => setUpdatedTodo(e.target.value)} id="standard-basic" variant="standard" fullWidth ref={todoInput} />
                        <IconButton aria-label="save" size="small" onClick={() => {
                           dispatch(editTodo({todo, updatedTodo}));
                           setShowEdit(false);
                        }}>
                           <SaveIcon sx={{color: "primary.main"}} fontSize="inherit"/>
                        </IconButton>
                     </Stack>}
         <Stack direction="row" alignItems="center"
               justifyContent="space-between"
               width="90%"
         >
            <p>{todo}</p>
            <div>
               <IconButton aria-label="delete" size="small" onClick={() => {
                  showEdit ? setShowEdit(false) : setShowEdit(true)
                  setTimeout(() => {
                     todoInput.current.querySelector('input').focus()
                  },0)
               }}>
                  <EditIcon sx={{color: "primary.main"}} fontSize="inherit"/>
               </IconButton>
               <IconButton aria-label="delete" size="small" onClick={() => dispatch(removeTodo(todo))}>
                  <DeleteIcon sx={{color: "primary.main"}} fontSize="inherit"/>
               </IconButton>
            </div>
         </Stack>
      </>
   )
}

export default Todo