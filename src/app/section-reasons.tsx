const blurbs = [
  {
    title:
      'Shapiro supported a GOP proposal to send $100 million of taxpayer dollars to private schools',
    body: 'Pennsylvania Gov. Josh Shapiro...forcefully put his weight behind a Republican-backed proposal to send $100 million to families for private school tuition and school supplies.',
    by: '',
    outlet: 'WHYY',
    link: 'https://whyy.org/articles/pennsylvanias-governor-josh-shapiro-school-choice/',
  },
  {
    title: 'Shapiro compared peaceful campus protestors to racist KKK ralliers',
    body: `We have to query whether or not we would tolerate [campus protests] if this were people dressed up in KKK outfits or KKK regalia making comments about people who are African-American in our communities.`,
    by: 'Josh Shapiro',
    outlet: 'Mediaite',
    link: 'https://www.mediaite.com/tv/completely-out-of-control-pennsylvania-governor-slams-pro-palestinian-protests-at-columbia-urges-school-to-restore-order/',
  },
  {
    title:
      'Shapiro’s office quietly settled a sexual harassment allegation against a top aide',
    body: 'The agreement has effectively created a wall of secrecy around the allegations against Mike Vereb, one of Shapiro’s most trusted staffers, and how the administration handled them. Vereb resigned late last month after a copy of a complaint signed by Vereb’s accuser began circulating in the Capitol.',
    by: '',
    outlet: `WHYY`,
    link: 'https://whyy.org/articles/pennsylvania-josh-shapiro-mike-vereb-sexual-harassment-settlement/',
  },
  {
    title:
      'Shapiro has continually opposed a ceasefire and has censored his own staff from speaking up about Gaza',
    body: `Amid protests over the war in Gaza, Gov. Josh Shapiro has quietly revised his administration’s code of conduct to bar state employees from engaging in “scandalous or disgraceful” behavior — actions that could lead to discipline or termination.`,
    by: '',
    outlet: 'Spotlight PA',
    link: 'https://www.spotlightpa.org/news/2024/05/pennsylvania-josh-shapiro-israel-gaza-protests-palestine-executive-order/',
  },
]

export default function ReasonsSection() {
  return (
    <div className="mx-auto max-w-[720px] sm:pb-12 sm:font-normal">
      <h2 className="mb-8 text-4xl font-bold text-blue-900">
        Why not Josh Shapiro?
      </h2>
      <div className="grid gap-10 text-xl sm:grid-cols-2 sm:gap-x-[4%]">
        {blurbs.map(b => {
          return (
            <div
              key={b.link}
              className="bg-beige rounded-lg px-[4%] py-6 sm:px-6"
            >
              <h3 className="mb-4 font-bold">{b.title}</h3>
              <div className="rounded-lg bg-white p-4 outline outline-1">
                <p>&ldquo;{b.body}&rdquo;</p>

                <p className="align-end text-end">
                  &nbsp;
                  {b.by ? <>&ndash; {b.by}</> : null}
                </p>
                <p>
                  <a className="text-blue-600 underline" href={b.link}>
                    {b.outlet}
                  </a>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
