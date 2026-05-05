import {useNavigate} from 'react-router-dom'
import {ArrowLeft} from 'lucide-react'
import {useState} from 'react'
export default function Store({session,onNeedAuth}){
  const nav=useNavigate(); const [cart,setCart]=useState(0)
  const add=()=>{ if(!session){ onNeedAuth(); return } setCart(c=>c+1) }
  return <div className="bg-white min-h-screen pb-24">
    <div className="relative h-[220px]">
      <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000" className="w-full h-full object-cover"/>
      <button onClick={()=>nav(-1)} className="absolute top-4 left-4 w-9 h-9 grid place-items-center bg-white/90 rounded-full shadow"><ArrowLeft size={20}/></button>
    </div>
    <div className="px-4 -mt-6 relative">
      <div className="bg-white rounded-2xl shadow p-4">
        <h1 className="text-[22px] font-bold">Burger House</h1>
        <p className="text-[13px] text-neutral-500 mt-1">Hamburguesas • ⭐ 4.8 (320) • 15-25 min</p>
      </div>
    </div>
    <div className="px-4 mt-5 space-y-3">
      {['Hamburguesa Clásica $18.000','Papas $8.000','Combo $25.000'].map(i=><div key={i} className="flex items-center justify-between bg-[#f9f9f9] rounded-2xl p-4"><span>{i}</span><button onClick={add} className="w-8 h-8 rounded-full bg-[#ff3b30] text-white grid place-items-center">+</button></div>)}
    </div>
    {cart>0 && <div className="fixed bottom-[90px] inset-x-0 px-4"><div className="max-w-[480px] mx-auto"><button onClick={add} className="w-full bg-[#ff3b30] text-white rounded-2xl p-4 font-semibold shadow-lg">Ver carrito ({cart})</button></div></div>}
  </div>
}