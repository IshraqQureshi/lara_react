import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Link, Route} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Dashboard from './components/dashboard';
import AuthUser from './components/AuthUser';
import Guest from './components/navbar/guest';
import Auth from './components/navbar/auth';



function App() {
  const {getToken} = AuthUser();
  if(!getToken()) {
    return <Guest />
  }
  return (
    <Auth />
  );
}

export default App;
