import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Search from "@/components/Search";
import HackathonCard from "@/components/HackathonCard";
import { Metadata } from 'next'
import Footer from "@/components/Footer"; // Import Footer component

export const metadata: Metadata = {
  title: 'Search | SyncH - Find Local Hackathons',
}

export default async function Index({ params, searchParams }: { params: { slug: string, category: string }; searchParams: { page: string } }) {
  const cookieStore = cookies()

  const supabase = createClient(cookieStore);

  const db: Record<string, string> = {
    hackathon: 'list'
  };

  const element: string = db[params.category] || 'list';

  let { data: hackathons } = await supabase.from(element).select().ilike('name', '%'+ params.slug +'%')

  if(!hackathons) hackathons = []

  return (
    <main className="">
      <Search />

      <section className="py-8 mt-0">
      <div className="max-w-7xl mx-auto px-4 pb-4 flex items-center">
       <h1 className="text-3xl font-bold ">{ hackathons.length } Hackathon{ hackathons.length > 1 ? 's' : ''} Found</h1>
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
      <Footer /> {/* Use Footer component */}
    </main>
  )
}
