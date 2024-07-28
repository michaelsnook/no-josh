import Image from 'next/image'
import Script from 'next/script'

export default function TopSection() {
  return (
    <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-[4%] md:grid-cols-11">
      <Script src="https://actionnetwork.org/widgets/v5/petition/tell-harris-democrats-no-genocide-josh?format=js&source=widget" />
      <div className="space-y-6 text-xl font-bold md:col-span-6 md:pt-4">
        <p className="text-2xl">
          Kamala Harris will assuredly be the new Democratic nominee, and now
          she needs to gain the trust of working-class, progressive, and young
          voters.
        </p>
        <p>
          It is in Harris&apos;s and the Democrats&apos; best interests to
          listen to their base and ensure that both their new VP pick and their
          platform support the majority of Democrats and Americans who want{' '}
          <span className="underline">
            social and economic justice for workers
          </span>
          and an{' '}
          <span className="underline">immediate ceasefire in Palestine</span>.
        </p>
        <p>
          Josh Shapiro has{' '}
          <span className="underline">
            compared peaceful protestors to KKK ralliers
          </span>
          , has{' '}
          <span className="underline">opposed a ceasefire in Palestine</span>,
          has{' '}
          <span className="underline">promoted private school vouchers</span>,
          and has{' '}
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
          width={1024}
          height={684}
          className="rounded-lg"
        />
      </div>
      <div
        id="can-petition-area-tell-harris-democrats-no-genocide-josh"
        className="max-md:mb-14 md:col-span-5"
      />
    </div>
  )
}
