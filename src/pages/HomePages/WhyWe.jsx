import React from 'react'
import Buttons from '../../components/Buttons'

const reasons = [
  {
    icon: '☕',
    title: 'Supreme Beans',
    desc: 'Beans that provides great taste',
  },
  {
    icon: '⭐',
    title: 'High Quality',
    desc: 'We provide the highest quality',
  },
  {
    icon: '🔥',
    title: 'Extraordinary',
    desc: 'Coffee like you have never tasted',
  },
  {
    icon: '💰',
    title: 'Affordable Price',
    desc: 'Our coffee prices are easy to afford',
  },
]

const WhyWe = () => {
  return (
    <section className="py-20 px-6 md:px-10 text-center bg-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-[var(--coffee-color)] text-3xl md:text-4xl font-bold">Why are we different?</h2>
        <p className="common-text mt-3 mb-10 text-gray-600">We don't just make your coffee, we make your day!</p>

        <div className="grid gap-6 md:grid-cols-4">
          {reasons.map((item, idx) => (
            <article key={idx} className="rounded-xl border border-[#f1d3a4] bg-[#fff6e9] p-6 text-left shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--btn-primary)] text-xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[var(--coffee-color)] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <p className="common-text text-gray-500">Great ideas start with great coffee, Let’s help you achieve that</p>
          <h3 className="text-2xl md:text-3xl font-bold mt-3 text-[var(--coffee-color)]">Get started today.</h3>
          <div className="mt-6 flex items-center justify-center">
            <Buttons
              btnName="Join Us"
              classes="cursor-pointer bg-[var(--btn-primary)] text-black px-8 py-2 rounded-full text-[16px] font-bold hover:bg-[var(--btn-primary-hover)] transition"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyWe