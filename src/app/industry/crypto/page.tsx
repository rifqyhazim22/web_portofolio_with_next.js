import type { Metadata } from "next";
import BaseLink from "@/components/BaseLink";
import NextSteps from "@/components/NextSteps";

export const metadata: Metadata = {
  title: "Crypto in Finance — Playbook",
};

export default function CryptoIndustryPage() {
  return (
    <div>
      <BaseLink className="pill" href="/industry">
        ← Kembali
      </BaseLink>
      <h1 className="h1" style={{ marginTop: "10px" }}>
        ⛓️ Crypto in Finance
      </h1>
      <p className="sub" style={{ marginBottom: "14px" }}>
        Keuangan berbasis blockchain: transfer nilai global, tokenisasi aset, dan smart contracts yang bisa diprogram.
      </p>

      <h2 className="h2">Mindset Shift: Aset yang Bisa Diprogram</h2>
      <div className="card">
        <p className="sub" style={{ margin: 0 }}>
          Crypto bukan sekadar “uang digital”, melainkan <strong>aset yang bisa diprogram</strong>. Kepemilikan dan aturan main
          tercatat di blockchain: transparan, dapat diverifikasi, dan berjalan tanpa perantara melalui smart contracts.
        </p>
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>Contoh Nyata</h2>
      <div className="grid grid-2">
        <div className="card">
          <div className="k">Tokenisasi Properti</div>
          <div className="sub">Kepemilikan apartemen dipecah menjadi token—membuka akses fractional ownership & likuiditas baru.</div>
        </div>
        <div className="card">
          <div className="k">Pembayaran Global</div>
          <div className="sub">Remitansi lintas negara memotong perantara: biaya lebih rendah, settlement lebih cepat.</div>
        </div>
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>Langkah Aksi (Minim Effort)</h2>
      <div className="grid grid-2">
        <div className="card">
          <div className="k">Coba Wallet Testnet</div>
          <div className="sub">Buat wallet di jaringan uji, kirim token faucet untuk memahami flow tanpa risiko finansial.</div>
        </div>
        <div className="card">
          <div className="k">Baca Kontrak Sederhana</div>
          <div className="sub">Pelajari struktur smart contract dasar (mint, transfer) untuk memahami hak & batasan pengguna.</div>
        </div>
      </div>

      <hr />

      <NextSteps current="industry" />
    </div>
  );
}
