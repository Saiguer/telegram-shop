import { supabase } from "../lib/supabase";

export default async function Home() {
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Mi Tienda</h1>
      <p>Productos disponibles</p>

      {products?.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: 12,
            padding: 16,
            marginTop: 20
          }}
        >
          {product.image_url && (
            <img
              src={product.image_url}
              alt={product.name}
              style={{ width: "100%", borderRadius: 12 }}
            />
          )}

          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <strong>{product.price} €</strong>

          {product.video_url && (
            <video
              src={product.video_url}
              controls
              style={{ width: "100%", marginTop: 12 }}
            />
          )}
        </div>
      ))}
    </main>
  );
}