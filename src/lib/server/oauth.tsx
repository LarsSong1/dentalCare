// src/lib/server/oauth.js
"use server";

import { createAdminClient } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { OAuthProvider } from "node-appwrite";

export async function signUpWithGoogle() {
    const { account } = await createAdminClient();

    let headersWeb = await headers()
    const origin = headersWeb.get('origin') ?? 'http://localhost:3000'
    
    

    const redirectUrl = await account.createOAuth2Token(
        OAuthProvider.Google,
        `${origin}/oauth`,
        `${origin}/signup`,
    );

    return redirect(redirectUrl);
};
