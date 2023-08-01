import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="content">
      <h2>Ooops!</h2>
      <h3>not Found</h3>
      <Link href="/">Homepage</Link>
    </div>
  );
};

export default index;
