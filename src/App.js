import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Menu from './components/Menu'
import Henrik from './pages/Henrik/Henrik'
import Nairi from './pages/Nairi/Nairi'
import Narek from './pages/Narek/Narek'
import Armine from './pages/Armine/Armine'
import Nelly from './pages/Nelly/Nelly'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/henrik' element={<Henrik />} />
        <Route path='/nairi' element={<Nairi />} />
        <Route path='/narek' element={<Narek />} />
        <Route path='/armine' element={<Armine />} />
        <Route path='/nelly' element={<Nelly />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;