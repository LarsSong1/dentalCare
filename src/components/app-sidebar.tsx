"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useAuthContext } from "./context/AuthContext"




// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  

  

  const data = {
    user: {
      name: `usuario`,
      email: `correo`,
      avatar: `imagen`,
    },
    teams: [
      {
        name: "Acme Inc",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveform,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: Command,
        plan: "Free",
      },
    ],
    navMain: [
      {
        title: "Dashboard",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "Dashboard",
            url: "/dashboard",
          },
          {
            title: "Pacientes",
            url: "/dashboard/patients",
          },
          {
            title: "Doctores",
            url: "/dashboard/doctors",
          },
          {
            title: "Todas las Citas", // Solo Admin
            url: "#",
          },
        ],
      },
      {
        title: "Perfil",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Perfiles", // Solo admin
            url: "/dashboard/profile",
          },
          {
            title: "Mis citas",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Planes",
            url: "#",
          },
          // {
          //   title: "Billing",
          //   url: "#",
          // },
          // {
          //   title: "Limits",
          //   url: "#",
          // },
        ],
      },
    ],
    // projects: [
    //   {
    //     name: "Design Engineering",
    //     url: "#",
    //     icon: Frame,
    //   },
    //   {
    //     name: "Sales & Marketing",
    //     url: "#",
    //     icon: PieChart,
    //   },
    //   {
    //     name: "Travel",
    //     url: "#",
    //     icon: Map,
    //   },
    // ],
  }
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}