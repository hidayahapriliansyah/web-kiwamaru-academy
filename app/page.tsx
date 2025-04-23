import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-screen p-8">
      <div>
        <Image
        src="/logo-kiwamaru-academy.webp"
        alt="Logo Kiwamaru Academy"
        width={500}
        height={100}
        />

        <p className="mt-4">Kami Sedang Mempersiapkan Sesuatu yang Spesial.</p>
        <strong>Kiwamaru Academy Segera Hadir!</strong>
      </div>
    </main>
  );
}
