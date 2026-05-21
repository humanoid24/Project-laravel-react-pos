import { useEffect, useState } from "react";
import api from "../services/api";

function KategoriPage() {
  const [kategori, setKategori] = useState([]);
  const [form, setForm] = useState({ nama: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchKategori();
  }, []);

  const fetchKategori = async () => {
    try {
      const res = await api.get("/kategori");
      setKategori(res.data.data || []);
    } catch (error) {
      console.error("Error fetching kategori:", error);
      alert("Gagal memuat kategori");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await api.put(`/kategori/${editingId}`, { name: form.nama });
        setIsEditing(false);
        setEditingId(null);
      } else {
        await api.post("/kategori", { name: form.nama });
      }
      setForm({ nama: "" });
      fetchKategori();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = (k) => {
    setForm({ nama: k.name || k.nama });
    setIsEditing(true);
    setEditingId(k.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus kategori ini?")) {
      try {
        await api.delete(`/kategori/${id}`);
        fetchKategori();
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Data Kategori</h2>

      {/* Form Tambah/Edit */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">
          {isEditing ? "Edit Kategori" : "Tambah Kategori"}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Nama Kategori
            </label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Masukkan nama kategori"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
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
                  setForm({ nama: "" });
                }}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Batal
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Tabel Kategori */}
      <div className="bg-white shadow rounded-lg p-4">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">No</th>
              <th className="px-4 py-2 text-left">Nama Kategori</th>
              <th className="px-4 py-2 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {kategori.length > 0 ? (
              kategori.map((k, index) => (
                <tr key={k.id} className="border-t">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{k.name || k.nama}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => handleEdit(k)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(k.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-4 py-2 text-center text-gray-500">
                  Tidak ada kategori
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default KategoriPage;
