import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: ['wash the dishes', 'walk the dog', 'meet friends'],
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload)
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter(item => item !== action.payload)
    },
    editTodo: (state, action) => {
      state.list[state.list.indexOf(`${action.payload.todo}`)] = action.payload.updatedTodo;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, editTodo } = listSlice.actions

export default listSlice.reducer