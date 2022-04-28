import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Rider from "./pages/Riders/rider";
import Telecaller from "./pages/Telecaller/telecaller";
import Setup from "./pages/Setup/PolicyS";
import SecuirtyP from "./pages/Setup/PolicyS";
import DataP from "./pages/Setup/PolicyD";
import NewP from "./pages/Setup/fristPolicy";


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

      <Route path="/telecaller" element={<Telecaller />}></Route>

      <Route path="/setup" element={<Setup />}></Route>
      <Route path="/setup/securitypolicy" element={<SecuirtyP />}></Route>
      <Route path="/setup/datapolicy" element={<DataP />}></Route>
      <Route path="/setup/newpolicy" element={<NewP />}></Route>
      

      

    </Routes>
  </BrowserRouter>
  );
}

export default App;
