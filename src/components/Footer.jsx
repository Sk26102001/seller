import services from "@/data/services"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, PhoneCall, Twitter } from "lucide-react"

function Footer() {
    return (
        <>
            <footer className="bg-darkBlueClr text-white lg:py-16 md:py-12 py-8 px-4">
                <div className="max-w-7xl mx-auto flex justify-between gap-y-8 max-xl:flex-wrap relative z-1">
                    <div className="xl:w-1/4 md:w-1/2 sm:max-w-[400px] md:mx-0 mx-auto flex flex-col md:items-start items-center md:space-y-6 space-y-4">
                        <Image src={'/images/logo.png'} alt="Stellar IT Global Logo" width={1000} height={1000} className="w-fit h-28 object-contain rounded-lg" />
                        <p className="md:text-start text-center">Building digital solutions that empower businesses to grow smarter, faster, and stronger.</p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-evenly gap-8">
                        <div>
                            <p className="font-semibold text-lg">Our Services</p>
                            <ul className="mt-4 space-y-2 text-sm">
                                {services.map((service) => (
                                    <li key={service.slug}><Link href={`/services/${service.slug}`} className="hover:text-blueClr">{service.title}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Quick Links</p>
                            <ul className="mt-4 space-y-4 text-sm">
                                <li><Link href={'/'} className="hover:text-blueClr">Home</Link></li>
                                <li><Link href={'/about-us'} className="hover:text-blueClr">About us</Link></li>
                                <li><Link href={'/contact-us'} className="hover:text-blueClr">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="xl:w-1/4 w-full sm:max-w-[400px] md:mx-0 mx-auto md:space-y-6 space-y-4">
                        <div>
                            <p className="font-semibold text-lg mb-2">Contact us on</p>
                            <div className="flex flex-col gap-3">
                                <Link href={'mailto:support@stellaritglobal.com'} className="text-white inline-flex items-center gap-3 hover:underline">
                                    <Mail className="w-5 h-5 inline text-blueClr" />
                                    <span>support@stellaritglobal.com</span>
                                </Link>
                                <div className="text-white inline-flex items-center gap-3">
                                    <PhoneCall className="w-5 h-5 inline text-blueClr" />
                                    <Link href={'tel:+919377716183'} className="hover:underline">+91 93777 16183</Link>
                                    <Link href={'tel:+917889317203'} className="hover:underline">+91 78893 17203</Link>
                                </div>
                            </div>
                        </div>
                        <p className="font-semibold text-lg">Follow us on</p>
                        <div className="flex items-center gap-2">
                            <Link href={'https://www.facebook.com/profile.php?id=61584555393143'} target="_blank" className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-white hover:text-blueClr duration-200">
                                <Facebook className="w-5 h-5 inline" strokeWidth={1} />
                            </Link>
                            <Link href={'https://www.instagram.com/stellaritglobal'} target="_blank" className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-white hover:text-blueClr duration-200">
                                <Instagram className="w-5 h-5 inline" strokeWidth={1} />
                            </Link>
                            <Link href={'https://www.linkedin.com/company/stellar-it-gobal/'} target="_blank" className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-white hover:text-blueClr duration-200">
                                <Linkedin className="w-5 h-5 inline" strokeWidth={1} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto border-t mt-8 pt-2 flex md:flex-row flex-col gap-3 items-center justify-between text-sm">
                    <p className="md:text-start text-center">©2025 Stellar Information Technologies | All Rights Reserved.</p>
                    <div className="flex items-center gap-4">
                        <Link href={'/terms-and-conditions'} className="hover:underline">Terms & Conditions</Link>
                        <Link href={'/privacy-policy'} className="hover:underline">Privacy Policy</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
