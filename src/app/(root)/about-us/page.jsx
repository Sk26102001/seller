import Link from "next/link";
import Image from "next/image"
import LogoLoop from "@/components/LogoLoop"
import Cta from "@/components/Cta";
import {
    Timeline,
    TimelineDate,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
} from "@/components/ui/timeline"
import { Brain, CircleCheckBig, Facebook, Flower2, Handshake, Linkedin, Podcast, Quote, Twitter } from "lucide-react";

export const metadata = {
    title: "About Us | Stellar IT",
    description: "Discover our story, our mission, and our passion for creativity and innovation.",
}

const technologies = [
    {
        category: "Web & Web app Development",
        image: "/images/tech/web-app.png",
        items: [
            "Frontend: React, Next.js, Angular, Vue.js",
            "Backend: Node.js, Python (Flask/Django), PHP (Laravel), Java",
            "CMS: WordPress, Shopify, Magento, WooCommerce",
        ],
    },
    {
        category: "Mobile App Development",
        image: "/images/tech/mobile-app.png",
        items: [
            "iOS (Swift, Objective-C)",
            "Android (Kotlin, Java)",
            "Hybrid: Flutter, React Native",
        ],
    },
    {
        category: "Cloud & Infrastructure",
        image: "/images/tech/cloud-infra.png",
        items: [
            "AWS, Microsoft Azure, Google Cloud",
            "Docker, Kubernetes, CI/CD pipelines",
            "CDN & SSL, Serverless setups",
        ],
    },
    {
        category: "AI & Automation",
        image: "/images/tech/ai.png",
        items: [
            "Machine Learning & NLP",
            "Chatbots & Recommendation Engines",
            "Workflow Automation (Zapier, RPA)",
        ],
    },
    {
        category: "Digital Marketing Tech",
        image: "/images/tech/digital-marketing.png",
        items: [
            "SEO Tools: SEMrush, Ahrefs, Screaming Frog",
            "Ads: Google Ads, Facebook Ads Manager, LinkedIn Campaign Manager",
            "Analytics: GA4, Looker Studio, Hotjar",
        ],
    },
];

const items = [
    {
        id: 1,
        date: "Portfolio",
        title: "Over the last 3 years, we’ve worked with startups, SMEs, and enterprises — building products that scale and marketing strategies that deliver.",
    },
    {
        id: 2,
        date: "Startup Launch — E-Commerce Brand",
        title: "We designed and developed a full-stack e-commerce platform for a local fashion brand. With SEO optimization and Google Maps listing, the brand saw 120% increase in sales within 6 months.",
    },
    {
        id: 3,
        date: "Healthcare Web Portal — Global Reach",
        title: "Built a cloud-based patient booking and telemedicine system integrated with secure paymentgateways.The solution helped reduce appointment delays by 35% and opened the clinic to international patients.",
    },
    {
        id: 4,
        date: "Education LMS Platform",
        title: "Created an online learning system with course management, video integration, and AI-drivenstudent tracking.Adoption grew to 2,000+ students in the first year, with a 50% improvement in retention.",
    },
    {
        id: 5,
        date: "Corporate Digital Transformation",
        title: "For a B2B services company, we developed a CRM + cloud integration system and automated marketing campaigns.Within 9 months, the company generated 40% more qualified leads and streamlined client onboarding.",
    },
]

function page() {

    return (
        <>
            <section className="relative">
                <img src={'/images/blur-shape-1.png'} alt="shape" loading="eager" className="absolute max-h-[600px] opacity-40 -top-16 right-0 object-contain -z-10 scale-x-[-1]" />
                <div className="max-w-7xl mx-auto lg:py-16 md:py-12 py-10 md:px-4 sm:px-8 px-4">
                    <div className="text-center">
                        <h1 className="text-neutral-800 md:text-5xl text-4xl font-semibold">About us</h1>
                        <h2 className="mt-2 max-w-xl mx-auto text-neutral-600 md:text-lg text-sm">Behind every line of code, there’s a team of thinkers, creators, and dreamers. We believe that great
                            technology is built not just with logic, but with passion.</h2>
                    </div>
                    {/* <div className="md:mt-16 sm:mt-12 mt-8 bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-border rounded-3xl p-8">
                        <h2 className="text-3xl font-semibold text-white lg:text-4xl">Our Workstyle</h2>
                        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:mt-8 lg:grid-cols-3">
                            <div className="relative flex gap-3 border-dashed md:block md:border-l md:p-5 text-white">
                                <span className="mb-4 flex size-10 shrink-0 items-center justify-center rounded-full bg-white/20 md:size-12">
                                    <Podcast className="w-6 h-6 inline" />
                                </span>
                                <div>
                                    <h3 className="font-medium md:mb-2 md:text-xl">
                                        Collaborative sprints where every voice matters.<span className="absolute -left-px hidden h-6 w-px bg-zinc-900 md:inline-block"></span>
                                    </h3>
                                </div>
                            </div>
                            <div className="relative flex gap-3 border-dashed md:block md:border-l md:p-5 text-white">
                                <span className="mb-4 flex size-10 shrink-0 items-center justify-center rounded-full bg-white/20 md:size-12">
                                    <Brain className="w-6 h-6 inline" />
                                </span>
                                <div>
                                    <h3 className="font-medium md:mb-2 md:text-xl">
                                        Brainstorming sessions where ideas spark innovation.<span className="absolute -left-px hidden h-6 w-px bg-zinc-900 md:inline-block"></span>
                                    </h3>
                                </div>
                            </div>
                            <div className="relative flex gap-3 border-dashed md:block md:border-l md:p-5 text-white">
                                <span className="mb-4 flex size-10 shrink-0 items-center justify-center rounded-full bg-white/20 md:size-12">
                                    <Flower2 className="w-6 h-6 inline" />
                                </span>
                                <div>
                                    <h3 className="font-medium md:mb-2 md:text-xl">
                                        Flexible, remote-friendly setups that keep creativity alive.<span className="absolute -left-px hidden h-6 w-px bg-zinc-900 md:inline-block"></span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="md:mt-16 sm:mt-12 mt-8 grid lg:grid-cols-2 items-center sm:gap-4">
                        <div>
                            <Image src={'/images/about-img.jpg'} width={1000} height={1000} alt="About Stellar" loading="eager" className="w-full h-full max-h-[360px] lg:max-w-full max-w-[440px] mx-auto object-cover rounded-2xl" />
                        </div>
                        <div className="sm:p-8 p-6 text-left">
                            <h3 className="text-neutral-800 md:text-3xl text-2xl mb-4 font-bold">What Drives Us</h3>
                            <div className="space-y-2 text-neutral-700 md:text-lg text-sm">
                                <p>At our core, we believe technology should be accessible, powerful, and reliable for businesses of every
                                    size. For the last 3 years, we have been helping startups, SMEs, and global enterprises turn their
                                    ideas into real digital products.</p>
                                <p>We don’t just build websites or apps — we create end-to-end solutions powered by AI, Cloud, and
                                    automation. From branding to digital marketing, from business listings to custom applications, our
                                    team ensures your business gets the growth it deserves.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-neutral-800 pt-8 pb-6 text-center md:text-2xl sm:text-lg font-bold">Trusted by specialists all around the world</p>
                    <LogoLoop
                        speed={50}
                        direction="left"
                        logoHeight={40}
                        gap={60}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="white"
                        ariaLabel="Technology partners"
                    />
                </div>
                <div className="max-w-7xl mx-auto lg:py-20 md:py-16 py-12 md:px-4 sm:px-8 px-4">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div className="flex flex-col lg:items-start lg:text-left">
                            <span className="flex size-10 items-center justify-center rounded-full bg-blueClr">
                                <Handshake className="w-6 h-6 inline text-white" />
                            </span>
                            <h4 className="my-4 text-pretty text-3xl font-bold lg:text-4xl">Our Promise</h4>
                            <p className="mb-6 max-w-xl text-zinc-600 lg:text-lg">
                                What makes us different is our blend of science, strategy, and innovation. We combine creativity
                                with technical expertise to deliver solutions that are practical, scalable, and future-ready.
                            </p>
                            <ul className="ml-4 space-y-4 text-left">
                                <li className="flex items-center gap-3">
                                    <CircleCheckBig className="w-5 h-5 inline stroke-3 text-blueClr" />
                                    <p className="text-zinc-600 lg:text-lg">Robust code that stands the test of time</p>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CircleCheckBig className="w-5 h-5 inline stroke-3 text-blueClr" />
                                    <p className="text-zinc-600 lg:text-lg">Modern features that keep your business ahead </p>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CircleCheckBig className="w-5 h-5 inline stroke-3 text-blueClr" />
                                    <p className="text-zinc-600 lg:text-lg">
                                        Personalized support for every client, big or small
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <Image src="/images/about-2.png" alt="Our Promise" width={1000} height={1000}
                            className="max-h-96 lg:max-w-full max-w-[440px] mx-auto w-full rounded-2xl object-cover" />
                    </div>
                </div>
                <div className="sm:px-8 px-4">
                    <div className="max-w-xl shadow-inner shadow-black/20 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl sm:p-8 p-6">
                        <Quote className="w-18 h-18 inline stroke-1 text-white fill-white rotate-180 mb-2" />
                        <p className="text-white text-4xl font-semibold leading-11">“We serve all local and global <br /> with the same passion and commitment.” </p>
                    </div>
                </div>
            </section>
            <section className=" lg:py-20 md:py-16 py-12 md:px-4 sm:px-8 px-4 relative">
                <img src={'/images/blur-shape-1.png'} alt="shape" loading="eager" className="absolute max-h-[600px] opacity-40 bottom-16 left-0 object-contain -z-10" />
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col justify-between gap-6 md:flex-row">
                        <h4 className="text-3xl font-semibold md:w-1/2">Technologies We Use</h4>
                        <p className="md:w-1/2">
                            We combine creativity, strategy, and cutting-edge tools to deliver reliable digital solutions. Our team
                            works across modern stacks, AI-powered platforms, and cloud-native infrastructures — ensuring
                            your business stays future-ready.
                        </p>
                    </div>
                    <div className="mt-11 grid w-full grid-cols-1 sm:gap-6 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {technologies.map((tech, index) => (
                            <div key={index} className="rounded-xl border bg-card text-card-foreground shadow-md overflow-hidden">
                                <img src={tech.image} alt={tech.category}
                                    className="aspect-video w-full object-cover" />
                                <div className="p-4">
                                    <p className="mb-1 font-semibold md:text-lg">{tech.category}</p>
                                    <ol className="list-disc ps-4 space-y-1 text-xs text-neutral-800">
                                        {tech.items.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto lg:pb-20 md:pb-16 pb-12 md:px-4 sm:px-8 px-4">
                <h3 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
                    Our Founders
                </h3>
                <div className="container lg:mt-16 md:mt-12 mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-12 sm:gap-8 gap-6">
                    <div className="flex flex-col items-start">
                        <Image src="/images/jignesh.png" alt="Jignesh Panchal" width={500} height={500}
                            className="relative flex shrink-0 overflow-hidden rounded-full mb-4 size-20 md:mb-5 lg:size-24" />
                        <p className="font-semibold">Jignesh Panchal</p>
                        <p className="text-sm text-zinc-600">Founder & Managing Director</p>
                        <p className="py-3 text-xs text-zinc-600">
                            A microbiologist by qualification and a tech enthusiast at heart, He brings a scientific mindset
                            into technology. His approach ensures that every project is executed with precision, structure, and
                            long-term reliability. His vision has been key to shaping our company’s culture of quality and
                            innovation.
                        </p>
                        {/* <div className="mt-2 flex gap-4">
                            <Link href="#">
                                <Facebook className="w-5 h-5 inline stroke-2 text-neutral-800 hover:text-blueClr" />
                            </Link>
                            <Link href="#">
                                <Twitter className="w-5 h-5 inline stroke-2 text-neutral-800 hover:text-blueClr" />
                            </Link>
                            <Link href="#">
                                <Linkedin className="w-5 h-5 inline stroke-2 text-neutral-800 hover:text-blueClr" />
                            </Link>
                        </div> */}
                    </div>
                    <div className="flex flex-col items-start">
                        <Image src="/images/dhruva.jpg" alt="Dhruva Panchal" width={500} height={500}
                            className="relative flex shrink-0 overflow-hidden rounded-full mb-4 size-20 md:mb-5 lg:size-24" />
                        <p className="font-semibold">Dhruva Panchal</p>
                        <p className="text-sm text-zinc-600">Co-Founder & Project Strategist</p>
                        <p className="py-3 text-xs text-zinc-600">
                            With expertise in project management, operations, and client relations, She ensures projects are
                            delivered on time, with clear communication and measurable results. She bridges the gap between
                            client expectations and technical execution, making sure every solution adds real business value.
                        </p>
                        {/* <div className="mt-2 flex gap-4">
                            <Link href="#">
                                <Facebook className="w-5 h-5 inline stroke-2 text-neutral-800 hover:text-blueClr" />
                            </Link>
                            <Link href="#">
                                <Twitter className="w-5 h-5 inline stroke-2 text-neutral-800 hover:text-blueClr" />
                            </Link>
                            <Link href="#">
                                <Linkedin className="w-5 h-5 inline stroke-2 text-neutral-800 hover:text-blueClr" />
                            </Link>
                        </div> */}
                    </div>
                    <div className="flex flex-col items-start">
                        <Image src="/images/danish.jpg" alt="Danish Ahmad" width={500} height={500}
                            className="relative flex shrink-0 overflow-hidden rounded-full mb-4 size-20 md:mb-5 lg:size-24" />
                        <p className="font-semibold">Danish Ahmad</p>
                        <p className="text-sm text-zinc-600">Co-Founder & Tech Lead</p>
                        <p className="py-3 text-xs text-zinc-600">
                            A developer and modern tech visionary, He specializes in AI, automation, and cloud
                            technologies. His hands-on coding skills and innovative mindset form the technical backbone of our
                            company. He leads the team in adopting the latest technologies and delivering smart, scalable
                            solutions.
                        </p>
                        {/* <div className="mt-2 flex gap-4">
                            <Link href="#">
                                <Facebook className="w-5 h-5 inline stroke-2 text-neutral-800 hover:text-blueClr" />
                            </Link>
                            <Link href="#">
                                <Twitter className="w-5 h-5 inline stroke-2 text-neutral-800 hover:text-blueClr" />
                            </Link>
                            <Link href="#">
                                <Linkedin className="w-5 h-5 inline stroke-2 text-neutral-800 hover:text-blueClr" />
                            </Link>
                        </div> */}
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[whitesmoke] lg:py-20 md:py-16 py-12 md:px-4 sm:px-8 px-4">
                    <div className="max-w-4xl mx-auto">
                        <Timeline defaultValue={5}>
                            {items.map((item) => (
                                <TimelineItem
                                    key={item.id}
                                    step={item.id}
                                    className="w-[calc(50%-1.5rem)] odd:ms-auto even:text-right even:group-data-[orientation=vertical]/timeline:ms-0 even:group-data-[orientation=vertical]/timeline:me-8 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-indicator]]:translate-x-1/2 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:-right-6 even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:left-auto even:group-data-[orientation=vertical]/timeline:[&_[data-slot=timeline-separator]]:translate-x-1/2">
                                    <TimelineHeader>
                                        <TimelineSeparator />
                                        <TimelineDate className={"!h-auto"}>{item.date}</TimelineDate>
                                        <TimelineTitle>{item.title}</TimelineTitle>
                                        <TimelineIndicator />
                                    </TimelineHeader>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </div>
                </div>
            </section>
            <Cta />
        </>
    )
}

export default page
