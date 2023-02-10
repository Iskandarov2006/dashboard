import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Davlatlar from "./Components/Davlatlar";
import './css/app.css'
function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <h4>User Admin</h4>
        <Link to='/'>Dashboard</Link>
        <Link to='/davlatlar'>Davlatlar</Link>
      </div>
      <div className="left">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/davlatlar' element={<Davlatlar />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
