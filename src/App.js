import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Critters from './components/Critters'
import Post from './components/Post'
import Videoplayer from './components/Videoplayer'

import ReactDOM from "react-dom";
import "./css/styles.css"; // only needs to be imported once
// import "react-virtualized/styles.css"; // only needs to be imported once
import VideoTable from './components/Table';


// ReactDOM.render(<VideoTable list={list} />, document.getElementById("root"));


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={VideoTable} />
            {/* <Route exact path='/' component={VideoTable} list={list} /> */}
            {/* <Route exact path='/' component={Videoplayer}/> */}
            {/* <Route exact path='/' component={Home}/> */}
            <Route path='/about' component={About} />
            <Route path='/critters' component={Critters} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;