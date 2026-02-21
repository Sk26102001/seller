import Link from "next/link";
import Image from "next/image";
import ScrollSpy from "@/components/ScrollSpy";
import BlurText from "@/components/BlurText";
import MagicBento from "@/components/MagicBento";
import CardSwap, { Card } from '@/components/CardSwap';
import ProjectsSlider from "@/components/ProjectsSlider";
import TestimonialSlider from "@/components/TestimonialSlider";
import BlogsSlider from "@/components/BlogsSlider";
import LogoLoop from "@/components/LogoLoop";
import CurvedLoop from "@/components/CurvedLoop";
import Cta from "@/components/Cta";
import { ArrowRightLeft, Award, BadgeCheck, BrainCircuit, Building2, ChartArea, CheckLine, Cloud, CodeXml, Cpu, HandCoins, Landmark, LayoutList, Rocket, Rotate3D, School, Send, Shield, ShoppingCart, Stethoscope, Store, UtensilsCrossed } from "lucide-react";

const industries = [
  {
    title: "Healthcare",
    description: "We empower healthcare providers with secure, scalable solutions.",
    icon: <Stethoscope className="w-8 h-8 inline stroke-1" />,
    points: [
      "Telemedicine platforms with video consultations",
      "AI-powered diagnostic support and patient tracking",
      "Appointment booking and digital health records"
    ]
  },
  {
    title: "Education & E-Learning",
    description: "Transforming learning into an engaging digital experience.",
    icon: <School className="w-8 h-8 inline stroke-1" />,
    points: [
      "LMS (Learning Management Systems) with live classes",
      "AI tutors and performance analytics",
      "Mobile learning apps for schools, universities, and coaching institutes"
    ]
  },
  {
    title: "Retail & E-Commerce",
    description: "Helping shops go digital — from small stores to global chains.",
    icon: <ShoppingCart className="w-8 h-8 inline stroke-1" />,
    points: [
      "Online stores with secure payments and shipping",
      "AI recommendation engines for personalized shopping",
      "Inventory and order management with predictive analytics"
    ]
  },
  {
    title: "Startups & SMEs",
    description: "We specialize in helping new businesses launch and grow.",
    icon: <Rocket className="w-8 h-8 inline stroke-1" />,
    points: [
      "MVP (Minimum Viable Product) development",
      "Branding, website, and digital marketing in one package",
      "Cloud-ready infrastructure to scale as you grow"
    ]
  },
  {
    title: "Corporate & Enterprises",
    description: "Supporting large organizations with digital transformation.",
    icon: <Building2 className="w-8 h-8 inline stroke-1" />,
    points: [
      "Enterprise portals and dashboards",
      "CRM and ERP integration",
      "Automation for finance, HR, and customer service"
    ]
  },
  {
    title: "Hospitality & Travel",
    description: "Making experiences smooth for guests and travelers.",
    icon: <UtensilsCrossed className="w-8 h-8 inline stroke-1" />,
    points: [
      "Hotel booking and restaurant apps",
      "Travel portals with real-time pricing",
      "Loyalty and rewards platforms"
    ]
  },
  {
    title: "Finance & FinTech",
    description: "Securing the future of money with modern tools.",
    icon: <Landmark className="w-8 h-8 inline stroke-1" />,
    points: [
      "Payment gateway integration",
      "AI-driven fraud detection",
      "Mobile banking and wallet apps"
    ]
  },
  {
    title: "Local & Family-Run Businesses",
    description: "We proudly serve neighborhood shops and small ventures.",
    icon: <Store className="w-8 h-8 inline stroke-1" />,
    points: [
      "Google Maps and social media listings",
      "Affordable websites with local SEO",
      "WhatsApp and chatbot solutions for easy customer communication"
    ]
  }
];

export default function Home() {
  return (
    <>
      <ScrollSpy />
      <section className="lg:py-16 md:py-12 py-10 md:px-4 sm:px-8 px-4 relative" id="home">
        <img src={'/images/blur-shape-1.png'} alt="shape" loading="eager" className="absolute max-h-[600px] opacity-40 top-0 left-0 object-contain -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 md:gap-8 gap-4">
          <div className="md:order-2 lg:col-span-1 md:col-span-2 sm:col-span-2 order-2">
            <p className="text-xs font-bold italic">
              <span className="inline-flex items-center gap-1 bg-white/80 border border-gray-300 text-neutral-800 px-3 py-1 rounded-full"><CodeXml className="w-4 h-4 inline stroke-3" /> Robust Code, Reboost Future</span>
            </p>
            <h1>
              <BlurText
                text="We Serve all Big & Small, Across India & Worldwide"
                delay={150}
                animateBy="words"
                direction="top"
                className="md:text-6xl sm:text-5xl text-4xl font-bold md:leading-17 mt-2"
              />
            </h1>
            <p className="sm:mt-6 mt-4 text-neutral-700">With 3+ years of experience, we deliver modern digital solutions powered by AI, Cloud, and
              automation. From startups to enterprises, we build websites, apps, and marketing systems that fuel
              growth and innovation.
            </p>
            <div className="grid sm:grid-cols-2 md:gap-4 gap-2 md:mt-6 mt-4">
              <Link href={'/contact-us'} className={'inline-flex items-center justify-center rounded-lg text-sm font-normal bg-blueClr text-white hover:bg-blueClr/80 h-10 gap-1 duration-200'}><Rocket className="w-5 h-5 inline" /> Start your Project!</Link>
              <Link href={'/services'} className={'inline-flex items-center justify-center rounded-lg text-sm font-normal bg-lightBlueClr text-neutral-800 hover:bg-blueClr/40 h-10 gap-1 duration-200'}><LayoutList className="w-5 h-5 inline" /> Explore Services</Link>
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-1 lg:order-2 md:order-1 order-1">
            <Image src={'/images/hero-img.png'} alt="" loading="eager" width={1000} height={1000} className="w-full lg:h-[510px] max-h-[510px] object-cover object-top rounded-2xl relative z-[-1]" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto md:mt-12 mt-10 md:p-8 p-6 rounded-2xl overflow-hidden relative">
          {/* <Threads
            amplitude={1}
            distance={0}
            color={[1, 1, 1]}
            enableMouseInteraction={false}
            className="absolute top-0 left-0 w-full h-full z-[-2] bg-gradient-to-br from-neutral-700 via-neutral-900 to-neutral-950"
          /> */}
          {/* <Image src={'/images/thread-bg.webp'} alt="thread-bg" loading="eager" width={2000} height={1000} className="absolute w-full h-full top-0 right-0 object-cover object-top -z-10" /> */}
          <img src={'/images/thread-bg.webp'} alt="thread-bg" loading="eager" className="absolute w-full h-full top-0 right-0 object-cover object-top -z-10" />
          <div className="border-b border-gray-200 md:pb-8 pb-4 md:mb-8 mb-4 grid md:grid-cols-3 md:gap-8 gap-4">
            <div className="flex flex-col items-start">
              <span className="flex items-center text-white bg-blueClr px-3 h-8 text-xs font-semibold rounded">ABOUT US</span>
              <h2 className="text-white md:text-4xl text-lg font-semibold mt-4">
                Building digital solutions that drive growth.
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-white">
                With 3+ years of expertise, we craft modern websites, apps, and marketing systems powered by AI, Cloud, and automation. From ambitious startups to established enterprises, we deliver tailored solutions that fuel innovation and lasting success.
              </p>
              <Link
                href={"/contact-us"}
                className="md:text-lg text-sm font-semibold underline text-white mt-4 inline-block"
              >
                Let’s build together
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-4">
            <div className="border-l border-gray-200 sm:pl-4 pl-3">
              <p className="text-white md:text-5xl text-4xl font-bold">3+</p>
              <p className="text-white md:text-lg text-sm font-semibold mt-2">Years of experience</p>
            </div>
            <div className="border-l border-gray-200 sm:pl-4 pl-3">
              <p className="text-white md:text-5xl text-4xl font-bold">100+</p>
              <p className="text-white md:text-lg text-sm font-semibold mt-2">Global clients</p>
            </div>
            <div className="border-l border-gray-200 sm:pl-4 pl-3">
              <p className="text-white md:text-5xl text-4xl font-bold">25+</p>
              <p className="text-white md:text-lg text-sm font-semibold mt-2">Technologies used</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto md:mt-12 mt-10 grid md:grid-cols-4 sm:grid-cols-2 md:gap-8 gap-6">
          <div className="px-4">
            <ArrowRightLeft className="w-10 h-10 text-neutral-500" />
            <p className="font-semibold md:text-xl text-lg mt-4 mb-2">End-to-End Services</p>
            <p className="text-sm text-neutral-600">
              From strategy to execution, we cover the entire digital transformation journey.
            </p>
          </div>

          <div className="px-4">
            <Cpu className="w-10 h-10 text-neutral-500" />
            <p className="font-semibold md:text-xl text-lg mt-4 mb-2">AI-Powered Solutions</p>
            <p className="text-sm text-neutral-600">
              From automation to smart insights, we integrate AI to enhance growth and efficiency.
            </p>
          </div>

          <div className="px-4">
            <Cloud className="w-10 h-10 text-neutral-500" />
            <p className="font-semibold md:text-xl text-lg mt-4 mb-2">Cloud-First Approach</p>
            <p className="text-sm text-neutral-600">
              Secure, scalable, and flexible cloud systems that keep your business future-ready.
            </p>
          </div>

          <div className="px-4">
            <Shield className="w-10 h-10 text-neutral-500" />
            <p className="font-semibold md:text-xl text-lg mt-4 mb-2">Trusted by Startups & Enterprises</p>
            <p className="text-sm text-neutral-600">
              Tailored solutions for businesses of every size, designed to accelerate innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="lg:py-16 md:py-12 py-10 md:px-4 sm:px-8 px-4 bg-gradient-to-b from-neutral-900 to-neutral-950" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-3 items-center text-center">
            <span className="text-xs font-medium tracking-wide bg-blueClr py-1 px-3 rounded-lg text-white uppercase">
              Our Services
            </span>
            <h2 className="text-white md:text-5xl text-3xl font-semibold">
              What We Do
            </h2>
          </div>
          <div className="mt-8">

            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="38,132,255"
            />
          </div>
        </div>
      </section>

      <section className="lg:pt-16 md:pt-12 pt-10 md:px-4 sm:px-8 px-4 relative overflow-hidden" id="why-us">
        <img src={'/images/blur-shape-1.png'} alt="shape" loading="lazy" className="absolute max-h-[600px] opacity-40 -top-20 right-0 scale-x-[-1] object-contain -z-10" />
        <div className="absolute w-full md:h-[100px] h-[80px] left-0 bottom-0 bg-gradient-to-b from-transparent via-white/40 to-white z-40"></div>
        <div className="max-w-6xl mx-auto grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col lg:text-left">
            <div className="w-10 h-10 rounded-full bg-blueClr flex items-center justify-center">
              <BadgeCheck className="w-6 h-6 inline text-white" />
            </div>
            <p className="my-4 text-neutral-800 text-3xl font-semibold lg:text-5xl">Why choose us</p>
            <p className="mb-6 text-zinc-600 sm:text-lg text-sm">
              From a small bakery to a multinational enterprise, we adapt to every scale and complexity — blending AI, Cloud, and Marketing into holistic strategies that focus on measurable results and sustainable growth.
            </p>
          </div>
          <div className="lg:h-[440px] md:h-[360px] h-[240px] relative">
            <CardSwap
              cardDistance={80}
              verticalDistance={90}
              delay={4000}
              pauseOnHover={false}
            >
              <Card>
                <div className="p-2 border-b">
                  <p className="text-sm font-medium flex items-center gap-1">
                    <ChartArea className="w-4 h-4 inline" />
                    Scalable Solutions</p>
                </div>
                <Image width={500} height={500} src="/images/scaling.png" alt="Scalable Solutions" />
              </Card>
              <Card>
                <div className="p-2 border-b">
                  <p className="text-sm font-medium flex items-center gap-1">
                    <BrainCircuit className="w-4 h-4 inline" />
                    Intelligent 360° Growth</p>
                </div>
                <Image width={500} height={500} src="/images/intelligent.png" alt="Intelligent 360° Growth" />
              </Card>
              <Card>
                <div className="p-2 border-b">
                  <p className="text-sm font-medium flex items-center gap-1">
                    <HandCoins className="w-4 h-4 inline" />
                    Results-Driven Approach</p>
                </div>
                <Image width={500} height={500} src="/images/result.jpg" alt="" />
              </Card>
            </CardSwap>
          </div>

        </div>
      </section>

      <div className="relative z-50 md:pt-4 sm:pt-4 pt-2" >
        <CurvedLoop
          marqueeText="✦ Web ✦ Design ✦ Social ✦ Ads ✦ SEO ✦ Branding"
          speed={1}
          curveAmount={0}
          direction="right"
          interactive={true}
          className="custom-text-style"
        />
      </div>

      {/* <section className="lg:pt-16 md:pt-12 pt-8" id="portfolio">
        <div className="flex flex-col gap-4 items-center justify-center">
          <span className="flex items-center text-blueClr bg-lightBlueClr px-3 h-8 text-xs font-semibold rounded">OUR WORK</span>
          <p className="text-neutral-800 md:text-5xl text-4xl font-semibold">Our Portfolio</p>
        </div>
        <ProjectsSlider />
      </section> */}

      <section
        className="lg:py-20 md:py-16 py-12 md:px-4 sm:px-8 px-4" id="we-transform">
        <div className="max-w-7xl mx-auto relative">
          <div className="w-10 h-10 rounded-full bg-blueClr flex items-center justify-center">
            <Rotate3D className="w-6 h-6 inline text-white" />
          </div>
          <h3 className="my-2 max-w-screen-sm text-balance text-2xl font-semibold lg:text-4xl">
            Industries We Transform
          </h3>
          <p className="mb-8 sm:text-sm text-xs text-neutral-700">From startups to enterprises, local shops to global brands — we bring innovation everywhere.
            For the past 3 years, we have worked with businesses of every size and sector. Our goal is simple: to
            use modern technologies like AI, Cloud, and Automation to solve real challenges and create
            measurable growth. Whether you are a small local business or a large multinational, we design
            solutions that fit your unique journey.</p>
          <div className="z-30 grid sm:gap-6 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <div key={index} className="rounded-2xl border bg-gradient-to-tr from-cyan-500 to-blue-500 md:p-8 sm:p-6 p-4 text-white">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                  {industry.icon}
                </div>
                <h3 className="mt-4 font-semibold md:text-xl">{industry.title}</h3>
                <p className="text-xs mb-3 text-neutral-100">{industry.description}</p>
                <ul className="list-disc ps-5 text-sm space-y-1">
                  {industry.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lg:py-20 md:py-16 py-12 md:px-4 sm:px-8 px-4 bg-grayClr" id="testimonials">
        <TestimonialSlider />
      </section>

      <section className="lg:py-16 md:py-12 py-10 md:px-4 sm:px-8 px-4" id="insights">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 items-center justify-center">
            <span className="flex items-center text-blueClr bg-lightBlueClr px-3 h-8 text-xs font-semibold rounded">OUR BLOGS</span>
            <p className="text-neutral-800 md:text-5xl text-4xl font-semibold">Latest Insights</p>
          </div>
          <BlogsSlider />
        </div>
        <div className="border-t mt-10 max-w-7xl mx-auto">
          <h3 className="text-neutral-800 pt-8 pb-6 text-center md:text-2xl sm:text-lg font-bold">Trusted by specialists all around the world</h3>
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
      </section>

      <Cta />
    </>
  );
}
