import React from 'react';
import './item-status-filter.css';


export default class ItemStatusFilter extends React.Component  {

  constructor() {
    super();
    
    this.state = {
        allBtnClass: 'btn btn-info',
        activeBtnClass: 'btn btn-outline-secondary',
        doneBtnClass: 'btn btn-outline-secondary'
    }
  } 
  

  allBtnClick = () => {
    this.setState(() => {
      return {
        allBtnClass: 'btn btn-info',
        activeBtnClass: 'btn btn-outline-secondary',
        doneBtnClass: 'btn btn-outline-secondary'
      }
    })
    this.props.onChangeFilter(0)
  }

  activeBtnClick = () => {
    this.setState(() => {
      return {
        allBtnClass: 'btn btn-outline-secondary',
        activeBtnClass: 'btn btn-info',
        doneBtnClass: 'btn btn-outline-secondary'
      }
    })
    this.props.onChangeFilter(1)
  }

  doneBtnClick = () => {
    this.setState(() => {
      return {
        allBtnClass: 'btn btn-outline-secondary',
        activeBtnClass: 'btn btn-outline-secondary',
        doneBtnClass: 'btn btn-info'
      }
    })
    this.props.onChangeFilter(2)
  }

  render () {
    return (
      <div className="btn-group">
            <button type="button" className={this.state.allBtnClass} onClick={this.allBtnClick}>All</button>
            <button type="button" className={this.state.activeBtnClass} onClick={this.activeBtnClick}>Active</button>
            <button type="button" className={this.state.doneBtnClass} onClick={this.doneBtnClick}>Done</button>
      </div>
    );
  }
}