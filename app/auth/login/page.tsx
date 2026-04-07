
import LoginForm from "@/components/auth/LoginForm"
import type { Metadata } from "next"

export const metadata : Metadata = {
    title: "CashTrackr - Iniciar sesion",
    description: "Inicia sesión en tu cuenta de CashTrackr para acceder a tus finanzas personales y gestionar tus gastos e ingresos de manera eficiente.",
    keywords: "crear cuenta, registro, finanzas personales"
} 

export default function LoginPage() {
    
  return (
    <>
        <h1 className="font-black text-6xl text-purple-950" >Crear una cuenta</h1>
        <p className="text-3xl font-bold">y controla tus <span className="text-amber-500" >finanzas</span></p>
        <LoginForm />
    </>
  )
}
