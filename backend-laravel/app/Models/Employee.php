    public function transactions()
    {
    return $this->hasMany(Transaction::class, 'cashier_id');
    }