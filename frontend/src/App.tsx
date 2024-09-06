import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/singIn'
import SignUp from './pages/signUp'
import Blog from './pages/blog'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signUp" element={<SignUp/>}></Route>
          <Route path='/SignIn' element={<SignIn/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
