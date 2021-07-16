import React, { Component } from "react";
import Movies from "./components/Movies";
import Shows from "./components/Shows"
import Home from "./components/Home"
import { createGlobalStyle } from "styled-components"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  background-color:#000;
}
`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/shows">Shows</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/shows">
              <Shows />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>  
          <GlobalStyle/>        
        </div>        
      </Router>
    );
  }
}
export default App




