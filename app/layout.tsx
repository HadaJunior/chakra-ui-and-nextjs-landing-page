"use client";

import Footer from "@/components/Footer";
import "./globals.css";

import { Providers } from "./providers";
import NavBar from "@/components/Navbar";

// export const metadata = {
//   title: "Landing page",
//   description: "Create a website with chakra-ui components",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
