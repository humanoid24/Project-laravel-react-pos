import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import AppLayoutKasir from "../../LayoutKasir/AppLayoutKasir";

const stats = [
  {
    title: "TOTAL REVENUE",
    value: "$124,500",
  },
  {
    title: "ACTIVE USERS",
    value: "8,234",
  },
  {
    title: "BOUNCE RATE",
    value: "42.3%",
  },
  {
    title: "AVG. SESSION",
    value: "4m 32s",
  },
];

const transactions = [
  {
    id: 1,
    initials: "JD",
    name: "John Doe",
    email: "john@example.com",
    status: "Paid",
    date: "Oct 24, 2023",
    amount: "$350.00",
    avatarBg: "from-blue-100 to-purple-100",
    textColor: "text-blue-900",
  },
];

function StatusBadge({ status }) {
  const isPaid = status === "Paid";

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
        ${
          isPaid
            ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400"
            : "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400"
        }`}
    >
      {status}
    </span>
  );
}

function Dashboard() {
  return (
    <AppLayoutKasir>
      <>
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Dashboard
          </h1>
        </div>

        {/* Cards */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative min-h-35 overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-[#172036]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {item.title}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                    {item.value}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* Table kiri */}
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-[#172036] xl:col-span-2">
            <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 dark:border-slate-700 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                Recent Transactions
              </h3>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400"
                  />

                  <input
                    type="text"
                    placeholder="Filter..."
                    className="h-9 w-40 rounded-lg border border-slate-200 bg-transparent pl-9 pr-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:text-white"
                  />
                </div>

                <button className="flex h-9 items-center gap-2 rounded-lg border border-slate-200 px-3 text-sm font-medium text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-white/5">
                  <SlidersHorizontal size={14} />
                  Filter
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-medium uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    <th className="p-4">Customer</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4 text-right">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  {transactions.map((tx) => (
                    <tr
                      key={tx.id}
                      className="transition-colors hover:bg-slate-50 dark:hover:bg-white/5"
                    >
                      <td className="p-4">
                        <p className="font-medium text-slate-900 dark:text-white">
                          {tx.name}
                        </p>
                      </td>

                      <td className="p-4">
                        <StatusBadge status={tx.status} />
                      </td>

                      <td className="p-4 font-medium text-slate-900 dark:text-white">
                        {tx.date}
                      </td>

                      <td className="p-4 font-medium text-slate-900 dark:text-white">
                        {tx.amount}
                      </td>

                      <td className="p-4 text-right">
                        <button className="text-slate-500 transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-white">
                          <MoreHorizontal size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4 dark:border-slate-700">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Showing 1-3 of 24 results
              </span>

              <div className="flex items-center gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded border border-slate-200 text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-white/5">
                  <ChevronLeft size={16} />
                </button>

                <button className="flex h-8 w-8 items-center justify-center rounded border border-blue-900 bg-blue-900 text-white shadow-sm">
                  1
                </button>

                <button className="flex h-8 w-8 items-center justify-center rounded border border-slate-200 text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-white/5">
                  2
                </button>

                <button className="flex h-8 w-8 items-center justify-center rounded border border-slate-200 text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-white/5">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Table kanan */}
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-[#172036]">
            <div className="px-6 py-5">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                Recent Transactions
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-medium uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    <th className="p-4">Customer</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 text-sm dark:divide-slate-700">
                  {transactions.map((tx) => (
                    <tr
                      key={tx.id}
                      className="transition-colors hover:bg-slate-50 dark:hover:bg-white/5"
                    >
                      <td className="p-4">
                        <p className="font-medium text-slate-900 dark:text-white">
                          {tx.name}
                        </p>
                      </td>

                      <td className="p-4">
                        <StatusBadge status={tx.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    </AppLayoutKasir>
  );
}

export default Dashboard;
