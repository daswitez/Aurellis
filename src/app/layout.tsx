import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Aurellis",
  description: "Plataforma de automatización comercial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
