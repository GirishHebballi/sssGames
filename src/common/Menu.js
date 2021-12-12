import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import BallonGame from '../components/BallonGame';
import Home from '../components/Home';
import UnScramble from '../components/UnScramble';


export default function Menu() {
    return (
        <Router> 
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor : '#B2D5E3 '}}>
        <a className="navbar-brand" href="#">Kids Games</a>

        <div className=" navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
            </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Games
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/ballongame">Ballon Game</Link>
          <Link className="dropdown-item" to="/unscramble">unScramble Game</Link>

        </div>
      </li>
     
            </ul>

  </div>
</nav>
<Switch> 
              <Route exact path='/' component={Home}></Route> 
              <Route exact path='/ballongame' component={BallonGame}></Route> 
              <Route exact path='/unscramble' component={UnScramble}></Route> 

      </Switch> 
</Router>
    );


}