import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import{
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";

export default class App extends Component {
  a = 'Diptayan'
  pageSize = 15;
  country = 'in';
  category = 'general'
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <div className='container'>
            <Routes>
              
            <Route exact path='/' element={<News key='general' pageSize={this.pageSize} country={this.country} category='general'/>}></Route>
            <Route exact path='/business' element={<News key='business' pageSize={this.pageSize} country={this.country} category='business'/>}></Route>
            <Route exact path='/entertainment' element={<News key='entertainment' pageSize={this.pageSize} country={this.country} category='entertainment'/>}></Route>
            <Route exact path='/health' element={<News key='health' pageSize={this.pageSize} country={this.country} category='health'/>}></Route>
            <Route exact path='/science' element={<News key='science' pageSize={this.pageSize} country={this.country} category='science'/>}></Route>
            <Route exact path='/technology' element={<News key='technology' pageSize={this.pageSize} country={this.country} category='technology'/>}></Route>
            <Route exact path='/sports' element={<News key='sports' pageSize={this.pageSize} country={this.country} category='sports'/>}></Route>
            <Route exact path='/sports' element={<News key='sports' pageSize={this.pageSize} country={this.country} category='sports'/>}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}
