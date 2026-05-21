import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";



function KaryawanPage() {
  const [karyawan, setKaryawan] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/karyawan").then((res) => setKaryawan(res.data.data));
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Data Karyawan</h2>
        <button
          onClick={() => navigate("/karyawan/tambah")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Tambah Karyawan
        </button>
      </div>

      {/* Tabel Karyawan */}
      <div className="bg-white shadow rounded-lg p-4">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Nama</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Jabatan</th>
            </tr>
          </thead>
          <tbody>
            {karyawan.map((k) => (
              <tr key={k.id} className="border-t">
                <td className="px-4 py-2">{k.nama}</td>
                <td className="px-4 py-2">{k.email}</td>
                <td className="px-4 py-2">{k.jabatan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default KaryawanPage;
