import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // router.go(-1);
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <Head>
        <title>Members | 404</title>
        <meta name="keywords" content="members, list, page Not found" />
      </Head>
      <div className="not-found">
        <h2>Ooops!</h2>
        <h3>Page not Found</h3>

        <p>
          redirecting to... <Link href="/">Homepage</Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
