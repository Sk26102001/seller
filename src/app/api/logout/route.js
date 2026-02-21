import { NextResponse } from 'next/server'

export async function POST(req) {
    const response = NextResponse.json({ message: 'Logged out successfully' })

    response.cookies.delete('adminToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
        // domain: 'seller-jade.vercel.app',
        // maxAge: 60 * 60 * 24 * 1,
    })

    return response
}
