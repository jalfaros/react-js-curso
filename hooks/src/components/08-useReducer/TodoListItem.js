import React from 'react'

export const TodoListItem = ({ item, index, handleDelete, handleToggle }) => {
    return (
        <li className = "list-group-item"
                        key = { index }>

            <p  className = { `${ item.done && 'complete' }` } 
                onClick={ () => handleToggle( item.id ) }>
            
                { index + 1 }. { item.todo }
            </p>

            <button className = "btn btn-outline-danger" onClick={() => handleDelete(item) }>
                Delete
            </button>
        </li>
    )
}
