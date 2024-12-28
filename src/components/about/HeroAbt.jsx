import Link from "next/link";
import React from "react";
export function HeroAbt() {
    return <section className="w-full mt-2 py-6 px-10 rounded-md md:py-12 lg:py-24 xl:py-32 bg-gray-900 text-gray-50 dark:bg-gray-950 dark:text-gray-50">
        <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-5">
                        <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                            Crafting Exceptional Digital Experiences
                        </h1>
                        <p className="max-w-[600px] text-gray-300 md:text-xl dark:text-gray-400">
                            I am a software engineer/designer passionate about creating visually stunning and highly functional
                            digital products. Let me help you bring your ideas to life.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Link href="/projects" className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-300" prefetch={false}>
                            View Projects
                        </Link>
                        <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300" prefetch={false}>
                            Contact Me
                        </Link>
                    </div>
                </div>
                <img src="/my-img.jpg" width="550" height="550" alt="Hero" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square" />
            </div>
        </div>
    </section>;
}
