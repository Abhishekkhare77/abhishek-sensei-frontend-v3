import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Page() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <VideoIcon className="w-6 h-6" />
                </Link>
                <div className="flex items-center gap-4">
                    <Input
                        type="text"
                        placeholder="Search videos..."
                        className="bg-gray-800 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />

                </div>
            </header>
            <section className="bg-gray-900 py-12 px-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold mb-4 text-white">Discover the best videos</h1>
                        <p className="text-gray-400 mb-8">Explore a wide range of videos on our platform.</p>
                        <div className="flex gap-4">
                            <Button>Upload Video</Button>
                            <Button variant="secondary">Browse Videos</Button>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="aspect-video rounded-lg overflow-hidden">
                            <video src="/sample-video.mp4" controls className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
            <main className="flex-1">
                <section className="w-full pt-12 md:pt-24 lg:pt-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-6 lg:grid-cols-2">
                            <div className="space-y-4">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Watch your favorite movies and TV shows anytime, anywhere
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Choose from a wide range of genres - action, comedy, drama, thriller. Exclusive content. Ad-free
                                    Streaming. Now available on all your devices.
                                </p>
                                <div className="flex gap-4 flex-wrap">
                                    <Button size="lg">Get Started</Button>
                                    <Button variant="outline" size="lg">
                                        Tour the Platform
                                    </Button>
                                </div>
                            </div>
                            <div className="relative aspect-video rounded-xl overflow-hidden">
                                <img
                                    src="/placeholder.svg"
                                    width="500"
                                    height="310"
                                    alt="Image"
                                    className="object-cover object-center"
                                    style={{ aspectRatio: "500/310", objectFit: "cover" }}
                                />
                                <Button
                                    className="absolute inset-0 bg-black/0 opacity-50 w-full h-full flex items-center justify-center translate-y-full transition-transform group"
                                    style={{ top: "50%" }}
                                >
                                    <PlayIcon className="w-12 h-12 text-gray-50 group-hover:scale-125 translate-y-1 dark:text-gray-950" />
                                    <span className="sr-only">Play</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                            <img
                                src="/placeholder.svg"
                                width="550"
                                height="310"
                                alt="Image"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            />
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Comedy</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Laughter is the best medicine
                                </h2>
                                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Enjoy the finest comedy movies and TV shows. From laugh-out- loud comedies to witty satire, we&apos;ve
                                    got it all.
                                </p>
                                <div className="flex gap-4">
                                    <Link
                                        href="#"
                                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                        prefetch={false}
                                    >
                                        View All
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Action</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Adrenaline Rush</h2>
                                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Buckle up for high-speed chases, intense fight sequences, and explosive action. Watch the best action
                                    movies and TV shows on your favorite platform.
                                </p>
                                <div className="flex gap-4">
                                    <Link
                                        href="#"
                                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                        prefetch={false}
                                    >
                                        View All
                                    </Link>
                                </div>
                            </div>
                            <img
                                src="/placeholder.svg"
                                width="550"
                                height="310"
                                alt="Image"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                            <img
                                src="/placeholder.svg"
                                width="550"
                                height="310"
                                alt="Image"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            />
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Romance</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Love is in the air</h2>
                                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Fall in love with the most romantic movies and TV shows. From epic love stories to charming rom-coms,
                                    we&apos;ve got the perfect date night.
                                </p>
                                <div className="flex gap-4">
                                    <Link
                                        href="#"
                                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                        prefetch={false}
                                    >
                                        View All
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Thriller</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Edge of Your Seat</h2>
                                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Get ready for heart-pounding suspense with the best thriller movies and TV shows. From gripping crime
                                    dramas to mind-bending mysteries.
                                </p>
                                <div className="flex gap-4">
                                    <Link
                                        href="#"
                                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                        prefetch={false}
                                    >
                                        View All
                                    </Link>
                                </div>
                            </div>
                            <img
                                src="/placeholder.svg"
                                width="550"
                                height="310"
                                alt="Image"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

function VideoIcon(props) {
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
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
            <rect x="2" y="6" width="14" height="12" rx="2" />
        </svg>
    )
}


function PlayIcon(props) {
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
            <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
    )
}