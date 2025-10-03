import type { Metadata } from "next";
import NextSteps from "@/components/NextSteps";
import UpdatesList from "@/components/UpdatesList";

export const metadata: Metadata = {
  title: "Updates — Rifqy Hazim HR",
};

export default function UpdatesPage() {
  return (
    <div>
      <h1 className="h1">Updates</h1>
      <p className="sub">Kurasi kabar & insight singkat seputar AI, Web, dan 5 industri masa depan.</p>

      <UpdatesList showAllLink={false} />

      <hr />

      <NextSteps current="updates" />
    </div>
  );
}
