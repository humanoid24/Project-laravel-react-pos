<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Produk;

class ProdukSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $produk = [
            ['nama' => 'Nasi Goreng', 'harga' => 15000, 'stok' => 50, 'kategori_id' => 1],
            ['nama' => 'Mie Ayam', 'harga' => 12000, 'stok' => 45, 'kategori_id' => 1],
            ['nama' => 'Es Teh', 'harga' => 5000, 'stok' => 100, 'kategori_id' => 2],
            ['nama' => 'Jus Jeruk', 'harga' => 8000, 'stok' => 30, 'kategori_id' => 2],
            ['nama' => 'Keripik Singkong', 'harga' => 10000, 'stok' => 60, 'kategori_id' => 3],
            ['nama' => 'T-Shirt', 'harga' => 50000, 'stok' => 25, 'kategori_id' => 4],
            ['nama' => 'Powerbank', 'harga' => 150000, 'stok' => 15, 'kategori_id' => 5],
        ];

        foreach ($produk as $p) {
            Produk::create($p);
        }
    }
}
