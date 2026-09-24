import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main
      style={{
        padding: 20,
        maxWidth: 500,
        margin: '0 auto',
        textAlign: 'center',
        paddingTop: 80,
      }}
    >
      <div style={{ fontSize: 60, marginBottom: 16 }}>✅</div>
      <h1 style={{ marginBottom: 12 }}>تم استلام طلبك بنجاح</h1>
      <p style={{ color: '#555', marginBottom: 30 }}>
        سيتم التواصل معك قريباً لتأكيد التوصيل. الدفع عند الاستلام.
      </p>
      <Link
        href="/"
        style={{
          color: '#111',
          fontWeight: 'bold',
          textDecoration: 'underline',
        }}
      >
        الرجوع للمتجر
      </Link>
    </main>
  );
}
