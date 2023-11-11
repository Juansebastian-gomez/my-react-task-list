import { useRef, useState} from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';
export const TodoUpdate = ({todo,handleUpdateTodo}) => {

    const {updateDescription, onInputChange} = useForm ({
        updateDescription: todo.description
    })

    const [disabled, setdisabled] = useState(true)
    const focusInputRef = useRef()

    const onSubmitUpdate = e => {
        e.preventDefault()

        const id = todo.id
        const description = updateDescription

        handleUpdateTodo(id, description);

        setdisabled(!disabled)

        focusInputRef.current.focus()
    }

  return (
    <form onSubmit={onSubmitUpdate}>
        <input 
        type = "text" 
        className={`input-update ${todo.done ? 'text-decoration-dashed' : ' '
        }`}
        name =  ' updateDescription '
        value = {updateDescription} 
        onChange={onInputChange}
        placeholder='¿Qué quieres hacer?'
        readOnly={disabled}
        ref={focusInputRef}
        />
        
        <button className= 'btn-edit' type='submit'>
             
           <FaEdit/>  
             
        </button>
    
    </form>
  );
}
