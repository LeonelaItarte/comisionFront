import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Menu from './pages/Menu';
import PrivateRoute from './pages/PrivateRoute';
import Layout from './pages/Layout';
import MisPagos from './pages/MisPagos';
import MiDeuda from './pages/MiDeuda';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route element={<Layout />}>
            <Route path="/" element={<Menu/>} />
            <Route path="/misPagos" element={<MisPagos />} />
            <Route path="/miDeuda" element={<MiDeuda/>} />
            
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
