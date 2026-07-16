// src/app/layout.js
import "./globals.css"; // Ensure this line is at the top!

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}