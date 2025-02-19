'use client';

import { useState } from 'react';
import { singInWithEmailAndPassword } from '../auth/actions';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await singInWithEmailAndPassword({ email, password });
    console.log('Login attempt with:', { email, password });

    if (error) {
      console.error('Error logging in:', error);
    } else {
      console.log('Logged in successfully:', data);
      router.push('/dashboard');
    }
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className='w-full flex flex-col items-center bg-[#FFF2F2] min-h-screen py-10'>
      <h1 className='text-[#7886C7] text-3xl font-bold mb-8'>Login</h1>
      <form onSubmit={handleSubmit} className='flex flex-col w-[400px] gap-5 bg-white p-8 rounded-lg shadow-md'>
          <label htmlFor="email" className='text-[#7886C7] font-medium'>Email</label>
          <input
            className='h-10 w-full rounded-md border border-[#A9B5DF] focus:outline-none focus:border-[#7886C7] px-3'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password" className='text-[#7886C7] font-medium'>Password</label>
          <input
            className='h-10 w-full rounded-md border border-[#A9B5DF] focus:outline-none focus:border-[#7886C7] px-3'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <button 
          className='h-10 bg-[#7886C7] text-white rounded-md hover:bg-[#A9B5DF] transition-colors duration-300' 
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
}