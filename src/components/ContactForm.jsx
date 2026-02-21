'use client'

import { useState } from "react"
import { toast, Toaster } from "sonner"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { CalendarCheck2 } from "lucide-react"
import { Waveform } from 'ldrs/react'
import 'ldrs/react/Waveform.css'

function ContactForm({ width }) {
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.target);

        formData.append("access_key", "d4aa9ca4-e586-419f-8d9a-c1ac416e6440");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Message sent successfully!", { description: "We will get back to you soon." }, { duration: 3000 });
            event.target.reset();
            setLoading(false);
        } else {
            toast.error('Something went wrong!', { description: 'Please try again later.' }, { duration: 3000 });
            setLoading(false);
        }
    };

    return (
        <>
            <Toaster richColors />
            <div className={`bg-white p-6 rounded-2xl shadow-lg ${width}`}>
                <p className="flex items-center gap-2 text-xl font-semibold text-blueClr"><CalendarCheck2 className="w-5 h-5 inline" />Schedule a free consultation</p>
                <form className="mt-6 md:space-y-4 space-y-4" onSubmit={onSubmit}>
                    <input type="hidden" name="subject"
                        value="New Enquiry from Stellar website" />
                    <input type="checkbox" name="botcheck" id="" style={{ display: "none" }} />
                    <div className="grid w-full items-center gap-2">
                        <Label htmlFor="name">Full name</Label>
                        <Input type="text" name="name" id="name" placeholder="" required />
                    </div>
                    <div className="grid w-full items-center gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="" />
                    </div>
                    <div className="grid w-full items-center gap-2">
                        <Label htmlFor="number">Mobile</Label>
                        <Input type="number" name="number" id="number" placeholder="" required />
                    </div>
                    <div className="grid w-full gap-2">
                        <Label htmlFor="message">Your message</Label>
                        <Textarea placeholder="message..." name="message" id="message" className={"h-24"} />
                    </div>
                    <Button className="w-full bg-blueClr hover:bg-blueClr/80">
                        {loading
                            ? <Waveform
                                size="20"
                                stroke="3"
                                speed="1.25"
                                color="white" />
                            : "Submit"
                        }
                    </Button>
                </form>
            </div>
        </>
    )
}

export default ContactForm
