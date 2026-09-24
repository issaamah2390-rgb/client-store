'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { product } from '../page';

export default function CheckoutPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !phone || !address) {
      alert('من فضلك املأ كل البيانات');
      return;
    }
    // ملاحظة: هنا هيتحفظ الطلب في قاعدة البيانات لاحقاً بعد تفعيل الربط
    router.push('/thank-you');
  }

  return (
    <main style={{ padding: 20, maxWidth: 500, margin: '0 auto' }}>
      <h1 style={{ marginBottom: 20 }}>إتمام الطلب</h1>

      <div
        style={{
          border: '1px solid #eee',
          borderRadius: 10,
          padding: 14,
          marginBottom: 24,
        }}
      >
        <p style={{ margin: 0, fontWeight: 'bold' }}>{product.name}</p>
        <p style={{ margin: '4px 0 0', color: '#555' }}>
          {product.price} {product.currency}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: 6 }}>الاسم الكامل</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          placeholder="اكتب اسمك"
        />

        <label style={{ display: 'block', marginBottom: 6, marginTop: 16 }}>
          رقم الهاتف
        </label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
          placeholder="0555 xx xx xx"
        />

        <label style={{ display: 'block', marginBottom: 6, marginTop: 16 }}>
          العنوان بالتفصيل
        </label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ ...inputStyle, height: 80 }}
          placeholder="الولاية، الحي، أقرب معلم"
        />

        <button
          type="submit"
          style={{
            width: '100%',
            marginTop: 24,
            background: '#111',
            color: '#fff',
            padding: '14px 0',
            borderRadius: 10,
            border: 'none',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          تأكيد الطلب (الدفع عند الاستلام)
        </button>
      </form>
    </main>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px 10px',
  borderRadius: 8,
  border: '1px solid #ccc',
  fontSize: 15,
  boxSizing: 'border-box',
};
