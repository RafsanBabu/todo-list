import React from 'react';
import Todo from './Todo';

const TodoList = (props) =>{

    console.log(props.todos);
    return(
            <div className="todo-container">
                <ul className="todo-list">
                    {
                       props.todos.map(todo =>(
                           <Todo key={todo.id} todo={todo}/>
                       ))}
                </ul>
            </div>

    );
};

export default TodoList;