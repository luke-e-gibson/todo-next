import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from "@/app/_components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { env } from "@/env";

export const metadata: Metadata = {
  title: "NextJs Todo App",
  description: "A todo app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content={env.NEXT_PUBLIC_GOOGLE_CONTENT_HEAD}
        />
      </head>
      <ClerkProvider>
        <body>
          <header>
            <Navbar />
          </header>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
