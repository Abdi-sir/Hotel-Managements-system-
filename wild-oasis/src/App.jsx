
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cabins from './pages/Cabins'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Settings from './pages/Settings'
import Users from './pages/Users'
import AppLayout from './ui/AppLayout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
        <Route index element={<Navigate replace to='dashboard'/>}/>
        <Route path='/dashboard' element={<Dashboard/> } />
        <Route path='/cabins' element={<Cabins/> } />
        <Route path='/account' element={<Account/> } />
        <Route path='/settings' element={ <Settings/> } />
        <Route path='/users' element={<Users/> } />          
        </Route>

        <Route path='*' element={<PageNotFound/> } />
        <Route path='/login' element={<Login/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
