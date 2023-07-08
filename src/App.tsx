import {
  HashRouter as Router, Route, Switch, NavLink, Redirect,
} from 'react-router-dom';

import './App.scss';
import { People } from './components/People';

export const App = () => {
  return (
    <Router>
      <div data-cy="app" className="App">
        <nav
          data-cy="nav"
          className="navbar is-fixed-top has-shadow"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-item">
              <NavLink to="/home">
                Home
              </NavLink>

              <NavLink to="/people">
                People
              </NavLink>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/home">
            <main className="section">
              <div className="container">
                <h1 className="title">Home Page</h1>
              </div>
            </main>
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route exact path="/*">
            <div className="container">
              <h1 className="title">Page not found</h1>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
