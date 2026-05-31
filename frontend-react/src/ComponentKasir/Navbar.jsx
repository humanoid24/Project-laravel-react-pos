import { Bell, Search, Menu, Sun, Moon, LogOut } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Navbar({ darkMode, setDarkMode, setSidebarOpen }) {

  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header
      className="
        flex h-16 items-center justify-between
        border-b
        border-slate-200
        bg-white
        px-4
        dark:border-slate-800
        dark:bg-[#0B0F19]
        lg:px-8
      "
    >
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="
            rounded-lg
            border
            border-slate-200
            p-2
            text-slate-900
            dark:border-slate-800
            dark:text-white
            lg:hidden
          "
        >
          <Menu size={20} />
        </button>

        {/* Search */}
        <div
          className="
            hidden
            items-center
            gap-2
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            px-3
            py-2
            dark:border-slate-700
            dark:bg-[#111623]
            md:flex
          "
        >
          <Search
            size={18}
            className="
              text-slate-500
              dark:text-slate-400
            "
          />

          <input
            type="text"
            placeholder="Search..."
            className="
              bg-transparent
              text-sm
              text-slate-900
              outline-none
              placeholder:text-slate-400
              dark:text-white
            "
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Dark mode */}
        <button
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className="
    rounded-full
    border
    border-slate-200
    p-2
    text-slate-900
    transition-colors
    dark:border-slate-800
    dark:text-white
  "
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Notification */}
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
            <div className="absolute z-50 right-0 mt-2 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
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
      </div>
    </header>
  );
}

export default Navbar;
