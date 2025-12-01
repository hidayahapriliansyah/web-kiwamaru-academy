import Image from "next/image";

export default function ProfilPendiri() {
  return (
    <section className="w-full py-20 bg-white" id="founder">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl text-center md:text-4xl font-bold text-myblack mb-8">
          Profil Pendiri – Muhammad Arpan Maulana
        </h2>

        {/* MAIN IMAGE */}
        <div className="w-full mb-10">
          <Image
            src="/founder-main-crop.png"
            alt="Pendiri LPK Kiwamaru Academy"
            width={1200}
            height={600}
            className="rounded-2xl w-full object-cover shadow"
          />
        </div>

        {/* PARAGRAPH 1 */}
        <p className="text-lg leading-relaxed text-gray-700 mb-10">
          Muhammad Arpan Maulana merupakan seorang profesional di bidang otomotif 
          yang telah bekerja selama 5 tahun di Mitsubishi Fuso Jepang. Dalam kurun waktu 
          empat bulan sejak bergabung, ia memperoleh Sertifikasi Mekanik Level 9, sebuah 
          pencapaian yang umumnya membutuhkan waktu lebih lama. Ia juga menjadi salah satu 
          orang Indonesia pertama yang berhasil lulus Tokutei Ginou Level 2 (TG-2) di bidang 
          Jidousha Seibi (perawatan kendaraan).
        </p>

        {/* 2-COLUMN SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT SMALL IMAGE */}
          <div>
            <Image
              src="/founder-dinner.png" // ganti sesuai file yang kamu punya
              alt="Founder in Japan"
              width={600}
              height={400}
              className="rounded-2xl w-full object-cover shadow"
            />
          </div>

          {/* RIGHT PARAGRAPH */}
          <div>
            <p className="text-lg leading-relaxed text-gray-700">
              Kemampuan bahasa Jepangnya berada pada level N2, dan ia mampu berkomunikasi 
              secara efektif dalam situasi kerja, baik secara lisan maupun tulisan. 
              Di lingkungan kerjanya, Arpan dipercaya sebagai leader dan bertanggung jawab 
              membimbing karyawan Jepang dalam bidang teknis, menunjukkan kapabilitasnya yang 
              diakui di level perusahaan.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
