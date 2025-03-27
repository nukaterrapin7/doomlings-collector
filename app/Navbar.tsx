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
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/archive">Archive</Link>
        </li>
        <li>
          <Link href="/collection">My Collection</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;