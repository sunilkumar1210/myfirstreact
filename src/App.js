import React from 'react'
import About from './About';
import Navbar from './Navbar';
import Shoping from './Shoping';
import Login from './Login';
import './App.css';
import { Link,BrowserRouter as Router,Switch,Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <Switch>
    <div>
      <nav>
          <Navbar/>
          <Route path='/Home' exact component={Home}/>
          <Route path='/Login' exact component={Login}/>
          <Route path='/Shoping' exact component={Shoping}/>
          <Route path='/About' exact component={About}/>
      </nav>
         
    </div>
    </Switch>
    </Router>
  )
}


const Home = () => {
  return (
    <div>
        <h1>This is home page</h1>
    </div>
  )
}

export default App;