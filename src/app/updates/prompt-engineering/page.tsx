import type { Metadata } from "next";
import BaseLink from "@/components/BaseLink";
import NextSteps from "@/components/NextSteps";

const published = "2025-08-09";

export const metadata: Metadata = {
  title: "Belajar Prompt Engineering dengan Pendekatan Praktis — Updates",
};

export default function PromptEngineeringUpdatePage() {
  return (
    <div>
      <BaseLink className="pill" href="/updates">
        ← Kembali ke Updates
      </BaseLink>
      <h1 className="h1" style={{ marginTop: "10px" }}>
        Belajar Prompt Engineering dengan Pendekatan Praktis
      </h1>
      <p className="sub" style={{ marginBottom: "12px" }}>
        Tanggal: {published}
      </p>

      <div className="card">
        <p className="sub" style={{ margin: 0 }}>
          Prompt engineering adalah seni menyusun instruksi yang jelas, bernuansa, dan terukur untuk AI. Kuncinya bukan sekadar
          “panjang” atau “pendek”, tetapi <em>struktur</em>: tujuan, konteks, batasan, dan gaya. Dengan struktur yang tepat, hasil AI
          menjadi konsisten dan dapat diandalkan untuk kerja nyata.
        </p>
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>
        Metode Ringkas: Iterasi 3 Langkah
      </h2>
      <div className="grid grid-2">
        <div className="card">
          <div className="k">1) Draft Awal</div>
          <div className="sub">Buat instruksi dasar untuk menguji pemahaman model terhadap tujuan kamu.</div>
        </div>
        <div className="card">
          <div className="k">2) Penajaman Detail</div>
          <div className="sub">Tambahkan batasan, parameter, dan contoh singkat agar output makin presisi.</div>
        </div>
        <div className="card">
          <div className="k">3) Uji Variasi</div>
          <div className="sub">Coba sudut pandang & format berbeda; pilih yang paling stabil untuk dijadikan template.</div>
        </div>
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>
        Tips Kualitas Output
      </h2>
      <div className="card">
        <p className="sub" style={{ margin: 0 }}>
          Gunakan bahasa yang spesifik, nyatakan batasan sejak awal, dan minta model menjelaskan alasan di balik jawabannya saat
          perlu transparansi. Simpan prompt yang berhasil sebagai <em>pattern</em> agar produksi berikutnya lebih cepat.
        </p>
      </div>

      <hr />

      <NextSteps current="updates" />
    </div>
  );
}
