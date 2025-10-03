import type { Metadata } from "next";
import BaseLink from "@/components/BaseLink";
import NextSteps from "@/components/NextSteps";

export const metadata: Metadata = {
  title: "About — Rifqy Hazim HR",
};

export default function AboutPage() {
  return (
    <div>
      <section style={{ marginTop: "10px" }}>
        <h1 className="h1">About</h1>
        <p className="sub" style={{ maxWidth: "70ch" }}>
          Saya fokus pada <strong>AI Prompting</strong>, <strong>Strategi</strong>, dan <strong>Web Development</strong>. Misinya
          sederhana: menghadirkan solusi digital yang <em>ringkas</em>, <em>terukur</em>, dan <em>siap dipakai hari ini</em>—tanpa
          membagikan data pribadi sensitif. Halaman ini dirancang sebagai perkenalan singkat sekaligus gerbang edukasi untuk AI &
          web.
        </p>
      </section>

      <hr />

      <section>
        <h2 className="h2">Filosofi & Cara Pandang</h2>
        <div className="card">
          <p className="sub" style={{ margin: 0 }}>
            Teknologi bernilai ketika membantu orang menyelesaikan pekerjaan dengan lebih baik. Prinsip kerja saya: <strong>jelas</strong> (tujuan & batasan), <strong>cepat</strong> (iterasi kecil), dan <strong>aman</strong> (minim data sensitif). Motto: <em>Ad Astra Abyssosque</em> — menjelajah kemungkinan setinggi langit dan sedalam mungkin secara disiplin.
          </p>
        </div>
      </section>

      <hr />

      <section>
        <h2 className="h2">Apa yang Saya Lakukan</h2>
        <div className="grid grid-3" style={{ marginTop: "10px" }}>
          <BaseLink className="card" href="/works" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="k">Prompt Engineering</div>
            <div className="sub">Video · Image · Text — dari ide ke hasil.</div>
          </BaseLink>
          <BaseLink className="card" href="/projects" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="k">Web Delivery</div>
            <div className="sub">Landing ringan & cepat (Astro · GitHub · Vercel).</div>
          </BaseLink>
          <BaseLink className="card" href="/industry" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="k">Strategy & Edukasi</div>
            <div className="sub">Playbooks & kerangka kerja yang bisa direplikasi.</div>
          </BaseLink>
        </div>
      </section>

      <hr />

      <section>
        <h2 className="h2">Learning Hub</h2>
        <div className="grid grid-3" style={{ marginTop: "10px" }}>
          <BaseLink className="card" href="/industry" style={{ textDecoration: "none", color: "inherit" }}>
            AI Basics
          </BaseLink>
          <BaseLink className="card" href="/industry" style={{ textDecoration: "none", color: "inherit" }}>
            Prompt Patterns
          </BaseLink>
          <BaseLink className="card" href="/industry" style={{ textDecoration: "none", color: "inherit" }}>
            Tools & Workflow
          </BaseLink>
        </div>
      </section>

      <hr />

      <NextSteps current="about" />
    </div>
  );
}
