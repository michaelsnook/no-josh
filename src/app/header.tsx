'use client'

import { useInView } from 'react-intersection-observer'

export default function Header() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    initialInView: true,
    fallbackInView: false,
  })
  return (
    <>
      <span ref={ref} className="bg-beige m-0 flex h-4 w-full p-0">
        &nbsp;
      </span>
      <header
        className={`${inView === false ? 'shadow-lg' : ''} bg-beige sticky left-0 right-0 top-0 z-50 mb-[clamp(6px,1.5vw,1rem)] pb-[clamp(6px,1.5vw,1rem)] pt-[clamp(6px,1.5vw,1rem)]`}
      >
        <h1 className="mx-auto max-w-[660px] bg-gradient-to-r from-red-500 to-red-900 bg-clip-text text-center text-[min(9vw,4rem)] font-extrabold uppercase text-transparent">
          No Genocide Josh
        </h1>
      </header>
    </>
  )
}
