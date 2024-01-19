import * as React from "react"

import { cn } from "@/lib/utils"
//import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const signIn = async (formData: FormData) => {
    "use server"
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `/auth/callback`,
        },
    })

    console.log(data, error)

    if (error) {
      return redirect('/register?message=We got an error')
    }

    return redirect('/')
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form action={signIn}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              name="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              name="password"
              placeholder="********"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
            />
          </div>
          <Button>
            {/*isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )*/}
            Sign Up with Email
          </Button>
        </div>
      </form>
    </div>
  )
}
