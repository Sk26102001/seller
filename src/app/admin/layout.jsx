'use client'
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CirclePlus, LogOut, Logs } from "lucide-react"
import {
    SidebarProvider,
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Toaster } from "sonner"
import { useRouter } from "next/navigation"

export default function RootLayout({ children }) {

    const router = useRouter()

    const items = [
        {
            title: "Blogs",
            url: "/admin/blogs",
            icon: Logs,
        },
        {
            title: "Add BLog",
            url: "/admin/add-blog",
            icon: CirclePlus,
        },
    ]

    async function signOut() {
        try {
            const res = await fetch("/api/logout", { method: "POST" });
            if (!res.ok) throw new Error("Failed to logout");
            router.push("/login");
        } catch (error) {
            console.error("Failed to logout:", error);
        }
    }


    return (
        <>
            <Toaster richColors position="top-right" />
            <SidebarProvider>
                <Sidebar>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>ADMIN PANEL</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {items.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                <a href={item.url}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Button variant="ghost" className={'justify-start cursor-pointer'} onClick={() => signOut()} >
                                                <LogOut />
                                                <span>Logout</span>
                                            </Button>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>

                <main className="flex-1 p-4">
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarProvider>
        </>
    )
}

