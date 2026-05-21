import { Bell, LogOut, Menu, Moon, Search, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";


export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  const dropdownRef = useRef(null);
    const [open, setOpen] = useState(false);


  // Dropwdown user ketika logout
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200/60 bg-white/80 px-4 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/80 lg:px-8">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex items-center justify-center rounded-xl border p-2 text-slate-500 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-white/5 lg:hidden"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>

      <div className="relative" ref={dropdownRef}>
        {/* Avatar Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 rounded-full px-2 py-1 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-white/5"
        >
          <img
            src="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
            alt="avatar"
            className="h-9 w-9 rounded-full object-cover"
          />

          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Admin
            </p>
          </div>
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
            <div className="border-b border-slate-200 px-4 py-3 dark:border-slate-700">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Nama User
              </p>
              <p className="text-xs text-slate-500">user@gmail.com</p>
            </div>

            <button className="flex w-full items-center gap-2 px-4 py-3 text-sm text-red-500 transition hover:bg-slate-100 dark:hover:bg-slate-700">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}