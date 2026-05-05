import {useState} from 'react'
export default function Stories({items}){
  const [open,setOpen]=useState(null)
  return <>
    <div className="flex gap-4 overflow-x-auto px-4 py-3 scrollbar-hide">
      {items.map((s,i)=><button key={i} onClick={()=>setOpen(s)} className="shrink-0 text-center">
        <div className="w-[68px] h-[68px] rounded-full p-[2px] bg-gradient-to-tr from-[#ff3b30] to-orange-400">
          <img src={s.img} className="w-full h-full rounded-full object-cover border-[3px] border-white"/>
        </div>
        <p className="text-[12px] mt-1 w-[72px] truncate">{s.name}</p>
      </button>)}
    </div>
    {open && <div className="fixed inset-0 z-50 bg-black grid place-items-center" onClick={()=>setOpen(null)}>
      <div className="relative w-full h-full max-w-[480px] mx-auto">
        <img src={open.img} className="w-full h-full object-contain"/>
        <div className="absolute top-0 inset-x-0 p-3 flex gap-1">{[0].map(i=><div key={i} className="h-1 flex-1 bg-white/30 rounded"><div className="h-full w-full bg-white rounded animate-[shrink_5s_linear]"/></div>)}</div>
        <button className="absolute top-4 right-4 text-white text-2xl" onClick={()=>setOpen(null)}>×</button>
        <div className="absolute bottom-10 inset-x-0 text-center text-white"><p className="font-semibold">{open.name}</p><p className="text-sm opacity-80">{open.text}</p></div>
      </div>
    </div>}
    <style>{`@keyframes shrink{from{width:100%}to{width:0%}}`}</style>
  </>
}