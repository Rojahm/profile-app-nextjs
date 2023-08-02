import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link href="/">
            <h1>Member List</h1>
          </Link>
        </div>
        <div className="nav">
          <Link href="/">Home</Link>
          <Link href="./about">About</Link>
          <Link href="/members">List</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
