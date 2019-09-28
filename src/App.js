import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Robots from './Robots';
import './App.css'
import Scroll from './Scroll';

//State(parent) - description of your app, it is an object, piece of data that describes our apps
//Props - that come out of state

/*const state = {
    Robots: Robots,
    searchfield: ''
}*/

class App extends Component{
    constructor(){
        //we declare state
        super();
        this.state={
            Robots: [],
            searchfield: ''
        }
    }

    //CDM- if you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json();
        })
        .then (users =>{
            this.setState({Robots:users})
        })
        //this.setState({Robots:Robots});
    }

    //when we add our own function, always use arrow
    onSearchChange=(event) => {
        this.setState({searchfield: event.target.value});
        //console.log(event.target.value);
        //console.log(filterRobots);
    }

    render(){
        const filterRobots = this.state.Robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.Robots.length===0){
            return<h1>Loading</h1>
        }
        else{
        return(
            <div className="tc">
                <h1 className='f1'>Monster-Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList Robots={filterRobots}/>
                </Scroll>
            </div>
        )
    }}
}

export default App;