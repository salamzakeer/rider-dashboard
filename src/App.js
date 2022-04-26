import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Rider from "./pages/Riders/rider";
import Setup from "./pages/Setup/PolicyS";


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

      
      <Route path="/rider" element={<Rider />}></Route>

      <Route path="/setup" element={<Setup />}></Route>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
