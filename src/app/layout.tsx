import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import GlobalLayout from "@/components/GlobalLayout";
import { Toaster } from "sonner";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estúdio Nativo",
  description: "Nativo Estúdio de Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} antialiased flex flex-col min-h-screen bg-white`}
      >
        <Toaster richColors position="top-right" />
        <GlobalLayout>
          {children}
        </GlobalLayout>
      </body>
    </html>
  );
}
