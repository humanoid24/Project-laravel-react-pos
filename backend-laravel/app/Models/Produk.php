<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Produk extends Model {
    protected $fillable = ['nama', 'harga', 'stok', 'kategori_id', 'name', 'price', 'category_id'];

    public function kategori() {
        return $this->belongsTo(Kategori::class);
    }

    public function detailTransaksi() {
        return $this->hasMany(DetailTransaksi::class);
    }
}
