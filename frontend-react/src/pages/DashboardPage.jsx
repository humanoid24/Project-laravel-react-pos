import { useEffect, useState } from "react";
import api from "../services/api";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

function DashboardPage() {
  const [grafik, setGrafik] = useState([]);
  const [transaksiTerakhir, setTransaksiTerakhir] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get("/dashboard");
        setGrafik(res.data.grafik || []);
        setTransaksiTerakhir(res.data.transaksiTerakhir || []);
      } catch (err) {
        console.error("Error fetching dashboard:", err);
        setError("Gagal memuat data dashboard");
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  // Data untuk Chart.js
  const chartData = {
    labels: grafik.map((g) => g.tanggal),
    datasets: [
      {
        label: "Total Penjualan",
        data: grafik.map((g) => g.total),
        borderColor: "#2563eb", // biru Tailwind
        backgroundColor: "#93c5fd",
        fill: true,
      },
    ],
  };

  return (
    <div className="p-6 space-y-8">
      {/* Judul Dashboard */}
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="text-center py-8">
          <p className="text-gray-600">Memuat data...</p>
        </div>
      )}

      {/* Grafik Penjualan */}
      {!loading && (
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Grafik Penjualan</h2>
          {grafik.length > 0 ? (
            <div style={{ position: "relative", height: "300px" }}>
              <Line
                data={chartData}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          ) : (
            <p className="text-gray-500">Belum ada data penjualan</p>
          )}
        </div>
      )}

      {/* Transaksi Terakhir */}
      {!loading && (
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Transaksi Terakhir</h2>
          {transaksiTerakhir.length > 0 ? (
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Invoice</th>
                  <th className="px-4 py-2 text-left">Total</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {transaksiTerakhir.map((t) => (
                  <tr key={t.id} className="border-t">
                    <td className="px-4 py-2">{t.invoice}</td>
                    <td className="px-4 py-2">
                      Rp {Number(t.total).toLocaleString("id-ID")}
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded text-sm ${
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
          ) : (
            <p className="text-gray-500">Belum ada transaksi</p>
          )}
        </div>
      )}
    </div>
  );
}

export default DashboardPage;
