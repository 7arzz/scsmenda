import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFE500",
};

export const metadata: Metadata = {
  title: "SCSMENDA — Student Company SMENDA | Program Kewirausahaan Siswa",
  description:
    "Student Company merupakan program pendidikan kewirausahaan modern: beranggotakan siswa, dijalankan siswa, dan dikembangkan oleh siswa SMENDA.",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F5] text-[#0F1115] font-sans selection:bg-[#FFE500] selection:text-[#0F1115] overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
