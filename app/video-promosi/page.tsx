import type { Metadata } from "next";
import VideoPromosiClient from "./VideoPromosiClient";

export const metadata: Metadata = {
  title: "Video Promosi Resmi — SCSMENDA | Student Company SMENDA",
  description:
    "Tonton video promosi resmi Student Company SMENDA (SCSMENDA). Saksikan antusiasme, kreativitas, dan perjalanan nyata wirausaha muda siswa SMENDA.",
  openGraph: {
    title: "Video Promosi Resmi — SCSMENDA | Student Company SMENDA",
    description:
      "Saksikan perjalanan kewirausahaan siswa SMENDA dari pembentukan perusahaan hingga likuidasi dan CSR.",
    images: ["/hero.png"],
  },
};

export default function VideoPromosiPage() {
  return <VideoPromosiClient />;
}
