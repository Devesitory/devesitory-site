import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1em",
            marginTop: "1.5em",
          }}
        >
          <Link to="/">Home</Link>
          <span
            style={{
              fontWeight: 200,
            }}
          >
            —
          </span>
          <Link to="/about">About</Link>
        </div>

        <div className="center-me">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
