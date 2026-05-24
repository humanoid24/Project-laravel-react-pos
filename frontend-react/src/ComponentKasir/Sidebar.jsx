import {
  BarChart2,
  Box,
  ChevronDown,
  File,
  Folder,
  FolderOpen,
  Infinity as InfinityIcon,
  LayoutDashboard,
  LayoutDashboardIcon,
  Settings,
  Users,
  Wallet,
  WalletCards,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    icon: LayoutDashboardIcon,
    label: "Dashboard",
    path: "/dashboard-kasir",
  },
  {
    icon: Box,
    label: "Produk",
    path: "#",
  },
  {
    icon: Wallet,
    label: "Transaksi",
    path: "#",
  }
];


export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [masterOpen, setMasterOpen] = useState(false);

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* ── Sidebar ── */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col justify-between border-r border-slate-200 bg-white transition-transform duration-300 dark:border-slate-700 dark:bg-slate-800
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:static lg:translate-x-0`}
      >
        <div>
          {/* Logo */}
          <div className="flex h-16 items-center gap-2 border-b border-slate-100 px-6 dark:border-slate-700">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-900 text-white">
              <InfinityIcon size={14} />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
              INFINITY
            </span>

            <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
              <X size={20} />
            </button>
          </div>

          {/* Nav */}
          <nav className="space-y-1 px-3 py-6">
            {navItems.map(({ icon: Icon, label, path }) => {
              const active = location.pathname === path;

              return (
                <div key={label}>
                  <Link
                    to={path}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all
            ${
              active
                ? "bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
            }`}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                    {label}
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
