import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
  return (
    <main className="relative">
      <Script src="https://actionnetwork.org/widgets/v5/petition/tell-harris-democrats-no-genocide-josh?format=js&source=widget" />
      <header className="sticky left-0 right-0 top-0 z-50 bg-[#fef9ec] shadow-lg">
        <h1 className="mx-auto bg-gradient-to-r from-red-500 to-red-800 bg-clip-text py-10 text-center text-6xl font-extrabold uppercase text-transparent">
          No Genocide Josh
        </h1>
      </header>
      <div className="mx-auto max-w-[900px] py-10">
        <section className="grid gap-6 md:grid-cols-11">
          <div className="col-span-6 space-y-6 text-xl font-bold">
            <p className="text-2xl">
              Kamala Harris will assuredly be the new Democratic nominee, and
              now she needs to gain the trust of working-class, progressive, and
              young voters.
            </p>
            <p>
              It is in Harris&apos;s and the Democrats&apos; best interests to
              listen to their base and ensure that both their new VP pick and
              their platform support the majority of Democrats and Americans who
              want{' '}
              <span className="underline">
                social and economic justice for workers
              </span>
              and an{' '}
              <span className="underline">
                immediate ceasefire in Palestine
              </span>
              .
            </p>
            <p>
              Josh Shapiro has{' '}
              <span className="underline">
                compared peaceful protestors to KKK ralliers
              </span>
              , has{' '}
              <span className="underline">
                opposed a ceasefire in Palestine
              </span>
              , has{' '}
              <span className="underline">
                promoted private school vouchers
              </span>
              , and has{' '}
              <span className="underline">
                covered up a sexual harassment scandal
              </span>{' '}
              in his own office.
            </p>
            <p>
              Tell Kamala and the Democrats now: <br />{' '}
              <span className="text-4xl underline">
                Say no to Genocide Josh Shapiro for Vice President!
              </span>
            </p>
            <Image
              src="/img/protest.png"
              alt="Protestors oppose the genocide in gaza"
              width={2048}
              height={1368}
            />
          </div>
          <div
            id="can-petition-area-tell-harris-democrats-no-genocide-josh"
            className="col-span-5"
          />
        </section>
        <section className="mx-auto my-10 max-w-[720px] space-y-4">
          <p className="text-2xl font-bold">
            Read the full statement below and at{' '}
            <Link className="underline" href="https://tinyurl.com/ngjmedia">
              this link
            </Link>
            .
          </p>
          <div className="text-opacicty-80 space-y-4 rounded-lg border border-gray-900 bg-white p-10 font-bold shadow-[1px_1px_0px_0px_rgba(100,100,100),_3px_3px_0px_0px_rgba(100,100,100),_5px_5px_0px_0px_rgba(100,100,100),_7px_7px_0px_0px_rgba(100,100,100),_9px_9px_0px_0px_rgba(100,100,100)]">
            <p>
              President Biden did the right thing by dropping out. Aside from
              his health concerns, his record on international and economic
              issues has left much to be desired.
            </p>
            <p>
              Vice President Harris will assuredly be the new nominee, and now
              she needs to gain the trust of working-class, progressive, and
              young voters. She can start by committing to support an immediate
              and permanent ceasefire in Gaza and an end to the illegal
              occupation of Palestine. Israel is conducting an ongoing genocide
              and we must do everything in our power to stop it. Harris must
              also commit to following American and international law by ending
              illegal weapons sales to Israel as well as increasing the amount
              of foreign aid going into Gaza and the West Bank.
            </p>
            <p>
              But winning back the trust of disaffected voters doesn’t end with
              replacing the top of the ticket. Selecting a Vice Presidential
              nominee with anti-Palestinian and pro-war views will depress
              turnout among Muslim, Arab-American, and young voters, and greatly
              reduce the excitement that comes with a new nominee. Additionally,
              the new Democratic ticket must strongly support labor’s right to
              organize, adequate funding and oversight of public schools, a
              functional and humane immigration system, and robust protections
              for queer and reproductive rights. A VP nominee who has failed to
              support the rights of workers and immigrants, diverted public
              education funding toward for-profit entities, or restricted access
              to reproductive or gender-affirming care would risk losing the
              support of millions of working-class voters, including those in
              swing states crucial to securing victory. To that end, Kamala
              Harris and her VP nominee must also affirm their support for
              President Biden’s recently announced plans to offer relief for
              working-class Americans struggling with the high costs of
              education, housing, healthcare, and childcare.
            </p>
            <p>
              The left must unite over the next four weeks to ensure that
              America doesn’t fall down the path of fascism, authoritarianism,
              and runaway corporatism. It is in Harris' and the Democrats' best
              interests to listen to their base and ensure that both their new
              VP pick and their platform support the majority of Democrats and
              Americans who want social and economic justice for workers and an
              immediate ceasefire in Palestine.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
