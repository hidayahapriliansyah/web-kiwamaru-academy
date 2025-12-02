export function BiayaSection() {
  return (
    <section className="w-full py-16 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-myblack">Biaya Pendaftaran</h2>

        <p className="text-lg font-semibold mb-4">Rp. 13.000.000 (Tiga Belas Juta Rupiah)</p>

        <h3 className="text-xl font-semibold mb-3">Skema Pembayaran</h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-xl overflow-hidden">
            <thead className="bg-myred text-white">
              <tr>
                <th className="p-3 border">Termin</th>
                <th className="p-3 border">Jumlah</th>
                <th className="p-3 border">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">DP (Bulan 1)</td>
                <td className="p-3 border">Rp 8.000.000</td>
                <td className="p-3 border">Saat pendaftaran / awal program</td>
              </tr>
              <tr>
                <td className="p-3 border">Bulan 2</td>
                <td className="p-3 border">Rp 3.000.000</td>
                <td className="p-3 border">Cicilan kedua</td>
              </tr>
              <tr>
                <td className="p-3 border">Bulan 3</td>
                <td className="p-3 border">Rp 2.000.000</td>
                <td className="p-3 border">Cicilan terakhir</td>
              </tr>
              <tr className="bg-green-50 font-semibold">
                <td className="p-3 border">Total</td>
                <td className="p-3 border">Rp 13.000.000</td>
                <td className="p-3 border">Lunas ✔</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-sm text-gray-600 italic">
            *Biaya pendaftaran dapat berubah tergantung batch yang sedang dibuka.
          </p>
        </div>
      </div>
    </section>
  );
}