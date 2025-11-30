import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Math Trainer - Master Arithmetic with Fun",
  description: "An engaging iOS educational game to practice and master basic arithmetic operations through interactive gameplay. Available on the App Store.",
  keywords: ["math", "trainer", "education", "iOS", "arithmetic", "learning", "kids", "practice"],
  authors: [{ name: "Sebastian Karasiewicz" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md z-50 border-b border-zinc-200 dark:border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.jpg" alt="Math Trainer Logo" width={32} height={32} className="rounded-lg" />
                <span className="font-semibold text-lg">Math Trainer</span>
              </Link>
              <div className="flex items-center gap-6">
                <Link href="/#features" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  Features
                </Link>
                <Link href="/privacy" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Image src="/logo.jpg" alt="Math Trainer Logo" width={24} height={24} className="rounded-md" />
                <span className="font-medium">Math Trainer</span>
              </div>
              <div className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
                <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  Privacy Policy
                </Link>
                <a href="mailto:sebastian@karasiewicz.dev" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                  Contact
                </a>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                © 2025 Sebastian Karasiewicz
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
