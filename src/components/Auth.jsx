import {useState} from 'react'
import {useAuth} from '../store/auth'
export default function Auth(){
  const [email,setEmail]=useState(''); const [sent,setSent]=useState(false); const login=useAuth(s=>s.login)
  const submit=async e=>{e.preventDefault();await login(email);setSent(true)}
  return <div className="min-h-screen grid place-items-center bg-white p-6">
    <div className="w-full max-w-sm">
      <h1 className="text-[32px] font-extrabold text-center mb2">mi<span className="text-[#ff3b30]">compra</span></h1>
      <p className="text-center text-neutral-500 mb-8">Todo Sincé y Galeras en una app</p>
      <div className="bg-white border rounded-3xl p-6 shadow-sm">
        {sent?<div className="text-center py-8"><p className="font-medium">Revisa tu correo</p><p className="text-sm text-neutral-500 mt1">Toca el link mágico</p></div>:
        <form onSubmit={submit} className="space-y-3">
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required placeholder="tu correo" className="w-full border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#ff3b30]/30"/>
          <button className="w-full bg-[#ff3b30] text-white rounded-2xl p-4 font-semibold active:scale-[.98]">Entrar</button>
        </form>}
      </div>
    </div>
  </div>
}