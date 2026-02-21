import Link from "next/link"

export const metadata = {
    title: 'Privacy Policy | Stellar IT',
    description: 'Read the Stellar IT Global privacy policy. Learn how we collect, use, and protect your personal data when you use our website and our services.',
}

function page() {
    return (
        <>
            <section className="mt-24">
                <div className="relative lg:h-[380px] h-[300px] bg-[url('/images/privacy-bg.jpg')] bg-cover bg-center">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(9,35,61,0.8)] to-[rgba(7,50,94,0.1)]"></div>
                    <h1 className="max-w-7xl relative z-10 text-white lg:text-6xl md:text-6xl text-5xl font-bold mx-auto flex items-end h-full pb-4 px-4">
                        Privacy Policy
                    </h1>
                </div>
            </section>
            <section>
                <div className="max-w-7xl mx-auto px-4 lg:py-20 md:py-16 py-12 text-neutral-800 space-y-6">
                    <div className="space-y-2">
                        <p>Stellar IT Global's optimized Privacy Policy now includes India-specific compliance elements like IT Act references, data retention details, and cookie notices tailored to your IT services, AI, web development, and digital marketing focus. This version enhances SEO-friendliness, user trust, and legal robustness for <Link className="underline text-blueClr" href="/">https://www.stellaritglobal.com/</Link>. Implement after consulting a lawyer for final DPDP Act alignment.</p>
                        <p>Your privacy matters — learn how Stellar IT Global protects your data responsibly across our AI, cloud, web, and marketing services.</p>
                        <p>Effective Date: January 20, 2026</p>
                        <p>Thank you for visiting Stellar IT Global. This Privacy Policy outlines how we collect, use, disclose, and safeguard personal information under India's Information Technology Act, 2000, and related rules when you engage with our website, apps, or services like website development, mobile apps, SEO, SMM, AI chatbots, and cloud hosting.
                            We commit to clear practices, reasonable security, and user rights.</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold mb-2">Information We Collect</p>
                        <ul className="list-disc space-y-2 ml-6">
                            <li><strong>Personal Information:</strong> Name, email, phone, company details, payment info provided via forms, inquiries, consultations, or services (e.g., project quotes for web/apps/marketing).</li>
                            <li><strong>Usage Data:</strong> IP address, browser/device info, pages visited, cookies, analytics from tools like Google Analytics to optimize sites, track leads, and improve AI/cloud solutions.</li>
                            <li><strong>Service-Specific:</strong> Project requirements, client feedback for IT services, marketing campaign data. We collect only what's necessary.</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold mb-2">How We Use Your Information</p>
                        <p>Data supports providing services (e.g., building websites/apps, SEO/SMM campaigns, AI automation), personalizing experiences, responding to inquiries, sending consented marketing, analyzing trends for better cloud/DevOps, and complying with laws.
                            We retain data only as needed (e.g., 5 years for client projects per business needs, or until consent withdrawal/deletion request).</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold mb-2">Disclosure and Sharing</p>
                        <p>We share with trusted providers (e.g., cloud hosts like AWS/Azure, payment gateways), affiliates for admin, or as legally required—no sales to third parties. International transfers (e.g., global clients) use safeguards.
                            Client data stays confidential in mergers/acquisitions.</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold mb-2">Cookies and Tracking</p>
                        <p>Our site uses cookies for functionality, analytics, and marketing (e.g., Google tools). Manage preferences via browser settings; essential cookies remain active.</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold mb-2">Data Security</p>
                        <p>We apply reasonable measures—encryption, access controls, regular audits—for IT/security services standards, though no system is 100% secure.</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold mb-2">Your Rights and Choices</p>
                        <p>Under Indian law, access, correct, delete, or restrict your data; withdraw consent; unsubscribe from emails. Requests to <Link className="underline text-blueClr" href="mailto:support@stellaritglobal.com">support@stellaritglobal.com</Link> we respond within 30 days. Restrictions may limit services.</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold mb-2">Children's Privacy and Third Parties</p>
                        <p>Services target 18+; no knowing collection from under-13s. Third-party links (e.g., social media) have separate policies.</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold mb-2">Policy Updates</p>
                        <p>Changes post here with notice via email/site; continued use implies acceptance. Review annually.</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold mb-2">Contact Information</p>
                        <ul className="list-disc space-y-2 ml-6">
                            <li><strong>Email:</strong> <Link href={'mailto:support@stellaritglobal.com'} className="underline text-blueClr">support@stellaritglobal.com</Link></li>
                            <li><strong>Phone:</strong> +91 93777 16183 / +91 78893 17203</li>
                            <li><strong>Address:</strong> A 1030, Sun Westbank, Near Vallabh Sadan, Ashram Road, Ahmedabad 380009, India</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
