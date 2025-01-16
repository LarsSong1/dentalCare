'use server'

import { cookies } from "next/headers";
import { createSessionClient } from "./appwrite";
import { redirect } from "next/navigation";

export async function signOut() {
  "use server";

  const { account } = await createSessionClient();

  const newCookie = await cookies()

  newCookie.delete("my-custom-session");
  await account.deleteSession("current");

  redirect("/signin");
}
