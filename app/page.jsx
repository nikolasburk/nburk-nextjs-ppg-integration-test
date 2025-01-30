import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function Page() {
  const users = await prisma.user.findMany();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id} className="p-4 border rounded shadow-sm">
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>Name:</strong> {user.name || 'N/A'}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </li>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </ul>
    </main>
  );
}
