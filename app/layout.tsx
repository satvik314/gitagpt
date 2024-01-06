import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gita GPT",
  description: "Get answers to your spiritual questions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <footer style={{ textAlign: "center", color: "white", backgroundColor: "black", padding: "20px", fontSize: "18px" }}>
          <p>© <a href="https://www.buildfastwithai.com" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Build Fast with AI</a></p>
        </footer> */}
        <footer style={{ textAlign: "center", color: "white", backgroundColor: "black", padding: "20px", fontSize: "15px" }}>
          <p>© <a href="https://www.buildfastwithai.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>Build Fast with AI</a></p>
        </footer>
      </body>
    </html>
  );
}
