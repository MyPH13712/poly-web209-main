import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import ProductAdminPage from './pages/Admin/Product/product'
import CategoriesPage from './pages/Admin/categories'
import AdminLayout from './components/Layout/admin'
import UserLayout from './components/Layout/user'
import HomePage from './pages/Home/home'
import AddProductPage from './pages/Admin/Product/add'

import EditProduct from './pages/Admin/Product/edit'
import SigninPage from './pages/Auth/signin'

export const ThemeContext = React.createContext({
  theme: "light",
  setTheme: () => {}
});

function App(props: any) {
  const [theme, setTheme] = useState("light")
  const value = {theme, setTheme}
  return (
 
      <Routes>
        {/* Auth */}
        <Route path='/signin' element={<SigninPage/>}/>
        {/* User layout */}
        <Route path='/' element={<UserLayout/>}>
          <Route index element={<HomePage/>}/>
         
        </Route>
        {/* Admin layout */}
        <Route path='admin' element={<AdminLayout/>}>
          <Route index element={<ProductAdminPage/>}/>
          <Route path='product/add' element={<AddProductPage/>}/>
          <Route path='product/edit/:id' element={<EditProduct/>}/>
          <Route path='categories' element={<CategoriesPage/>}/>
        </Route>
      </Routes>
   
  )
}

export default App
