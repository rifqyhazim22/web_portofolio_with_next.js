import type { Metadata } from "next";
import BaseLink from "@/components/BaseLink";
import NextSteps from "@/components/NextSteps";

export const metadata: Metadata = {
  title: "AI → AGI → ASI — Playbook",
};

export default function AiIndustryPage() {
  return (
    <div>
      <BaseLink className="pill" href="/industry">
        ← Kembali
      </BaseLink>
      <h1 className="h1" style={{ marginTop: "10px" }}>
        🧠 AI → AGI → ASI
      </h1>
      <p className="sub" style={{ marginBottom: "14px" }}>
        Dari AI spesifik tugas menuju kecerdasan umum dan potensi melampaui manusia: peluang besar sekaligus tanggung jawab
        etis.
      </p>

      <h2 className="h2">Mindset Shift: Dari AI ke AGI</h2>
      <div className="card">
        <p className="sub" style={{ margin: 0 }}>
          AI hari ini menguasai tugas sempit (penerjemahan, rekomendasi). <strong>AGI</strong> menargetkan kemampuan lintas-domain:
          bisa mentransfer pengetahuan dari satu bidang ke bidang lain dan memecahkan masalah baru. <strong>ASI</strong> adalah tahap
          ketika kemampuan ini melampaui manusia—membuka lompatan produktivitas sekaligus isu tata kelola, bias, dan kontrol.
        </p>
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>Contoh Nyata</h2>
      <div className="grid grid-2">
        <div className="card">
          <div className="k">Asisten Kreatif Multimodal</div>
          <div className="sub">Dari brief 1 paragraf: hasilkan skrip video + storyboard + still images untuk moodboard.</div>
        </div>
        <div className="card">
          <div className="k">Agent Riset Ringkas</div>
          <div className="sub">Kumpulkan ringkasan 3 sumber tepercaya untuk topik tertentu, beserta kontra-argumen singkat.</div>
        </div>
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>Langkah Aksi (Minim Effort)</h2>
      <div className="grid grid-2">
        <div className="card">
          <div className="k">Eksperimen Prompt</div>
          <div className="sub">Ambil satu ide produk → uji di AI teks & gambar. Catat 3 versi prompt + perbedaan output.</div>
        </div>
        <div className="card">
          <div className="k">Guardrails Pribadi</div>
          <div className="sub">Tentukan 3 batasan etis saat memakai AI (privasi, atribusi, data sensitif) dan terapkan konsisten.</div>
        </div>
      </div>

      <hr />

      <NextSteps current="industry" />
    </div>
  );
}
