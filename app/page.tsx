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
  title: 'SyncH - Find Local Hackathons',
}

export default async function Index() {
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

  const supabase = createClient(cookieStore);

  const todayDate =  (new Date()).toISOString().split('T')[0]

  let { data: hackathons } = await supabase
    .from("list")
    .select()
    .filter('date_end', 'gte', todayDate)

  if(!hackathons) hackathons = []

  if(hackathons.length%2 === 1) {
    hackathons.push()
  }

  const users = Array(4).fill({
    avatar: 'https://bjdd.me/picture.jpg',
    name: 'Bjdd'
  })

  return (
    <main className="">
      <Search />

      <section className="py-8 mt-0">
      <div className="max-w-7xl mx-auto px-4 pb-4 flex items-center">
       <h1 className="text-3xl font-bold ">Open Hackathons in France 🧭</h1>
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

      <div className="max-w-7xl mx-auto px-4 pb-4 flex items-center">
       <h1 className="text-3xl font-bold ">Top Builders 🏗️</h1>
       <div className="ml-4 h-0.5 grow bg-neutral-100 dark:bg-neutral-800"></div>
      </div>
      <div className="flex flex-nowrap overflow-hidden">
       <div className="inline-block pt-2 flex flex-nowrap">
          {users.map(user => { return (
            <div key={user.name} className="relative flex py-2 flex-col rounded-xl overflow-hidden slide no-wrap">
              <Image
                src="https://bjdd.me/picture.jpg"
                height={200}
                width={200}
                className="w-96 grayscale brightness-50 max-w-fit rounded-xl mr-2 md:mr-6"
                alt={`Profile picture of ${user.name}`}
              />
              <div className="absolute text-white bottom-8 left-4 font-bold">{user.name}</div>
            </div>
          )})}
       </div>
       <div className="inline-block pt-2 flex flex-nowrap">
          {users.map((user,i) => { return (
            <div key={i} className="relative flex py-2 flex-col rounded-xl overflow-hidden slide no-wrap">
              <Image
                src="https://bjdd.me/picture.jpg"
                height={200}
                width={200}
                className="w-96 grayscale brightness-50 max-w-fit rounded-xl mr-2 md:mr-6"
                alt={`Profile picture of ${user.name}`}
              />
              <div className="absolute text-white bottom-8 left-4 font-bold">{user.name}</div>
            </div>
          )})}
       </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 my-8 flex items-center">
       <h1 className="text-3xl font-bold ">Explore Projects 🦄</h1>
       <div className="ml-4 h-0.5 grow bg-neutral-100 dark:bg-neutral-800"></div>
      </div>

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
