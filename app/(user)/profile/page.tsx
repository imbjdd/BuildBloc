import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Button from '@/components/Button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply | BuildBloc - Find Local Hackathons',
}

export default function Login({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const sendData = async (formData: FormData) => {
    'use server'

    const name = formData.get('name') as string
    const theme = (formData.get('theme') as string).split(' ')
    const begindate = formData.get('begindate')
    const enddate = formData.get('enddate')
    const description = formData.get('description') as string
    const link = formData.get('link') as string
    const place = formData.get('place') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase
      .from('application')
      .insert({ name, theme, begindate, enddate, description, link, place })

    if (error) {
      return redirect('/profile?message=Could not send application')
    }

    return redirect('/profile?message=Application sent with success')
  }

  return (
    <div className="grow w-full h-full flex justify-center">
      <div className="absolute top-1/2 -translate-y-1/2 flex-1 flex flex-col w-full px-8 sm:max-w-2xl justify-center gap-2">
        <h1 className="text-3xl font-bold">Add Hackathon</h1>
        <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
          action={sendData}
        >
          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="text-md" htmlFor="name">
                Name
              </label>
              <input
                className="placeholder:text-neutral-600 dark:placeholder:text-neutral-300 w-full h-12 rounded-xl px-4 bg-neutral-100 dark:bg-neutral-800"
                name="name"
                placeholder="Hackathon2024"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="text-md" htmlFor="link">
                Link
              </label>
              <input
                className="placeholder:text-neutral-600 dark:placeholder:text-neutral-300  w-full h-12 rounded-xl px-4 bg-neutral-100 dark:bg-neutral-800"
                type="text"
                name="link"
                placeholder="https://example.com"
                required
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="text-md" htmlFor="begindate">
                Begin Date
              </label>
              <input
                className="placeholder:text-neutral-600 dark:placeholder:text-neutral-300  w-full h-12 rounded-xl px-4 bg-neutral-100 dark:bg-neutral-800"
                type="date"
                name="begindate"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="text-md" htmlFor="enddate">
                End Date
              </label>
              <input
                className="placeholder:text-neutral-600 dark:placeholder:text-neutral-300  w-full h-12 rounded-xl px-4 bg-neutral-100 dark:bg-neutral-800"
                type="date"
                name="enddate"
                required
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-1/2">
              <label className="text-md" htmlFor="theme">
                Theme
              </label>
              <input
                className="placeholder:text-neutral-600 dark:placeholder:text-neutral-300 w-full h-12 rounded-xl px-4 bg-neutral-100 dark:bg-neutral-800"
                type="text"
                name="theme"
                placeholder="Healthtech"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="text-md" htmlFor="place">
                Place
              </label>
              <input
                className="placeholder:text-neutral-600 dark:placeholder:text-neutral-300 w-full h-12 rounded-xl px-4 bg-neutral-100 dark:bg-neutral-800"
                type="text"
                name="place"
                placeholder="Paris, France"
                required
              />
            </div>
          </div>
          <label className="text-md" htmlFor="description">
            Description
          </label>
          <textarea
            className="placeholder:text-neutral-600 dark:placeholder:text-neutral-300 grow h-24 rounded-xl px-4 pt-2 bg-neutral-100 dark:bg-neutral-800"
            name="description"
            placeholder="Super hackathon"
            required
          />
          <Button text="Apply" onClick={null}/>
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
