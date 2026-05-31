// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import KaryawanPage from './pages/KaryawanPage';
import ProdukPage from './pages/ProdukPage';
import TransaksiPage from './pages/TransaksiPage';
import KategoriPage from './pages/KategoriPage';
import LaporanPage from './pages/LaporanPage';
import TambahKaryawanPage from "./pages/TambahKaryawanPage";
import Dashboard from "./Pages/Kasir/Dashboard";
import ProdukKasir from './Pages/Kasir/Produk';
import Coba from './Pages/Kasir/Coba';
import TransaksiKasir from './Pages/Kasir/Transaksi';
import BayarTransaksi from './Pages/Kasir/BayarTransaksi';


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/karyawan" element={<KaryawanPage />} />
        <Route path="/karyawan/tambah" element={<TambahKaryawanPage />} />
        <Route path="/produk" element={<ProdukPage />} />
        <Route path="/kategori" element={<KategoriPage />} />
        <Route path="/transaksi" element={<TransaksiPage />} />
        <Route path="/laporan" element={<LaporanPage />} />

        <Route path="/dashboard-kasir" element={<Dashboard />} />
        <Route path="/produk-kasir" element={<ProdukKasir />} />
        <Route path="/transaksi-kasir" element={<TransaksiKasir />} />
        <Route path="/bayar-transaksi-kasir" element={<BayarTransaksi />} />
        <Route path="/coba" element={<Coba />} />
      </Routes>
    </Router>
  );
}

export default App;
