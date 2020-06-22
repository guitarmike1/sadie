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
import faker from "faker";
import DemoTable from './components/Table';

// Table data as an array of objects
const list = new Array(100).fill(true).map(() => ({
  name: faker.name.findName(),
  description: faker.name.jobTitle(),
  location: faker.address.city()
}));

// ReactDOM.render(<DemoTable list={list} />, document.getElementById("root"));


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            {/* <Route exact path='/' component={DemoTable} /> */}
            {/* <Route exact path='/' component={DemoTable} list={list} /> */}
            {/* <Route exact path='/' component={Videoplayer}/> */}
            <Route exact path='/' component={Home}/>
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