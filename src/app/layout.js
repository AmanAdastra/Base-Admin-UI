import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";

import Layout from "@/components/Layout";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body className={inter.className}>
        {" "}
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>{" "}
      </body>
    </html>
  )
}
