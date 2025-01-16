
import React from 'react'
import DoctorTable from '@/components/ui/doctor-table'


const DoctorsPage = async () => {
    const doctors = [
        {
            full_name: 'jair',
            description: 'sdasdasd',
            speciality: 'sdasd',
            city: 'sadasdad',
        },
        {
            full_name: 'jair',
            description: 'sdasdasd',
            speciality: 'sdasd',
            city: 'sadasdad',
        }

    ]
    console.log(doctors)

    const formatedDoctors = doctors.map(doctor => (
        {
            full_name: doctor.full_name,
            description: doctor.description,
            speciality: doctor.speciality,
            city: doctor.city,
        }
    ))




    return (
        <section className='container min-w-full mx-auto p-4'>
            <h1 className='font-bold text-2xl'>Doctores</h1>
            <DoctorTable data={formatedDoctors} />
        </section>
    )
}

export default DoctorsPage