import type { Metadata } from "next";
import NextSteps from "@/components/NextSteps";
import { DRIVE_URL } from "@/data/links";

export const metadata: Metadata = {
  title: "Projects — Rifqy Hazim HR",
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="h1">Projects</h1>
      <p className="sub">Daftar proyek publik. Saat ini, dua tombol mengarah ke Google Drive.</p>

      <div className="nav" style={{ margin: "12px 0 18px 0" }}>
        <a className="pill" href={DRIVE_URL} target="_blank" rel="noopener">
          AI Generated Video
        </a>
        <a className="pill" href={DRIVE_URL} target="_blank" rel="noopener">
          AI Generated Image
        </a>
      </div>

      <div className="grid grid-2" style={{ marginTop: "6px" }}>
        <a className="card" href={DRIVE_URL} target="_blank" rel="noopener">
          <div className="k">AI Video – Prototype</div>
          <div className="sub">Storyboard & direction</div>
        </a>
        <a className="card" href={DRIVE_URL} target="_blank" rel="noopener">
          <div className="k">AI Image – Prototype</div>
          <div className="sub">Prompt style exploration</div>
        </a>
      </div>

      <hr />

      <NextSteps current="projects" />
    </div>
  );
}
