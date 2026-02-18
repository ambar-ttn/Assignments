export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return users.map((user) => ({
    id: user.id.toString(), 
  }));
}
export default async function UsersPage({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      next: { revalidate: 60 }, 
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  const user = await res.json();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6 space-y-3">

        <h1 className="text-2xl font-bold text-blue-600">
          {user.name}
        </h1>

        <p>
          <strong>Username:</strong> {user.username}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Phone:</strong> {user.phone}
        </p>

        <p>
          <strong>Website:</strong> {user.website}
        </p>

        <div className="border-t pt-3">
          <h2 className="font-semibold">Company</h2>
          <p>{user.company.name}</p>
          <p className="italic text-gray-600">
            “{user.company.catchPhrase}”
          </p>
        </div>

      </div>
    </div>
  );
}
