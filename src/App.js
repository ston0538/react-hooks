import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import { UserContext } from "./UserContext";

function AppRouter() {
  const [value, setValue] = useState("Hello from Context");
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={{ value, setValue }}>
          <Route path="/" exact component={Index} />
          <Route path="/about/" exact component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default AppRouter;
