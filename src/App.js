
import { Routes,Route} from 'react-router-dom'


import Header from './components/Header';
import { AuthProvider } from './contex/AuthContext';

import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
<<<<<<< HEAD
import LoginPage from './pages/LoginPage';
=======
import LoginPage from './pages/Login';
>>>>>>> 9e8b4356f19e06feb6d76764568a3611dfdf382b
import Profilepage from './pages/Profilepage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route element={<Layout />} path="/" exact></Route>
          <Route element={<Contact />} path="/contact">
            Contact
          </Route>
          <Route element={<About />} path="/about">
            About
          </Route>
          <Route element={<Profilepage />} path="/profile">
            Profile
          </Route>
          <Route element={<LoginPage />} path="/login">
           Login
          </Route>
          <Route element={<RegisterPage />} path="/register">
           Register
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
