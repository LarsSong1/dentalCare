'use client'

import React from 'react'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'




const formDoctorSchema = z.object({
  full_name: z.string().min(10).max(250),
  // description: z.string().min(10).max(500),
  speciality: z.string().min(1).max(250),
  city: z.string().min(1).max(250), 
})
const DoctorForm = () => {
  const formDoctor = useForm<z.infer<typeof formDoctorSchema>>({
    resolver: zodResolver(formDoctorSchema),
    defaultValues: {
      full_name: "",
      // description: "",
      city: "",
      speciality: "",
    }
  })


  const onSubmit = async (values: z.infer<typeof formDoctorSchema>) => {
    console.log(values)
  }

  return (
    <FormProvider {...formDoctor}>
      <form onSubmit={formDoctor.handleSubmit(onSubmit)}>
        <FormField
          control={formDoctor.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Completo</FormLabel>
              <FormControl>
                <Input placeholder="Eduardo Rodriguez..." {...field} />
              </FormControl>
              <FormDescription>
                Proporciona tu nombre real, los pacientes te buscaran por medio de este
              </FormDescription>

            </FormItem>
          )}
        >

        </FormField>

        <FormField
          control={formDoctor.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ciudad</FormLabel>
              <FormControl>
                <Input placeholder="Santa Elena" {...field} />
              </FormControl>
              <FormDescription>
                Ciudad en la que resides o atiendes
              </FormDescription>
            </FormItem>
          )}
        >
        </FormField>

        <FormField
          control={formDoctor.control}
          name="speciality"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Especialidad</FormLabel>
              <FormControl>
                <Input placeholder="Odontologo - Cirujano" {...field} />
              </FormControl>
              <FormDescription>
                Habilidad mas fuerte
              </FormDescription>

            </FormItem>
          )}
        >
        </FormField>
        <Button type='submit' className='mt-4'>Guardar cambios</Button>
      </form>
    </FormProvider>
  )
}

export default DoctorForm