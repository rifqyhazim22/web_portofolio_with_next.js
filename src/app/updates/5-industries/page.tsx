import type { Metadata } from "next";
import BaseLink from "@/components/BaseLink";
import NextSteps from "@/components/NextSteps";

const published = "2025-08-09";

export const metadata: Metadata = {
  title: "Lima Industri Masa Depan yang Sedang Memanas — Updates",
};

export default function FiveIndustriesUpdatePage() {
  return (
    <div>
      <BaseLink className="pill" href="/updates">
        ← Kembali ke Updates
      </BaseLink>
      <h1 className="h1" style={{ marginTop: "10px" }}>
        Lima Industri Masa Depan yang Sedang Memanas
      </h1>
      <p className="sub" style={{ marginBottom: "12px" }}>
        Tanggal: {published}
      </p>

      <div className="card">
        <p className="sub" style={{ margin: 0 }}>
          Artificial Intelligence, Crypto, Biotechnology, Renewable Energy, dan Space Exploration bukan sekadar wacana masa
          depan; dampaknya terasa sekarang. AI mempercepat riset & produksi konten; crypto membuka ekonomi digital yang
          terprogram; biotech mendorong kesehatan & pangan; energi terbarukan menurunkan emisi; dan eksplorasi antariksa
          menyuplai data penting untuk sektor di Bumi. Kelimanya saling menguatkan—menciptakan ekosistem inovasi yang sulit
          diabaikan.
        </p>
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>
        Sorotan Singkat
      </h2>
      <div className="grid grid-2">
        <div className="card">
          <div className="k">AI</div>
          <div className="sub">Otomasi kreatif & analitis; dari tooling kreator sampai asisten riset yang adaptif.</div>
        </div>
        <div className="card">
          <div className="k">Crypto</div>
          <div className="sub">Aset yang bisa diprogram; tokenisasi & smart contracts memudahkan koordinasi ekonomi.</div>
        </div>
        <div className="card">
          <div className="k">Biotech</div>
          <div className="sub">Terapi molekuler, pangan presisi, dan material hayati yang ramah lingkungan.</div>
        </div>
        <div className="card">
          <div className="k">Renewables</div>
          <div className="sub">Surya/angin + baterai & smart grid → biaya turun, pasokan stabil.</div>
        </div>
        <div className="card">
          <div className="k">Space</div>
          <div className="sub">Data satelit untuk pertanian, logistik, cuaca, dan mitigasi bencana.</div>
        </div>
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>
        Kenapa Relevan Sekarang
      </h2>
      <div className="card">
        <p className="sub" style={{ margin: 0 }}>
          Kurva biaya turun, akses informasi meningkat, dan tools makin mudah dipakai. Artinya: individu & tim kecil bisa
          bermain di level yang dulu hanya mungkin bagi korporasi besar. Momentum ini adalah kesempatan untuk belajar cepat,
          bereksperimen, dan membangun portofolio yang nyata.
        </p>
      </div>

      <hr />

      <NextSteps current="updates" />
    </div>
  );
}
