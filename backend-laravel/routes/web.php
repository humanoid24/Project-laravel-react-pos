<?php
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\KaryawanController;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\MasterDataController;
use App\Http\Controllers\TransaksiController;
use Illuminate\Support\Facades\Route;

// Route::prefix('admin')->middleware(['auth','is_admin'])->group(function () {
    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');

    // Master Data (Kategori & Produk)
    Route::resource('/kategori', MasterDataController::class);
    Route::resource('/produk', MasterDataController::class);

    // Transaksi
    Route::resource('/transaksi', TransaksiController::class);
    Route::get('/transaksi/{id}/detail', [TransaksiController::class, 'detail'])->name('admin.transaksi.detail');

    // Laporan
    Route::get('/laporan', [LaporanController::class, 'index'])->name('admin.laporan');

    // Karyawan
    Route::get('/karyawan', [KaryawanController::class, 'index'])->name('admin.karyawan.index');
    Route::post('/karyawan', [KaryawanController::class, 'store'])->name('admin.karyawan.store');
    Route::put('/karyawan/{id}', [KaryawanController::class, 'update'])->name('admin.karyawan.update');
    Route::delete('/karyawan/{id}', [KaryawanController::class, 'destroy'])->name('admin.karyawan.destroy');
// });
