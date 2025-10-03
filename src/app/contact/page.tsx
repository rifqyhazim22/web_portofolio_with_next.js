import type { Metadata } from "next";
import NextSteps from "@/components/NextSteps";

export const metadata: Metadata = {
  title: "Contact — Rifqy Hazim HR",
};

export default function ContactPage() {
  return (
    <div>
      <h1 className="h1">Contact</h1>
      <div className="grid grid-2" style={{ marginTop: "14px" }}>
        <a className="card" href="mailto:rifqyhazimforbs@gmail.com">
          <div className="k">Email</div>
          <div className="sub">rifqyhazimforbs@gmail.com</div>
        </a>
        <a className="card" href="https://wa.me/6282123008601" target="_blank" rel="noopener">
          <div className="k">WhatsApp</div>
          <div className="sub">082123008601</div>
        </a>
        <a className="card" href="https://github.com/rifqyhazim22" target="_blank" rel="noopener">
          <div className="k">GitHub</div>
          <div className="sub">rifqyhazim22</div>
        </a>
        <a className="card" href="https://instagram.com/rifqy__hazim._" target="_blank" rel="noopener">
          <div className="k">Instagram</div>
          <div className="sub">@rifqy__hazim._</div>
        </a>
      </div>

      <hr />

      <section>
        <h2 className="h2">FAQ (Cara Saya Bekerja)</h2>
        <div className="grid" style={{ marginTop: "10px" }}>
          <div className="card">
            <div className="k">Apakah website ini menyimpan data pribadi?</div>
            <div className="sub">
              Tidak. Website ini tidak menampilkan nomor, alamat, atau identitas sensitif. Hubungi saya melalui opsi di atas.
            </div>
          </div>
          <div className="card">
            <div className="k">Apa tools utama yang digunakan?</div>
            <div className="sub">
              Astro untuk web statis cepat; GitHub untuk versioning; Vercel untuk deploy. AI tools untuk riset & produksi konten.
            </div>
          </div>
          <div className="card">
            <div className="k">Seperti apa alur kerja tipikal?</div>
            <div className="sub">
              Brief → definisi tujuan & batasan → prototipe cepat → iterasi singkat → delivery. Fokus pada hasil ringkas & terukur.
            </div>
          </div>
        </div>
      </section>

      <hr />

      <NextSteps current="contact" />
    </div>
  );
}
