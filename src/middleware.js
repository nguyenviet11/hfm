import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'id', 'vi'],
  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/', '/(id|en|vi)/:path*']
};