<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Transaksi;
use Carbon\Carbon;

class TransaksiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $transaksi = [
            ['invoice' => 'INV001', 'kasir_id' => 1, 'total' => 50000, 'metode_pembayaran' => 'cash', 'status' => 'paid', 'created_at' => Carbon::now()->subDay(5)],
            ['invoice' => 'INV002', 'kasir_id' => 1, 'total' => 75000, 'metode_pembayaran' => 'digital', 'status' => 'paid', 'created_at' => Carbon::now()->subDay(4)],
            ['invoice' => 'INV003', 'kasir_id' => 1, 'total' => 120000, 'metode_pembayaran' => 'cash', 'status' => 'paid', 'created_at' => Carbon::now()->subDay(3)],
            ['invoice' => 'INV004', 'kasir_id' => 1, 'total' => 45000, 'metode_pembayaran' => 'digital', 'status' => 'paid', 'created_at' => Carbon::now()->subDay(2)],
            ['invoice' => 'INV005', 'kasir_id' => 1, 'total' => 95000, 'metode_pembayaran' => 'cash', 'status' => 'paid', 'created_at' => Carbon::now()->subDay(1)],
            ['invoice' => 'INV006', 'kasir_id' => 1, 'total' => 65000, 'metode_pembayaran' => 'digital', 'status' => 'paid', 'created_at' => Carbon::now()],
        ];

        foreach ($transaksi as $t) {
            Transaksi::create($t);
        }
    }
}
