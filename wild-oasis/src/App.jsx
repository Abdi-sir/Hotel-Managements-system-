
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cabins from './pages/Cabins'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Settings from './pages/Settings'
import Users from './pages/Users'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to='dashboard'/>}/>
        <Route path='/dashboard' element={<Dashboard/> } />
        <Route path='/cabins' element={<Cabins/> } />
        <Route path='/account' element={<Account/> } />
        <Route path='/login' element={<Login/> } />
        <Route path='/settings' element={ <Settings/> } />
        <Route path='/users' element={<Users/> } />
        <Route path='*' element={<PageNotFound/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
