import { BadgeCheck, BookOpen, Bug, BugPlay, CalendarDays, Clock, Code, CodeXml, Database, Figma, FigmaIcon, FlagTriangleRight, Image, LineSquiggle, Link, ListCheck, ListVideo, ListVideoIcon, Monitor, RotateCcw, Scroll, Store, TabletSmartphone, UserCog } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Website & Web App Development",
        slug: "website-web-app-development",
        image: "/images/services/web-dev.png",
        whatItIs: "Fast, secure, responsive websites and custom web apps that scale.",
        includes: [
            "Business websites, portfolios, landing pages",
            "Web apps & dashboards, portals, booking systems, multi-vendor marketplaces",
            "E-commerce (Shopify, WooCommerce, Magento) with payment gateway & shipping",
            "CMS setup (WordPress/Headless), multilingual, accessibility (A11y)",
            "Performance, security, and mobile optimization"
        ],
        deliverables: [
            { title: "UX wireframes + UI design", desc: "Clear wireframes and polished UI mockups to visualize user flow and layout.", icon: <Figma className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Frontend + backend + database", desc: "Complete development stack built with scalable, secure, and maintainable code.", icon: <Database className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Admin panel + role permissions", desc: "Custom dashboard with role-based access to manage data and operations.", icon: <UserCog className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Test cases + UAT + deployment", desc: "Quality assurance with test cases, user acceptance testing, and production deployment.", icon: <Bug className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Handover + training videos", desc: "Project documentation and video tutorials for smooth transition and usage.", icon: <ListVideo className="w-8 h-8 inline text-white stroke-1" /> }
        ],
        timeline: "2–12 weeks (scope dependent)",
        tech: [{ title: "React", src: "/images/icons/react-icon.png" }, { title: "Next.js", src: "/images/icons/nextjs.png" }, { title: "Node.js", src: "/images/icons/nodejs.png" }, { title: "Python/Flask", src: "/images/icons/python.png" }, { title: "Laravel", src: "/images/icons/laravel.png" }, { title: "PostgreSQL/MySQL", src: "/images/icons/mysql.png" }, { title: "Redis", src: "/images/icons/redis.png" }, { title: "Docker", src: "/images/icons/docker.png" }, { title: "Nginx", src: "/images/icons/nginx.png" }],
        kpis: ["Load time <2s", "Core Web Vitals passed", "SEO-ready", "99.9% uptime"]
    },
    {
        id: 2,
        title: "Mobile App Development",
        slug: "mobile-app-development",
        image: "/images/services/mobile-app.png",
        whatItIs: "Android/iOS apps that integrate with your site, CRM, or ERP.",
        includes: ["Native/Hybrid apps, push notifications, in-app payments", "App store publishing & analytics"],
        deliverables: [
            {
                title: "App Design",
                desc: "Crafting user-friendly UI/UX designs, wireframes, and clickable prototypes.",
                icon: <TabletSmartphone className="w-8 h-8 inline text-white stroke-1" />,
            },
            {
                title: "App Development",
                desc: "Building the app using the chosen tech stack with clean, scalable code.",
                icon: <CodeXml className="w-8 h-8 inline text-white stroke-1" />,
            },
            {
                title: "Quality Assurance (QA)",
                desc: "Testing across devices for performance, security, and smooth user experience.",
                icon: <BadgeCheck className="w-8 h-8 inline text-white stroke-1" />,
            },
            {
                title: "Store Launch",
                desc: "Publishing apps to Google Play and App Store with proper guidelines.",
                icon: <Store className="w-8 h-8 inline text-white stroke-1" />,
            },
            {
                title: "Crash Monitoring",
                desc: "Post-launch monitoring to track crashes, errors, and ensure stability.",
                icon: <BugPlay className="w-8 h-8 inline text-white stroke-1" />,
            }
        ],
        tech: [{ title: "Flutter", src: "/images/icons/flutter.png" }, { title: "React Native", src: "/images/icons/react-native.png" }, { title: "Kotlin", src: "/images/icons/kotlin.png" }, { title: "Swift", src: "/images/icons/swift.png" }],
    },
    {
        id: 3,
        title: "Branding & Creative Design",
        slug: "branding-creative-design",
        image: "/images/services/branding.png",
        whatItIs: "A brand system that looks sharp and sells.",
        includes: [
            "Logo, color palette, typography, brand guidelines",
            "Social media kits, ad creatives, brochures, pitch decks",
            "UI/UX design, prototypes, clickable demos"
        ],
        deliverables: [
            { title: "Brand book PDF", desc: "Comprehensive branding guide covering logo usage, colors, and typography.", icon: <BookOpen className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Asset pack", desc: "Logos, templates, and graphics in multiple formats for digital and print use.", icon: <Image className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Figma files", desc: "Editable design files with organized layers for future design work.", icon: <FigmaIcon className="w-8 h-8 inline text-white stroke-1" /> }
        ],
        kpis: ["Consistency score", "Engagement lift on creatives"]
    },
    {
        id: 4,
        title: "Business Listings & Local Presence",
        slug: "business-listings-local-presence",
        image: "/images/services/business-presence.png",
        whatItIs: "Make customers find you everywhere.",
        includes: [
            "Google Business Profile setup/claim, NAP consistency",
            "Categories, services, photos, Q&A, review reply templates",
            "Weekly post calendar (offers, updates)",
            "Other Listings: Justdial, Sulekha, IndiaMart, OLX Biz, Yelp, Yellow Pages, Bing Places, Apple Maps",
            "Social profiles: Facebook, Instagram, LinkedIn, X, YouTube setup + branding"
        ],
        deliverables: [
            { title: "Verified profiles", desc: "All accounts verified and optimized for visibility and trust.", icon: <BadgeCheck className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Optimization sheet", desc: "Detailed checklist of optimizations applied for better ranking.", icon: <ListCheck className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Review playbook", desc: "Guide with templates for managing and responding to customer reviews.", icon: <ListVideoIcon className="w-8 h-8 inline text-white stroke-1" /> }
        ],
        kpis: ["Map pack rank", "Direction clicks", "Calls", "Review velocity"]
    },
    {
        id: 5,
        title: "SEO (Search Engine Optimization)",
        slug: "seo",
        image: "/images/services/seo.jpg",
        whatItIs: "Grow organic traffic and qualified leads.",
        includes: [
            "Keyword research & content plan",
            "On-page SEO: titles, schema, internal links",
            "Technical SEO: crawl, index, sitemaps, Core Web Vitals",
            "Off-page: backlinks, citations, digital PR"
        ],
        deliverables: [
            { title: "SEO audit", desc: "Comprehensive website audit with issues, fixes, and opportunities.", icon: <ListCheck className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "90-day roadmap", desc: "Step-by-step action plan with milestones and priorities.", icon: <LineSquiggle className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Monthly reports", desc: "Clear analytics reports tracking rankings, traffic, and conversions.", icon: <Scroll className="w-8 h-8 inline text-white stroke-1" /> }
        ],
        kpis: ["Rankings", "Organic sessions", "CTR", "Conversions"]
    },
    {
        id: 6,
        title: "Social Media Marketing (SMM)",
        slug: "social-media-marketing",
        image: "/images/services/smm.jpg",
        whatItIs: "Content and ads that build audience and sales.",
        includes: [
            "Content calendar, reels & posts, copywriting, community management",
            "Influencer outreach & collabs",
            "Social ads (Meta, LinkedIn, YouTube)"
        ],
        deliverables: [
            { title: "Monthly calendar", desc: "Planned schedule of posts, stories, and reels for consistent engagement.", icon: <CalendarDays className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Creative assets", desc: "High-quality designs, videos, and copy tailored for social media.", icon: <Image className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Weekly performance snapshots", desc: "Short reports showing reach, engagement, and growth trends.", icon: <Scroll className="w-8 h-8 inline text-white stroke-1" /> }
        ],
        kpis: ["Reach", "Engagement", "Cost per result", "ROAS"]
    },
    {
        id: 7,
        title: "PPC & Performance Ads",
        slug: "ppc-performance-ads",
        image: "/images/services/ppc.jpg",
        whatItIs: "Immediate, trackable growth through paid campaigns.",
        includes: ["Google Search/Display, Shopping, YouTube, LinkedIn, Meta", "Conversion tracking, A/B testing, landing pages, remarketing"],
        deliverables: [
            { title: "Campaign setup", desc: "Full ad account setup with targeting, creatives, and tracking.", icon: <FlagTriangleRight className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Weekly optimization", desc: "Regular performance tweaks to lower costs and improve results.", icon: <RotateCcw className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Reports", desc: "Data-driven reports highlighting KPIs, trends, and ROI.", icon: <Scroll className="w-8 h-8 inline text-white stroke-1" /> }
        ],
        kpis: ["CPA/CPL", "CTR", "Quality Score", "ROAS"]
    },
    {
        id: 8,
        title: "Content, Video & Blogging",
        slug: "content-video-blogging",
        image: "/images/services/content.jpg",
        whatItIs: "Value-driven content that ranks and converts.",
        includes: [
            "Blogs, web copy, case studies, whitepapers",
            "Product photos, ad creatives, reels/shorts, explainer videos"
        ],
        deliverables: [
            { title: "Editorial calendar", desc: "Monthly schedule of blogs, videos, and posts mapped to SEO strategy.", icon: <CalendarDays className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "SEO briefs", desc: "Detailed outlines with keywords, headings, and structure for writers.", icon: <ListCheck className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Publish-ready assets", desc: "Proofread and formatted content ready for website or social publishing.", icon: <Image className="w-8 h-8 inline text-white stroke-1" /> }
        ],
        kpis: ["Time on page", "Backlinks", "Assisted conversions"]
    },
    {
        id: 9,
        title: "Email & SMS Automation",
        slug: "email-sms-automation",
        image: "/images/services/email-sms.jpg",
        whatItIs: "Nurture leads and increase repeat sales.",
        includes: [
            "Welcome, cart recovery, win-back, newsletters",
            "Segmentation, A/B tests, SMS triggers"
        ],
        deliverables: [
            { title: "Flows", desc: "Automated email/SMS sequences for different customer journeys.", icon: <ListCheck className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Templates", desc: "Custom-designed email/SMS templates aligned with your brand.", icon: <Image className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Integration with CRM/e-com", desc: "Seamless connection with CRMs and e-commerce systems.", icon: <Database className="w-8 h-8 inline text-white stroke-1" /> }
        ],
        kpis: ["Open rate", "CTR", "Revenue per send"]
    },
    {
        id: 10,
        title: "AI, Automation & Chatbots",
        slug: "ai-automation-chatbots",
        image: "/images/services/ai.svg",
        whatItIs: "Reduce manual work and speed up operations.",
        includes: [
            "Lead scoring, recommendation engines, basic NLP chatbots",
            "WhatsApp automation, support bots, workflow automation (Zapier/Make)"
        ],
        deliverables: [
            { title: "Automation diagrams", desc: "Flowcharts of automated processes for clarity and planning.", icon: <ListCheck className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Bot scripts", desc: "Pre-written chatbot dialogues for smooth customer interactions.", icon: <Code className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Monitoring dashboard", desc: "Live dashboard tracking bot performance and automation health.", icon: <Monitor className="w-8 h-8 inline text-white stroke-1" /> }
        ],
        kpis: ["Time saved", "Ticket deflection", "Conversion lift"]
    },
    {
        id: 11,
        title: "Cloud, DevOps & Hosting",
        slug: "cloud-devops-hosting",
        image: "/images/services/cloud.jpg",
        whatItIs: "Stable, scalable infrastructure.",
        includes: [
            "AWS/Azure/GCP setup, CI/CD, containers",
            "SSL, CDN, monitoring, backups, disaster recovery"
        ],
        deliverables: [
            { title: "IaC scripts (where applicable)", desc: "Infrastructure-as-code scripts for repeatable and reliable deployments.", icon: <Code className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Playbooks", desc: "Step-by-step guides for server management and operations.", icon: <ListCheck className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Runbooks", desc: "Incident resolution guides for faster troubleshooting and recovery.", icon: <Monitor className="w-8 h-8 inline text-white stroke-1" /> }
        ],
        kpis: ["Uptime", "Latency", "Recovery time objective (RTO)"]
    },
    {
        id: 12,
        title: "Security & Compliance",
        slug: "security-compliance",
        image: "/images/services/security.jpg",
        whatItIs: "Keep your data and users safe.",
        includes: [
            "Security hardening, WAF, vulnerability scans, pen-test coordination",
            "GDPR/DPDP-ready consent & privacy patterns"
        ],
        deliverables: [
            { title: "Security audit report", desc: "Detailed assessment of risks and vulnerabilities.", icon: <ListCheck className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Fix plan", desc: "Prioritized roadmap to patch and secure your systems.", icon: <LineSquiggle className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Incident checklist", desc: "Step-by-step protocol for handling security incidents.", icon: <Scroll className="w-8 h-8 inline text-white stroke-1" /> }
        ],
        kpis: ["Zero critical vulns", "MTTR", "Compliance checklists passed"]
    },
    {
        id: 13,
        title: "Marketplace & Store Setup",
        slug: "marketplace-store-setup",
        image: "/images/services/marketplace.jpg",
        whatItIs: "List and sell on top marketplaces.",
        includes: [
            "Amazon, Flipkart, Meesho, Etsy store creation",
            "Catalog, pricing, logistics, ads inside marketplaces"
        ],
        deliverables: [
            { title: "Store verified", desc: "Account successfully set up and verified on marketplaces.", icon: <BadgeCheck className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Listing templates", desc: "Reusable templates for adding new products quickly.", icon: <ListCheck className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "SOPs", desc: "Standard processes for managing listings and ads.", icon: <Scroll className="w-8 h-8 inline text-white stroke-1" /> }
        ],
        kpis: ["Sessions", "Buy Box %", "Order rate"]
    },
    {
        id: 14,
        title: "CRM/ERP & Payment Integration",
        slug: "crm-erp-payment-integration",
        image: "/images/services/crm.jpg",
        whatItIs: "Streamline operations and cashflow.",
        includes: [
            "CRM (HubSpot, Zoho, Salesforce)",
            "ERP basics for inventory/invoicing",
            "Payment gateways: Razorpay, PayU, Stripe, PayPal, UPI"
        ],
        deliverables: [
            { title: "Integration map", desc: "Diagram showing how systems are connected and flow together.", icon: <Link className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Configured pipelines", desc: "Ready-to-use pipelines for leads, sales, and support.", icon: <ListCheck className="w-8 h-8 inline text-white stroke-1" /> },
            { title: "Dashboard", desc: "Unified dashboard to monitor leads, sales, and payments.", icon: <Monitor className="w-8 h-8 inline text-white stroke-1" /> }
        ],
        kpis: ["Lead velocity", "Pipeline value", "Payment success rate"]
    },
    {
        id: 15,
        title: "Care Plans (Support & Maintenance)",
        slug: "care-plans-support-maintenance",
        image: "/images/services/care-plans.png",
        whatItIs: "Ongoing support and optimization packages.",
        includes: [
            "Lite: Uptime monitoring, backups, core updates, 2h fixes",
            "Growth: Lite + SEO/SMM tweaks, 8h dev time",
            "Scale: Growth + CRO tests, roadmap reviews"
        ],
        deliverables: [
            {
                title: "Response Time SLA",
                desc: "Guaranteed response within 4 hours for business-critical issues.",
                icon: <Clock className="w-8 h-8 inline text-white stroke-1" />
            },
            {
                title: "Priority-based Fix Window",
                desc: "Fixes are completed according to priority levels to ensure critical issues are resolved first.",
                icon: <ListCheck className="w-8 h-8 inline text-white stroke-1" />
            }
        ]
    }
];

export default services;
