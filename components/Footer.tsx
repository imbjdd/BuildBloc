import Link from 'next/link'

export default function Footer () {
  return (
    <footer className="border-t border-t-foreground/10 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 w-full p-8 flex">
        <div className="grow">
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
        </div>
        <div className="gap-4 flex flex-row text-left">
          <Link href="/">Blog</Link>
          <a href="https://atom-caution-eb6.notion.site/aa6c615237a24b10a3b9a840a8eda931?v=64eef0256f2c49b5a7be3871165db388&pvs=4" target='_blank'>Roadmap</a>
          <a href="https://github.com/imbjdd/SyncH/" target='_blank'>Source</a>
        </div>
      </div>
    </footer>
  );
}