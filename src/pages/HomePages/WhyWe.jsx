import Buttons from '../../components/Buttons'
import coffeeBeans from '../../assets/images/coffee-beans.png'
import highQuality from '../../assets/images/high-quality.png'
import coffeeCup from '../../assets/images/coffee-cup.png'
import affordablePrice from '../../assets/images/affordable-price.png'
const reasons = [
  {
    icon: coffeeBeans,
    title: 'Supreme Beans',
    desc: 'Beans that provides great taste',
  },
  {
    icon: highQuality,
    title: 'High Quality',
    desc: 'We provide the highest quality',
  },
  {
    icon: coffeeCup,
    title: 'Extraordinary',
    desc: 'Coffee like you have never tasted',
  },
  {
    icon: affordablePrice,
    title: 'Affordable Price',
    desc: 'Our coffee prices are easy to afford',
  },
]

const WhyWe = () => {
  return (
    <section className="py-20 px-6 md:px-10 text-center bg-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-[var(--coffee-color)]">Why are we different?</h1>
        <p className="common-text mt-3 mb-10 text-gray-600">We don't just make your coffee, we make your day!</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 sm:w-[80%] mx-auto md:w-full">
          {reasons.map((item, idx) => (
            <article key={idx} className="hover:bg-[#FFEED8] border border-gray-200 p-8 text-center shadow-sm">
              <img src={item.icon} alt={item.title} className="mb-4 inline-flex h-14 w-14 items-center justify-center" />
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