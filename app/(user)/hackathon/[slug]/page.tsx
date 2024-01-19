import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { parseISO, format } from 'date-fns';
import { Metadata } from 'next'
import Footer from "@/components/Footer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
const {UilCalender} = require('@iconscout/react-unicons')
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: 'Search | SyncH - Find Local Hackathons',
}

export default async function Index({ params }: { params: { slug: string, category: string } }) {
  const cookieStore = cookies()

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
          <Alert>
            <UilCalender className="h-4 w-4" />
            <AlertTitle>
              <div className="flex gap-2">
                <time dateTime={hackathon.date_begin}>{format(parseISO(hackathon.date_begin), 'd LLLL')}</time>- 
                <time dateTime={hackathon.date_end}>{format(parseISO(hackathon.date_end), 'd LLLL')}</time>
              </div>
            </AlertTitle>
            <AlertDescription>
              This event will last two days!
            </AlertDescription>
          </Alert>
          <h2 className='text-xl font-bold mt-8'>Description</h2>
          <p className="mt-2">{ hackathon.description }</p>
            <h2 className='text-xl font-bold mt-8'>Location</h2>
            <p className="mt-2">{ hackathon.city }, { hackathon.country }</p>
            <h2 className='text-xl font-bold mt-8'>URL</h2>
                  <a href={hackathon.url} target="_blank" rel="noopener noreferrer" className="mt-2">{hackathon.url}</a>
                </div>
            </section>

      <Newsletter />

      <Footer />
    </main>
  )
}
