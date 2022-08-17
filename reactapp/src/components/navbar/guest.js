import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Link, Route} from 'react-router-dom';
import Home from '../home';
import Login from '../login';
import Register from '../register';

function Guest() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            </ul>
        </div>
      </nav>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default Guest;
