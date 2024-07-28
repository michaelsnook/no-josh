import TopSection from './section-top'
import StatementSection from './section-statement'
import ReasonsSection from './section-reasons'

export default function Home() {
  return (
    <main className="relative">
      <header className="sticky left-0 right-0 top-0 z-50 bg-[#fef9ec] shadow-lg">
        <h1 className="mx-auto bg-gradient-to-r from-red-500 to-red-900 bg-clip-text py-8 text-center text-6xl font-extrabold uppercase text-transparent">
          No Genocide Josh
        </h1>
      </header>
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
          <p>
            Please fill out{' '}
            <a
              title="Google form to get involved with this coalition"
              className="underline"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeuJR58plXkagN9PByUvQZd9EWooyec7PfCwcfOYGkJd1SpRw/viewform"
            >
              this form
            </a>{' '}
            if so!
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
