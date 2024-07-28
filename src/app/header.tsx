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
      <span ref={ref} className="bg-beige m-0 h-4 p-0">
        &nbsp;
      </span>
      <header
        className={`bg-beige sticky left-0 right-0 top-0 z-50 ${inView === false ? 'shadow-lg' : ''}`}
      >
        <h1
          className={`mx-auto bg-gradient-to-r from-red-500 to-red-900 bg-clip-text ${inView ? 'pb-8' : 'mb-4 pb-4'} pt-4 text-center text-6xl font-extrabold uppercase text-transparent`}
        >
          No Genocide Josh
        </h1>
      </header>
    </>
  )
}
