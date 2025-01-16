

import { createAdminClient, getLoggedInUser } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";
import { signUpWithGoogle } from "@/lib/server/oauth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { dentalLogo, googleLogo } from "../../../public/content";
import Link from "next/link";
import { SESSION_COOKIE } from "@/lib/server/const";
import path from "path";
import { cookies } from "next/headers";

const signInWithEmail = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.table({ email, password });


    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password)


    const newCookie = await cookies()
    newCookie.set(SESSION_COOKIE, session.secret, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: true,
    })


    redirect('/dashboard')

}


export default async function SignUpPage() {
    const user = await getLoggedInUser();
    if (user) redirect("/dashboard");

    return (
        <>
            <section className='grid grid-cols-2 h-screen overflow-hidden'>
                <div className='col-span-1 lg:block hidden bg-black'>
                    <img src="adad" alt="imagen" />
                </div>
                <div className='lg:col-span-1 place-items-center col-span-2 place-content-center space-y-4'>
                    <Image width={80} height={80} src={dentalLogo} alt="Logo" />
                    <div>
                        <h1 className='font-bold text-xl text-center'>Inicia Sesión</h1>
                        <p className='font-normal text-sm opacity-85 text-center'>Ingresa con una cuenta de google para una mejor <br />Experiencia</p>
                        {/* Iniciar Sesión Google */}
                        <form action={signUpWithGoogle} className='w-full mt-2 flex justify-center'>
                            <Button type="submit" className='w-full mx-auto'>
                                <Image src={googleLogo} alt="google-logo" width={'15'} height={'15'} />
                                <p>Google</p>
                            </Button>
                        </form>


                        {/* Iniciar Sesion con Correo */}
                        
                        <form action={signInWithEmail} className="mt-2">
                            <div className="flex flex-col">
                                <label className="text-xs" htmlFor="email">Correo electronico</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="user@gmail.com"
                                    className="text-xs border-black border-2 border-opacity-60 rounded-sm mt-2 placeholder:text-gray-400 p-2"

                                />
                                <label className="text-xs mt-2" htmlFor="password">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="contraseña "
                                    className="text-xs border-black border-2 border-opacity-60 rounded-sm mt-2 placeholder:text-gray-400 p-2"


                                />
                            </div>
                            <div className="flex justify-center mt-4">
                                <Button className=" w-[250px]">
                                    Entrar
                                </Button>
                            </div>
                        </form>

                        
                        <div className="w-full mt-4 text-center">
                            <Link className="text-xs underline" href={'/signup'}>Crear cuenta</Link>
                            <p className='text-xs font-normal opacity-90 mt-4 text-center'>Terminos y condiciones</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

