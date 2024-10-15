import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/themeprovider";
import React from "react";

// Load the Aspekta font from local files
const AspektaVF = localFont({
  src: "./fonts/AspektaVF.woff2", // Ensure this path is correct relative to the file
  variable: "--font-aspekta", // CSS variable name for the font
  weight: "100 900", // Font weights you want to use
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // Specify the type for children
}) {
  return (
    <html lang="en">
      <body
        className={`${AspektaVF.variable} antialiased`} // Apply the font variable and antialiasing
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children} {/* Render the children components here */}
        </ThemeProvider>
      </body>
    </html>
  );
}
