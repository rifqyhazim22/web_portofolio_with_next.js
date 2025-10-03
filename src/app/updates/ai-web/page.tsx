import type { Metadata } from "next";
import BaseLink from "@/components/BaseLink";
import NextSteps from "@/components/NextSteps";

const published = "2025-08-09";

export const metadata: Metadata = {
  title: "AI & Web: Kolaborasi Masa Depan — Updates",
};

export default function AiWebUpdatePage() {
  return (
    <div>
      <BaseLink className="pill" href="/updates">
        ← Kembali ke Updates
      </BaseLink>
      <h1 className="h1" style={{ marginTop: "10px" }}>
        AI & Web: Kolaborasi Masa Depan
      </h1>
      <p className="sub" style={{ marginBottom: "12px" }}>
        Tanggal: {published}
      </p>

      <div className="card">
        <p className="sub" style={{ margin: 0 }}>
          AI semakin matang, dan Web bergerak menuju paradigma baru. Integrasi keduanya bukan lagi wacana—kita sudah melihatnya
          di banyak sektor: e-commerce memanfaatkan AI untuk personalisasi, aplikasi terdesentralisasi (Web3) mengandalkan AI
          untuk pengambilan keputusan otonom, dan situs modern memakai AI di belakang layar untuk optimasi konten serta layanan.
        </p>
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>
        Kenapa Penting
      </h2>
      <div className="grid grid-2">
        <div className="card">
          <div className="k">AI = “Otak” Sistem Digital</div>
          <div className="sub">Menganalisis data, memahami konteks, dan memberi rekomendasi/aksi yang relevan.</div>
        </div>
        <div className="card">
          <div className="k">Web = “Dunia” Tempat AI Bekerja</div>
          <div className="sub">Antarmuka, distribusi, dan interaksi pengguna—dari browser ke API hingga automations.</div>
        </div>
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>
        Contoh yang Sudah Terjadi
      </h2>
      <div className="grid grid-2">
        <div className="card">
          <div className="k">E-commerce Cerdas</div>
          <div className="sub">Chatbot, rekomendasi produk, dan konten dinamis menyesuaikan perilaku pengguna.</div>
        </div>
        <div className="card">
          <div className="k">Governance di Aplikasi Terdesentralisasi</div>
          <div className="sub">Model AI membantu menganalisis proposal & diskusi komunitas untuk ringkasan netral.</div>
        </div>
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>
        Arah Perkembangan
      </h2>
      <div className="card">
        <p className="sub" style={{ margin: 0 }}>
          Web modern akan makin mengandalkan AI untuk memahami konteks pengguna, merangkai konten real-time, dan mengotomasi
          proses. Di sisi lain, pendekatan terdesentralisasi (Web3) memberi kerangka keterbukaan data & verifiabilitas. Keduanya
          saling melengkapi: AI memberi kecerdasan; Web memberi jangkauan & dampak.
        </p>
      </div>

      <hr />

      <NextSteps current="updates" />
    </div>
  );
}
