import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const protectedRoutes = ["/create-prompt", "/update-prompt","/profile"];

    // If user is not authenticated and trying to access a protected route, redirect to home page
    if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
        return NextResponse.redirect(new URL("/", req.url)); // Redirect to home page
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/create-prompt", "/update-prompt","/profile"], // Apply middleware only to these routes
};
