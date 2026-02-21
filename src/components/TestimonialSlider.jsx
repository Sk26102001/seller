'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useRef, useEffect } from 'react';
import '@splidejs/react-splide/css';
import Image from 'next/image';

export default function TestimonialSlider() {
    const mainRef = useRef(null);
    const thumbsRef = useRef(null);

    useEffect(() => {
        if (mainRef.current && thumbsRef.current) {
            const main = mainRef.current.splide;
            const thumbs = thumbsRef.current.splide;

            if (main && thumbs) {
                main.sync(thumbs);
                thumbs.sync(main);
            }
        }
    }, []);

    const testimonials = [
        {
            text: `"Absolutely seamless experience — strategic, transparent, and result-driven. I’ve never felt more confident about my brand’s growth."`,
            name: "Raza Khan",
            role: "Corporate Executive",
            avatar: "/images/client-1.jpg",
            image: "/images/client-1.jpg",
        },
        {
            text: `"Creativity and performance perfectly combined. From campaign planning to execution, everything exceeded expectations."`,
            name: "Fatima Sheikh",
            role: "Business Owner",
            avatar: "/images/client-2.jpg",
            image: "/images/client-2.jpg",
        },
        {
            text: `"Their professionalism and attention to detail made our brand launch smooth and impactful."`,
            name: "Rahul Sharma",
            role: "Entrepreneur",
            avatar: "/images/client-3.jpg",
            image: "/images/client-3.jpg",
        },
    ];

    return (
        <div className="container mx-auto max-w-7xl flex flex-wrap items-center">
            <div className="w-full md:w-1/2 lg:w-5/12 mb-8 md:mb-0">
                <Splide
                    ref={thumbsRef}
                    options={{
                        direction: 'ttb',
                        height: '440px',
                        pagination: false,
                        arrows: false,
                        wheel: false,
                        type: 'loop',
                        breakpoints: {
                            480: {
                                height: '340px',
                            }
                        }
                    }}
                    aria-label="Testimonial Images"
                >
                    {testimonials.map((item, i) => (
                        <SplideSlide key={i}>
                            <Image
                                width={500}
                                height={500}
                                src={item.image}
                                alt={item.name}
                                className="object-contain object-center w-full h-full"
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>

            <div className="w-full md:w-1/2 lg:w-7/12 md:pl-16">
                <Splide
                    ref={mainRef}
                    options={{
                        type: 'fade',
                        arrows: false,
                        pagination: true,
                        autoplay: false,
                        rewind: true,
                    }}
                    aria-label="Client Testimonials"
                    id='testimonialsSlider'
                >
                    {testimonials.map((item, i) => (
                        <SplideSlide key={i}>
                            <div>
                                <div className="mb-4 flex items-center">
                                    <Image
                                        width={500}
                                        height={500}
                                        src={item.avatar}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div className="ml-4">
                                        <p className="font-semibold text-gray-900">{item.name}</p>
                                        <p className="text-sm text-gray-500">{item.role}</p>
                                    </div>
                                </div>
                                <p className="sm:text-4xl text-3xl sm:leading-12 leading-8 text-neutral-900">
                                    {item.text}
                                </p>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
}
