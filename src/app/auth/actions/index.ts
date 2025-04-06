"use server"

import { createClient } from "@/lib/supabase/server";

export async function singInWithEmailAndPassword(data: {
    email: string;
    password: string;
}) {
    const supabase = await createClient();
    const result = await supabase.auth.signInWithPassword({ email: data.email, password: data.password});

    return result;
}

export async function singUpWithEmailAndPassword(data: {
    email: string;
    password: string;
}) {
    const supabase = await createClient();
    const result = await supabase.auth.signUp({ email: data.email, password: data.password, options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/auth/login`
    }});

    return result;
}