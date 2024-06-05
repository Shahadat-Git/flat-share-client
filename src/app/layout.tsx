import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Providers from "@/lib/providers/Providers";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Flat",
  description: "Welcome to next flat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppRouterCacheProvider>
            <Toaster position="top-right" />
            {children}
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}
