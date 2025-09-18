'use client'

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Home Buyer",
        feedback: "This company made finding my dream home effortless and stress-free!",
    },
    {
        name: "Michael Brown",
        role: "Investor",
        feedback: "Professional and reliable service. I’m confident in every deal I make.",
    },
    {
        name: "Emily Davis",
        role: "Renter",
        feedback: "Fast, transparent, and supportive throughout the whole process.",
    },
    {
        name: "David Wilson",
        role: "Seller",
        feedback: "They helped me sell my property at the best price in record time!",
    },
    {
        name: "Sophia Martinez",
        role: "First-time Buyer",
        feedback: "Patient and helpful team. Highly recommended for new buyers!",
    },
];


const TestimonialCard = ({ name, role, feedback }: { name: string, role: string, feedback: string }) => (
    <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-80 mx-4 flex-shrink-0">
        <p className="text-gray-600 italic">“{feedback}”</p>
        <div className="mt-4">
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
        </div>
    </div>
);

export const Testimonialsection = () => {

    return (
        <section className="py-16 bg-gray-100 overflow-hidden">
            <h2 className="text-center text-3xl font-bold mb-10">
                What Our Clients Say
            </h2>

            <div className="flex overflow-hidden">
                <div className="flex animate-marquee space-x-4">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} {...t} />
                    ))}
                    {/* Duplicate for seamless loop */}
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={`dup-${i}`} {...t} />
                    ))}
                </div>
            </div>

            <div className="flex overflow-hidden mt-8">
                <div className="flex animate-marquee-reverse space-x-4">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} {...t} />
                    ))}
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={`dup-rev-${i}`} {...t} />
                    ))}
                </div>
            </div>
        </section>
    )
}