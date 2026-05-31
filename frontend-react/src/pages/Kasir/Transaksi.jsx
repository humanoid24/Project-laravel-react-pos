import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import AppLayoutKasir from "../../LayoutKasir/AppLayoutKasir";
import { useEffect, useState } from "react";
import api from "../../services/api";

function TransaksiKasir() {
  const [transaksi, setTransaksi] = useState([]);

  const ambilTransaksi = async () => {
    try {
      const response = await api.get(`/transaksi`);
      setTransaksi(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ambilTransaksi();
  }, []);

  return (
    <AppLayoutKasir>
      <>
        <div className="xl:col-span-2 rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between dark:border-slate-700">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Recent Transactions
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/50 text-xs font-medium uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:bg-white/5 dark:text-slate-400">
                  <th className="p-4 dark:text-white">No</th>
                  <th className="p-4 dark:text-white">Invoice</th>
                  <th className="p-4 dark:text-white">Nama kasir</th>
                  <th className="p-4 dark:text-white">Total</th>
                  <th className="p-4 dark:text-white">Metode Pembayaran</th>
                  <th className="p-4 dark:text-white">Status</th>
                  <th className="p-4 dark:text-white">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm dark:divide-slate-700">
                {transaksi.map((item, index) => (
                  <tr
                    key={item.id}
                    className="transition-colors hover:bg-slate-50 dark:hover:bg-white/5"
                  >
                    <td className="p-4 dark:text-white">{index + 1}</td>
                    <td className="p-4 dark:text-white">{item.invoice}</td>
                    <td className="p-4 dark:text-white">{item.kasir?.name}</td>
                    <td className="p-4 dark:text-white">{item.total}</td>
                    <td className="p-4 dark:text-white">
                      {item.metode_pembayaran}
                    </td>
                    <td className="p-4 dark:text-white">{item.status}</td>
                    <td className="p-4 dark:text-white">
                      {item.status === "pending" ? (
                        <div className="flex gap-2">
                          <button
                            
                            className="rounded-lg bg-green-500 px-3 py-1 text-xs font-medium text-white hover:bg-green-600"
                          >
                            Bayar
                          </button>

                          <button
                            
                            className="rounded-lg bg-red-500 px-3 py-1 text-xs font-medium text-white hover:bg-red-600"
                          >
                            Hapus
                          </button>
                        </div>
                      ) : (
                        <button
                          
                          className="rounded-lg bg-blue-500 px-3 py-1 text-xs font-medium text-white hover:bg-blue-600"
                        >
                          Lihat
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4 dark:border-slate-700">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Page 1 of 2
            </span>

            <div className="flex items-center gap-2">
              {/* Prev */}
              <button className="flex h-8 w-8 items-center justify-center rounded border border-slate-200 dark:text-white">
                <ChevronLeft size={16} />
              </button>

              <button className="flex h-8 w-8 items-center justify-center rounded border dark:text-white">
                1
              </button>

              {/* Next */}
              <button className="flex h-8 w-8 items-center justify-center rounded border border-slate-200 dark:text-white">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </>
    </AppLayoutKasir>
  );
}

export default TransaksiKasir;
