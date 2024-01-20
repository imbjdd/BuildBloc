'use client'

import { parseISO, format } from 'date-fns';
// no type declaration :'(
const {UilLink} = require('@iconscout/react-unicons')
import Link from 'next/link'

export default function HackathonCard ({ name, date_begin, url, themes } : {name: string, date_begin: string, url: string, themes: string[]}) {
  return (
    <div className="md:w-5/12 grow">
      <div className="align-middle items-center text-center dark:hover:bg-neutral-800 hover:bg-neutral-100 hover:outline-2 hover:outline-emerald-800 px-4 py-8 rounded-2xl h-full w-full">
        <div className="flex align-left">
          <div className="text-left">
            <h2 className="text-xl font-bold">{name}</h2>
            <h2 className="py-2 text-md font-semibold">{<time dateTime={date_begin}>{format(parseISO(date_begin), 'd LLLL')}</time>}</h2>
          </div>
          <div className="grow"></div>
          <a target="_blank" href={url}><div className="p-3 rounded-full bg-emerald-100"><UilLink size="24" color="#065F46" /></div></a>
        </div>
        <div className="flex items-center">
          <div className="flex flex-wrap gap-2">
          {themes.map(theme => { return (
            <div
              key={theme}
              className="p-2 h-fit dark:border-emerald-100 dark:text-emerald-100 font-bold border-2 border-emerald-800 text-emerald-800 rounded-full flex items-center "
            >
              <Link href={'/theme/'+theme} className="uppercase text-xs">{theme}</Link>
            </div>
          )})}
          </div>
          <div className="grow"></div>
          <Link href={'/hackathon/'+name}><div className="px-4 md:px-6 py-2 rounded-md bg-emerald-800 text-white text-md border-2 border-emerald-800">See More</div></Link>
        </div>
      </div>
    </div>
  );
}