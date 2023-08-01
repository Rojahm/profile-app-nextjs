import Link from "next/link";
import React from "react";

const index = () => {
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
