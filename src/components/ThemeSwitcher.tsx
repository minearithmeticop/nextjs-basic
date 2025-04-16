"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeSwitcher() {
  // ใช้ hook ที่เราสร้างเพื่อเข้าถึง theme และ toggleTheme
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Theme Switcher (Context API)</h2>
      <div className="flex flex-col items-center">
        <p className="mb-4">
          Current Theme: <span className="font-bold">{theme}</span>
        </p>
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-md ${
            theme === "light"
              ? "bg-gray-800 text-white"
              : "bg-yellow-400 text-gray-900"
          }`}
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </div>
    </div>
  );
}
