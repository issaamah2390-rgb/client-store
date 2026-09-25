import Link from 'next/link';
import { product } from '../../page';

export default function ProductPage() {
  return (
    <main style={{ padding: 20, maxWidth: 500, margin: '0 auto' }}>
      <div
        style={{
          height: 260,
          background: '#f2f2f2',
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#999',
          marginBottom: 20,
        }}
      >
        صورة المنتج
      </div>

      <h1 style={{ marginBottom: 8 }}>{product.name}</h1>
      <p style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 24 }}>
        {product.price} {product.currency}
      </p>

      <Link
        href="/checkout"
        style={{
          display: 'block',
          textAlign: 'center',
          background: '#111',
          color: '#fff',
          padding: '14px 0',
          borderRadius: 10,
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        اطلب الآن (الدفع عند الاستلام)
      </Link>
    </main>
  );
}
