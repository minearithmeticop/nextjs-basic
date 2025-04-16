import Counter from "@/components/Counter";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import UserProfile from "@/components/UserProfile";
// import ShoppingCart from '@/components/ShoppingCart';
import { ThemeProvider } from "@/context/ThemeContext";

export default function StateExamplesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">
        Next.js State Management Examples
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Local State Example */}
        <div>
          <Counter />
        </div>

        {/* Context API Example */}
        <div>
          <ThemeProvider>
            <ThemeSwitcher />
          </ThemeProvider>
        </div>

        {/* Server Component + Client Component Example */}
        <div>
          <UserProfile userId="user123" />
        </div>

        {/* Zustand (Global State) Example */}
        {/* <div>
                    <ShoppingCart />
                </div> */}
      </div>

      <div className="mt-12 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Notes on State in Next.js</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Local State (useState):</strong>{" "}
            เหมาะสำหรับข้อมูลที่ใช้เฉพาะในคอมโพเนนต์เดียว
          </li>
          <li>
            <strong>Context API:</strong>{" "}
            เหมาะสำหรับข้อมูลที่ต้องแชร์ระหว่างหลายคอมโพเนนต์ในกลุ่มเดียวกัน
          </li>
          <li>
            <strong>Server Components:</strong> ไม่สามารถใช้ useState, useEffect
            ได้ แต่เหมาะสำหรับดึงข้อมูลจากเซิร์ฟเวอร์
          </li>
          <li>
            <strong>Global State (Zustand/Redux):</strong>{" "}
            เหมาะสำหรับข้อมูลที่ใช้ทั่วทั้งแอปพลิเคชัน
          </li>
        </ul>
      </div>
    </div>
  );
}
