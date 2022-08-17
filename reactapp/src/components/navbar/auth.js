import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Link, Route} from 'react-router-dom';
import Home from '../home';
import Dashboard from '../dashboard';
import AuthUser from '../AuthUser';


function Auth() {

    const {token, logout} = AuthUser();
    const logoutUser = () => {
        if(token != undefined) {
            logout();
        }
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
            </li>
            </ul>
        </div>
      </nav>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default Auth;
