import { Metadata } from 'next'
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: 'SyncH - Find Local Hackathons',
}

export default async function Index() {
  return (
    <main className="">
      <section className="py-8 mt-0">
        <div className="max-w-7xl mx-auto px-4 pb-4 flex items-center">
            <h1 className="text-3xl font-bold ">Blog</h1>
            <div className="ml-4 h-0.5 grow bg-neutral-100 dark:bg-neutral-800"></div>
        </div>
        <div className="px-4 max-w-7xl mx-auto">
            <p>Coming soon.</p>
        </div>
      </section>

      <Newsletter />

      <Footer />
    </main>
  )
}
