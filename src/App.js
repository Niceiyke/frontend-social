
import { Routes,Route} from 'react-router-dom'


import Header from './components/Header';

import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Profilepage from './pages/Profilepage';

function App() {
  return (
    <>
      <Header />
        <Routes>
        <Route element={<Layout />} path='/' exact></Route>
        <Route element={<Contact />} path='/contact' >Contact</Route>
        <Route element={<About />} path='/about' >About</Route>
        <Route element={<Profilepage />}path='/profile'>Profile</Route>
      </Routes>
    </>
  );
}

export default App;
