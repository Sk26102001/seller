import { Mail, MapPin, PhoneCall } from "lucide-react"
import Link from "next/link"
import ContactForm from "./ContactForm"
import Image from "next/image"

function Cta() {
    return (
        <>
            <section className="bg-gradient-to-br from-cyan-500 to-blue-500" id="contact">
                <div className="max-w-7xl mx-auto lg:py-16 md:py-12 py-8 px-4 grid md:grid-cols-3 sm:grid-cols-2 items-center md:gap-8 gap-6 relative z-1">
                    <div className="flex flex-col items-start md:col-span-2">
                        <span className="flex items-center text-white bg-blueClr px-3 h-8 text-xs font-semibold rounded">
                            CONTACT US
                        </span>
                        <h6 className="text-white md:text-5xl sm:text-4xl text-3xl font-semibold mt-4">
                            No matter your industry, size, or stage we have the tools to transform your vision into reality.
                        </h6>
                        <p className="text-white md:text-base text-sm mt-4">
                            Whether you need a website, app, or complete digital transformation, our team is here to guide you.
                            Get expert advice on cloud, AI, and automation tailored to your goals. Let's turn your challenges into
                            opportunities and build solutions that drive measurable growth.
                        </p>

                        <div className="md:mt-8 mt-6 flex flex-col gap-4">
                            <div className="text-white inline-flex items-center gap-2">
                                <Image src={'/svgs/whatsapp-icon-white.svg'} alt="whatsapp" width={50} height={50} className="w-7 h-7 inline" />
                                <Link href={'https://wa.me/917889317203'} className="hover:underline">+91 78893 17203</Link>
                            </div>
                            <div className="text-white inline-flex items-center gap-3">
                                <PhoneCall className="w-5 h-5 inline" />
                                <Link href={'tel:+919377716183'} className="hover:underline">+91 93777 16183</Link>
                            </div>
                            <Link href={'mailto:support@stellaritglobal.com'} className="text-white inline-flex items-center gap-3 hover:underline">
                                <Mail className="w-5 h-5 inline" />
                                <span>support@stellaritglobal.com</span>
                            </Link>
                            <p className="text-white inline-flex items-center gap-3">
                                <MapPin className="min-w-5 min-h-5 inline" />
                                <span>A 1030, Sun Westbank, Near Vallabh Sadan, Ashram road, Ahmedabad (380009)</span>
                            </p>
                        </div>
                    </div>
                    <div className="grid place-items-center">
                        <ContactForm width="w-full max-w-md" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cta
