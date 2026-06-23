import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ElectraCode — Master Electronics. Get Ranked. Get Hired.",
  description: "Building the talent infrastructure for electronics engineers.",
   icons: {
    icon: "/assets/images/electracode.png",
    shortcut: "/assets/images/electracode.png",
    apple: "/assets/images/electracode.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
