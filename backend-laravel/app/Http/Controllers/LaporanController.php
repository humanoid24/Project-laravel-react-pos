<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transaksi;

class LaporanController extends Controller
{
    public function index()
    {
        $laporan = Transaksi::with(['kasir'])->get();
        return response()->json($laporan);
    }

    public function filterReports(Request $request)
    {
        $validated = $request->validate([
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
        ]);

        $reports = Transaksi::with(['kasir'])
            ->whereBetween('created_at', [$validated['start_date'], $validated['end_date']])
            ->get();

        return response()->json($reports);
    }
}

