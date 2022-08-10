import React, { useState, useEffect, useContext } from "react";
import { publicRoutes, AuthenticationRoutes } from "./route/route";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthContext } from "./state/Auth";
import { actionType } from "./state/Authreducer";
function App() {
  const [IsUser, setIsUser] = useState(localStorage.getItem("auth"));
  const [user, dispatch] = useContext(AuthContext);
  useEffect(() => {
    async function checkUser() {
      if (localStorage.getItem("userInfor")) {
        const data = await localStorage.getItem("userInfor");
        setIsUser(true);
        dispatch({
          type: actionType.SET_USER,
          user: JSON.parse(data),
        });
      }
    }
    checkUser();
  }, []);
  const publicRoute = (route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        element={<route.component />}
        exact={route.exact}
      />
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        {IsUser
          ? publicRoutes.map((route, index) => publicRoute(route, index))
          : AuthenticationRoutes.map((route, index) =>
              publicRoute(route, index)
            )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
