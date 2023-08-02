import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link href="/">
            <Image
              src="/rojaLogo.png"
              width={120}
              height={50}
              alt="black logo of roja"
            />
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
