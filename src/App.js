import Login from "./pages/login/login";
import Dashboard01 from "./pages/dashboard/dashboard01";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" index element={<Login />}></Route>
      <Route path="/dashboard01" element={<Dashboard01 />}></Route>
        
    </Routes>
  </BrowserRouter>
  );
}

export default App;
