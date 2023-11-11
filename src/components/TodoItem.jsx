import React from 'react'
import {FaTrash} from 'react-icons/fa' //para poder utilizar el icono también se debe exportar como un componente, poniendo el nombre del mismo y de donde lo sacamos. el "fa" no es más que la ruta. 
import {TodoUpdate} from "./TodoUpdate"; 
export const TodoItem= ({
    todo, 
    handleUpdateTodo, 
    handleDeleteTodo, 
    handleCompleteTodo
}) => {
  return (
    <li>
         <span
         onClick={() => handleCompleteTodo(todo.id)}>
           <label 
            className={`container-done ${todo.done ? 'active' : ' '}`}>
            </label> 
        </span>  
        <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo}/>
        <button className='btn-delete' 
        onAuxClick={() => handleDeleteTodo(todo.id)}>
            <FaTrash/>
        </button> 
    </li>
  )
}
//al Agregar un icono se debe agregar como si fuera un componente. En este caso es Fatrash.