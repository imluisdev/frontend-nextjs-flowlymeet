'use client';
import { cn } from "@/lib/utils"
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function ConfirmAccountForm() {
    const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'no-token'>('loading');
    const router = useRouter();
    const searchParams = useSearchParams();
    const supabase = createClient();

    useEffect(() => {
        const confirmEmail = async () => {
            try {
                const token_hash = searchParams.get('token_hash');
                console.log(token_hash);
                if (!token_hash) {
                    setStatus('no-token');
                    return;
                }
                const { error, data }= await supabase.auth.verifyOtp({
                    token_hash: token_hash,
                    type: 'signup',
                });
                console.log(error);
                console.log(data.session);

                // if (error) {
                //     setStatus('error');
                // } else {
                //     setStatus('success');
                //     setTimeout(() => {
                //         router.push('/auth/login');
                //     }, 3000);
                // }
            } catch (error) {
                setStatus('error');
            }
        };

        confirmEmail();
    }, []);

    return (
        <div className={cn("flex flex-col gap-6")}>
            <Card className="overflow-hidden">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <div className="p-6 md:p-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold text-[#7886C7]">
                                    {status === 'loading' && 'Verificando tu cuenta...'}
                                    {status === 'success' && '¡Cuenta verificada!'}
                                    {status === 'error' && 'Error de verificación'}
                                    {status === 'no-token' && 'Verificación pendiente'}
                                </h1>
                                <p className="text-balance text-muted-foreground">
                                    {status === 'loading' && 'Por favor espera mientras verificamos tu cuenta.'}
                                    {status === 'success' && 'Tu cuenta ha sido verificada exitosamente. Serás redirigido al inicio de sesión.'}
                                    {status === 'error' && 'Ha ocurrido un error al verificar tu cuenta. Por favor, intenta de nuevo.'}
                                    {status === 'no-token' && 'Por favor, revisa tu correo electrónico y haz clic en el enlace de verificación que te hemos enviado.'}
                                </p>
                            </div>
                            {(status === 'error' || status === 'no-token') && (
                                <div className="text-center">
                                    <Link href="/auth/login">
                                        <Button className="bg-[#7886C7] hover:bg-[#A9B5DF]">
                                            Volver al inicio de sesión
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
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