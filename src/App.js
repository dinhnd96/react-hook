import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Basic from "./page/Home";
import SignupForm from "./page/Login";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Login</Link>
            </li>
            <li>
              <Link to="/users">Register</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Basic />
          </Route>
          <Route path="/users">
            <SignupForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Home</h1>;
}
