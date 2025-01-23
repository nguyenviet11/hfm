import "./globals.css";

export const metadata = {
  title: "HFM | Online Trading | Regulated Forex Broker",
};

export default function RootLayout({ children, params: {locale} }) {
  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  );
}
