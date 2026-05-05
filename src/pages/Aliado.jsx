import {useState} from 'react'
export default function Aliado(){
  const [ring,setRing]=useState(false)
  return <div className="bg-white min-h-screen p-4 pb-24 max-w-[480px] mx-auto">
    <h1 className="text-2xl font-bold pt-4">Panel Tienda</h1>
    <button onClick={()=>setRing(true)} className="mt-6 w-full bg-[#ff3b30] text-white rounded-2xl p-4 font-semibold">Simular pedido</button>
    {ring && <div className="fixed inset-0 bg-black/80 grid place-items-center z-50" onClick={()=>setRing(false)}>
      <div className="bg-white w-[90%] max-w-sm rounded-3xl p-6 text-center animate-pulse">
        <div className="text-5xl mb-3">🔔</div>
        <h2 className="text-2xl font-bold">Nuevo pedido</h2>
        <p className="mt-2 text-neutral-600">$26.000 • Burger Clásica</p>
        <div className="grid grid-cols-3 gap-2 mt-5">{[15,25,35].map(m=><button key={m} className="bg-neutral-900 text-white rounded-xl py-3">{m}m</button>)}</div>
      </div>
    </div>}
  </div>
}