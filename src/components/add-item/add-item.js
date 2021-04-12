import React from 'react';
import './add-item.css';


export default class AddItem extends React.Component  {

    constructor() {
        super();
        
        this.state = {
            label: ''
        }
    } 

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.label) {
            this.props.onItemAdded(this.state.label);
            this.setState({
                label:''
            })
        }
    }

    

    render () {
        return (
            <form className="d-flex pt-3" onSubmit={this.onSubmit}>
                <input type="text" className="form-control mr-3 taskLabel" onChange={this.onLabelChange} placeholder="Task" value={this.state.label}/>
                <button type="submit" className="btn btn-outline-secondary btn-add">Add Item</button>
            </form>
        );
    }
}