'use client';
import { ResetPasswordForm } from "@/components/auth/reset-password/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10 bg-muted">
      <div className="w-full max-w-sm md:max-w-3xl">
        <ResetPasswordForm />
      </div>
    </div>
  )
}