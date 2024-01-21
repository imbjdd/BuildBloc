import { Metadata } from 'next'
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: 'BuildBloc - Find Local Hackathons',
}

export default async function Index() {
  return (
    <main className="">
      <section className="py-8 mt-0">
        <div className="max-w-7xl mx-auto px-4 pb-4 flex items-center">
            <h1 className="text-3xl font-bold ">About</h1>
            <div className="ml-4 h-0.5 grow bg-neutral-100 dark:bg-neutral-800"></div>
        </div>
        <div className="px-4 max-w-7xl mx-auto">
            <p>BuildBloc is a project that aims to centralize all the hackathons in France. It is a project that is still in development, and we are looking for people to help us develop it. If you are interested, please contact us at <a href="mailto:hello@bjdd.me"><span className="font-bold">E-mail</span></a>.</p>
        </div>
      </section>

      <Newsletter />

      <Footer />
    </main>
  )
}
