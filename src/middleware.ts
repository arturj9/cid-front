import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token && request.nextUrl.pathname !== "/") {
    const loginUrl = new URL("/", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (token && request.nextUrl.pathname === "/") {
    const homeUrl = new URL("/home", request.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

// Configuração para quais rotas o middleware será aplicado
export const config = {
  matcher: ["/", "/home"],
};