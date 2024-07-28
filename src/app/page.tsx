import TopSection from './section-top'
import StatementSection from './section-statement'
import ReasonsSection from './section-reasons'
import Header from './header'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <section className="space-y-10 pt-6">
        <TopSection />
        <StatementSection />
      </section>
      <section className="bg-powder">
        <ReasonsSection />
      </section>
      <section>
        <div className="mx-auto max-w-[720px] space-y-4 text-xl">
          <h2 className="text-4xl font-bold">How can I help?</h2>
          <p>
            Are you an individual or organization willing to join a coalition of
            groups to publicly pressure the Kamala Harris 2024 campaign to not
            select Josh Shapiro?
          </p>
          <p className="pt-6">
            <a
              title="Google form to get involved with this coalition"
              className="bg-blue hover:bg-blue-darker rounded-lg px-4 py-3 text-white hover:underline"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeuJR58plXkagN9PByUvQZd9EWooyec7PfCwcfOYGkJd1SpRw/viewform"
            >
              Click Here to Get Involved
            </a>
          </p>
        </div>
      </section>
      <section className="bg-blue">
        <footer className="mx-auto max-w-[720px] space-y-4 text-center">
          <p className="font-bold">Built by Concerned Citizens</p>
          <p>
            Twitter/X:{' '}
            <a href="https://x.com/nogenocidejosh" className="underline">
              @nogenocidejosh
            </a>
            <br />
            email:{' '}
            <a href="mailto:dropoutforthepeople@gmail.com">
              dropoutforthepeople@gmail.com
            </a>
          </p>
        </footer>
      </section>
    </main>
  )
}
