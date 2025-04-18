// src/app/page.tsx
"use client"; // Wajib karena menggunakan useEffect

import { useEffect, useState } from 'react';

type Contact = {
  id: number;
  name: string;
  email: string;
};

// export default function Homes() {
const Homes = () => {
  
  const [users, setUsers] = useState<Contact[]>([]);
  console.log("Hello" + users);
  useEffect(() => {
    fetch('/api.php') // Ganti dengan domain Anda
      .then(res => res.json())
      .then((data: Contact[]) => setUsers(data))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h1>Daftar Pengguna</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Homes