import React from 'react'
import coffee_1 from "../../assets/images/coffee_1.png"
import coffee_2 from "../../assets/images/coffee_2.png"
import coffee_3 from "../../assets/images/coffee_3.png"
import coffee_4 from "../../assets/images/coffee_4.png"
import Buttons from '../../components/Buttons'

const NewBlends = () => {
    const coffeeData = [
        {
            imgSrc: coffee_1,
            title: "Cappuccino",
            description: "Coffee 50% | Milk 50%",
            price: "$8.50"
        },
        {
            imgSrc: coffee_2,
            title: "Chai Latte",
            description: "Coffee 50% | Milk 50%",
            price: "$8.50"
        },
        {
            imgSrc: coffee_3,
            title: "Macchiato",
            description: "Coffee 50% | Milk 50%",
            price: "$8.50"
        },
        {
            imgSrc: coffee_4,
            title: "Expresso",
            description: "Coffee 50% | Milk 50%",
            price: "$8.50"
        }
    ];
    return (
        <div className='text-center max-md:mt-14 py-20 px-6 md:px-10 relative'>
            <h1 className='text-[var(--coffee-color)]'>Enjoy a new blend of coffee style</h1>
            <p className="common-text">Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>

            <div className="grid md:grid-cols-2 sm:w-[80%] mx-auto lg:w-full lg:grid-cols-4 gap-8 max-md:gap-y-14 mt-12 relative">
                {coffeeData.map((coffee, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden pb-5">
                        <img src={coffee.imgSrc} alt={coffee.title} className="w-full h-50" />
                        <div className="p-5">
                            <h3 className="text-lg font-bold text-[var(--coffee-color)]">{coffee.title}</h3>
                            <p className="text-gray-600 my-2">{coffee.description}</p>
                            <p className="text-xl font-bold text-[var(--btn-primary)]">{coffee.price}</p>
                        </div>
                        <Buttons classes="absolute lg:-bottom-4 ml-[-50px] cursor-pointer bg-[var(--btn-primary)] text-black px-4 py-2 rounded-full text-[14px] font-bold hover:bg-[var(--btn-primary-hover)] transition" btnName="Order Now" />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default NewBlends