import { BottomNav, navItems } from '@/components/ui/BottomNav';


const Time = () => {
  return ( 
    <div>Time
      <BottomNav items={navItems} activeIndex={1} />
    </div>
  )
}

export default Time