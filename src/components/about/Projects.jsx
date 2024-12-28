import Link from "next/link";
import React from "react";
export function Projects({ }) {
    return <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Take a look at some of my recent work and the impact it has had.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <img src="/placeholder.svg" width="550" height="310" alt="Project 1" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" />
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold">Project 1</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            A responsive and visually stunning e-commerce website that increased conversions by 25%.
                        </p>
                    </div>
                    <Link href="#" className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300" prefetch={false}>
                        View Project
                    </Link>
                </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <img src="/placeholder.svg" width="550" height="310" alt="Project 2" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full" />
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold">Project 2</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            A modern and intuitive dashboard that streamlined the client&apos;s reporting process.
                        </p>
                    </div>
                    <Link href="#" className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300" prefetch={false}>
                        View Project
                    </Link>
                </div>
            </div>
        </div>
    </section>;
}
