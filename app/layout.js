import { inter } from './fonts'

import "./globals.css";

export const metadata = {
  title: "Fayez Kassem",
  description: "Created by Fayez Kassem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
