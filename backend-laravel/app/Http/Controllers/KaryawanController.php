<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Karyawan;

class KaryawanController extends Controller
{
    // GET /api/karyawan
    public function index()
    {
        $karyawan = Karyawan::all();
        return response()->json([
            'success' => true,
            'data' => $karyawan
        ]);
    }

    // POST /api/karyawan
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama'    => 'required|string|max:255',
            'email'   => 'required|email|unique:karyawans,email',
            'jabatan' => 'required|string|max:255',
        ]);

        $karyawan = Karyawan::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Karyawan berhasil ditambahkan',
            'data' => $karyawan
        ], 201);
    }

    // PUT /api/karyawan/{id}
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nama'    => 'required|string|max:255',
            'email'   => 'required|email|unique:karyawans,email,' . $id,
            'jabatan' => 'required|string|max:255',
        ]);

        $karyawan = Karyawan::findOrFail($id);
        $karyawan->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Karyawan berhasil diupdate',
            'data' => $karyawan
        ]);
    }

    // DELETE /api/karyawan/{id}
    public function destroy($id)
    {
        $karyawan = Karyawan::findOrFail($id);
        $karyawan->delete();

        return response()->json([
            'success' => true,
            'message' => 'Karyawan berhasil dihapus'
        ], 204);
    }
}
