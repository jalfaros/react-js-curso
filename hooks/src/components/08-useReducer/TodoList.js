import React from 'react'
import { TodoListItem } from './TodoListItem';

export const TodoList = ( { todoList, dispatch } ) => {

    const handleDelete = ({ id }) => {
        const deleteAction = {
            type: 'delete',
            payload: id
        };

        dispatch( deleteAction );
    };

    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'changeState',
            payload: todoId
        });
};
    
    return (
        <ul className="list-group list-group-flush">
            {
                todoList.map( (item, index)  => (

                    <TodoListItem 
                        item          = { item }
                        index         = { index }
                        handleDelete  = { handleDelete }
                        handleToggle  = { handleToggle }
                        key           = { index }
                    />
                ))
            }
        </ul>
    )
}
