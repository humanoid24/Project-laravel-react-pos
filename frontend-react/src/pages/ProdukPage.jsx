import { useEffect, useState } from "react";
import api from "../services/api";

function ProdukPage() {
  const [produk, setProduk] = useState([]);
  const [form, setForm] = useState({
    nama: "",
    harga: "",
    stok: "",
    kategori_id: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProduk();
  }, []);

  const fetchProduk = async () => {
    try {
      const res = await api.get("/produk");
      setProduk(res.data.data || []);
    } catch (error) {
      console.error("Error fetching produk:", error);
      alert("Gagal memuat produk");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await api.put(`/produk/${editingId}`, form);
        setIsEditing(false);
        setEditingId(null);
      } else {
        await api.post("/produk", form);
      }
      setForm({ nama: "", harga: "", stok: "", kategori_id: "" });
      fetchProduk();
    } catch (error) {
      console.error("Error:", error);
      alert("Gagal menyimpan produk");
    }
  };

  const handleEdit = (p) => {
    setForm({
      nama: p.nama,
      harga: p.harga,
      stok: p.stok,
      kategori_id: p.kategori_id,
    });
    setIsEditing(true);
    setEditingId(p.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      try {
        await api.delete(`/produk/${id}`);
        fetchProduk();
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Data Produk</h2>

      {/* Form Tambah/Edit */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">
          {isEditing ? "Edit Produk" : "Tambah Produk"}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Nama Produk
              </label>
              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                placeholder="Masukkan nama produk"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Harga</label>
              <input
                type="number"
                name="harga"
                value={form.harga}
                onChange={handleChange}
                placeholder="Masukkan harga"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Stok</label>
              <input
                type="number"
                name="stok"
                value={form.stok}
                onChange={handleChange}
                placeholder="Masukkan stok"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Kategori ID
              </label>
              <input
                type="number"
                name="kategori_id"
                value={form.kategori_id}
                onChange={handleChange}
                placeholder="Masukkan kategori ID"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {isEditing ? "Update" : "Tambah"}
            </button>
            {isEditing && (
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setEditingId(null);
                  setForm({ nama: "", harga: "", stok: "", kategori_id: "" });
                }}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Batal
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Tabel Produk */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">No</th>
                <th className="px-4 py-2 text-left">Nama</th>
                <th className="px-4 py-2 text-left">Harga</th>
                <th className="px-4 py-2 text-left">Stok</th>
                <th className="px-4 py-2 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {produk.length > 0 ? (
                produk.map((p, index) => (
                  <tr key={p.id} className="border-t">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{p.nama}</td>
                    <td className="px-4 py-2 font-semibold">
                      Rp {Number(p.harga).toLocaleString("id-ID")}
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded text-sm ${
                          p.stok > 0
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {p.stok}
                      </span>
                    </td>
                    <td className="px-4 py-2 space-x-2">
                      <button
                        onClick={() => handleEdit(p)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-4 py-2 text-center text-gray-500"
                  >
                    Tidak ada produk
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProdukPage;
