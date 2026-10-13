import type { ReactNode } from "react";

export const metadata = {
  title: "Konsultasi UMKM API",
  description: "Backend API untuk platform konsultasi UMKM dan sekolah.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}