import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { useForm } from "react-hook-form"
import { Zlib } from "zlib"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import DoctorForm from "@/app/dashboard/doctor/doctorForm"
import PatientForm from "@/app/dashboard/patient/patientForm"





export function SelectUserTabs() {
  return (
    <Tabs defaultValue="doctor" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="doctor">Doctor</TabsTrigger>
        <TabsTrigger value="patient">Paciente</TabsTrigger>
      </TabsList>
      <TabsContent value="doctor">
        <Card>
          <CardHeader>
            <CardTitle>Datos de perfil</CardTitle>
            <CardDescription>
              Estos datos son para tu perfil de Doctor
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <DoctorForm />
          </CardContent>
        </Card>

      </TabsContent>


      <TabsContent value="patient">
        <Card>
          <CardHeader>
            <CardTitle>Datos de Paciente</CardTitle>
            <CardDescription>
              Estos son los datos de tu perfil de paciente
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <PatientForm/>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}