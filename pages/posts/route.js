export default function Route({ posts }) {
  return (
    <>
      {posts.map((item) => (
        <div key={item.id}>
          <h1>{item.id}</h1>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </>
  );
}
export async function getServerSideProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const posts = await res.json();

  return {
    props: {
      posts
    }
  };
}
