import Head from "next/head";
import styles from "../../styles/Members.module.css";
import React from "react";
import Link from "next/link";

// async function that will get the data before rendering to the server
// in react apis would fetch in client side
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: { members: data },
  };
};

const index = ({ members }) => {
  return (
    <>
      <Head>
        <title>Members | List</title>
        <meta name="keywords" content="members, list, List Page" />
      </Head>
      <div>
        <h2>Members List</h2>
        <ul className={styles.list}>
          {members.map((member) => (
            <Link className={styles.link} href={`/members/${member.id}`}>
              <li key={member.id} className={styles.item}>
                <h3>{member.name}</h3>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default index;
