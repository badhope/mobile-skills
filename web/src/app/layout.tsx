import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import BackToTop from "@/components/BackToTop";
import { I18nProvider } from "@/components/I18nProvider";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const metadata: Metadata = {
  title: {
    default: "Mobile Skills - AI Skill 生态系统",
    template: "%s | Mobile Skills"
  },
  description: "AI Skill 生态系统，提供丰富的 AI 角色和技能，让 AI 变得更有用、更有趣。",
  keywords: ["AI", "Skills", "智能体", "角色扮演", "技能系统", "AI Agent", "Prompt Engineering"],
  authors: [{ name: "Mobile Skills Team" }],
  creator: "Mobile Skills Team",
  publisher: "Mobile Skills",
  metadataBase: new URL('https://badhope.github.io/mobile-skills'),
  openGraph: {
    title: "Mobile Skills - AI Skill 生态系统",
    description: "AI Skill 生态系统，提供丰富的 AI 角色和技能",
    type: "website",
    locale: "zh_CN",
    siteName: "Mobile Skills",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Skills - AI Skill 生态系统",
    description: "AI Skill 生态系统，提供丰富的 AI 角色和技能",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.className} h-full antialiased`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#4f46e5" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <I18nProvider>
          <Navbar />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer />
          <MobileBottomNav />
          <BackToTop />
        </I18nProvider>
      </body>
    </html>
  );
}
