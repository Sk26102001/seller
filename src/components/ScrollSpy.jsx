'use client';
import { useEffect, useState } from "react";

const sections = [
    { id: "home", title: "Home" },
    { id: "services", title: "Services" },
    { id: "why-us", title: "Why Us" },
    // { id: "portfolio", title: "Portfolio" },
    { id: "we-transform", title: "We Transform" },
    { id: "testimonials", title: "Testimonials" },
    { id: "insights", title: "Insights" },
    { id: "contact", title: "Contact" },
];

export default function ScrollSpy() {
    const [active, setActive] = useState(sections[0].id);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (let section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const top = el.offsetTop;
                    const bottom = top + el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < bottom) {
                        setActive(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="lg:flex hidden">
            <nav className="fixed top-1/2 transform -translate-y-1/2 left-1 space-y-3 z-50">
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`relative after:content-[''] after:w-6 after:h-[2px] after:bg-blueClr after:absolute after:left-0 after:-top-1 block px-2 py-1 rounded-none after:duration-200 duration-200 ${active === section.id ? "after:w-12 after:!h-[5px]" : "text-gray-700"} hover:after:w-12 hover:after:h-[5px] group`}
                    >
                        <span className={`opacity-0 bg-white/40 px-2 py-1 font-medium rounded-lg text-sm text-neutral-800 ${active === section.id ? "opacity-100" : ""} duration-150 group-hover:opacity-100`}>
                            {section.title}
                        </span>
                    </a>
                ))}
            </nav>
        </div>
    );
}
