<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model {
    protected $fillable = ['invoice','kasir_id','total','metode_pembayaran','status'];

    public function kasir() {
        return $this->belongsTo(User::class, 'kasir_id');
    }

    public function detail() {
        return $this->hasMany(DetailTransaksi::class);
    }
}

