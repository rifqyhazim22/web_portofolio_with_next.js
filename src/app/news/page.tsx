import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "News — Rifqy Hazim HR",
};

export default function NewsPage() {
  redirect("/updates");
}
