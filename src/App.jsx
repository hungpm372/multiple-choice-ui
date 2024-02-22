import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '~/components/Layout/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
