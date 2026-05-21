public function detailTransaksis()
{
return $this->hasMany(DetailTransaksi::class);
}

public function cashier()
{
return $this->belongsTo(Employee::class, 'cashier_id');
}