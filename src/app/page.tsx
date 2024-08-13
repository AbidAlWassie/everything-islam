import { BottomNav, navItems } from '@/components/ui/BottomNav';

export default function Home() {

  return (
    <main className="flex">
      Home
      <BottomNav items={navItems} activeIndex={0} />
    </main>
  );
}
