import React from 'react';
import TodoListItem from './todo-list-item'
import './todo-list.css';

const TodoList = ({ todoData, filteredData, onDeleted, onToggleImportant, onToggleDone  }) => {
  let elements = [];
  if (filteredData.length === 0)
  {
    elements = todoData.map((item) => {
      const {id, ...itemProps}  = item;
      return (<li key={id} className="list-group-item"><TodoListItem {...itemProps}
      onDeleted={()=> onDeleted(id)} onToggleImportant={()=> onToggleImportant(id)} onToggleDone={()=> onToggleDone(id)}/></li>);
    })
  }
  else if (filteredData[0] !== -1) {
    elements = filteredData.map((item) => {
      const {id, ...itemProps}  = item;
      return (<li key={id} className="list-group-item"><TodoListItem {...itemProps}
      onDeleted={()=> onDeleted(id)} onToggleImportant={()=> onToggleImportant(id)} onToggleDone={()=> onToggleDone(id)}/></li>);
    })
  }

    return (
      <ul className="list-group todo-list">
          { elements }
      </ul>
    );
  };

export default TodoList;