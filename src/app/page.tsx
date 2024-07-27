import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Script src="https://actionnetwork.org/widgets/v5/petition/tell-harris-democrats-no-genocide-josh?format=js&source=widget" />
        <div
          id="can-petition-area-tell-harris-democrats-no-genocide-josh"
          className="w-full"
        ></div>
      </div>
    </main>
  )
}
