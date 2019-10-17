import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    this.setState({ robots: robots})
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response=> response.json())
    //   .then(users => {this.setState({ robots: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
    }
  
  render(){
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });
    if (!robots.length) {
      return <h1>Loading</h1>
    } else {
      return ( 
        <div className='tc'>
           <h1>RoboFriends</h1>
           <SearchBox searchChange={this.onSearchChange}/>
           <Scroll>
             <CardList robots={filteredRobots}/> 
           </Scroll>
        </div>
        );
    }
  }
}
 

export default App;
