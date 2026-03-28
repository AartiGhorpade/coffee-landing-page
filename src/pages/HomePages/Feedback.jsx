import React, { useState } from 'react';
import coffeeBlastLeft from '../../assets/images/coffee_blast_top.png';
import coffeeBlastRight from '../../assets/images/coffee_blast_right.png';
import userImg from '../../assets/images/user.png';

const testimonials = [
    {
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
        name: 'Jonny Thomas',
        role: 'Project Manager',
        img: userImg,
    },
    {
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
        name: 'Sarah Lee',
        role: 'Coffee Enthusiast',
        img: userImg,
    },
    {
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
        name: 'Michael Brown',
        role: 'Designer',
        img: userImg,
    },
];

const Feedback = () => {
    const [current, setCurrent] = useState(0);
    const total = testimonials.length;

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
    };
    const handleNext = () => {
        setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    };

    const { text, name, role, img } = testimonials[current];

    return (
        <section className="relative py-16 px-4 md:px-0 bg-[#fff7ed] overflow-hidden">
            {/* Title */}
            <div className="text-center mb-10">
                <h2 className="text-[var(--coffee-color)] font-bold text-3xl md:text-4xl xl:text-5xl mb-2">Our coffee perfection feedback</h2>
                <p className="text-gray-600 text-base md:text-lg">Our customers has amazing things to say about us</p>
            </div>

            {/* Feedback Card */}
            <div className="max-lg:w-[80%] max-w-3xl relative mx-auto bg-white border border-[#f9c06a] rounded-lg shadow-md px-6 md:px-12 py-10 text-center z-10">
                {/* Quotation mark */}
                <div className="absolute left-6 top-6 text-4xl text-[var(--coffee-color)] select-none">&ldquo;</div>

                {/* Feedback text */}
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                    {text}
                </p>

                {/* Navigation arrows */}
                <div className="absolute -left-[30px] top-1/2 -translate-y-1/2">
                    <button
                        className="bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hover)] text-black cursor-pointer w-12 h-12 rounded-lg flex items-center justify-center shadow-md focus:outline-none"
                        onClick={handlePrev}
                        aria-label="Previous testimonial"
                    >
                        <span className="text-2xl">&#8592;</span>
                    </button>
                </div>
                <div className="absolute -right-[30px] top-1/2 -translate-y-1/2">
                    <button
                        className="bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hover)] text-black cursor-pointer w-12 h-12 rounded-lg flex items-center justify-center shadow-md focus:outline-none"
                        onClick={handleNext}
                        aria-label="Next testimonial"
                    >
                        <span className="text-2xl">&#8594;</span>
                    </button>
                </div>

                {/* User info */}
                <div className="mt-14 flex flex-col items-center">
                    <div className="font-bold text-[var(--coffee-color)] text-lg">{name}</div>
                    <div className="text-gray-500 text-sm mb-10">{role}</div>
                    <div className="w-20 h-20 absolute -bottom-[50px] mb-2 mx-auto">
                        {/* Placeholder for user image */}
                        {img ? (
                            <img src={img} alt={name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-gray-300" />
                        )}
                    </div>
                </div>
            </div>
            <img src={coffeeBlastLeft} alt="" className="hidden md:block absolute left-0 bottom-0 md:w-50 xl:w-auto pointer-events-none select-none z-50" />
            <img src={coffeeBlastRight} alt="" className="hidden md:block absolute right-0 top-10 md:w-50 xl:w-auto pointer-events-none select-none z-50" />
        </section>
    );
};

export default Feedback;