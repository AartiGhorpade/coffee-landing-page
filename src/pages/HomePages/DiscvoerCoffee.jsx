import coffeeImg from '../../assets/images/discover_coffee.png'
import Buttons from '../../components/Buttons'
import coffee_blast from '../../assets/images/coffee_blast.png'
const DiscvoerCoffee = () => {
    return (
        <div className='grid md:grid-cols-2 gap-10 px-6 md:px-10 max-lg:py-10 relative'>
            <div className="flex items-center">
                <div>
                    <h1 className='text-[var(--coffee-color)]'>Discover Our Coffee</h1>
                    <p className="lg:w-[80%] common-text">Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
                    <Buttons classes="mt-6 cursor-pointer bg-[var(--btn-primary)] text-black px-5 py-1 rounded-full text-[16px] xl:text-[20x] 3xl:text-[22px] font-bold hover:bg-[var(--btn-primary-hover)] transition" btnName="Learn More" />
                </div>
            </div>
            <div className="hidden md:block">
                <img src={coffeeImg} alt="Discover Coffee" className='w-full' />
            </div>
            <div className="absolute -bottom-32 md:-bottom-20 left-0 w-full">
                <img src={coffee_blast} alt="Discover Coffee" />
            </div>
        </div>
    )
}   

export default DiscvoerCoffee