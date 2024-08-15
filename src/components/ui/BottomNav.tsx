"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoBook, IoBookOutline, IoHome, IoHomeOutline, IoTime, IoTimeOutline } from 'react-icons/io5';

interface BottomNavItem {
  href: string;
  label: string;
  iconActive: React.ReactNode;
  iconInactive: React.ReactNode;
}

const items: BottomNavItem[] = [
  {
    href: '/',
    label: 'Home',
    iconActive: <IoHome />,
    iconInactive: <IoHomeOutline />,
  },
  {
    href: '/time',
    label: 'Time',
    iconActive: <IoTime />,
    iconInactive: <IoTimeOutline />,
  },
  {
    href: '/quran',
    label: 'Quran',
    iconActive: <IoBook />,
    iconInactive: <IoBookOutline />,
  },
];

const BottomNav: React.FC = () => {
  const pathname = usePathname();

  // Find the active index based on the current route
  const activeIndex = items.findIndex(item => item.href === pathname);

  return (
    <div className="btm-nav flex justify-between fixed bottom-0 w-full bg-gray-800">
      {items.map((item, index) => (
        <Link key={index} href={item.href} className="w-full">
          <button
            className={`flex flex-col items-center p-2 w-full border-t-2 ${
              activeIndex === index ? 'bg-blue-600 border-blue-400' : 'border-transparent bg-gray-800'
            }`}
          >
            {activeIndex === index ? item.iconActive : item.iconInactive}
            <span className="btm-nav-label text-white">{item.label}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export { BottomNav };

