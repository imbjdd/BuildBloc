import NextLogo from './NextLogo'
import SupabaseLogo from './SupabaseLogo'
import DarkModeToggle from "@/components/Toggle";
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import AuthButton from '@/components/AuthButton'
import Link from 'next/link'

export default function Header() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()


  return (
      <div className="bg-gradient-to-b pb-8">
        <div className="max-w-7xl mx-auto flex gap-4 pt-8 items-center px-4 pt-10">
          <div className="flex items-center">
            <Link href="/">Home</Link>
          </div>
          <div className="flex items-center">
            <p>Blog</p>
          </div>
          <div className="flex-grow"></div>
          <DarkModeToggle/>
          <div className="">
            {isSupabaseConnected && <AuthButton />}
          </div>
        </div>
      </div>
  )
}
