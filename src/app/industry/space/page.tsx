import type { Metadata } from "next";
import BaseLink from "@/components/BaseLink";
import NextSteps from "@/components/NextSteps";

export const metadata: Metadata = {
  title: "Space Exploration — Playbook",
};

export default function SpaceIndustryPage() {
  return (
    <div>
      <BaseLink className="pill" href="/industry">
        ← Kembali
      </BaseLink>
      <h1 className="h1" style={{ marginTop: "10px" }}>
        🚀 Space Exploration
      </h1>
      <p className="sub" style={{ marginBottom: "14px" }}>
        Dari misi pemerintah ke ekonomi komersial: satelit, Earth Observation, eksplorasi planet, dan pasar layanan data orbit.
      </p>

      <h2 className="h2">Mindset Shift: Data Antariksa untuk Bumi</h2>
      <div className="card">
        <p className="sub" style={{ margin: 0 }}>
          Eksplorasi ruang angkasa menghasilkan <strong>data observasi bumi</strong> yang kritikal untuk pertanian, logistik, mitigasi
          bencana, hingga tata kelola lingkungan—bukan hanya “pergi ke Mars”.
        </p>
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>Contoh Nyata</h2>
      <div className="grid grid-2">
        <div className="card">
          <div className="k">Pemetaan Kelembaban Tanah</div>
          <div className="sub">Citra satelit membantu petani mengidentifikasi area kekeringan dan menjadwalkan irigasi.</div>
        </div>
        <div className="card">
          <div className="k">Monitoring Kebakaran Hutan</div>
          <div className="sub">Heat signatures dan asap terdeteksi dini untuk respons cepat dan pengurangan kerugian.</div>
        </div>
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>Langkah Aksi (Minim Effort)</h2>
      <div className="grid grid-2">
        <div className="card">
          <div className="k">Jelajah Peta Satelit Publik</div>
          <div className="sub">Coba platform data satelit terbuka untuk melihat cuaca/awan real-time & bandingkan wilayah berbeda.</div>
        </div>
        <div className="card">
          <div className="k">Idekan 1 Use-Case Lokal</div>
          <div className="sub">Tulis 1 paragraf bagaimana data satelit bisa bantu isu di kotamu (banjir, kemacetan, pertanian).</div>
        </div>
      </div>

      <hr />

      <NextSteps current="industry" />
    </div>
  );
}
