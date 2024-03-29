import { Component } from "react";
import { CardList } from "./components/card-list/cardList";
import { SearchBox } from "./components/searchBox/SearchBox";


class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
    }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(respnose => respnose.json())
      .then(users => this.setState({monsters : users}))
    }
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return(
      <div className="App">
        <SearchBox placeholder={'Search here ...'} handleChange={e => this.setState({searchField: e.target.value})} />
        <CardList monsters = {filteredMonsters} />
      </div>
    )
  }
};

export default App;
