import "./globals.css";

export const metadata = {
  title: "Op reis met Zayd en Razan – Naar Parijs",
  description: "Een interactief Nederlandstalig reisverhaal om Frans te leren."
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#18253f"
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
