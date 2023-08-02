import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // router.go(-1);
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h2>Ooops!</h2>
      <h3>Page not Found</h3>

      <p>
        redirecting to... <Link href="/">Homepage</Link>
      </p>
    </div>
  );
};

export default index;
