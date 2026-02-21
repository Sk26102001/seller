import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stellar IT Global | Official Website | IT Services & Web Solutions",
  description: "Welcome to Stellar IT Global – trusted IT consulting, cloud, and website development company based in India. Discover why clients choose Stellar IT for innovation, security, and reliability.",
  keywords: "Stellar IT Global, IT services India, web development, cloud consulting, cybersecurity, IT consulting, business software solutions, website design, software company India",
  author: "Stellar IT Global",
  alternate: {
    canonical: "https://stellaritglobal.com",
  },
  icons: {
    icon: "/images/favicon.png",
  },
  verification: {
    google: "",
  }
};

export const viewport = {
  themeColor: "#2d4fe1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} antialiased`}
      >
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
