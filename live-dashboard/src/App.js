import './App.css';
import About from './components/About';
import Forclient from './components/forclient';
import Navbar from './components/Navbar';
import ForRecritur from './components/ForRecritur';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Recriturlandingpage from './components/Recriturlandingpage';
import Adminlogin from './components/Adminlogin';
import Recdashboard from './components/Recdashboard';
import AdminDashboard from './components/AdminDashboard';
import Forgotpass from './components/Forgotpass';
import RecApplication from './components/RecApplication';
import Payment from './components/Payment/Payment';
import Paymentfailure from './components/Payment/Paymentfailure';
import Paymentsuccess from './components/Payment/Paymentsuccess';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useLocation,
  HashRouter
} from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
};

const AppRoutes = () => {
  const location = useLocation();

  // Function to check if the current route is /Payment, /Recdashboard, or /admin/dashboard
  const isNoNavbarRoute = () => {
    return location.pathname === '/Payment' || location.pathname === '/recdashboard' || location.pathname === '/admin/dashboard' || location.pathname === '/paymentsuccess' || location.pathname === '/paymentfailure';
  };

  return (
    <>
      {/* Conditionally render Navbar based on route */}
      {!isNoNavbarRoute() && <Navbar />}
      
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Payment" element={<Payment />} />
        <Route exact path="/paymentsuccess" element={<Paymentsuccess />} />
        <Route exact path="/paymentfailure" element={<Paymentfailure />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/forclient" element={<Forclient />} />
        <Route exact path="/forrecritur" element={<ForRecritur />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/forgotpass" element={<Forgotpass />} />
        <Route exact path="/NewuserSignup" element={<Signup />} />
        <Route exact path="/recriturlandingpage" element={<Recriturlandingpage />} />
        <Route exact path="/RecApplication" element={<RecApplication />} />
        <Route exact path="/adminlogin" element={<Adminlogin />} />
        <Route exact path="/recdashboard" element={<Recdashboard />} />
        <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
