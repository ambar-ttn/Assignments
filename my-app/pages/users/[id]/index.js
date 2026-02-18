export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  return {
    props: {
      user
    }
  };
}

export default function UsersPage({ user }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ul
        className="
          w-full max-w-md
          bg-white
          p-6
          rounded-lg
          shadow-md
          hover:shadow-xl
          focus-within:ring-2
          focus-within:ring-blue-500
          transition
        "
      >
        <li className="space-y-2">
          <p className="text-lg font-semibold text-blue-600 hover:text-blue-800">
            UserName: {user.username}
          </p>

          <p className="text-gray-700 hover:text-gray-900">
            Company: {user.company.name}
          </p>

          <p className="text-sm text-gray-500 hover:text-gray-700">
            Email: {user.email}
          </p>
        </li>
      </ul>
    </div>
  );
}
