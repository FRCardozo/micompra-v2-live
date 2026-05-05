import {useEffect} from 'react'
import {Routes,Route} from 'react-router-dom'
import {useAuth} from './store/auth'
import Auth from './components/Auth'
import Home from './pages/Home'
import Store from './pages/Store'
import Aliado from './pages/Aliado'
import BottomNav from './components/BottomNav'

export default function App(){
  const {session,loading,init}=useAuth()
  useEffect(()=>{init()},[])
  if(loading) return <div className="h-screen grid place-items-center">Cargando...</div>
  if(!session) return <Auth/>
  return <div className="min-h-full max-w-[480px] mx-auto bg-white relative shadow-xl">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/store/:id" element={<Store/>}/>
      <Route path="/aliado" element={<Aliado/>}/>
    </Routes>
    <BottomNav/>
  </div>
}