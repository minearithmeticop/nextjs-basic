// Server Component (ไม่ต้องใส่ 'use client')
// สมมติว่าเราดึงข้อมูลผู้ใช้จาก API หรือฐานข้อมูล

import UserProfileCard from "./UserProfileCard"; // นำเข้า Client Component

// สมมติว่านี่คือฟังก์ชันดึงข้อมูล (ในสถานการณ์จริงอาจใช้ fetch, database query, etc)
async function getUser(id: string) {
  // ในสถานการณ์จริงจะเป็น API call หรือ database query
  // แต่ตอนนี้เราจะจำลองข้อมูลง่ายๆ

  // จำลองการดึงข้อมูลที่ใช้เวลา
  await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    id,
    name: "John Doe",
    email: "john@example.com",
    role: "Developer",
    joinedDate: "2023-01-15",
  };
}

export default async function UserProfile({ userId }: { userId: string }) {
  // ดึงข้อมูลผู้ใช้ (ทำงานที่ Server)
  const user = await getUser(userId);

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">
        User Profile (Server Component)
      </h2>

      {/* ส่งข้อมูลที่ดึงมาไปให้ Client Component */}
      <UserProfileCard user={user} />
    </div>
  );
}
