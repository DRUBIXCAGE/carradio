import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carfmradio.com"),
  title: "Car FM Radio | SiriusXM Onyx EZR Satellite Radio with Vehicle Kit (SXEZR1V1)",
  description:
    "Shop the SiriusXM Onyx EZR with Vehicle Kit (Model SXEZR1V1) at Car FM Radio (carfmradio.com). Features a 3.2-inch split-screen display, TuneMix, One-Touch Jump, and 10 presets for vehicle installation. Call toll-free 1-833-344-2286.",
  keywords: [
    "Car FM Radio",
    "carfmradio.com",
    "SiriusXM Onyx EZR",
    "SXEZR1V1",
    "Vehicle Kit",
    "Satellite Radio for Car",
    "TuneMix",
    "Split Screen Radio",
  ],
  openGraph: {
    title: "Car FM Radio | SiriusXM Onyx EZR Satellite Radio with Vehicle Kit",
    description:
      "Buy the SiriusXM Onyx EZR Satellite Radio with Vehicle Kit at Car FM Radio (carfmradio.com). Official hardware, 1-year warranty, free ground shipping.",
    url: "https://carfmradio.com",
    siteName: "Car FM Radio",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
