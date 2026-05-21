@extends('layouts.admin')

@section('content')
<h1>Dashboard Admin</h1>

<h3>Grafik Penjualan</h3>
{{-- contoh chart pakai library JS seperti Chart.js --}}
<canvas id="salesChart"></canvas>

<h3>Produk Terlaris</h3>
<ul>
    @foreach($produkTerlaris as $produk)
        <li>{{ $produk->nama }} (Terjual: {{ $produk->detailTransaksi->count() }})</li>
    @endforeach
</ul>

<h3>Transaksi Terakhir</h3>
<table>
    <thead>
        <tr>
            <th>Invoice</th>
            <th>Total</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        @foreach($transaksiTerakhir as $trx)
            <tr>
                <td>{{ $trx->invoice }}</td>
                <td>{{ number_format($trx->total,0,',','.') }}</td>
                <td>{{ $trx->status }}</td>
            </tr>
        @endforeach
    </tbody>
</table>
@endsection
