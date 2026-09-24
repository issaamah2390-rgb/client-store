import Link from 'next/link';

export const product = {
  id: '1',
  name: 'مكتب للدراسة',
  price: 3500,
  currency: 'دج',
};

export default function Home() {
  return (
    <main style={{ padding: 20, maxWidth: 500, margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 30 }}>متجرنا</h1>

      <Link
        href={`/product/${product.id}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          border: '1px solid #e5e5e5',
          borderRadius: 12,
          display: 'block',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: 200,
            background: '#f2f2f2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
          }}
        >
          صورة المنتج
        </div>
        <div style={{ padding: 16 }}>
          <h3 style={{ margin: '0 0 8px', fontSize: 18 }}>{product.name}</h3>
          <p style={{ fontWeight: 'bold', fontSize: 17, margin: 0 }}>
            {product.price} {product.currency}
          </p>
        </div>
      </Link>
    </main>
  );
}
