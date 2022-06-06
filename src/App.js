import React, { useState, useEffect, useContext } from "react";
import { publicRoutes, AuthenticationRoutes } from "./route/route";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthContext } from "./state/Auth";
import { actionType } from "./state/Authreducer";
function App() {
  const [IsUser, setIsUser] = useState(localStorage.getItem("auth"));
  const [dispatch] = useContext(AuthContext);
  useEffect(() => {
    //if user
    // console.log("running app effect");
    async function checkUser() {
      if (localStorage.getItem("userInfor")) {
        const data = await localStorage.getItem("userInfor");
        // console.log(localStorage.getItem("auth"), "/////");
        // setUserDataJson(JSON.parse(localStorage.getItem("auth")));
        setIsUser(true);
        dispatch({
          type: actionType.SET_USER,
          user: JSON.parse(data),
        });
      }
    }
    //if admin
    checkUser();
  }, [dispatch]);
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
