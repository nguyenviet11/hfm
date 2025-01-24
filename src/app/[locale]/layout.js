import { getMessages } from "next-intl/server";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";

export default async function RootLayout({ children, params: {locale} }) {
  const messages = await getMessages()
  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <body>
          {children}
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
