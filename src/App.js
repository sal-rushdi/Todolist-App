import React, {Component} from 'react';
import Todoitems from './Components/Todoitems/Todoitems';
import Additem from './Components/Additem/Additem';
class App extends Component {
  state = {
    items : [
      {id:1,name: 'Salah',age:28},
      {id:2,name: 'Ronaldo',age:36},
      {id:3,name: 'Messi',age:34},
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items})
  }

  additem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items:items})

  }
  render() {
    return (
      <div className="App container">
         <h1 className="text-center">Todo List</h1>
         <Todoitems items={this.state.items} deleteItem={this.deleteItem} />
         <Additem additem={this.additem} />
      </div>
    );
  }
}


export default App;
