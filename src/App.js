import Login from "./pages/login/login";
import Dashboard01 from "./pages/dashboard/dashboard01";
import Dashboard02 from "./pages/dashboard02/dashboard02";

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
      <Route path="/dashboard" element={<Dashboard01 />}></Route>
      <Route path="/maindashboard" element={<Dashboard02 />}></Route> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
