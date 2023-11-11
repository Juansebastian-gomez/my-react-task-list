import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({handleNewTodo}) => {

    const { description, onInputChange, onResetForm} = useForm({
        description: " ",


    })

    const onForSubmit = e => {
        e.preventDefault()

        if(description.length <= 1) return

        let NewTodo = {
            id: new Date().getTime(),
            description:description,
            done: false,

        };
        handleNewTodo(NewTodo)
        onResetForm();

        
    }
  return (
    <form onSubmit={onForSubmit}>
        <input 
        type = "text" 
        className='input-add' 
        name = 'description' 
        value = {description}
        onChange={onInputChange}
        placeholder='¿Qué quieres hacer?'
        />
        
        <button className= 'btn-add' type='submit'>
             
             Agregar
             
         </button>
    
    </form>
  )
}
