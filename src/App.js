import React, { useState, useEffect, useContext } from "react";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Rider from "./pages/Riders/rider";
import Telecaller from "./pages/Telecaller/telecaller";
import Setup from "./pages/Setup/PolicyS";
import SecuirtyP from "./pages/Setup/PolicyS";
import DataP from "./pages/Setup/PolicyD";
import NewP from "./pages/Setup/fristPolicy";
import UserProfile from "./pages/userProfile/userprofile";
import { publicRoutes, AuthenticationRoutes } from "./route/route";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthContext } from "./state/Auth";
import { actionType } from "./state/Authreducer";
function App() {
  const [IsUser, setIsUser] = useState(localStorage.getItem("auth"));
  const [user, dispatch] = useContext(AuthContext);
  useEffect(async () => {
    //if user
    if (localStorage.getItem("auth")) {
      const data = await localStorage.getItem("auth");
      // console.log(localStorage.getItem("auth"), "/////");
      // setUserDataJson(JSON.parse(localStorage.getItem("auth")));
      setIsUser(true);
      dispatch({
        type: actionType.SET_USER,
        user: JSON.parse(data),
      });
    }
    //if admin

  
  }, [localStorage.getItem("auth")]);
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
        {/* <Route path="/" index element={<Login />}></Route> */}

        {/* <Route path="/dashboard" element={<Dashboard />}></Route> 
      <Route path="/rider" element={<Rider />}></Route>
      <Route path="/telecaller" element={<Telecaller />}></Route>
      <Route path="/setup" element={<Setup />}></Route>
      <Route path="/setup/securitypolicy" element={<SecuirtyP />}></Route>
      <Route path="/setup/datapolicy" element={<DataP />}></Route>
      <Route path="/setup/newpolicy" element={<NewP />}></Route>
      <Route path="/userprofile" element={<UserProfile />}></Route>
       */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
