import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import SnowfallBg from "@/components/SnowfallBg";

export default function RootLayout({ children }) {
    return (
        <>
            {/* <SnowfallBg /> */}
            <CursorEffect />
            <Navbar />
            <main className="mt-18">
                <div className="fixed sm:bottom-10 bottom-4 sm:right-10 right-4 z-[99999] flex flex-col sm:gap-4 gap-2">
                    <Link href={"tel:+917889317203"} className="bg-blueClr text-white sm:h-12 sm:w-12 h-10 w-10 rounded-full grid place-items-center hover:scale-110 hover:shadow-lg duration-300">
                        <Phone className="sm:w-6 sm:h-6 w-5 h-5 inline" />
                    </Link>
                    <Link href={"https://wa.me/917889317203"} className="bg-blueClr text-white sm:h-12 sm:w-12 h-10 w-10 rounded-full grid place-items-center hover:scale-110 hover:shadow-lg duration-300">
                        <Image src={'/svgs/whatsapp-icon-white.svg'} alt="whatsapp" width={100} height={100} className="sm:w-9 sm:h-9 w-8 h-8 inline" />
                    </Link>
                </div>
                {children}
            </main>
            <Footer />
        </>
    )
}

