
import Navbar from "@/components/Navbar";
import { getLoggedInUser } from "@/lib/server/appwrite";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";


export default async function Home() {

  // const user = await getLoggedInUser();

  // if (!user) redirect("/signup");

  // redirect("/account");

  return (
    <div>
      <Navbar />
      <div className="container max-w-4xl mx-auto">
        <h1>Pagina Principal</h1>
        <p>Esta es la pagina principal de la aplicacion.</p>
      </div>

    </div>
  );
}
