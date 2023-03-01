/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  // Add any assets or page that you don't want to run middleware on
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/api/')
  ) {
    return NextResponse.next();
  }

  const token = await getToken({ req });
  if (token?.githubHandle) {
    if (pathname === '/generate-ticket' || pathname === '/') {
      return NextResponse.redirect(
        new URL(
          `/developer-days/tickets/${token.githubHandle}`,
          `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}`
        )
      );
    }
  }

  return NextResponse.next();
}
