import { useEffect, useState } from "react";
import api from "../services/api";

function LaporanPage() {
  const [laporan, setLaporan] = useState([]);
  const [filter, setFilter] = useState({
    startDate: "",
    endDate: "",
  });
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetchLaporanAll();
  }, []);

  const fetchLaporanAll = async () => {
    try {
      const res = await api.get("/laporan");
      setLaporan(res.data || []);
      setIsFiltered(false);
    } catch (error) {
      console.error("Error fetching laporan:", error);
      alert("Gagal memuat laporan");
    }
  };

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleFilter = async (e) => {
    e.preventDefault();
    if (!filter.startDate || !filter.endDate) {
      alert("Masukkan tanggal mulai dan tanggal akhir");
      return;
    }

    try {
      const res = await api.post("/laporan/filter", {
        start_date: filter.startDate,
        end_date: filter.endDate,
      });
      setLaporan(res.data || []);
      setIsFiltered(true);
    } catch (error) {
      console.error("Error filtering laporan:", error);
      alert("Gagal memfilter laporan");
    }
  };

  const handleReset = () => {
    setFilter({ startDate: "", endDate: "" });
    fetchLaporanAll();
  };

  const calculateTotalRevenue = () => {
    return laporan.reduce((sum, item) => sum + parseFloat(item.total || 0), 0);
  };

  const calculateTotalTransactions = () => {
    return laporan.length;
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Laporan Penjualan</h2>

      {/* Filter Section */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">Filter Laporan</h3>
        <form onSubmit={handleFilter} className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Tanggal Mulai
              </label>
              <input
                type="date"
                name="startDate"
                value={filter.startDate}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Tanggal Akhir
              </label>
              <input
                type="date"
                name="endDate"
                value={filter.endDate}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-end gap-2">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex-1"
              >
                Filter
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 shadow rounded-lg p-4 border-l-4 border-blue-500">
          <h3 className="text-gray-600 text-sm font-medium mb-1">
            Total Transaksi
          </h3>
          <p className="text-3xl font-bold text-blue-600">
            {calculateTotalTransactions()}
          </p>
          {isFiltered && (
            <p className="text-xs text-gray-500 mt-1">Periode terpilih</p>
          )}
        </div>
        <div className="bg-green-50 shadow rounded-lg p-4 border-l-4 border-green-500">
          <h3 className="text-gray-600 text-sm font-medium mb-1">
            Total Pendapatan
          </h3>
          <p className="text-2xl font-bold text-green-600">
            Rp {calculateTotalRevenue().toLocaleString("id-ID")}
          </p>
          {isFiltered && (
            <p className="text-xs text-gray-500 mt-1">Periode terpilih</p>
          )}
        </div>
      </div>

      {/* Laporan Table */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">Detail Transaksi</h3>
        {laporan.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">No</th>
                  <th className="px-4 py-2 text-left">Invoice</th>
                  <th className="px-4 py-2 text-left">Kasir</th>
                  <th className="px-4 py-2 text-left">Total</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {laporan.map((item, index) => (
                  <tr key={item.id} className="border-t">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2 font-mono">{item.invoice}</td>
                    <td className="px-4 py-2">{item.kasir?.nama || "-"}</td>
                    <td className="px-4 py-2 font-semibold text-green-600">
                      Rp {Number(item.total).toLocaleString("id-ID")}
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded text-sm font-medium ${
                          item.status === "paid"
                            ? "bg-green-100 text-green-700"
                            : item.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      {new Date(item.created_at).toLocaleDateString("id-ID")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500 py-4">
            Tidak ada laporan untuk periode yang dipilih
          </p>
        )}
      </div>
    </div>
  );
}

export default LaporanPage;
