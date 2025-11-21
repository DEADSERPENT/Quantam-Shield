import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuantumShield | The World's First Quantum-Safe Security Key",
  description: "Protect your data from future quantum attacks with the world's first quantum-safe security key. Features post-quantum encryption and quantum-random number generation.",
  keywords: ["quantum security", "PQC", "post-quantum cryptography", "QRNG", "security key", "cybersecurity", "hardware security"],
  authors: [{ name: "QuantumShield" }],
  openGraph: {
    title: "QuantumShield | Quantum-Safe Security Key",
    description: "The world's first quantum-safe security key with PQC chip and QRNG technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
