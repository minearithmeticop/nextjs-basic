"use client"; // ต้องทำเป็น Client Component

import { useState } from "react";

// กำหนดประเภทข้อมูลผู้ใช้
type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  joinedDate: string;
};

export default function UserProfileCard({ user }: { user: User }) {
  // ใช้ useState เพื่อจัดการการแสดง/ซ่อนอีเมล (client-side interactivity)
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="font-bold text-lg">{user.name}</h3>
      <p className="text-gray-600 dark:text-gray-300">{user.role}</p>

      {showEmail ? (
        <p className="mt-2">Email: {user.email}</p>
      ) : (
        <p className="mt-2">Email: ***********</p>
      )}

      <p className="text-sm text-gray-500 mt-1">Joined: {user.joinedDate}</p>

      <button
        onClick={() => setShowEmail(!showEmail)}
        className="mt-4 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
      >
        {showEmail ? "Hide Email" : "Show Email"}
      </button>
    </div>
  );
}
