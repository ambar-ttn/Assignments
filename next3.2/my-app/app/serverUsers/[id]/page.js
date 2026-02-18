export default async function UsersPage({ params }) {
const param = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${param.id}`,
    { cache: "no-store" } // SSR
  );

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  const user = await res.json();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div
        className="
          w-full max-w-2xl
          bg-white
          rounded-xl
          shadow-md
          hover:shadow-xl
          transition
          focus-within:ring-2
          focus-within:ring-blue-500
          p-6
          space-y-4
        "
      >
        {/* BASIC INFO */}
        <h2 className="text-2xl font-bold text-blue-600 hover:text-blue-800">
          {user.name}
        </h2>

        <p className="text-gray-700">
          <span className="font-semibold">Username:</span> {user.username}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">Email:</span> {user.email}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">Phone:</span> {user.phone}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">Website:</span>{" "}
          <a
            href={`https://${user.website}`}
            className="text-blue-500 hover:underline"
          >
            {user.website}
          </a>
        </p>

        {/* ADDRESS */}
        <div className="border-t pt-4">
          <h3 className="font-semibold text-lg text-gray-800">
            Address
          </h3>
          <p className="text-gray-600">
            {user.address.street}, {user.address.suite}
          </p>
          <p className="text-gray-600">
            {user.address.city} - {user.address.zipcode}
          </p>
          <p className="text-sm text-gray-500">
            Geo: {user.address.geo.lat}, {user.address.geo.lng}
          </p>
        </div>

        {/* COMPANY */}
        <div className="border-t pt-4">
          <h3 className="font-semibold text-lg text-gray-800">
            Company
          </h3>
          <p className="text-gray-700">
            <span className="font-semibold">Name:</span>{" "}
            {user.company.name}
          </p>
          <p className="italic text-gray-600">
            “{user.company.catchPhrase}”
          </p>
          <p className="text-sm text-gray-500">
            {user.company.bs}
          </p>
        </div>
      </div>
    </div>
  );
}
