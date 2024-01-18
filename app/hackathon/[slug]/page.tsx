import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import Dropdown from "@/components/Dropdown";
import Header from "@/components/Header";
import Search from "@/components/Search";
import { redirect } from 'next/navigation'
import HackathonCard from "@/components/HackathonCard";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search | SyncH - Find Local Hackathons',
}

export default async function Index({ params, searchParams }: { params: { slug: string, category: string }; searchParams: { page: string } }) {
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

  const supabase = createClient(cookieStore)

  // decode url
  const hackathonName = decodeURIComponent(params.slug)
 
  let { data: hackathons, error } = await supabase.from('list').select().eq('name', hackathonName).limit(1)

  if(!hackathons) hackathons = []
  const hackathon = hackathons[0]

  // there is no hackathon, it's sad
  if(!hackathon) redirect('/')

  return (
    <main className="">
      <section className="py-8 mt-0">
		<div className="max-w-7xl mx-auto px-4 pb-4 flex items-center">
			<h1 className="text-3xl font-bold ">{ hackathon.name }</h1>
			<div className="ml-4 h-0.5 grow bg-neutral-100 dark:bg-neutral-800"></div>
		</div>
		<div className="px-4 max-w-7xl mx-auto">
			<div className="pt-2 flex gap-6 flex-wrap">
				{hackathons.map(hackathon => { return (
					<HackathonCard key={hackathon.id} name={hackathon.name} date_begin={hackathon.date_begin} url={hackathon.url} themes={hackathon.theme}/>
				)})}
			</div>
        </div>
      </section>

        <div className="hidden md:block mb-8 max-w-7xl mx-auto px-4 flex">
          <div className="w-full">
            <Image
              alt="Bannière - Join the community"
              src="/banner.jpg"
              width={1214}
              height={236}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>

      <footer className="w-full border-t border-t-foreground/10 dark:border-neutral-800 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{' '}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Unicorn
          </a>
        </p>
      </footer>
    </main>
  )
}
