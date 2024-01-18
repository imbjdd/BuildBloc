import { headers, cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Button from '@/components/Button'
import Button2 from '@/components/Button2'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In | SyncH - Find Local Hackathons',
}

export default function Login({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const signIn = async (formData: FormData) => {
    'use server'

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    return redirect('/')
  }

  const signUp = async (formData: FormData) => {
    'use server'

    const origin = headers().get('origin')
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    return redirect('/login?message=Check email to continue sign in process')
  }

  return (
    <div className="grow w-full h-full flex justify-center">
      <div className="absolute top-1/2 -translate-y-1/2 flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
          action={signIn}
        >
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="placeholder:text-neutral-600 dark:placeholder:text-neutral-300 grow h-12 rounded-xl px-4 bg-neutral-100 dark:bg-neutral-800"
            name="email"
            placeholder="you@example.com"
            required
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="placeholder:text-neutral-600 dark:placeholder:text-neutral-300 grow h-12 rounded-xl px-4 bg-neutral-100 dark:bg-neutral-800"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <Button text="Sign In" onClick={null} />
          <Button2 text="Sign Up" formAction={signUp} onClick={null}/>
          {searchParams?.message && (
            <p className="text-red-400">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
