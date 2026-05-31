import { useState } from "react";
import { Line, Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import {
  LayoutDashboard,
  BarChart3,
  Users,
  Wallet,
  FolderOpen,
  Settings,
  Bell,
  Search,
  Menu,
  Download,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Clock3,
  Sun,
  Moon,
} from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend,
);

function Coba() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Revenue",
        data: [12, 19, 15, 25, 22, 30, 28, 35],
        borderColor: "#010694",
        backgroundColor: "rgba(1,6,148,0.15)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const revenueOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        grid: {
          color: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
        },
      },
      y: {
        grid: {
          color: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
        },
      },
    },
  };

  const trafficData = {
    labels: ["Direct", "Social", "Referral"],
    datasets: [
      {
        data: [45, 32, 23],
        backgroundColor: ["#010694", "#6d70fc", "#cbd5e1"],
        borderWidth: 0,
      },
    ],
  };

  const trafficOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: { legend: { display: false } },
  };

  const stats = [
    {
      title: "TOTAL REVENUE",
      value: "$124,500",
      icon: DollarSign,
      lightColor: "bg-blue-50 text-blue-700",
      darkColor: "bg-blue-900/30 text-blue-400",
      change: "+12.5%",
      positive: true,
    },
    {
      title: "ACTIVE USERS",
      value: "8,234",
      icon: Users,
      lightColor: "bg-purple-50 text-purple-700",
      darkColor: "bg-purple-900/30 text-purple-400",
      change: "+4.2%",
      positive: true,
    },
    {
      title: "BOUNCE RATE",
      value: "42.3%",
      icon: BarChart3,
      lightColor: "bg-orange-50 text-orange-700",
      darkColor: "bg-orange-900/30 text-orange-400",
      change: "-2.1%",
      positive: false,
    },
    {
      title: "AVG. SESSION",
      value: "4m 32s",
      icon: Clock3,
      lightColor: "bg-teal-50 text-teal-700",
      darkColor: "bg-teal-900/30 text-teal-400",
      change: "+8.1%",
      positive: true,
    },
  ];

  const transactions = [
    {
      name: "John Doe",
      email: "john@example.com",
      status: "Paid",
      date: "Oct 24, 2023",
      amount: "$350.00",
    },
    {
      name: "Sarah Miller",
      email: "sarah@studio.io",
      status: "Pending",
      date: "Oct 23, 2023",
      amount: "$1,200.00",
    },
    {
      name: "Mike K.",
      email: "mike@tech.co",
      status: "Paid",
      date: "Oct 21, 2023",
      amount: "$850.00",
    },
  ];

  // Theme classes helper
  const t = {
    bg: darkMode ? "bg-[#0B0F19]" : "bg-slate-50",
    sidebar: darkMode
      ? "bg-[#111623] border-slate-800"
      : "bg-white border-slate-200",
    header: darkMode
      ? "bg-[#0B0F19] border-slate-800"
      : "bg-white border-slate-200",
    card: darkMode
      ? "bg-[#111623] border-slate-800"
      : "bg-white border-slate-200",
    text: darkMode ? "text-white" : "text-slate-900",
    subtext: darkMode ? "text-slate-400" : "text-slate-500",
    searchBg: darkMode
      ? "bg-[#111623] border-slate-700"
      : "bg-slate-50 border-slate-200",
    tableHead: darkMode ? "bg-slate-900/50" : "bg-slate-50",
    tableRow: darkMode ? "border-slate-800" : "border-slate-100",
    divider: darkMode ? "border-slate-800" : "border-slate-200",
    sidebarItem: darkMode
      ? "text-slate-400 hover:bg-slate-800"
      : "text-slate-600 hover:bg-slate-100",
    select: darkMode
      ? "bg-[#111623] border-slate-700 text-white"
      : "bg-white border-slate-200 text-slate-900",
  };

  return (
    <div className={`${t.bg} flex h-screen overflow-hidden`}>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64
          transform border-r transition-transform duration-300
          lg:static lg:translate-x-0
          ${t.sidebar}
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            {/* Logo */}
            <div
              className={`flex h-16 items-center border-b px-6 ${t.divider}`}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-[#010694] text-white">
                  ∞
                </div>
                <h1 className={`text-lg font-bold ${t.text}`}>INFINITY</h1>
              </div>
            </div>

            {/* Nav */}
            <nav className="space-y-1 p-4">
              <SidebarItem
                icon={LayoutDashboard}
                label="Dashboard"
                active
                darkMode={darkMode}
              />
              <SidebarItem
                icon={BarChart3}
                label="Analytics"
                darkMode={darkMode}
              />
              <SidebarItem icon={Users} label="Customers" darkMode={darkMode} />
              <SidebarItem icon={Wallet} label="Finance" darkMode={darkMode} />
              <SidebarItem
                icon={FolderOpen}
                label="Documents"
                darkMode={darkMode}
              />
            </nav>
          </div>

          <div className={`border-t p-4 ${t.divider}`}>
            <SidebarItem icon={Settings} label="Settings" darkMode={darkMode} />
            <div className="mt-4 flex items-center gap-3">
              <img
                src="https://ui-avatars.com/api/?name=Alex+Morgan"
                alt=""
                className="h-10 w-10 rounded-full"
              />
              <div>
                <p className={`text-sm font-semibold ${t.text}`}>Alex Morgan</p>
                <p className={`text-xs ${t.subtext}`}>Admin Workspace</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header
          className={`flex h-16 items-center justify-between border-b px-4 lg:px-8 ${t.header}`}
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className={`rounded-lg border p-2 lg:hidden ${t.divider} ${t.text}`}
            >
              <Menu size={20} />
            </button>

            <div
              className={`hidden items-center gap-2 rounded-xl border px-3 py-2 md:flex ${t.searchBg}`}
            >
              <Search size={18} className={t.subtext} />
              <input
                type="text"
                placeholder="Search..."
                className={`bg-transparent outline-none text-sm ${t.text}`}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`rounded-full border p-2 transition-colors ${t.divider} ${t.text}`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className={`relative rounded-full border p-2 ${t.divider} ${t.text}`}
            >
              <Bell size={18} />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          {/* Heading */}
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className={`text-3xl font-bold ${t.text}`}>Overview</h1>
              <p className={`mt-1 text-sm ${t.subtext}`}>
                Welcome back, here's what's happening today.
              </p>
            </div>
            <button className="flex items-center gap-2 rounded-xl bg-[#010694] px-4 py-2 text-sm font-medium text-white">
              <Download size={16} />
              Export
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border p-5 shadow-sm ${t.card}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className={`text-xs font-medium ${t.subtext}`}>
                        {item.title}
                      </p>
                      <h3 className={`mt-2 text-2xl font-bold ${t.text}`}>
                        {item.value}
                      </h3>
                    </div>
                    <div
                      className={`rounded-xl p-3 ${darkMode ? item.darkColor : item.lightColor}`}
                    >
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-sm">
                    <span
                      className={`flex items-center gap-1 font-medium ${item.positive ? "text-emerald-500" : "text-red-500"}`}
                    >
                      {item.positive ? (
                        <ArrowUpRight size={16} />
                      ) : (
                        <ArrowDownRight size={16} />
                      )}
                      {item.change}
                    </span>
                    <span className={t.subtext}>from last month</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Charts */}
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className={`rounded-2xl border p-6 lg:col-span-2 ${t.card}`}>
              <div className="mb-6 flex items-center justify-between">
                <h3 className={`font-semibold ${t.text}`}>Revenue Growth</h3>
                <select
                  className={`rounded-lg border px-3 py-2 text-sm ${t.select}`}
                >
                  <option>This Year</option>
                </select>
              </div>
              <div className="h-72">
                <Line data={revenueData} options={revenueOptions} />
              </div>
            </div>

            <div className={`rounded-2xl border p-6 ${t.card}`}>
              <h3 className={`mb-4 font-semibold ${t.text}`}>Traffic Source</h3>
              <div className="h-48">
                <Doughnut data={trafficData} options={trafficOptions} />
              </div>
              <div className="mt-4 space-y-2">
                {["Direct", "Social", "Referral"].map((label, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor: ["#010694", "#6d70fc", "#cbd5e1"][i],
                        }}
                      />
                      <span className={t.subtext}>{label}</span>
                    </div>
                    <span className={`font-medium ${t.text}`}>
                      {[45, 32, 23][i]}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className={`mt-6 overflow-hidden rounded-2xl border ${t.card}`}>
            <div className={`border-b p-6 ${t.divider}`}>
              <h3 className={`font-semibold ${t.text}`}>Recent Transactions</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className={t.tableHead}>
                  <tr
                    className={`text-xs uppercase tracking-wider ${t.subtext}`}
                  >
                    <th className="p-4">Customer</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((item, index) => (
                    <tr key={index} className={`border-t ${t.tableRow}`}>
                      <td className="p-4">
                        <p className={`font-medium ${t.text}`}>{item.name}</p>
                        <p className={`text-sm ${t.subtext}`}>{item.email}</p>
                      </td>
                      <td className="p-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            item.status === "Paid"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className={`p-4 ${t.subtext}`}>{item.date}</td>
                      <td className={`p-4 font-medium ${t.text}`}>
                        {item.amount}
                      </td>
                      <td className="p-4 text-right">
                        <button className={t.subtext}>
                          <MoreHorizontal size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active, darkMode }) {
  return (
    <button
      className={`
        flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition
        ${
          active
            ? "bg-[#010694]/10 text-[#010694]"
            : darkMode
              ? "text-slate-400 hover:bg-slate-800"
              : "text-slate-600 hover:bg-slate-100"
        }
      `}
    >
      <Icon size={18} />
      {label}
    </button>
  );
}

export default Coba;
