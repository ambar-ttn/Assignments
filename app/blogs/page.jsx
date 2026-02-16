export default async function Blogs() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const posts = await res.json();

  return (
    <>
      {posts.map((item) => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          <h1>{item.id}</h1>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </>
  );
}
