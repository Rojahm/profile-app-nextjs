import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div class="logo">
          <h1>Member List</h1>
        </div>
        <Link href="/">Home</Link>
        <Link href="./about">About</Link>
        <Link href="/members">List</Link>
      </nav>
    </div>
  );
};

export default Navbar;
