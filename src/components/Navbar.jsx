"use client";
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const pathname = usePathname();
    const menus = [
        {
            href: "/",
            label: "Home",
            active: pathname === "/",
        },
        {
            href: "/about",
            label: "About",
            active: pathname.includes("/about"),
        },
        {
            href: "/blogs",
            label: "Blogs",
            active: pathname.includes("/blogs"),
        },
        {
            href: "/courses",
            label: "Courses",
            active: pathname.includes("/courses"),
        },
        {
            href: "/notes",
            label: "Notes",
            active: pathname.includes("/notes"),
        },
        {
            href: "/projects",
            label: "Projects",
            active: pathname.includes("/projects"),
        },
        {
            href: "/merchandise",
            label: "Merchandise",
            active: pathname.includes("/merchandise"),
        },
        {
            href: "/newsletter",
            label: "Newsletter",
            active: pathname.includes("/newsletter"),
        },
        {
            href: "/contact",
            label: "Contact",
            active: pathname.includes("/contact"),
        },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
                <Link href="#" className="flex items-center gap-2 font-bold tracking-tight text-pretty" prefetch={false}>
                    <h1>Abhishek Khare</h1>
                </Link>
                <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                    {menus.map((menu) => (
                        <Link
                            key={menu.href}
                            href={menu.href}
                            className={`${menu.active
                                ? "text-gray-900 dark:text-gray-50"
                                : "text-gray-500 dark:text-gray-400"
                                } hover:text-gray-900 dark:hover:text-gray-50`}
                            prefetch={false}
                        >
                            {menu.label}
                        </Link>
                    ))}

                </nav>
                <div className="flex items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                <span className="sr-only">Search</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[300px] p-4">
                            <div className="relative">
                                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                                <Input type="search" placeholder="Search..." className="pl-8 w-full" />
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full md:hidden">
                                <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="md:hidden">
                            <div className="grid gap-4 p-4">
                                {menus.map((menu) => (
                                    <Link
                                        key={menu.href}
                                        href={menu.href}
                                        className={`${menu.active
                                            ? "text-gray-900 dark:text-gray-50"
                                            : "text-gray-500 dark:text-gray-400"
                                            } hover:text-gray-900 dark:hover:text-gray-50`}
                                        prefetch={false}
                                    >
                                        {menu.label}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function MoonIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    )
}


function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}


function PhoneIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}


function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}