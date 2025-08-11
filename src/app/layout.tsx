import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VRM Viewer",
  description: "A simple VRM viewer using three-vrm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
