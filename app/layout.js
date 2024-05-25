import { inter } from './fonts'
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";

export const metadata = {
  title: "Fayez Kassem",
  description: "Created by Fayez Kassem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <SpeedInsights/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
