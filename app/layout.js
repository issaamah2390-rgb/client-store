export const metadata = {
  title: "My Store",
  description: "متجري الإلكتروني",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
