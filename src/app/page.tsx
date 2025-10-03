import type { Metadata } from "next";
import BaseLink from "@/components/BaseLink";
import { updates } from "@/data/updates";

export const metadata: Metadata = {
  title: "Rifqy Hazim HR — Home",
};

export default function HomePage() {
  return (
    <div>
      <h1 className="h1">Rifqy Hazim HR</h1>
      <p className="sub">AI Prompter & Strategist · Web Developer</p>
      <p>
        Saya merancang pengalaman digital dengan AI—ringkas, terukur, dan bisa dipakai hari ini.
      </p>

      <div className="pills" style={{ margin: "10px 0 18px" }}>
        <BaseLink href="/works" className="pill">
          Lihat Works ↗
        </BaseLink>
        <BaseLink href="/industry" className="pill">
          Belajar AI (Gratis) ↗
        </BaseLink>
      </div>

      <section className="card">
        <div className="k" style={{ marginBottom: "6px" }}>
          Quotes
        </div>
        <div className="sub">
          “In the beginning there was dark. Until someone set themselves aflame. Only then did the universe know light.”
        </div>
      </section>

      <section>
        <h2 className="h2">Apa yang Saya Lakukan</h2>
        <div className="grid grid-2">
          <BaseLink className="tile" href="/works">
            <div className="k">Prompt Engineering</div>
            <div className="sub">Video, image, text—dari ide ke hasil.</div>
          </BaseLink>
          <BaseLink className="tile" href="/projects">
            <div className="k">Web Delivery</div>
            <div className="sub">Landing ringan & cepat (Astro · GitHub).</div>
          </BaseLink>
          <BaseLink className="tile" href="/industry">
            <div className="k">Strategy & Edukasi</div>
            <div className="sub">Playbooks & kerangka kerja yang bisa dipakai.</div>
          </BaseLink>
        </div>
      </section>

      <section>
        <h2 className="h2">Playbooks</h2>
        <p className="sub">
          Kerangka kerja praktis untuk lima industri masa depan—AI→AGI/ASI, Crypto, Biotechnology, Energi Terbarukan, dan Space.
        </p>
        <div className="pills" style={{ marginTop: "10px" }}>
          <BaseLink href="/industry" className="pill">
            Lihat Playbooks & Edukasi AI →
          </BaseLink>
        </div>
      </section>

      <section>
        <h2 className="h2">Learning Hub</h2>
        <div className="grid grid-2">
          <BaseLink href="/industry#ai-basics" className="tile">
            <div className="k">AI Basics</div>
            <div className="sub">Konsep inti, istilah, dan etika; landasan yang aman & praktis.</div>
          </BaseLink>
          <BaseLink href="/industry#prompt-patterns" className="tile">
            <div className="k">Prompt Patterns</div>
            <div className="sub">Polanya apa, kapan dipakai, dan cara menghindari jebakan umum.</div>
          </BaseLink>
          <BaseLink href="/industry#tools-workflow" className="tile">
            <div className="k">Tools & Workflow</div>
            <div className="sub">Pipeline dari brief → eksperimen → hasil, dengan contoh alat yang ringan.</div>
          </BaseLink>
        </div>
      </section>

      <section>
        <h2 className="h2">Updates</h2>
        <div className="grid">
          {updates.map((item) => (
            <BaseLink key={item.href} className="tile" href={item.href}>
              <div className="k">{item.title}</div>
              <div className="sub">{item.summary}</div>
            </BaseLink>
          ))}
        </div>
        <div className="pills" style={{ marginTop: "12px" }}>
          <BaseLink href="/updates" className="pill">
            Lihat semua updates →
          </BaseLink>
        </div>
      </section>

      <div className="hr" />

      <section>
        <h2 className="h2">Jelajah Berikutnya</h2>
        <div className="pills">
          <BaseLink className="pill" href="/about">
            About
          </BaseLink>
          <BaseLink className="pill" href="/industry">
            Playbooks
          </BaseLink>
          <BaseLink className="pill" href="/works">
            Works
          </BaseLink>
          <BaseLink className="pill" href="/projects">
            Projects
          </BaseLink>
          <BaseLink className="pill" href="/contact">
            Contact
          </BaseLink>
        </div>
      </section>
    </div>
  );
}
