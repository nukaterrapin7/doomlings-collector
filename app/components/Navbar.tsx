import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <ul>
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