export const metadata = {
  title: "Airbnb Turbo Pack",
  description: "Convierte tu anuncio en una máquina de 5★ en 72h",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-neutral-50 text-neutral-900">{children}</body>
    </html>
  );
}
