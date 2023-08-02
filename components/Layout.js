import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head></Head>
      <div className="container">
        <Navbar />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
