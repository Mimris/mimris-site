import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mimris - connected AI-assisted project work",
  description:
    "Mimris keeps AI-assisted project work connected to the domain model.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
