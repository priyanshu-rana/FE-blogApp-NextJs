import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TanstackProviders from "../../providers/TanstackProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "blogApp",
  description: "blogApp build by Priyanshu Rana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProviders>
          <div>{children}</div>
        </TanstackProviders>
      </body>
    </html>
  );
}
