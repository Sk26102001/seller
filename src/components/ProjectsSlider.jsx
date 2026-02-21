'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';

function ProjectsSlider() {

    const options = {
        type: 'loop',
        perPage: 4,
        gap: '0rem',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        interval: 3000,
        arrows: false,
        pagination: false,
        breakpoints: {
            1024: {
                perPage: 3,
            },
            768: {
                perPage: 2,
            },
            480: {
                perPage: 1,
            },
        }
    };

    return (
        <>
            <div className="md:mt-12 mt-8">
                <Splide
                    options={options}
                    aria-label="Projects carousel"
                >
                    {Array.from({ length: 8 }).map((_, i) => (
                        <SplideSlide key={i}>
                            <div className='w-full h-full aspect-square relative overflow-hidden group'>
                                <Image width={1000} height={1000} src={`/images/project-1.png`} alt={`Slide ${i + 1}`} className='w-full h-full object-cover' />
                                <div className='absolute md:-bottom-28 bottom-6 group-hover:bottom-6 left-1/2 transform -translate-x-1/2 w-[85%] h-[calc(100% - 1.5rem)] bg-white z-10 p-4 shadow-lg duration-400'>
                                    <p className='text-sm text-neutral-600'>Lorem, ipsum.</p>
                                    <p className='text-lg font-semibold'>Lorem ipsum dolor sit.</p>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
                <Splide
                    options={options}
                    aria-label="Projects carousel"
                >
                    {Array.from({ length: 8 }).map((_, i) => (
                        <SplideSlide key={i}>
                            <div className='w-full h-full aspect-square relative overflow-hidden group'>
                                <Image width={1000} height={1000} src={`/images/project-2.png`} alt={`Slide ${i + 1}`} className='w-full h-full object-cover' />
                                <div className='absolute md:-bottom-28 bottom-6 group-hover:bottom-6 left-1/2 transform -translate-x-1/2 w-[85%] h-[calc(100% - 1.5rem)] bg-white z-10 p-4 shadow-lg duration-400'>
                                    <p className='text-sm text-neutral-600'>Lorem, ipsum.</p>
                                    <p className='text-lg font-semibold'>Lorem ipsum dolor sit.</p>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </>
    )
}

export default ProjectsSlider
