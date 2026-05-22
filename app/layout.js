export const metadata = {
  title: "Mi Tienda",
  description: "Mini tienda de Telegram"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}