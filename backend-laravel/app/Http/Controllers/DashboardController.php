<?php

namespace App\Http\Controllers;

use App\Models\Transaksi;
use App\Models\Produk;

class DashboardController extends Controller
{
    public function index()
    {
        // Grafik penjualan per tanggal
        $grafik = Transaksi::selectRaw('DATE(created_at) as tanggal, SUM(total) as total')
                           ->groupBy('tanggal')
                           ->orderBy('tanggal', 'asc')
                           ->get();

        // Produk terlaris (pakai relasi detail transaksi)
        $produkTerlaris = Produk::withCount('detailTransaksi')
                                ->orderBy('detail_transaksi_count', 'desc')
                                ->take(5)
                                ->get();

        // Transaksi terakhir
        $transaksiTerakhir = Transaksi::latest()->take(10)->get();

        // Return JSON untuk dikonsumsi React
        return response()->json([
            'grafik' => $grafik,
            'produkTerlaris' => $produkTerlaris,
            'transaksiTerakhir' => $transaksiTerakhir,
        ]);
    }
}
