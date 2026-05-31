import {
  LayoutDashboard,
  BarChart3,
  Users,
  Wallet,
  FolderOpen,
  ShoppingBasketIcon,
  CreditCardIcon,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";

function SidebarItem({ icon: Icon, label, to, active }) {
  return (
    <Link
      to={to}
      className={`
        flex w-full items-center gap-3 rounded-xl
        px-3 py-3 text-sm font-medium transition

        ${
          active
            ? "bg-[#010694]/10 text-[#010694]"
            : `
              text-slate-600
              hover:bg-slate-100

              dark:text-slate-400
              dark:hover:bg-slate-800
            `
        }
      `}
    >
      <Icon size={18} />
      {label}
    </Link>
  );
}

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="
            fixed inset-0 z-40
            bg-black/40
            lg:hidden
          "
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64
          transform border-r transition-transform duration-300

          bg-white
          border-slate-200

          dark:bg-[#111623]
          dark:border-slate-800

          lg:static lg:translate-x-0

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            {/* Logo */}
            <div
              className="
                flex h-16 items-center
                border-b
                border-slate-200
                px-6

                dark:border-slate-800
              "
            >
              <div className="flex items-center gap-2">
                <div
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded bg-[#010694] text-white
                  "
                >
                  ∞
                </div>

                <h1
                  className="
                    text-lg font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  INFINITY
                </h1>
              </div>
            </div>

            {/* Nav */}
            <nav className="space-y-1 p-4">
              <SidebarItem
                icon={LayoutDashboard}
                label="Dashboard"
                to="/dashboard-kasir"
                active={location.pathname === "/dashboard-kasir"}
              />

              <SidebarItem
                icon={ShoppingBasketIcon}
                label="Produk"
                to="/produk-kasir"
                active={location.pathname === "/produk-kasir"}
              />

              <SidebarItem
                icon={CreditCardIcon}
                label="Transaksi"
                to="/transaksi-kasir"
                active={location.pathname === "/transaksi-kasir"}
              />
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
