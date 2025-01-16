'use client'

import { useAuthContext } from '@/components/context/AuthContext'
import { Button } from '@/components/ui/button'
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Form, FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'


const formPatientSchema = z.object({
    full_name: z.string().min(10).max(250),
    phone: z.string().min(5).max(25),
    city: z.string().min(1).max(250),

    // no esencials
    gender: z.string().min(1).max(10),
    address: z.string().min(10).max(250),
    email: z.string().email(),
    avatar_url: z.string().url(),
})

const PatientForm = () => {
    // const { updatePatientData, user } = useAuthContext()
    // console.log(user)


    const formPatient = useForm<z.infer<typeof formPatientSchema>>({
        resolver: zodResolver(formPatientSchema),
        defaultValues: {
            full_name: '',
            phone: '',
            city: '',
        },
    })



    const onSubmit = async (values: z.infer<typeof formPatientSchema>) => {
        console.log(values)
        const data = {
            full_name: values.full_name,
            phone: values.phone,
            city: values.city,
            gender: values.gender || 'No especificado',
            address: values.address || 'No especificado',
            // email: user?.email || '',
            // avatar_url: user?.avatar_url || '', 

        }
        try {
            // hacer fetch de datos
            alert("Datos actualizados con éxito");
            console.log(data)
        } catch (error) {
            console.error("Error al actualizar datos:", error);
            alert("Hubo un error al actualizar los datos.");
        }
    }

    return (
        <FormProvider {...formPatient}>
            <form onSubmit={formPatient.handleSubmit(onSubmit)}>
                <FormField
                    control={formPatient.control}
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
                    control={formPatient.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Número de Télefono</FormLabel>
                            <FormControl>
                                <Input placeholder="+593"  {...field} />
                            </FormControl>
                            <FormDescription>
                                Por medio de este numero el Doctor podra ponerse en contacto si existe algun problema o inconveniente
                            </FormDescription>
                        </FormItem>
                    )}
                >
                </FormField>

                <FormField
                    control={formPatient.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ciudad</FormLabel>
                            <FormControl>
                                <Input placeholder="Santa Elena" {...field} />
                            </FormControl>
                            <FormDescription>
                                Selecciona la ciudad en la que resides
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

export default PatientForm