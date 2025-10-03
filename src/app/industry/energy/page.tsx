import type { Metadata } from "next";
import BaseLink from "@/components/BaseLink";
import NextSteps from "@/components/NextSteps";

export const metadata: Metadata = {
  title: "Renewable Energy — Playbook",
};

export default function EnergyIndustryPage() {
  return (
    <div>
      <BaseLink className="pill" href="/industry">
        ← Kembali
      </BaseLink>
      <h1 className="h1" style={{ marginTop: "10px" }}>
        ⚡ Renewable Energy
      </h1>
      <p className="sub" style={{ marginBottom: "14px" }}>
        Transisi energi bersih: surya, angin, air, geotermal, biomassa—ditopang baterai skala besar dan smart grid.
      </p>

      <h2 className="h2">Mindset Shift: Investasi Jangka Panjang</h2>
      <div className="card">
        <p className="sub" style={{ margin: 0 }}>
          Energi terbarukan bukan hanya soal “lebih hijau”. Ini strategi biaya jangka panjang, resiliensi pasokan, dan peluang
          bisnis dari instalasi hingga pemeliharaan.
        </p>
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>Contoh Nyata</h2>
      <div className="grid grid-2">
        <div className="card">
          <div className="k">Atap Surya Rumah Tangga</div>
          <div className="sub">Produksi listrik lokal; kadang surplus yang bisa disalurkan ke grid tergantung regulasi.</div>
        </div>
        <div className="card">
          <div className="k">Baterai + Smart Meter</div>
          <div className="sub">Simpan energi di jam murah, pakai di jam mahal—optimasi biaya dan kurangi beban puncak.</div>
        </div>
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>Langkah Aksi (Minim Effort)</h2>
      <div className="grid grid-2">
        <div className="card">
          <div className="k">Audit Kecil Konsumsi</div>
          <div className="sub">Ambil kWh 1 bulan di tagihan, identifikasi 3 peralatan paling boros, tetapkan target pengurangan sederhana.</div>
        </div>
        <div className="card">
          <div className="k">Kalkulator Potensi Surya</div>
          <div className="sub">Perkirakan output atap berdasarkan luas & iradiasi kota—mendapat gambaran payback kasar.</div>
        </div>
      </div>

      <hr />

      <NextSteps current="industry" />
    </div>
  );
}
