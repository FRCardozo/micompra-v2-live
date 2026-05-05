import Stories from '../components/Stories'
import {MapPin,ChevronDown} from 'lucide-react'
import {useNavigate} from 'react-router-dom'

const storiesData=[
  {name:'Burger House',img:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400',text:'2x1 hoy'},
  {name:'Super Ahorro',img:'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400',text:'Descuentos'},
  {name:'Farmacia',img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',text:'Domicilio gratis'},
  {name:'Licores',img:'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400',text:'Promo'},
]
const cats=[
  {n:'Restaurantes',i:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200'},
  {n:'Supermercado',i:'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=200'},
  {n:'Farmacia',i:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200'},
  {n:'Licores',i:'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=200'},
  {n:'Moto',i:'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=200'},
  {n:'Mascotas',i:'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=200'},
  {n:'Belleza',i:'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200'},
  {n:'Tecnología',i:'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=200'},
]

export default function Home(){
  const nav=useNavigate()
  return <div className="pb-[90px] bg-[#f6f6f6] min-h-screen">
    <div className="bg-white sticky top-0 z-30 border-b">
      <div className="px-4 pt-3 pb-2 flex items-center justify-between">
        <button className="flex items-center gap-1"><MapPin size={18} className="text-[#ff3b30]"/><span className="font-semibold">Sincé</span><ChevronDown size={16} className="opacity-60"/></button>
        <div className="w-8 h-8 rounded-full bg-neutral-200"/>
      </div>
      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 bg-[#f2f2f2] rounded-2xl px-4 h-12">
          <svg width="20" height="20" fill="none" stroke="currentColor" className="opacity-50"><circle cx="9" cy="9" r="7"/><path d="m21 21-4.3-4.3"/></svg>
          <input placeholder="¿Qué quieres pedir?" className="bg-transparent outline-none w-full text-[15px]"/>
        </div>
      </div>
    </div>

    <Stories items={storiesData}/>

    <div className="px-4 mt-2">
      <div className="grid grid-cols-4 gap-3">
        {cats.map(c=><button key={c.n} onClick={()=>nav('/store/demo')} className="bg-white rounded-2xl p-3 shadow-sm active:scale-95 transition">
          <img src={c.i} className="w-12 h-12 mx-auto rounded-xl object-cover"/>
          <p className="text-[12px] mt-2 leading-tight">{c.n}</p>
        </button>)}
      </div>
    </div>

    <div className="px-4 mt-6">
      <h2 className="font-bold text-[18px] mb-3">Tiendas cerca de ti</h2>
      <div className="space-y-3">
        {[
          {n:'Burger House',t:'15-25 min',e:'$3.500',img:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600',r:'4.8'},
          {n:'Super Ahorro Galeras',t:'20-30 min',e:'$4.000',img:'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600',r:'4.6'},
          {n:'Farmacia Vida',t:'10-15 min',e:'$2.500',img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600',r:'4.9'},
        ].map(s=><button key={s.n} onClick={()=>nav('/store/demo')} className="w-full bg-white rounded-2xl overflow-hidden shadow-sm text-left active:scale-[.99]">
          <div className="flex gap-3 p-3">
            <img src={s.img} className="w-[88px] h-[88px] rounded-xl object-cover"/>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold truncate">{s.n}</h3>
                <span className="text-[12px] bg-neutral-100 px-2 py-0.5 rounded-full shrink-0">⭐ {s.r}</span>
              </div>
              <p className="text-[13px] text-neutral-500 mt-0.5">{s.t} • Envío {s.e}</p>
            </div>
          </div>
        </button>)}
      </div>
    </div>
  </div>
}