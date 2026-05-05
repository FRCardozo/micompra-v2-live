import {NavLink} from 'react-router-dom'
import {Home,Search,ShoppingBag,User} from 'lucide-react'
const items=[{to:'/',Icon:Home,l:'Inicio'},{to:'/store/demo',Icon:Search,l:'Buscar'},{to:'/aliado',Icon:ShoppingBag,l:'Pedidos'},{to:'/',Icon:User,l:'Cuenta'}]
export default function BottomNav(){
  return <div className="fixed bottom-0 inset-x-0 z-40"><div className="max-w-[480px] mx-auto bg-white/95 backdrop-blur border-t safe"><div className="grid grid-cols-4 h-[72px]">{items.map(({to,Icon,l})=><NavLink key={l} to={to} className={({isActive})=>`flex flex-col items-center justify-center gap-1 ${isActive?'text-[#ff3b30]':'text-neutral-500'}`}><Icon size={22} strokeWidth={2.2}/><span className="text-[11px]">{l}</span></NavLink>)}</div></div></div>
}