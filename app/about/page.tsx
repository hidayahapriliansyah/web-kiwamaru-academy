import AboutHero from "./components/hero";

// app/about/page.jsx
export default function AboutPage() {
  return (
    <> 
      <AboutHero />
      <h1 className="text-4xl font-bold mb-6">Tentang LPK Kiwamaru Academy</h1>

      <p className="text-lg leading-relaxed mb-6">
        LPK Kiwamaru Academy didirikan pada tahun 2025 di Kota Tasikmalaya sebagai lembaga pelatihan kerja 
        yang berfokus pada persiapan tenaga kerja profesional Indonesia untuk pasar Jepang. 
        LPK ini dirintis oleh <strong>Arpan</strong>, seorang mekanik berpengalaman di Jepang, 
        bersama tim yang memiliki dedikasi tinggi dalam bidang pendidikan dan pelatihan vokasional.
      </p>

      <p className="text-lg leading-relaxed mb-8">
        Semangat dan komitmen tim dalam menyiapkan sistem pelatihan yang berkualitas telah menjadi 
        pondasi utama kami sejak awal pendirian.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Bidang Pelatihan Utama</h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Bahasa Jepang</li>
          <li>Pemagangan ke Jepang</li>
          <li>Otomotif dan Caregiver</li>
          <li>Pertanian</li>
          <li>Perikanan</li>
          <li>Manufaktur</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Target Peserta</h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Lulusan SMA/SMK</li>
          <li>Mahasiswa/Umum</li>
          <li>Pria dan wanita usia kerja yang memiliki motivasi tinggi untuk bekerja di Jepang</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Metode Pelatihan</h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>
            <strong>Offline:</strong> Pelatihan langsung di kelas dan laboratorium praktik
          </li>
          <li>
            <strong>Online:</strong> Materi pendukung melalui kelas daring dan sesi interaktif
          </li>
          <li>
            <strong>Kombinasi Teori & Praktik:</strong> Pendekatan berbasis pengalaman langsung 
            (hands-on) dan pemahaman konseptual untuk membentuk keterampilan dan sikap kerja 
            sesuai standar industri Jepang.
          </li>
        </ul>
      </section>
    </>
  );
}
