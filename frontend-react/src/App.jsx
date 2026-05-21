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



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/karyawan" element={<KaryawanPage />} />
        <Route path="/karyawan/tambah" element={<TambahKaryawanPage />} />
        <Route path="/produk" element={<ProdukPage />} />
        <Route path="/kategori" element={<KategoriPage />} />
        <Route path="/transaksi" element={<TransaksiPage />} />
        <Route path="/laporan" element={<LaporanPage />} />
      </Routes>
    </Router>
  );
}

export default App;
