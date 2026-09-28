import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const serif = Bodoni_Moda({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata = {
  title: "Nertren Law Associates",
  description:
    "Independent litigation and advisory practice in Tamil Nadu. General information only; not legal advice or solicitation.",
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
