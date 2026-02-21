import Link from "next/link"
import Image from "next/image"
import ContactForm from "@/components/ContactForm"
import { Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall, Twitter } from "lucide-react"

export const metadata = {
    title: "Contact us | Stellar IT",
    description: "Contact us for any questions or inquiries. We're here to help!",
}

const socials = [
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61584555393143", icon: <Facebook /> },
    { name: "Instagram", href: "https://www.instagram.com/stellaritglobal", icon: <Instagram /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/stellar-it-gobal/", icon: <Linkedin /> },
]

function page() {
    return (
        <>
            <section className="bg-gradient-to-tr from-blue-200 via-white to-white ">
                <img src={'/images/blur-shape-1.png'} alt="shape" loading="lazy" className="absolute max-h-[600px] opacity-40 md:-top-30 top-20 right-0 scale-x-[-1] object-contain " />
                <div className="max-w-7xl mx-auto lg:py-16 md:py-12 py-10 md:px-4 sm:px-8 px-4 grid md:grid-cols-2 items-center gap-8 relative z-10">
                    <div>
                        <div className="flex flex-col gap-4 items-start">
                            <span className="flex items-center text-blueClr bg-lightBlueClr px-3 h-8 text-xs font-semibold rounded">CONTACT US</span>
                            <h1 className="text-neutral-800 md:text-5xl text-4xl font-semibold">We’re here to help.</h1>
                            <p className="sm:text-[16px] text-sm text-neutral-600">We’d love to hear your story.
                                We recently partnered with a growing startup, helping them shape their brand, strengthen their online presence, and gain the recognition they deserved.</p>
                        </div>
                        <div className="md:mt-8 mt-6 flex gap-4">
                            {socials.map((social) => (
                                <Link href={social.href} key={social.name} target="_blank" className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-600 hover:to-blue-600 cursor-pointer">
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                        <div className="md:mt-8 mt-6 flex flex-col gap-4">
                            <div className="flex items-center sm:gap-6 gap-3">
                                <div className="min-w-12 min-h-12 bg-gray-50 shadow text-blueClr rounded-full flex items-center justify-center">
                                    <Image src={'/svgs/whatsapp-icon.svg'} alt="whatsapp" width={50} height={50} className="w-8 h-8 inline" />
                                </div>
                                <Link href="https://wa.me/919377716183" target="_blank" className="text-neutral-800 font-medium sm:text-lg border-l border-gray-300 sm:pl-6 pl-3">+91 93777 16183</Link>
                            </div>
                            <div className="flex items-center sm:gap-6 gap-3">
                                <div className="min-w-12 min-h-12 bg-gray-50 shadow text-blueClr rounded-full flex items-center justify-center">
                                    <PhoneCall className="w-5 h-5 inline" />
                                </div>
                                <Link href={'tel:+917889317203'} className="text-neutral-800 font-medium sm:text-lg border-l border-gray-300 sm:pl-6 pl-3">+91 78893  17203</Link>
                            </div>
                            <div className="flex items-center sm:gap-6 gap-3">
                                <div className="min-w-12 min-h-12 bg-gray-50 shadow text-blueClr rounded-full flex items-center justify-center">
                                    <Mail className="w-5 h-5 inline" />
                                </div>
                                <Link href="mailto:support@stellaritglobal.com" className="text-neutral-800 font-medium sm:text-lg border-l border-gray-300 sm:pl-6 pl-3 hover:underline">support@stellaritglobal.com</Link>
                            </div>
                            <div className="flex items-center sm:gap-6 gap-3">
                                <div className="min-w-12 min-h-12 bg-gray-50 shadow text-blueClr rounded-full flex items-center justify-center">
                                    <MapPin className="w-5 h-5 inline" />
                                </div>
                                <p className="text-neutral-800 font-medium sm:text-lg border-l border-gray-300 sm:pl-6 pl-3">A 1030, Sun Westbank, Near Vallabh Sadan, Ashram road, Ahmedabad (380009)</p>
                            </div>
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

export default page
