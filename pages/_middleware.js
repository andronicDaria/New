import { NextResponse } from 'next/server';

export async function middleware(req) {
  const url = req.nextUrl.clone();
  const date = new Date();
  const day = date.getDay();

  const isMaintenance = day == 4;

  if (isMaintenance) {
    url.pathname = '/maintenance';
    console.log('Site is down !');
    return NextResponse.rewrite(url);
  }
}
