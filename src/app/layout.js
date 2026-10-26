
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorDot from "@/components/CursorDot";

export const metadata = {
  title: {
    default: "IOSC Forum 2026",
    template: "%s | IOSC Forum 2026",
  },
  description:
    "The International Forum 2026 brings researchers, innovators, and academic communities together to exchange ideas and shape the future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Navbar />

        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        <div className="relative z-20">
          <Footer />
        </div>

        <CursorDot />
      </body>
    </html>
  );
}
