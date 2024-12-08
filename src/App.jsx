import { Routes, Route } from 'react-router-dom'
import PostLists from './pages/PostLists'
import NavbarComponent from './components/NavbarComponent'
import Home from './pages/Home'
import Todos from './pages/Todos'
import Currency from './pages/Currency'
function App() {
  return (
    <div>
      <NavbarComponent/>
      <div className="container">
        <div className='row'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/posts' element={<PostLists/>} />
            <Route path='/todos' element={<Todos />} />
            <Route path='/currency' element={<Currency/>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
