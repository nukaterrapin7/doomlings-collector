import Link from 'next/link';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Archive', href: '/archive' },
  { label: 'My Collection', href: '/collection' },
];

function Navbar() {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <ul className="flex space-x-6">
        <li className="flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/archive">Archive</Link>
          <Link href="/collection">My Collection</Link>
          Trade/Sale List
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;