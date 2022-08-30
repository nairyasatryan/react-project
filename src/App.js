import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Menu from './components/Menu'
import Henrik from './pages/Henrik/Henrik'
import Nairi from './pages/Nairi/Nairi'
import Narek from './pages/Narek/Narek'
import Armine from './pages/Armine'
import Nelly from './pages/Nelly/Nelly'
import AllUser from './pages/Armine/components/AllUser'
import AddUser from './pages/Armine/components/AddUser'
import EditUser from './pages/Armine/components/EditUser'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/henrik' element={<Henrik />} />
        <Route path='/nairi' element={<Nairi />} />
        <Route path='/narek' element={<Narek />} />
        <Route path='/armine' element={<Armine/> } />
        <Route path='/armine/all' element={<AllUser/>} />
        <Route path='/armine/add' element={<AddUser/>} />
        <Route path='/armine/edit' element={<EditUser/>} />
        <Route path='/nelly' element={<Nelly />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;