import type { Metadata } from "next";
import NextSteps from "@/components/NextSteps";
import { DRIVE_URL } from "@/data/links";

export const metadata: Metadata = {
  title: "Works — Rifqy Hazim HR",
};

export default function WorksPage() {
  return (
    <div>
      <h1 className="h1">Karya</h1>
      <p className="sub">Showcase terkurasi (manual). Untuk saat ini, tombol di bawah mengarah ke Google Drive.</p>

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
          <div className="k">AI Generated Video (1)</div>
          <div className="sub">Prompt & scene direction</div>
        </a>
        <a className="card" href={DRIVE_URL} target="_blank" rel="noopener">
          <div className="k">AI Generated Image (1)</div>
          <div className="sub">Prompt engineering</div>
        </a>
      </div>

      <hr />

      <NextSteps current="works" />
    </div>
  );
}
