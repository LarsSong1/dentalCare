
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import { AuthProvider, useAuthContext } from "@/components/context/AuthContext"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SelectUserTabs } from "@/components/selectUserTabs"
import { AppSidebar } from "@/components/app-sidebar"



export default function Layout({ children }: { children: React.ReactNode }) {
  const userType = true
  return (


      <>

        {!userType ?
          <section className="flex justify-center items-center h-screen flex-col space-y-9">
            <div>
              <h1 className="text-2xl font-bold text-center">Selecciona el tipo de Usuario</h1>
              <p className="text-sm text-center font-normal">Llena los campos en el perfil con el que deseas acceder a la plataforma</p>
            </div>
            <SelectUserTabs />
          </section>

          :
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        }
      </>
  


  )
}