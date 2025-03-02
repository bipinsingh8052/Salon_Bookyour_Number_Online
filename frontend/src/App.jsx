import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Layout from './Layout'
import Caulsor from './pages/Caulsor'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Search from './pages/Search'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Caulsor/>}/>
      <Route path='home' element={<Caulsor/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='search' element={<Search/>}/>
       </Route>
    </Routes>
    <Routes>
      <Route path='signup' element={<SignUp/>}></Route>
    </Routes>

    <Routes>
      <Route path='login' element={<Login/>}></Route>
    </Routes>
    <Routes >
      <Route path='dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
