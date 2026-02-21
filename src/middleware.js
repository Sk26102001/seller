// middleware.js
import { NextResponse } from 'next/server'

export function middleware(req) {
    const token = req.cookies.get('adminToken')?.value
    const { pathname } = req.nextUrl

    // Define routes
    const isLoginPage = pathname === '/login'
    const isProtectedAdminPage = pathname.startsWith('/admin')

    // If no token and trying to access /admin pages → redi rect to /login
    if (!token && isProtectedAdminPage) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    // If already logged in and tries to visit /login → redirect to /admin/blogs
    if (token === process.env.NEXT_PUBLIC_ADMIN_TOKEN && isLoginPage) {
        return NextResponse.redirect(new URL('/admin/blogs', req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*', '/login'], // middleware applies to both admin and login
}
