import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import './App.css';
import Start from './components/Start'
import Stats from './components/Stats'
import Battle from './components/Battle'
import Upload from './components/Upload'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="logo-container">
            <Link to="/start" className="h1">HAMSTER WARS</Link>
            <img className="hamster-icon" src="/images/hamster_icon.png" alt="Hamster Icon"></img>
          </div>
          <p>- only the cute can survive -</p>
        </header>
        <nav>
            <NavLink to="/stats" className="h3" activeClassName="active">STATS</NavLink>
            <h3>-</h3>
            <NavLink to="/battle" className="h2" activeClassName="active">BATTLE</NavLink>
            <h3>-</h3>
            <NavLink to="/upload" className="h3" activeClassName="active">UPLOAD</NavLink>
          
        </nav>
        <main>
          <Switch>
            <Route path="/start"> <Start /> </Route>
            <Route path="/stats"> <Stats /> </Route>
            <Route path="/battle"> <Battle /> </Route>
            <Route path="/upload"> <Upload /> </Route>
          </Switch>
        </main>
        <footer>
          <p>Created by: Linus Kallin aka. Humpmonkey  |  
            Tools: Node, React and a whole lot of creativity  |  
            Loved by: Very few  |  
            Sources of income: Breeding and selling real hamsters
          </p>
        </footer>
      </div>

    </Router>
  );
}

export default App;
