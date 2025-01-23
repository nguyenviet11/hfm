import createMiddleware from 'next-intl/middleware';
export default createMiddleware({
  locales: ['en', 'it', 'vi','jp','fr','es', 'de'],
  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/', '/(it|en|vi|jp|fr|es|de)/:path*']
};
