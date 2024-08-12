
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cabins from './pages/Cabins'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Settings from './pages/Settings'
import Users from './pages/Users'
import AppLayout from './ui/AppLayout';
import Bookings from './pages/Bookings';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient({
  //here we have to setup the default option of the query client then adding it to the app
  defaultOptions: {
    staleTime:1000*60*3
  }


})
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false } />
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to='dashboard'/>}/>
          <Route path='/dashboard' element={<Dashboard/> } />
          <Route path='/cabins' element={<Cabins/> } />
          <Route path='/bookings' element={<Bookings/> } />
          <Route path='/account' element={<Account/> } />
          <Route path='/settings' element={ <Settings/> } />
          <Route path='/users' element={<Users />} /> 
        </Route>
        <Route path='*' element={<PageNotFound/> } />
        <Route path='/login' element={<Login/> } />
      </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
