import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function TambahKaryawanPage() {
  const [form, setForm] = useState({ nama: "", email: "", jabatan: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/karyawan", form, {
        headers: { "Content-Type": "application/json" },
      });
      navigate("/karyawan"); // kembali ke daftar karyawan
    } catch (err) {
      console.error("Error:", err.response?.data);
      alert("Tambah karyawan gagal. Cek console untuk detail.");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Tambah Karyawan</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-lg p-4 space-y-4"
      >
        <input
          type="text"
          name="nama"
          value={form.nama}
          onChange={handleChange}
          placeholder="Nama"
          className="border p-2 rounded w-full"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 rounded w-full"
        />
        <select
          name="jabatan"
          value={form.jabatan}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="">-- Pilih Jabatan --</option>
          <option value="Kasir">Kasir</option>
          <option value="Kepala Toko">Kepala Toko</option>
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}

export default TambahKaryawanPage;
