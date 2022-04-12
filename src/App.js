import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Ride from "./pages/Riders/BasicTable";
import Riders from "./pages/Riders/riders";
import Test from "./pages/Riders/test";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route> 
      <Route path="/ride" element={<Ride />}></Route> 
      <Route path="/riders" element={<Riders />}></Route> 
      <Route path="/test" element={<Test />}></Route> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
