import { NextResponse } from 'next/server'

export async function POST(req) {
    const { username, password } = await req.json();

    if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
    ) {
        const response = NextResponse.json({
            token: process.env.NEXT_PUBLIC_ADMIN_TOKEN,
        });

        response.cookies.set('adminToken', process.env.NEXT_PUBLIC_ADMIN_TOKEN, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            domain: 'stellaritglobal.com',
            path: '/',
            maxAge: 60 * 60 * 24 * 1,
        });

        return response;
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}

