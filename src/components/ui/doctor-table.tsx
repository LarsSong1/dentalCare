// doctors-client-page.tsx (Client Component)
'use client';

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

type DoctorDataType = {
  full_name: string;
  description: string;
  speciality: string;
  city: string;
};

const DoctorTable = ({ data }: { data: DoctorDataType[] }) => {
  const columns: ColumnDef<DoctorDataType>[] = [
    {
      accessorKey: "full_name",
      header: "Nombre",
    },
    {
      accessorKey: "description",
      header: "Descripción",
    },
    {
      accessorKey: "city",
      header: "Ciudad",
    },
    {
      accessorKey: "speciality",
      header: "Especialidad",
    },
    {
      accessorKey: "functions",
      header: "Funciones",
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
              {/* <DropdownMenuItem>Eliminar</DropdownMenuItem>
              <DropdownMenuSeparator /> */}
              <DropdownMenuItem>Actualizar</DropdownMenuItem>
              <DropdownMenuItem>Eliminar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
     
    }
  ];

  return (
    <section className="container min-w-full mx-auto">
      <DataTable columns={columns} data={data} />
    </section>
  );
};

export default DoctorTable;