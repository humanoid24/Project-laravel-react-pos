<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Admin Panel</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <nav>
        <ul>
            <li><a href="{{ route('admin.dashboard') }}">Dashboard</a></li>
            <li><a href="{{ route('kategori.index') }}">Kategori</a></li>
            <li><a href="{{ route('produk.index') }}">Produk</a></li>
            <li><a href="{{ route('transaksi.index') }}">Transaksi</a></li>
            <li><a href="{{ route('admin.laporan') }}">Laporan</a></li>
            <li><a href="{{ route('admin.karyawan.index') }}">Karyawan</a></li>
        </ul>
    </nav>

    <div class="container">
        @yield('content')
    </div>
</body>
</html>
