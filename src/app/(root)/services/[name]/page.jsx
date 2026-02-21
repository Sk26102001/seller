import services from "@/data/services.js";
import Image from "next/image";
import { ArrowLeft, Award, Check, CheckCircle, ShieldAlert } from "lucide-react";
import Link from "next/link";
import Cta from "@/components/Cta";
import { Button } from "@/components/ui/button";

export async function generateMetadata({ params }) {
    const { name } = await params;
    const service = services.find(service => service.slug === name);

    if (!service) {
        return {
            title: "Service Not Found | Stellar IT",
            description: "The service you are looking for does not exist.",
        };
    }

    return {
        title: `${service.title} | Stellar IT`,
        description: `Explore our ${service.title} services and discover how we can help your business.`,
    };
}

async function page({ params }) {
    const { name } = await params
    const service = services.find(service => service.slug === name)

    if (!service) {
        return (
            <div className="h-[80vh] flex flex-col gap-4 items-center justify-center">
                <ShieldAlert className="w-16 h-16 inline text-blueClr" />
                <h1 className="text-neutral-800 md:text-4xl text-4xl font-semibold text-center">Page not found!</h1>
                <Link href={"/services"} className="text-blueClr hover:text-blueClr/90 hover:underline"><ArrowLeft className="w-5 h-5 inline" /> Go back </Link>
            </div >
        )
    }

    return (
        <>
            <section className="relative">
                <img src={'/images/blur-shape-1.png'} alt="shape" loading="eager" className="absolute max-h-[600px] opacity-40 -top-16 right-0 object-contain -z-10 scale-x-[-1]" />
                <div className="max-w-7xl mx-auto lg:py-16 md:py-12 py-10 md:px-4 sm:px-8 px-4">
                    <div className="text-center">
                        <h1 className="text-neutral-800 md:text-5xl text-4xl font-semibold">{service.title}</h1>
                        <h2 className="text-neutral-800 mt-4">{service.whatItIs}</h2>
                    </div>
                    <div className="md:mt-16 sm:mt-12 mt-8 bg-gray-50 border shadow-lg md:p-12 sm:p-8 p-6 rounded-3xl grid md:grid-cols-2 grid-cols-1 md:gap-12 sm:gap-8 gap-6">
                        <div>
                            <h3 className="text-neutral-800 md:text-3xl text-2xl font-semibold md:mb-6 mb-4">{service.whatItIs}</h3>
                            <Image src={service.image} alt={service.title} width={500} height={500} className="w-full h-full md:max-h-[420px] sm:max-h-[380px] max-h-[240px] object-cover rounded-xl" />
                            {service.timeline && (
                                <p className="sm:text-sm text-xs mt-2 text-neutral-500">*Timeline: {service.timeline}</p>
                            )}
                        </div>
                        <div className="bg-white rounded-xl md:p-8 sm:p-6 p-4 border flex flex-col gap-4 justify-between">
                            <div>
                                <h4 className="text-neutral-800 md:text-4xl text-2xl font-semibold md:mb-6 mb-4">Here’s what’s included to deliver full value</h4>
                                <ul>
                                    {service.includes.map((include, index) => (
                                        <li key={index} className="flex items-start gap-2 mb-2">
                                            <Check className="min-w-6 w-6 min-h-6 h-6 pt-1 inline text-blueClr" />
                                            <span>{include}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Link href="#" className="inline-flex justify-center items-center text-white bg-blueClr hover:bg-blueClr/80 h-10 font-semibold w-full rounded-xl">Get Started</Link>
                                <Button asChild size={"icon"} className={"w-16 h-10 rounded-xl bg-blueClr shadow-none hover:bg-blueClr/80"}>
                                    <Link href="https://wa.me/919377716183" target="_blank">
                                        <Image src={'/svgs/whatsapp.svg'} alt="whatsapp" width={250} height={250} className="w-full h-full max-w-[24px] object-contain" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-7xl mx-auto lg:my-16 md:my-12 my-10 pb-8 md:px-4 sm:px-8 px-4 border-b">
                    <div>
                        <h4 className="mb-8 max-w-screen-sm text-balance text-2xl font-semibold lg:text-4xl">
                            Here’s What We Hand Over to You
                        </h4>
                        <div className="z-30 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {service.deliverables.map((item, index) => (
                                <div key={index} className="rounded-2xl border bg-gradient-to-tr from-cyan-500 to-blue-500 md:p-8 sm:p-6 p-4 text-white">
                                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h3 className="mt-4 font-semibold md:text-xl">{item.title}</h3>
                                    <p className="mt-2 text-sm text-neutral-100">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {service.tech && (
                <section>
                    <div className="max-w-3xl mx-auto lg:my-16 md:my-12 my-10 md:px-4 sm:px-8 px-4">
                        <div className="bg-gradient-to-tr from-cyan-500 to-blue-500 md:p-8 sm:p-6 p-4 text-white rounded-3xl">
                            <h5 className="mb-8 max-w-screen-sm text-center text-2xl font-semibold lg:text-4xl">
                                Technologies We Use
                            </h5>
                            <div className="grid gap-6 sm:grid-cols-3 grid-cols-2 place-items-center">
                                {service.tech && service.tech.map((item, index) => (
                                    <div className="p-4 bg-white/20 rounded-2xl flex items-center justify-center" key={index}>
                                        <Image src={item.src} alt={item.title} title={item.title} width={50} height={50} className="w-full h-full object-contain" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {service.kpis && (
                <section>
                    <div className="max-w-7xl mx-auto lg:my-16 md:my-12 my-10 md:px-4 sm:px-8 px-4">
                        <h3 className="text-2xl font-semibold text-neutral-800 mb-6">
                            Success Metrics (KPIs)
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-4">
                            {service.kpis.map((kpi, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 bg-gradient-to-r from-neutral-900 via-blue-500 to-blue-600 shadow-sm rounded-2xl p-4 hover:shadow-md transition"
                                >
                                    <CheckCircle className="w-5 h-5 text-white shrink-0 mt-1" />
                                    <div>
                                        <p className="font-medium text-white">{kpi}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Cta />
        </>
    )
}

export default page
