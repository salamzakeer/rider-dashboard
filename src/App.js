import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Riders from "./pages/Riders/riders";


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
      <Route path="/riders" element={<Riders />}></Route> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
