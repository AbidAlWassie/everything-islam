import { BottomNav, navItems } from '@/components/ui/BottomNav';


const Quran = () => {
  return ( 
    <div>Quran
      <BottomNav items={navItems} activeIndex={2} />
    </div>
  )
}

export default Quran