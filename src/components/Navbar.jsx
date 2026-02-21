"use client";
import { useEffect, useState } from "react";
import services from "@/data/services.js";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Earth, Home, LayoutList, Logs, Phone, Send } from "lucide-react"

const navigationLinks = [
    { href: "/blogs", label: "Blogs" },
    { href: "/about-us", label: "About us" },
    { href: "/contact-us", label: "Contact us" },
]

// const services = [
//     { href: "#", label: "Website Development" },
//     { href: "#", label: "App Development" },
//     { href: "#", label: "Branding" },
//     { href: "#", label: "Business Listing" },
//     { href: "#", label: "SEO" },
//     { href: "#", label: "SMM" },
//     { href: "#", label: "Preformance Ads" },
//     { href: "#", label: "Content, Video & Blogging" },
//     { href: "#", label: "Email & SMS Automation" },
//     { href: "#", label: "AI, Automation & Chatbots" },
//     { href: "#", label: "Cloud, DevOps & Hosting" },
//     { href: "#", label: "Security & Compliance" },
// ]

function Navbar() {
    const [isFixed, setIsFixed] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 50);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-[9999] md:px-2 sm:px-8 px-4 transition-all duration-300 ${isFixed
                    ? "bg-gray-50/40 shadow-md py-2 backdrop-blur-[8px]"
                    : "bg-transparent py-4"
                    }`}
            >
                <div className="max-w-7xl mx-auto flex h-16 justify-between gap-4">
                    <div className="flex">
                        <div className="flex items-center gap-6">
                            <Link href="/" className="flex items-center gap-1 text-2xl font-bold text-primary hover:text-primary/90">
                                <Image src="/images/logo.png" alt="Stellar IT Global Logo" width={1000} height={1000} className="w-18 h-18 object-contain" />
                            </Link>

                            <NavigationMenu className="h-full *:h-full max-md:hidden">
                                <NavigationMenuList className="h-full gap-2">
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="h-full text-neutral-700 font-normal hover:text-primary hover:!bg-transparent !bg-transparent p-2">Services</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[260px] gap-0">
                                                {services.map((service, index) => (
                                                    <li key={index}>
                                                        <NavigationMenuLink asChild key={index}>
                                                            <Link href={`/services/${service.slug}`}>{service.title}</Link>
                                                        </NavigationMenuLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    {navigationLinks.map((link, index) => (
                                        <NavigationMenuItem key={index} className="h-full">
                                            <NavigationMenuLink
                                                active={pathname === link.href}
                                                href={link.href}
                                                className="!bg-transparent text-neutral-700 hover:text-primary border-b-primary data-[active]:text-blueClr data-[active]:font-semibold h-full justify-center rounded-none border-y-2 border-transparent py-1.5 hover:bg-transparent data-[active]:bg-transparent!">
                                                {link.label}
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button asChild className="sm:text-sm text-xs bg-blueClr hover:bg-blueClr/80 gap-1 h-9 shadow-none">
                            <Link href="/contact-us"><Send className="w-3 h-3 inline" /> Get a free quote</Link>
                        </Button>
                        <div className="flex items-center md:hidden">
                            <Drawer direction="left">
                                <DrawerTrigger asChild>
                                    <Button className="group size-9 bg-gray-300/40 hover:bg-gray-100 shadow-none" size="icon">
                                        <svg
                                            className="pointer-events-none"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="black"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4 12L20 12"
                                                className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]" />
                                            <path
                                                d="M4 12H20"
                                                className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45" />
                                            <path
                                                d="M4 12H20"
                                                className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]" />
                                        </svg>
                                    </Button>
                                </DrawerTrigger>
                                <DrawerContent className={'z-[9999]'}>
                                    <VisuallyHidden>
                                        <DrawerTitle>Sidebar</DrawerTitle>
                                    </VisuallyHidden>
                                    <DrawerHeader className={'p-0'}>
                                        <Image src="/images/logo2.png" alt="logo" width={500} height={500} />
                                    </DrawerHeader>
                                    <div className="p-4">
                                        <ul className="space-y-3 text-xs font-medium text-neutral-800">
                                            <li><Link href={'/'} className="inline-flex items-center gap-2"><Home className="w-4 h-4 inline" />Home</Link></li>
                                            <li>
                                                <Accordion type="single" collapsible>
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger className="p-0 text-xs">
                                                            <span className="inline-flex items-center gap-2">
                                                                <LayoutList className="w-4 h-4 inline" />
                                                                Our Services
                                                            </span>
                                                        </AccordionTrigger>
                                                        <AccordionContent className="flex flex-col gap-2 mt-4 text-xs">
                                                            {services.map((service, index) => (
                                                                <DrawerClose asChild>
                                                                    <Link href={`/services/${service.slug}`} key={index} className="inline-flex w-full items-center gap-2">
                                                                        <span className="w-4 h-4 inline" />
                                                                        {service.title}
                                                                    </Link>
                                                                </DrawerClose>
                                                            ))}
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </li>
                                            <li>
                                                <DrawerClose asChild>
                                                    <Link href={'/blogs'} className="inline-flex w-full items-center gap-2"><Logs className="w-4 h-4 inline" />Blogs</Link>
                                                </DrawerClose>
                                            </li>
                                            <li>
                                                <DrawerClose asChild>
                                                    <Link href={'/about-us'} className="inline-flex w-full items-center gap-2"><Earth className="w-4 h-4 inline" />About us</Link>
                                                </DrawerClose>
                                            </li>
                                            <li>
                                                <DrawerClose asChild>
                                                    <Link href={'/contact-us'} className="inline-flex w-full items-center gap-2"><Phone className="w-4 h-4 inline" />Contact us</Link>
                                                </DrawerClose>
                                            </li>
                                        </ul>
                                    </div>
                                    <DrawerFooter className={'border-t'}>
                                        <p className="text-xs text-neutral-700">&copy; 2025 Stellar Information Technologies</p>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
