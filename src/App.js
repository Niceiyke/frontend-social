
import { Routes,Route} from 'react-router-dom'


import Header from './components/Header';
import { AuthProvider } from './contex/AuthContext';

import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import LoginPage from './pages/Login';
import Profilepage from './pages/Profilepage';

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
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
