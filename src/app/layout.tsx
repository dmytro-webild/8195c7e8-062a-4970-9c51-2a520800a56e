import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Brick & Butter Bakehouse | Artisan Bakery in North York',
  description: 'Discover freshly baked bread, pastries, and custom cakes from Brick & Butter Bakehouse. Order pickup or delivery for delightful treats in North York, ON.',
  openGraph: {
    "title": "Brick & Butter Bakehouse",
    "description": "Artisan bakery crafting delicious bread, pastries, and custom cakes in North York.",
    "url": "https://www.brickandbutter.com",
    "siteName": "Brick & Butter Bakehouse",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/baked-food-with-milk-bottles-corn-flakes-fig-dry-apricots-blue-wooden-plank_23-2147956785.jpg",
        "alt": "Freshly baked pastries and bread"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Brick & Butter Bakehouse | Artisan Bakery",
    "description": "Artisan bakery crafting delicious bread, pastries, and custom cakes in North York.",
    "images": [
      "http://img.b2bpic.net/free-photo/baked-food-with-milk-bottles-corn-flakes-fig-dry-apricots-blue-wooden-plank_23-2147956785.jpg"
    ]
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} ${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
