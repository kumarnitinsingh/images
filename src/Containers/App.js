import React,{Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
//import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

import'./App.css';
import ErrorBoundary from '../Components/ErrorBoundary'

class App extends Component{
  constructor(){
    super()
    this.state={
      images:[],
      searchfield:''
    }
  }
  componentDidMount(){
    fetch('https://picsum.photos/v2/list')
    .then(response=> response.json())
    .then(users=>this.setState({images:users}));

  
  }

onSearchChange =(event)=>{
  this.setState({searchfield:event.target.value})
}
render(){

  const filteredimages=this.state.images.filter(images=>{
    return images.author.toLowerCase().includes(this.state.searchfield.toLowerCase())
  })
  if(this.state.images.length===0){
    return<h1>Loading... Please Wait</h1>
  }
  else{

  return(
    <div className='tc'>
    <h1 className='f1'>IMAGES</h1>
    <SearchBox searchChange={this.onSearchChange}/>
    <Scroll>
    <ErrorBoundary>
    <CardList images={filteredimages}/>
    </ErrorBoundary>
    </Scroll>
    <footer>POWERED by NTIN KUMAR SINGH</footer>

    </div>

    );
}
} 
}
export default App;