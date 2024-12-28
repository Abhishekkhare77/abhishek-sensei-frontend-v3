import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Page() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="bg-gray-900 rounded-t-md mt-2 text-white py-4 px-6 flex items-center justify-between">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <span className="text-xl font-bold text-white tracking-tight text-pretty">Go to YouTube</span>
                </Link>
                <div className="flex items-center gap-4">
                    <Input
                        type="text"
                        placeholder="Search videos..."
                        className="bg-gray-800 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />

                </div>
            </header>
            <section className="bg-gray-900 rounded-b-md py-12 px-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold mb-4 text-white">Discover the best courses</h1>
                        <p className="text-gray-400 mb-8">
                            Learn from the best instructors in the world. Our courses cover everything you need to know to become a professional developer.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="outline">Watch Playlists</Button>
                            <Button variant="ghost" className="text-white border-white border">Browse Courses</Button>
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
                                    Complete FastAPI course
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Learn how to build a complete FastAPI application from scratch. This course covers everything you need
                                </p>
                                <div className="flex gap-4 flex-wrap">
                                    <Button size="lg">Open in Youtube</Button>
                                    <Button variant="outline" size="lg">
                                        <VideoIcon className="w-6 h-6 mr-2" />
                                        Watch Introduction
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
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Complete Nextjs course
                                </h2>
                                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Learn how to build a complete Next.js application from scratch. This course covers everything you need.
                                </p>
                                <div className="flex gap-4">
                                    <Button size="lg">Open in Youtube</Button>
                                    <Button variant="outline" size="lg">
                                        <VideoIcon className="w-6 h-6 mr-2" />
                                        Watch Introduction
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 rounded-md bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Docker</h2>
                                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Learn how to build, test, and deploy Docker applications with our Docker course. This course covers everything you need.
                                </p>
                                <div className="flex gap-4">
                                    <Button size="lg">Open in Youtube</Button>
                                    <Button variant="outline" size="lg">
                                        <VideoIcon className="w-6 h-6 mr-2" />
                                        Watch Introduction
                                    </Button>
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
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Complete Javascript course</h2>
                                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Learn how to build a complete Javascript application from scratch. This course covers everything you need.
                                </p>
                                <div className="flex gap-4">
                                    <Button size="lg">Open in Youtube</Button>
                                    <Button variant="outline" size="lg">
                                        <VideoIcon className="w-6 h-6 mr-2" />
                                        Watch Introduction
                                    </Button>
                                </div>
                            </div>
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