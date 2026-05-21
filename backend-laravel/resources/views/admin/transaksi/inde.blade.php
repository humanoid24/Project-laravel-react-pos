@extends('layouts.admin')

@section('content')
<h1>Data Transaksi</h1>

<table>
    <thead>
        <tr>
            <th>Invoice</th>
            <th>Kasir</th>
            <th>Total</th>
            <th>Status</th>
            <th>Aksi</th>
        </tr>
    </thead>
    <tbody>
        @foreach($transaksi as $trx)
        <tr>
            <td>{{ $trx->invoice }}</td>
            <td>{{ $trx->kasir->name }}</td>
            <td>{{ number_format($trx->total,0,',','.') }}</td>
            <td>{{ $trx->status }}</td>
            <td>
                <a href="{{ route('admin.transaksi.detail', $trx->id) }}">Detail</a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection
