@extends('layouts.admin')

@section('content')
<h1>Tambah Karyawan</h1>

<form action="{{ route('admin.karyawan.store') }}" method="POST">
    @csrf
    <div>
        <label for="nama">Nama</label>
        <input type="text" name="nama" id="nama" value="{{ old('nama') }}" required>
        @error('nama') <small style="color:red">{{ $message }}</small> @enderror
    </div>

    <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" value="{{ old('email') }}" required>
        @error('email') <small style="color:red">{{ $message }}</small> @enderror
    </div>

    <div>
        <label for="jabatan">Jabatan</label>
        <input type="text" name="jabatan" id="jabatan" value="{{ old('jabatan') }}" required>
        @error('jabatan') <small style="color:red">{{ $message }}</small> @enderror
    </div>

    <button type="submit">Simpan</button>
    <a href="{{ route('admin.karyawan.index') }}">Batal</a>
</form>
@endsection
