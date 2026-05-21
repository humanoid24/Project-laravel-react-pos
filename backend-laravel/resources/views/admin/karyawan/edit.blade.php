@extends('layouts.admin')

@section('content')
<h1>Edit Karyawan</h1>

<form action="{{ route('admin.karyawan.update', $karyawan->id) }}" method="POST">
    @csrf
    @method('PUT')

    <div>
        <label for="nama">Nama</label>
        <input type="text" name="nama" id="nama" value="{{ old('nama', $karyawan->nama) }}" required>
        @error('nama') <small style="color:red">{{ $message }}</small> @enderror
    </div>

    <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" value="{{ old('email', $karyawan->email) }}" required>
        @error('email') <small style="color:red">{{ $message }}</small> @enderror
    </div>

    <div>
        <label for="jabatan">Jabatan</label>
        <input type="text" name="jabatan" id="jabatan" value="{{ old('jabatan', $karyawan->jabatan) }}" required>
        @error('jabatan') <small style="color:red">{{ $message }}</small> @enderror
    </div>

    <button type="submit">Update</button>
    <a href="{{ route('admin.karyawan.index') }}">Batal</a>
</form>
@endsection
