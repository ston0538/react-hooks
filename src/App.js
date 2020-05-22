import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import { UserContext } from "./UserContext";

function AppRouter() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {user && <Link to="/about/">About</Link>}
          </ul>
        </nav>
        <UserContext.Provider value={value}>
          <Route path="/" exact component={Index} />
          <Route path="/about/" exact component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default AppRouter;
