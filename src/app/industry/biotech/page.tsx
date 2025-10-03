import type { Metadata } from "next";
import BaseLink from "@/components/BaseLink";
import NextSteps from "@/components/NextSteps";

export const metadata: Metadata = {
  title: "Biotechnology — Playbook",
};

export default function BiotechIndustryPage() {
  return (
    <div>
      <BaseLink className="pill" href="/industry">
        ← Kembali
      </BaseLink>
      <h1 className="h1" style={{ marginTop: "10px" }}>
        🧬 Biotechnology
      </h1>
      <p className="sub" style={{ marginBottom: "14px" }}>
        Biologi + kimia + teknologi untuk kesehatan, pangan, dan material masa depan—didongkrak AI untuk riset lebih cepat.
      </p>

      <h2 className="h2">Mindset Shift: Biotech di Kehidupan Sehari-hari</h2>
      <div className="card">
        <p className="sub" style={{ margin: 0 }}>
          Bioteknologi tidak hanya tentang medis. Dari <em>bio-materials</em> ramah lingkungan sampai pertanian presisi, dampaknya
          menyentuh rantai pasok pangan hingga limbah industri.
        </p>
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>Contoh Nyata</h2>
      <div className="grid grid-2">
        <div className="card">
          <div className="k">Protein/Obat yang Dirancang AI</div>
          <div className="sub">Desain molekul lebih cepat → kandidat terapi baru lebih cepat diuji di laboratorium.</div>
        </div>
        <div className="card">
          <div className="k">Pertanian Presisi</div>
          <div className="sub">Sensor + AI memandu irigasi & pemupukan tepat sasaran → hemat biaya & ramah lingkungan.</div>
        </div>
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>Langkah Aksi (Minim Effort)</h2>
      <div className="grid grid-2">
        <div className="card">
          <div className="k">Ikuti Satu Database Publik</div>
          <div className="sub">Pilih sumber tepercaya (mis. WHO/FAO) dan ringkas 1 inovasi per minggu dengan bahasa awam.</div>
        </div>
        <div className="card">
          <div className="k">Map Aplikasi Lokal</div>
          <div className="sub">Catat 3 potensi penerapan biotech di kota/komunitasmu (pangan, limbah, kesehatan preventif).</div>
        </div>
      </div>

      <hr />

      <NextSteps current="industry" />
    </div>
  );
}
