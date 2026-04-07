import type { Metadata } from "next"
import RegisterForm from "@/components/auth/RegisterForm"

export const metadata : Metadata = {
    title: "CashTrackr - Crear Cuenta",
    description: "Crea una cuenta en CashTrackr para controlar tus finanzas personales de manera fácil y eficiente. Regístrate ahora y comienza a gestionar tus gastos e ingresos con nuestra aplicación intuitiva.",
    keywords: "crear cuenta, registro, finanzas personales, gestión de gastos, control de ingresos, aplicación de finanzas, CashTrackr"
} 

export default function RegisterPage() {
    
  return (
    <>
        <h1 className="font-black text-6xl text-purple-950" >Crear una cuenta</h1>
        <p className="text-3xl font-bold">y controla tus <span className="text-amber-500" >finanzas</span></p>
        <RegisterForm />
    </>
  )
}
