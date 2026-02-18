import styles from "./users.module.css";

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() }
  }));

  return {
    paths,
    fallback: false
  };
}
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  if (!res.ok) {
    return { notFound: true };
  }
  const user = await res.json();
  return {
    props: {
      user
    }
  };
}

export default function UserPage({ user }) {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <p className={styles.username}>
          UserName: {user.username}
        </p>
        <p className={styles.company}>
          Company: {user.company.name}
        </p>
        <p className={styles.email}>
          Email: {user.email}
        </p>
      </li>
    </ul>
  );
}
