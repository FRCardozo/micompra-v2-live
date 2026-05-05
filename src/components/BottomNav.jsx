import {useNavigate,useLocation} from 'react-router-dom'
import {Home,Search,ShoppingBag,User} from 'lucide-react'
export default function BottomNav({session,onNeedAuth}){
  const nav=useNavigate(); const loc=useLocation()
  const items=[
    {to:'/',Icon:Home,l:'Inicio',needAuth:false},
    {to:'/store/demo',Icon:Search,l:'Buscar',needAuth:false},
    {to:'/aliado',Icon:ShoppingBag,l:'Pedidos',needAuth:true},
    {to:'/cuenta',Icon:User,l:'Cuenta',needAuth:true},
  ]
  const handle=(it)=>{ if(it.needAuth && !session){ onNeedAuth(); return } if(it.to==='/cuenta'){ onNeedAuth(); return } nav(it.to) }
  return <div className="fixed bottom-0 inset-x-0 z-40"><div className="max-w-[480px] mx-auto bg-white/95 backdrop-blur border-t safe"><div className="grid grid-cols-4 h-[72px]">{items.map(({Icon,l,to})=>{const active=loc.pathname===to;return <button key={l} onClick={()=>handle({to,l,needAuth:l!=='Inicio'&&l!=='Buscar'})} className={`flex flex-col items-center justify-center gap-1 ${active?'text-[#ff3b30]':'text-neutral-500'}`}><Icon size={22} strokeWidth={2.2}/><span className="text-[11px]">{l}</span></button>})}</div></div></div>
}