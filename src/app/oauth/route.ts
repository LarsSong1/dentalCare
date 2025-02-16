// src/app/oauth/route.js

import { createAdminClient } from "@/lib/server/appwrite";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const userId = request.nextUrl.searchParams.get("userId");
    const secret = request.nextUrl.searchParams.get("secret");

    if (!userId || !secret) {
        return NextResponse.json({ error: 'No se encontraron datos para la autenticación'}, {status: 400})
    }

    const { account } = await createAdminClient();
    const session = await account.createSession(userId, secret);

    const cookiesData = await cookies()

    cookiesData.set("my-custom-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
    });

    return NextResponse.redirect(`${request.nextUrl.origin}/account`);
}
