import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { login } from "../utils/login";

export function Index() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h2>Home</h2>
      <div>{JSON.stringify(user, null, 2)}</div>
      {user ? (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          Logut
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default Index;
