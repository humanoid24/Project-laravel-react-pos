<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\KaryawanController;
use App\Http\Controllers\MasterDataController;
use App\Http\Controllers\TransaksiController;
use App\Http\Controllers\LaporanController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::get('/dashboard', [DashboardController::class, 'index']);

Route::apiResource('/karyawan', KaryawanController::class);

// Kategori dan Produk
Route::get('/kategori', [MasterDataController::class, 'indexCategories']);
Route::post('/kategori', [MasterDataController::class, 'storeCategory']);
Route::put('/kategori/{id}', [MasterDataController::class, 'updateCategory']);
Route::delete('/kategori/{id}', [MasterDataController::class, 'deleteCategory']);

Route::get('/produk', [MasterDataController::class, 'indexProducts']);
Route::post('/produk', [MasterDataController::class, 'storeProduct']);
Route::put('/produk/{id}', [MasterDataController::class, 'updateProduct']);
Route::delete('/produk/{id}', [MasterDataController::class, 'deleteProduct']);

// Transaksi
Route::get('/transaksi', [TransaksiController::class, 'index']);
Route::get('/transaksi/{id}', [TransaksiController::class, 'show']);
Route::post('/transaksi', [TransaksiController::class, 'store']);
Route::put('/transaksi/{id}', [TransaksiController::class, 'update']);
Route::delete('/transaksi/{id}', [TransaksiController::class, 'destroy']);

// Laporan
Route::get('/laporan', [LaporanController::class, 'index']);
Route::post('/laporan/filter', [LaporanController::class, 'filterReports']);
