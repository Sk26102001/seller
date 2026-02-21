import Link from "next/link"

export const metadata = {
    title: "Terms and Conditions | Stellar IT",
    description:
        "Read the Stellar IT Global Terms and Conditions. Understand the rules, service scope, payments, intellectual property, warranties, and limitations when using our website and IT services.",
}

function page() {
    return (
        <>
            {/* Hero */}
            <section className="mt-24">
                <div className="relative lg:h-[380px] h-[300px] bg-[url('/images/tandc-bg.jpg')] bg-cover bg-center">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(9,35,61,0.8)] to-[rgba(7,50,94,0.1)]"></div>

                    <h1 className="max-w-7xl relative z-10 text-white lg:text-6xl md:text-6xl text-5xl font-bold mx-auto flex items-end h-full pb-4 px-4">
                        Terms & Conditions
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section>
                <div className="max-w-7xl mx-auto px-4 lg:py-20 md:py-16 py-12 text-neutral-800 space-y-6">
                    {/* Intro */}
                    <div className="space-y-2">
                        <p>
                            These Terms and Conditions (“Terms”) govern your access to and use
                            of the website and services provided by{" "}
                            <strong>Stellar IT Global</strong> (“Stellar IT”, “we”, “us”, or
                            “our”), including services related to AI solutions, software
                            development, website development, mobile app development, UI/UX
                            design, SEO, SMM, branding, cloud hosting, DevOps, and IT
                            consulting.
                        </p>

                        <p>
                            By accessing our website{" "}
                            <Link className="underline text-blueClr" href="/">
                                https://www.stellaritglobal.com/
                            </Link>{" "}
                            or engaging with our services, you agree to these Terms. If you do
                            not agree, please do not use the website or services.
                        </p>

                        <p className="font-medium">Effective Date: January 20, 2026</p>

                        <p className="text-sm text-neutral-600">
                            Note: These Terms are provided for general informational purposes.
                            Please consult a legal professional to ensure compliance with
                            India’s DPDP Act, IT Act, and other applicable regulations.
                        </p>
                    </div>

                    {/* Definitions */}
                    <div>
                        <p className="text-2xl font-semibold mb-2">Definitions</p>
                        <ul className="list-disc space-y-2 ml-6">
                            <li>
                                <strong>Client / You:</strong> Any person or business accessing
                                our website or using our services.
                            </li>
                            <li>
                                <strong>Services:</strong> IT, design, development, AI, digital
                                marketing, and cloud-related services offered by Stellar IT.
                            </li>
                            <li>
                                <strong>Deliverables:</strong> Any output created for the Client,
                                such as websites, apps, designs, code, campaigns, reports, or
                                AI-based solutions.
                            </li>
                        </ul>
                    </div>

                    {/* Website Use */}
                    <div>
                        <p className="text-2xl font-semibold mb-2">Use of Website</p>
                        <ul className="list-disc space-y-2 ml-6">
                            <li>
                                You agree to use this website only for lawful purposes.
                            </li>
                            <li>
                                You must not attempt to damage, disrupt, hack, or misuse our
                                website, servers, or systems.
                            </li>
                            <li>
                                Content on this website is for general information and may be
                                updated or removed without notice.
                            </li>
                        </ul>
                    </div>

                    {/* Service Engagement */}
                    <div>
                        <p className="text-2xl font-semibold mb-2">Service Engagement & Scope</p>
                        <p>
                            Project scope, timeline, deliverables, and costs will be confirmed
                            through an approved quotation, email confirmation, proposal, or
                            service agreement. Any work outside the agreed scope may require
                            additional charges and timeline adjustments.
                        </p>
                    </div>

                    {/* Payments */}
                    <div>
                        <p className="text-2xl font-semibold mb-2">Payments, Invoices & Refunds</p>
                        <ul className="list-disc space-y-2 ml-6">
                            <li>
                                Payments must be made as per the agreed milestones or invoice
                                terms.
                            </li>
                            <li>
                                Delays in payment may pause work, delivery, deployment, or
                                support until dues are cleared.
                            </li>
                            <li>
                                Unless explicitly stated in writing, payments are generally{" "}
                                <strong>non-refundable</strong> once work has started.
                            </li>
                            <li>
                                Third-party costs (domains, hosting, paid plugins, ad budgets,
                                API usage, SMS/WhatsApp credits, etc.) are billed separately and
                                are non-refundable.
                            </li>
                        </ul>
                    </div>

                    {/* Client Responsibilities */}
                    <div>
                        <p className="text-2xl font-semibold mb-2">Client Responsibilities</p>
                        <ul className="list-disc space-y-2 ml-6">
                            <li>
                                Provide accurate project requirements, content, assets, and
                                approvals in time.
                            </li>
                            <li>
                                Ensure you have rights to any logos, images, text, or content you
                                provide to us.
                            </li>
                            <li>
                                Delays in approvals or content submission may affect timelines.
                            </li>
                            <li>
                                You are responsible for reviewing final deliverables before
                                launch and confirming that everything is correct.
                            </li>
                        </ul>
                    </div>

                    {/* Intellectual Property */}
                    <div>
                        <p className="text-2xl font-semibold mb-2">Intellectual Property (IP)</p>
                        <ul className="list-disc space-y-2 ml-6">
                            <li>
                                Unless stated otherwise, Stellar IT retains ownership of reusable
                                frameworks, templates, libraries, internal tools, and methods
                                used during development.
                            </li>
                            <li>
                                Upon full payment, you receive rights to use final deliverables
                                created specifically for you (as agreed in the project scope).
                            </li>
                            <li>
                                You may not resell, redistribute, or claim ownership of our
                                internal code, designs, or proprietary material.
                            </li>
                            <li>
                                Stellar IT may display non-confidential work in portfolios unless
                                restricted by written agreement.
                            </li>
                        </ul>
                    </div>

                    {/* Third Party */}
                    <div>
                        <p className="text-2xl font-semibold mb-2">Third-Party Tools & Services</p>
                        <p>
                            Our services may involve third-party platforms such as Google,
                            Meta, AWS, Azure, payment gateways, analytics tools, APIs, plugins,
                            or hosting providers. Their availability, performance, pricing,
                            and policies are outside our control, and your usage is also
                            subject to their terms.
                        </p>
                    </div>

                    {/* Marketing */}
                    <div>
                        <p className="text-2xl font-semibold mb-2">
                            Digital Marketing / Ads Disclaimer
                        </p>
                        <ul className="list-disc space-y-2 ml-6">
                            <li>
                                SEO, social media, and paid ads depend on multiple external
                                factors (competition, platform rules, search engine updates).
                            </li>
                            <li>
                                We do not guarantee rankings, leads, revenue, or ad performance.
                            </li>
                            <li>
                                Any estimated results are informational only, not guaranteed.
                            </li>
                        </ul>
                    </div>

                    {/* Warranty */}
                    <div>
                        <p className="text-2xl font-semibold mb-2">Warranty Disclaimer</p>
                        <p>
                            All services and deliverables are provided on an “as is” and “as
                            available” basis. While we aim for high quality and best practices,
                            we do not guarantee that deliverables will be error-free,
                            uninterrupted, or meet every third-party platform requirement at
                            all times.
                        </p>
                    </div>

                    {/* Liability */}
                    <div>
                        <p className="text-2xl font-semibold mb-2">Limitation of Liability</p>
                        <p>
                            To the fullest extent permitted by law, Stellar IT Global shall not
                            be liable for any indirect, incidental, special, consequential, or
                            business losses including loss of profit, revenue, data, or
                            reputation. Our total liability will not exceed the total amount
                            paid to us for the specific service in question.
                        </p>
                    </div>

                    {/* Termination */}
                    <div>
                        <p className="text-2xl font-semibold mb-2">Termination</p>
                        <ul className="list-disc space-y-2 ml-6">
                            <li>
                                We may suspend or terminate service if Terms are violated or
                                payments are overdue.
                            </li>
                            <li>
                                Client may terminate services by written notice. Completed work
                                and incurred expenses remain payable.
                            </li>
                        </ul>
                    </div>

                    {/* Governing Law */}
                    <div>
                        <p className="text-2xl font-semibold mb-2">Governing Law</p>
                        <p>
                            These Terms shall be governed by the laws of India. Any disputes
                            will be subject to jurisdiction of courts in Ahmedabad, Gujarat,
                            unless stated otherwise by a written agreement.
                        </p>
                    </div>

                    {/* Updates */}
                    <div>
                        <p className="text-2xl font-semibold mb-2">Updates to These Terms</p>
                        <p>
                            We may update these Terms from time to time. Changes will be posted
                            on this page with an updated effective date. Continued use of our
                            website or services means you accept the revised Terms.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-2xl font-semibold mb-2">Contact Information</p>
                        <ul className="list-disc space-y-2 ml-6">
                            <li>
                                <strong>Email:</strong>{" "}
                                <Link
                                    href={"mailto:support@stellaritglobal.com"}
                                    className="underline text-blueClr"
                                >
                                    support@stellaritglobal.com
                                </Link>
                            </li>
                            <li>
                                <strong>Phone:</strong> +91 93777 16183 / +91 78893 17203
                            </li>
                            <li>
                                <strong>Address:</strong> A 1030, Sun Westbank, Near Vallabh
                                Sadan, Ashram Road, Ahmedabad 380009, India
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
