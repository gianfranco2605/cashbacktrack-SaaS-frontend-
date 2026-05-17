import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CashTrackr - Olvidé mi contraseña',
  description:
    'Olviddé mi contraseña en CashTrackr, recupera tu acceso fácilmente. ',
  keywords: 'Olvidé mi contraseña, recuperar contraseña',
};

export default function ForgotPasswordPage() {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">
        Olvidaste tu contraseña?
      </h1>
      <p className="text-3xl font-bold">
        Aqui puedes <span className="text-amber-500">restablecerla</span>
      </p>
      <ForgotPasswordForm />

      <nav className="mt-10 flex flex-col space-y-4">
        <Link href="/auth/register" className="text-center text-gray-500 ">
          ¿No tienes cuenta? Crea una
        </Link>

        <Link href="/auth/login" className="text-center text-gray-500 ">
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
      </nav>
    </>
  );
}
