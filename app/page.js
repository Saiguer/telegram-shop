export default function Home() {
  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Mi Tienda</h1>
      <p>Bienvenido a mi mini tienda de Telegram.</p>

      <div style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 16,
        marginTop: 20
      }}>
        <h2>Producto de prueba</h2>
        <p>Descripción del producto.</p>
        <strong>9,99 €</strong>
      </div>
    </main>
  );
}