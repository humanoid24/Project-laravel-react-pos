import AppLayoutKasir from "../../LayoutKasir/AppLayoutKasir";
import { Search, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../../services/api";

function ProdukKasir() {
  const [produk, setProduk] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduk, setSelectedProduk] = useState(null);
  const [qtyInput, setQtyInput] = useState(1);

  const ambilProduk = async () => {
    try {
      const response = await api.get(`/produk`);      
      setProduk(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect (() => {
    ambilProduk();
  }, [])

  const bukaModal = (item) => {
    setSelectedProduk(item);
    setQtyInput(1);
    setModalOpen(true);
  };


  const tambahKeCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);

      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p,
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };

  const tambahQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  const kurangQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0),
    );
  };

  const hapusCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  
  const totalItem = cart.reduce((total, item) => total + item.qty, 0);

  const totalHarga = cart.reduce(
    (total, item) => total + Number(item.harga) * item.qty,
    0,
  );

  const simpanKeCart = () => {
    if (!selectedProduk || qtyInput < 1) return;

    setCart((prev) => {
      const existing = prev.find((p) => p.id === selectedProduk.id);

      if (existing) {
        return prev.map((p) =>
          p.id === selectedProduk.id
            ? {
                ...p,
                qty: p.qty + Number(qtyInput),
              }
            : p,
        );
      }

      return [
        ...prev,
        {
          ...selectedProduk,
          qty: Number(qtyInput),
        },
      ];
    });

    setModalOpen(false);
    setSelectedProduk(null);
    setQtyInput(1);
  };
  return (
    <AppLayoutKasir>
      <div className="grid gap-6 xl:grid-cols-[1fr_350px]">
        {/* Produk */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Produk
            </h1>

            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Cari produk..."
                className="w-64 rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-4 text-sm outline-none dark:border-slate-700 dark:bg-[#172036] dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {produk.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-[#172036]"
              >
                <img
                  src="https://static.wixstatic.com/media/02378f_d8524b4f292a4f7a975837ab12d4236d~mv2.webp"
                  alt={item.nama}
                  className="h-40 w-full object-cover"
                />

                <div className="p-4">
                  <span className="inline-flex px-2.5 py-1 items-center rounded-md bg-blue-100  text-xs font-medium text-blue-700">
                    {item.kategori?.nama}
                  </span>

                  <h3 className="font-semibold text-slate-900 dark:text-white mt-2">
                    {item.nama}
                  </h3>

                  <p className="mt-1 text-lg font-bold text-[#010694] dark:text-white">
                    Rp {Number(item.harga).toLocaleString("id-ID")}
                  </p>

                  <button
                    onClick={() => bukaModal(item)}
                    className="mt-4 w-full rounded-lg bg-[#010694] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Tambah
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-[#172036]">
              <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                Tambah Produk
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm text-slate-500">
                    Produk
                  </label>

                  <input
                    type="text"
                    value={selectedProduk?.nama || ""}
                    readOnly
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm text-slate-500">
                    Qty
                  </label>

                  <input
                    type="number"
                    min="1"
                    value={qtyInput}
                    onChange={(e) => setQtyInput(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="rounded-lg border border-slate-200 px-4 py-2 dark:border-slate-700"
                  >
                    Batal
                  </button>

                  <button
                    onClick={simpanKeCart}
                    className="rounded-lg bg-[#010694] px-4 py-2 text-white"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Transaksi */}
        <div className="sticky top-6 h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-[#172036]">
          <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Transaksi
          </h2>

          <div className="max-h-100 space-y-3 overflow-y-auto">
            {cart.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 py-10 text-center dark:border-slate-600">
                <p className="text-sm text-slate-500">
                  Belum ada produk dipilih
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white">
                        {item.nama}
                      </h4>

                      <p className="text-sm text-slate-500 dark:text-white">
                        Rp {Number(item.harga).toLocaleString("id-ID")}
                      </p>
                    </div>

                    <button
                      onClick={() => hapusCart(item.id)}
                      className="text-xs font-medium text-red-500 hover:text-red-600"
                    >
                      <Trash />
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => kurangQty(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 dark:text-white"
                      >
                        -
                      </button>

                      <span className="min-w-7.5 text-center font-medium dark:text-white">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => tambahQty(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 dark:text-white"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-semibold text-[#010694] dark:text-white">
                      Rp{" "}
                      {(Number(item.harga) * item.qty).toLocaleString("id-ID")}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-white">
                Jumlah Item
              </span>
              <span className="font-semibold text-slate-900 dark:text-white">
                {totalItem}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-white">Total</span>
              <span className="font-semibold text-slate-900 dark:text-white">
                Rp {totalHarga.toLocaleString("id-ID")}
              </span>
            </div>
          </div>

          <button
            disabled
            className="mt-6 w-full rounded-lg bg-slate-300 py-3 font-medium text-white"
          >
            Bayar
          </button>
        </div>
      </div>
    </AppLayoutKasir>
  );
}

export default ProdukKasir;
