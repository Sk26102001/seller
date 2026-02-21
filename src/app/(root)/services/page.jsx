import { redirect } from "next/navigation";
import services from "@/data/services.js";

export default function ServicesPage() {
    const firstService = services[0].slug;
    redirect(`/services/${firstService}`);
}