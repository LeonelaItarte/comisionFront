import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Menu from './pages/Menu';
import PrivateRoute from './pages/PrivateRoute';
import Layout from './pages/Layout';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Menu />} />
            
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
