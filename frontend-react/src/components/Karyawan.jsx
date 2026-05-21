import { useEffect, useState } from "react";
import api from "../services/api";

function Karyawan() {
  const [karyawan, setKaryawan] = useState([]);
  const [form, setForm] = useState({ nama: '', email: '', jabatan: '' });

  useEffect(() => {
    api.get('/karyawan').then(res => setKaryawan(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/karyawan', form);
    const res = await api.get('/karyawan');
    setKaryawan(res.data);
    setForm({ nama: '', email: '', jabatan: '' });
  };

  return (
    <div>
      <h2>Data Karyawan</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nama" value={form.nama}
               onChange={e => setForm({ ...form, nama: e.target.value })} />
        <input type="email" placeholder="Email" value={form.email}
               onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="text" placeholder="Jabatan" value={form.jabatan}
               onChange={e => setForm({ ...form, jabatan: e.target.value })} />
        <button type="submit">Tambah</button>
      </form>

      <table>
        <thead>
          <tr><th>Nama</th><th>Email</th><th>Jabatan</th></tr>
        </thead>
        <tbody>
          {karyawan.map(k => (
            <tr key={k.id}>
              <td>{k.nama}</td>
              <td>{k.email}</td>
              <td>{k.jabatan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Karyawan;
