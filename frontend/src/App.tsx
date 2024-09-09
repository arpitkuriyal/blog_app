import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/singIn'
import SignUp from './pages/signUp'
import BlogRead from './pages/blog'
import Publish from './pages/Publish'
import FullBlog from './pages/FullBlog'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signUp" element={<SignUp/>}></Route>
          <Route path='/SignIn' element={<SignIn/>}></Route>
          <Route path='/blog/:id' element={<BlogRead/>}></Route>
          <Route path="/publish" element={<Publish/>}></Route>
          <Route path='/blogs' element={<FullBlog/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
