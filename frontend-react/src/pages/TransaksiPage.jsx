import { useEffect, useState } from "react";
import api from "../services/api";

function TransaksiPage() {
  const [transaksi, setTransaksi] = useState([]);

  useEffect(() => {
    const fetchTransaksi = async () => {
      try {
        const res = await api.get("/transaksi");
        setTransaksi(res.data.data || []);
      } catch (error) {
        console.error("Error fetching transaksi:", error);
      }
    };
    fetchTransaksi();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Data Transaksi</h2>
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Invoice</th>
            <th className="px-4 py-2 text-left">Kasir</th>
            <th className="px-4 py-2 text-left">Total</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {transaksi.map((t) => (
            <tr key={t.id} className="border-t">
              <td className="px-4 py-2">{t.invoice}</td>
              <td className="px-4 py-2">{t.kasir?.nama}</td>
              <td className="px-4 py-2">
                Rp {Number(t.total).toLocaleString("id-ID")}
              </td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-sm font-medium ${
                    t.status === "paid"
                      ? "bg-green-100 text-green-700"
                      : t.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {t.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransaksiPage;
