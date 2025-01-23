import AdminDashboard from '@/components/AdminDashboard'
import DoctorDashboard from '@/components/DoctorDashboard'
import PatientDashboard from '@/components/PatientDashboard'
import React from 'react'





const userType: string = 'doctor'

const DashboardPage = () => {
  if (userType === 'admin') return (<AdminDashboard />)
  
  if (userType === 'doctor') return <DoctorDashboard/>
  
  if (userType === 'patient') return <PatientDashboard/>


}

export default DashboardPage