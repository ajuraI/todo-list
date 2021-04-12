import React from 'react';
import SearchPanel from '../search-panel/search-panel';
import AppHeader from '../app-header/app-header';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import AddItem from '../add-item/add-item'

export default class App extends React.Component {
  maxId = 100;
  constructor() {
    super();
    
    this.state = {
        todoData: [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Make Awesome App'),
        this.createTodoItem('Have a lunch')
      ],
      filteredData: [],
      filterBtn: 0,
      searchText: ''
    }
  } 

  createTodoItem(label) {
    return {
      label,
      important:false,
      done: false,
      id:this.maxId++
    }
  }

  deleteItem = (id) => {
    const idx = this.state.todoData.findIndex((el) => el.id === id);
    let newArray =  this.state.todoData;
    newArray.splice(idx, 1);
    this.setState(() => {
      return {
        todoData: newArray
      }
    })
    this.searchItems(this.state.searchText, this.state.filterBtn, newArray);
  };

  addItem = (text) => {
    let newData = this.state.todoData;
    newData.push(this.createTodoItem(text));
    this.setState(({todoData}) => {
      
      return {
        todoData: newData
      }
    });
    this.searchItems(this.state.searchText, this.state.filterBtn, newData);
    
  };

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      let newArray =  todoData;
      let el = newArray.find((el) => el.id === id);
      el.important = !el.important;
      return {
        todoData: newArray
      }
    })
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      let newArray =  todoData;
      let el = newArray.find((el) => el.id === id);
      el.done = !el.done;
      return {
        todoData: newArray
      }
    })
  };

  searchItems = (value, btnIndex = this.state.filterBtn, oldData = this.state.todoData) => {
    this.setState( () => {
      return {
        searchText: value
      }
    })
    let newData = [];
    let id = 0;
    
    switch (btnIndex) {
      case 0: {
        oldData = this.state.todoData;
        break;
      }
      case 1: {
        oldData = this.state.todoData.filter(item => !item.done);
        break;
      }
      case 2: {
        oldData = this.state.todoData.filter(item => item.done);
        break;
      }
      default: break;
    }
    oldData.forEach(element => {
      if (element.label.includes(value)) {
        newData[id] = element;
        id++
      }
    });
    if (id === 0) {
      newData[0] = -1;
    }
    if (value.length > 0 || btnIndex > 0)
    {
      this.setState( () => {
        return {
          filteredData: newData
        }
      })
    }
    else {
      this.setState( () => {
        return {
          filteredData: []
        }
      })
    }
  }

  onChangeFilter = (index) => {
    this.setState( () => {
      return {
        filterBtn: index
      }
    })
    this.searchItems(this.state.searchText, index)
  }

  render() {
    return (
      <div className="container">
        <AppHeader />
        <div className="d-flex align-items-center pb-3">
          <SearchPanel onSearch={this.searchItems}/>
          <ItemStatusFilter onChangeFilter={this.onChangeFilter}/>
        </div>
        <TodoList todoData={this.state.todoData} filteredData={this.state.filteredData} onDeleted={(id) => this.deleteItem(id)} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone}/>
        <AddItem onItemAdded={this.addItem}/>
      </div>
    );
  }
 
};
