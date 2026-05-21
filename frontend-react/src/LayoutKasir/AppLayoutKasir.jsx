import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  BarChart2,
  Users,
  Wallet,
  FolderOpen,
  Settings,
  Bell,
  Sun,
  Moon,
  Download,
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  MoreHorizontal,
  Infinity as InfinityIcon,
  Menu,
} from "lucide-react";

import Sidebar from './../ComponentKasir/Sidebar'
import Navbar from "./../ComponentKasir/Navbar";


// ─── Main Component ──────────────────────────────────────────────────────────
export default function AppLayoutKasir({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-300">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* ── Main ── */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">{children}</div>

        <footer className="border-t border-slate-200 px-6 py-4 dark:border-slate-700">
          <p className="text-center text-xs text-slate-400">
            © 2023 Infinity Inc. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
