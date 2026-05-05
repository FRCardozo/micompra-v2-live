import {useState} from 'react'
import {useAuth} from '../store/auth'
export default function AuthModal({onClose}){
  const [email,setEmail]=useState(''); const [sent,setSent]=useState(false); const login=useAuth(s=>s.login)
  const submit=async e=>{e.preventDefault();await login(email);setSent(true)}
  return <div className="fixed inset-0 z-50 bg-black/60 grid place-items-end sm:place-items-center" onClick={onClose}>
    <div className="w-full max-w-[480px] bg-white rounded-t-[28px] sm:rounded-[28px] p-6" onClick={e=>e.stopPropagation()}>
      <div className="w-12 h-1.5 bg-neutral-300 rounded-full mx-auto mb-4"/>
      <h2 className="text-[22px] font-bold">Entra para continuar</h2>
      <p className="text-neutral-500 text-[14px] mb-4">Podrás pedir, guardar favoritos y chatear</p>
      {sent? <div className="py-8 text-center"><p className="font-medium">Revisa tu correo</p><p className="text-sm text-neutral-500">Te enviamos el link mágico</p></div> :
      <form onSubmit={submit} className="space-y-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required placeholder="tu correo" className="w-full border rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#ff3b30]/30"/>
        <button className="w-full bg-[#ff3b30] text-white rounded-2xl p-4 font-semibold active:scale-[.98]">Enviar link mágico</button>
      </form>}
      <button onClick={onClose} className="w-full mt-2 text-neutral-500 py-2 text-sm">Ahora no</button>
    </div>
  </div>
}