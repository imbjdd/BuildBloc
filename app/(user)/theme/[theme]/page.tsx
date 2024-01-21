import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import Search from "@/components/Search";
import HackathonCard from "@/components/HackathonCard";
import { Metadata } from 'next'
import Footer from "@/components/Footer"; // Import Footer component
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: 'Search | BuildBloc - Find Local Hackathons',
}

export default async function Index({ params }: { params: { theme: string } }) {
  const cookieStore = cookies()

  const supabase = createClient(cookieStore);

  let { data: hackathons } = await supabase.from('list').select().contains('theme', [params.theme])

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
            {hackathons.length === 0 ? (
                  <p>No hackathons found. Send us a mail if you are interested !</p>
                ) : (
                  hackathons.map(hackathon => { return (
                    <HackathonCard key={hackathon.id} name={hackathon.name} date_begin={hackathon.date_begin} url={hackathon.url} themes={hackathon.theme}/>
                  )})
                )}
                {hackathons.length%2 === 1 ? (<div className='hidden md:block grow w-5/12'></div>) : (<div></div>)}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer /> {/* Use Footer component */}
    </main>
  )
}
