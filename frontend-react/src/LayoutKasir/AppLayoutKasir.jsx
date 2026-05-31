import { useEffect, useState } from "react";

import Sidebar from "../ComponentKasir/Sidebar";
import Navbar from "../ComponentKasir/Navbar";

function AppLayoutKasir({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-[#0B0F19]">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main className="flex flex-1 flex-col overflow-hidden">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setSidebarOpen={setSidebarOpen}
        />

        <div className="flex-1 overflow-y-auto p-4 lg:p-8">{children}</div>
      </main>
    </div>
  );
}

export default AppLayoutKasir;
