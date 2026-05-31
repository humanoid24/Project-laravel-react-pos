import { useState } from "react";
import AppLayoutKasir from "../../LayoutKasir/AppLayoutKasir";

function BayarTransaksi() {
  const [dibayar, setDibayar] = useState("");

  const transaksi = {
    invoice: "INV-20260530-001",
    kasir: "Admin",
    total: 125000,
    detail: [
      {
        nama: "Indomie Goreng",
        qty: 2,
        harga: 3500,
      },
      {
        nama: "Teh Botol",
        qty: 3,
        harga: 5000,
      },
    ],
  };

  const kembalian = Number(dibayar) - transaksi.total;

  return (
    <AppLayoutKasir>
      <>
        <div className="mx-auto max-w-4xl p-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-900">
            <h1 className="mb-6 text-2xl font-semibold dark:text-white">
              Pembayaran Transaksi
            </h1>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-slate-500 dark:text-white">
                  Invoice
                </p>
                <p className="font-medium dark:text-white">
                  {transaksi.invoice}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500 dark:text-white">Kasir</p>
                <p className="font-medium dark:text-white">{transaksi.kasir}</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-3 text-left">Produk</th>
                    <th className="p-3 text-center dark:text-white">Qty</th>
                    <th className="p-3 text-right">Harga</th>
                    <th className="p-3 text-right">Subtotal</th>
                  </tr>
                </thead>

                <tbody>
                  {transaksi.detail.map((item, index) => (
                    <tr key={index} className="border-t dark:border-t-white">
                      <td className="p-3 dark:text-white">{item.nama}</td>
                      <td className="p-3 text-center dark:text-white">
                        {item.qty}
                      </td>
                      <td className="p-3 text-right dark:text-white">
                        Rp {item.harga.toLocaleString("id-ID")}
                      </td>
                      <td className="p-3 text-right dark:text-white">
                        Rp {(item.qty * item.harga).toLocaleString("id-ID")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span className="dark:text-white">Total Belanja</span>
                <span className="dark:text-white">
                  Rp {transaksi.total.toLocaleString("id-ID")}
                </span>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium dark:text-white">
                  Uang Dibayar
                </label>

                <input
                  type="number"
                  value={dibayar}
                  onChange={(e) => setDibayar(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 dark:text-white"
                  placeholder="Masukkan nominal pembayaran"
                />
              </div>

              <div className="flex justify-between text-lg font-semibold dark:text-white">
                <span>Kembalian</span>
                <span
                  className={kembalian >= 0 ? "text-green-600" : "text-red-600"}
                >
                  Rp {Math.max(kembalian, 0).toLocaleString("id-ID")}
                </span>
              </div>

              <button
                disabled={Number(dibayar) < transaksi.total}
                className="w-full rounded-xl bg-[#010694] py-3 font-medium text-white disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Bayar Sekarang
              </button>
            </div>
          </div>
        </div>
      </>
    </AppLayoutKasir>
  );
}

export default BayarTransaksi;
