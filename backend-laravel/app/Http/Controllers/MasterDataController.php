<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kategori;
use App\Models\Produk;

class MasterDataController extends Controller
{
    public function indexCategories()
    {
        $categories = Kategori::all();
        return response()->json([
            'success' => true,
            'data' => $categories
        ]);
    }

    public function storeCategory(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $category = Kategori::create($validated);
        return response()->json([
            'success' => true,
            'data' => $category
        ], 201);
    }

    public function updateCategory(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $category = Kategori::findOrFail($id);
        $category->update($validated);
        return response()->json([
            'success' => true,
            'data' => $category
        ]);
    }

    public function deleteCategory($id)
    {
        $category = Kategori::findOrFail($id);
        $category->delete();
        return response()->json([
            'success' => true,
            'message' => 'Kategori berhasil dihapus'
        ], 204);
    }

    public function indexProducts()
    {
        $products = Produk::all();
        return response()->json([
            'success' => true,
            'data' => $products
        ]);
    }

    public function storeProduct(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'harga' => 'required|numeric',
            'stok' => 'required|integer',
            'kategori_id' => 'required|exists:kategoris,id',
        ]);

        $product = Produk::create($validated);
        return response()->json([
            'success' => true,
            'data' => $product
        ], 201);
    }

    public function updateProduct(Request $request, $id)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'harga' => 'required|numeric',
            'stok' => 'required|integer',
            'kategori_id' => 'required|exists:kategoris,id',
        ]);

        $product = Produk::findOrFail($id);
        $product->update($validated);
        return response()->json([
            'success' => true,
            'data' => $product
        ]);
    }

    public function deleteProduct($id)
    {
        $product = Produk::findOrFail($id);
        $product->delete();
        return response()->json([
            'success' => true,
            'message' => 'Produk berhasil dihapus'
        ], 204);
    }
}
