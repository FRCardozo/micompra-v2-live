import {useEffect,useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import {useAuth} from './store/auth'
import AuthModal from './components/Auth'
import Home from './pages/Home'
import Store from './pages/Store'
import Aliado from './pages/Aliado'
import BottomNav from './components/BottomNav'

export default function App(){
  const {session,loading,init}=useAuth()
  const [showLogin,setShowLogin]=useState(false)
  useEffect(()=>{init()},[])
  if(loading) return <div className="h-screen grid place-items-center">Cargando...</div>

  return <div className="min-h-full max-w-[480px] mx-auto bg-white relative shadow-xl">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/store/:id" element={<Store session={session} onNeedAuth={()=>setShowLogin(true)}/>}/>
      <Route path="/aliado" element={session? <Aliado/> : <NeedLogin onLogin={()=>setShowLogin(true)}/>}/>
    </Routes>
    <BottomNav session={session} onNeedAuth={()=>setShowLogin(true)}/>
    {showLogin && <AuthModal onClose={()=>setShowLogin(false)}/>}
  </div>
}

function NeedLogin({onLogin}){
  return <div className="h-screen grid place-items-center p-6 text-center bg-[#f6f6f6]">
    <div>
      <h2 className="text-xl font-bold mb-2">Panel de Tienda</h2>
      <p className="text-neutral-500 mb-4">Inicia sesión para continuar</p>
      <button onClick={onLogin} className="bg-[#ff3b30] text-white px-6 py-3 rounded-2xl">Iniciar sesión</button>
    </div>
  </div>
}