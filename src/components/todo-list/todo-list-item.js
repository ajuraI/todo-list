import React from 'react';
import './todo-list-item.css';


export default class TodoListItem extends React.Component {

    render () {
        const { label, onDeleted, onToggleImportant, onToggleDone, important, done  } = this.props;
        const style = {
            color: important ? 'tomato' : 'black',
            fontWeight: important ? 'bold' : 'inherit'
        }

        let classNames = 'todo-list-item-label'
        if (done) classNames += ' done';
        return (
            <div className="todo-list-item">
                <span className={classNames} style={style} onClick={onToggleDone}>
                    {label}
                </span>
                <div className="button-box">
                    <button className="btn btn-outline-danger"
                    onClick={onDeleted}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button className="btn btn-outline-success" onClick={onToggleImportant}>
                        <i className="fa fa-exclamation"></i>
                    </button>
                </div>
            </div>
        );
    }
}
