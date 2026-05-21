// import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-4">
      <Link to="/">Dashboard</Link>
      <Link to="/kategori">Kategori</Link>
      <Link to="/produk">Produk</Link>
      <Link to="/transaksi">Transaksi</Link>
      <Link to="/laporan">Laporan</Link>
      <Link to="/karyawan">Karyawan</Link>
    </nav>
  );
}

export default Navbar;
