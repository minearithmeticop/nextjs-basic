"use client";

import { createContext, useState, useContext, ReactNode } from "react";

// สร้างประเภทของ Theme
type Theme = "light" | "dark";

// สร้างประเภทของ Context
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// สร้าง Context พร้อมค่าเริ่มต้น
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// สร้าง Provider Component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // Function สำหรับสลับธีม
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // สร้าง value ที่จะส่งไปให้ Context
  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// สร้าง Hook เพื่อง่ายต่อการใช้ Context
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
