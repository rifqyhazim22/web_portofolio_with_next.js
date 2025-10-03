import type { Metadata } from "next";
import BaseLink from "@/components/BaseLink";
import NextSteps from "@/components/NextSteps";
import { industrySummaries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Playbooks & Edukasi AI — Rifqy Hazim HR",
};

export default function IndustryPage() {
  return (
    <div>
      <h1 className="h1">Playbooks & Edukasi AI</h1>
      <p className="sub">Pilih tema untuk membaca ringkasan, dampak potensial, dan cara mulai secara praktis.</p>

      <div className="grid grid-2" style={{ marginTop: "12px" }}>
        {industrySummaries.map((industry) => (
          <BaseLink key={industry.slug} className="card" href={`/industry/${industry.slug}`}>
            <div className="k">{industry.title}</div>
            <div className="sub">{industry.summary}</div>
          </BaseLink>
        ))}
      </div>

      <hr />

      <section id="ai-basics">
        <h2 className="h2">Learning Hub</h2>
        <p className="sub">Pengantar singkat yang menyatu—ringkas, edukatif, dan siap dipakai sebagai pijakan awal.</p>

        <div className="card" style={{ marginTop: "12px" }}>
          <div className="k">AI Basics</div>
          <div className="sub" style={{ marginTop: "6px" }}>
            <strong>Gambaran Umum.</strong> AI Basics adalah pondasi untuk memahami bagaimana mesin belajar dan mengambil
            keputusan. Fokusnya pada pembedaan AI sempit (narrow AI) yang spesifik tugas dan AI umum (AGI) yang mampu
            memahami berbagai konteks. Penjelasan dibuat sederhana agar mudah diikuti tanpa latar belakang teknis.
          </div>
          <div className="sub" style={{ marginTop: "8px" }}>
            <strong>Penerapan Nyata.</strong> Rekomendasi konten, asisten suara, hingga filter spam email—contoh sehari-hari
            bagaimana AI bekerja di belakang layar.
          </div>
          <div className="sub" style={{ marginTop: "8px" }}>
            <strong>Langkah Awal.</strong> Coba chatbot publik dan baca artikel pengantar istilah seperti model, data, dan
            algoritma—cukup 15–20 menit untuk memperoleh peta konsep awal.
          </div>
        </div>
      </section>

      <section id="prompt-patterns">
        <div className="card" style={{ marginTop: "12px" }}>
          <div className="k">Prompt Patterns</div>
          <div className="sub" style={{ marginTop: "6px" }}>
            <strong>Gambaran Umum.</strong> Prompt Patterns mengajarkan cara menyusun instruksi efektif untuk AI. Kualitas
            output sangat dipengaruhi kejelasan, konteks, dan detail prompt.
          </div>
          <div className="sub" style={{ marginTop: "8px" }}>
            <strong>Penerapan Nyata.</strong> Desainer memakai pola deskriptif untuk konsistensi visual; penulis memakai pola
            langkah-demi-langkah agar struktur artikel runtut dan lengkap.
          </div>
          <div className="sub" style={{ marginTop: "8px" }}>
            <strong>Langkah Awal.</strong> Ambil prompt singkat → tingkatkan detail (tujuan, gaya, batasan) → bandingkan hasil.
            Simpan versi yang paling stabil sebagai template.
          </div>
        </div>
      </section>

      <section id="tools-workflow">
        <div className="card" style={{ marginTop: "12px" }}>
          <div className="k">Tools & Workflow</div>
          <div className="sub" style={{ marginTop: "6px" }}>
            <strong>Gambaran Umum.</strong> Mengenalkan ekosistem alat: generator teks/gambar, editor video berbasis AI, dan
            integrasi API. Fokusnya pada memilih tool sesuai tujuan.
          </div>
          <div className="sub" style={{ marginTop: "8px" }}>
            <strong>Penerapan Nyata.</strong> Dari ide → visual mock → skrip → video: setiap tahap memanfaatkan tool berbeda
            namun saling terhubung agar iterasi cepat dan terukur.
          </div>
          <div className="sub" style={{ marginTop: "8px" }}>
            <strong>Langkah Awal.</strong> Pilih satu tool yang relevan, buat proyek mini (1 paragraf ide → 1 output jadi), lalu
            evaluasi apa yang perlu diperbaiki di iterasi berikutnya.
          </div>
        </div>
      </section>

      <hr />

      <NextSteps current="industry" />
    </div>
  );
}
