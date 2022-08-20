import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Menu from './components/Menu'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;