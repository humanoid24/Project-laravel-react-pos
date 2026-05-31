<?php

namespace App\Http\Controllers;

use App\Models\Transaksi;
use Illuminate\Http\Request;

class TransaksiController extends Controller
{
    public function index()
    {
        $transaksi = Transaksi::with(['kasir'])->get();
        return response()->json([
            'success' => true,
            'data' => $transaksi
        ]);
    }

    public function show($id)
    {
        $transaksi = Transaksi::with(['kasir'])->findOrFail($id);
        return response()->json([
            'success' => true,
            'data' => $transaksi
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'invoice' => 'required|string',
            'kasir_id' => 'required|integer',
            'total' => 'required|numeric',
            'status' => 'required|string',
        ]);

        $transaksi = Transaksi::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Transaksi berhasil ditambahkan',
            'data' => $transaksi
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $transaksi = Transaksi::findOrFail($id);
        $validated = $request->validate([
            'status' => 'required|string',
        ]);

        $transaksi->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Transaksi berhasil diupdate',
            'data' => $transaksi
        ]);
    }

    public function destroy($id)
    {
        $transaksi = Transaksi::findOrFail($id);
        $transaksi->delete();

        return response()->json([
            'success' => true,
            'message' => 'Transaksi berhasil dihapus'
        ]);
    }

    public function listTransactions()
    {
        $transactions = Transaksi::all();
        return response()->json($transactions);
    }

    public function transactionDetails($id)
    {
        $transaction = Transaksi::with(['cashier', 'invoice', 'paymentMethod'])->findOrFail($id);
        return response()->json($transaction);
    }
}
