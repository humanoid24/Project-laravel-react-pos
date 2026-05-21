@extends('layouts.admin')

@section('content')
<h1>Data Karyawan</h1>

<a href="{{ route('admin.karyawan.store') }}">Tambah Karyawan</a>

<table>
    <thead>
        <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>Jabatan</th>
            <th>Aksi</th>
        </tr>
    </thead>
    <tbody>
        @foreach($karyawan as $k)
        <tr>
            <td>{{ $k->nama }}</td>
            <td>{{ $k->email }}</td>
            <td>{{ $k->jabatan }}</td>
            <td>
                <a href="{{ route('admin.karyawan.update', $k->id) }}">Edit</a>
                <form action="{{ route('admin.karyawan.destroy', $k->id) }}" method="POST" style="display:inline;">
                    @csrf
                    @method('DELETE')
                    <button type="submit">Hapus</button>
                </form>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection
