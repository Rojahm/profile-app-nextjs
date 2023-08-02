// render each page before requst, to keep on server
export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((member) => {
    return {
      params: { id: member.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
// get the requested user detailes
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  return {
    props: { member: data },
  };
};

const MemberDetailesPage = ({ member }) => {
  return (
    <div>
      <h1>Member Detailes</h1>
      <h2>{member.name}</h2>
      <p>{member.email}</p>
      <p>{member.website}</p>
      <p>{member.address.city}</p>
    </div>
  );
};

export default MemberDetailesPage;
