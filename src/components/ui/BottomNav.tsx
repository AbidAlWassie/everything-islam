import Link from 'next/link';
import { IoBook, IoBookOutline, IoHome, IoHomeOutline, IoTime, IoTimeOutline } from 'react-icons/io5';

interface BottomNavItem {
  href: string;
  label: string;
  iconActive: React.ReactNode;
  iconInactive: React.ReactNode;
}

interface BottomNavProps {
  activeIndex: number;
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

const BottomNav: React.FC<BottomNavProps> = ({ activeIndex }) => {
  return (
    <div className="btm-nav">
      {items.map((item, index) => (
        <Link key={index} href={item.href}>
          <button
            className={`flex flex-col items-center p-2 w-full border-t-2  ${
              activeIndex === index ? 'bg-blue-600 border-blue-400 border-t-2' : 'border-transparent bg-gray-800'
            }`}
          >
            {activeIndex === index ? item.iconActive : item.iconInactive}
            <span className="btm-nav-label">{item.label}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export { BottomNav };

