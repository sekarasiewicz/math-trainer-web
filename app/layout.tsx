import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://math-trainer.karasiewicz.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Math Trainer - Master Arithmetic with Fun",
    template: "%s | Math Trainer",
  },
  description: "An engaging iOS educational game to practice and master basic arithmetic operations through interactive gameplay. 5 game modes, progress tracking, and achievements. Available on the App Store.",
  keywords: ["math trainer", "arithmetic practice", "math game", "iOS education app", "kids math", "addition", "subtraction", "multiplication", "division", "math practice app"],
  authors: [{ name: "Sebastian Karasiewicz" }],
  creator: "Sebastian Karasiewicz",
  publisher: "Sebastian Karasiewicz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Math Trainer",
    title: "Math Trainer - Master Arithmetic with Fun",
    description: "An engaging iOS educational game to practice and master basic arithmetic operations through interactive gameplay. 5 game modes, progress tracking, and achievements.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Math Trainer - iOS Math Practice App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Math Trainer - Master Arithmetic with Fun",
    description: "An engaging iOS educational game to practice and master basic arithmetic operations. 5 game modes, progress tracking, and achievements.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-L0G2DL3XXJ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-L0G2DL3XXJ');
        `}
      </Script>
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
