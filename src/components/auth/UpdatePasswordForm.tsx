'use client';
import { cn } from "@/lib/utils"
import { redirect, useRouter, useSearchParams} from 'next/navigation';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { EmailOtpType } from "@supabase/supabase-js";

export function UpdatePasswordForm() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();
    const supabase = createClient();
    const searchParams = useSearchParams();
  
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        const { error } = await supabase.auth.updateUser({
          password: password,
        })

        if (error) {
            setError('Ha ocurrido un error al actualizar la contraseña. Por favor, intenta de nuevo.');
        } else {
            setMessage('Contraseña actualizada exitosamente');
            setTimeout(() => {
                router.push('/auth/login');
            }, 3000);
        }
    };

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold text-[#7886C7]">Actualizar contraseña</h1>
                <p className="text-balance text-muted-foreground">
                    Ingresa tu nueva contraseña
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Nueva contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={error ? "border-red-500" : ""}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className={error ? "border-red-500" : ""}
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
                {message && <p className="text-sm text-green-500">{message}</p>}
              </div>
              <Button type="submit" className="w-full bg-[#7886C7] hover:bg-[#A9B5DF]">
                Actualizar contraseña
              </Button>
              <div className="text-center text-sm text-[#7886C7]">
                <Link href="/auth/login" className="underline underline-offset-4">
                    Volver al inicio de sesión
                </Link>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src="https://cdn.sanity.io/images/t64y86n0/production/d47fc36ca05580f9998c039ac6ed7e1aeacb8d3b-1018x1080.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}