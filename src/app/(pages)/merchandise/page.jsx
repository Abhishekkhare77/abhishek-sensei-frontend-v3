import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-16 xl:py-24 bg-gray-900 text-white rounded-md mt-2">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2xl_400px xl:gap-10">
                            <div className="flex flex-col justify-center space-y-4">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-white">Most Popular</h2>
                                <p className="text-2xl font-bold tracking-tighter sm:text-3xl">$29.99</p>
                                <p className="text-sm font-medium tracking-wide/relaxed text-gray-500 dark:text-gray-400">
                                    Classic fit, double-needle sleeve and bottom hem. Available in multiple colors.
                                </p>
                                <div className="flex gap-4 ">
                                    <Button variant="secondary">View Product</Button>
                                    <Button variant="ghost" className="text-white border-white border">Add to Cart</Button>
                                </div>
                            </div>
                            <div className="mx-auto aspect-square overflow-hidden rounded-xl border border-gray-200 border-gray-200 dark:border-gray-800">
                                <img
                                    src="/placeholder.svg"
                                    width="400"
                                    height="400"
                                    alt="Product"
                                    className="aspect-square object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-16 xl:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2xl_400px xl:gap-10">
                            <div className="flex flex-col justify-center space-y-2">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Summer Vibes T-Shirt</h2>
                                <p className="text-2xl font-bold tracking-tighter sm:text-3xl">$29.99</p>
                                <p className="text-sm font-medium tracking-wide/relaxed text-gray-500 dark:text-gray-400">
                                    Classic fit, double-needle sleeve and bottom hem. Available in multiple colors.
                                </p>
                                <div className="flex gap-4">
                                    <Button>View Product</Button>
                                    <Button variant="outline">Add to Cart</Button>
                                </div>
                            </div>
                            <div className="mx-auto aspect-square overflow-hidden rounded-xl border border-gray-200 border-gray-200 dark:border-gray-800">
                                <img
                                    src="/placeholder.svg"
                                    width="400"
                                    height="400"
                                    alt="Product"
                                    className="aspect-square object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-16 xl:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2xl_400px xl:gap-10">
                            <div className="flex flex-col justify-center space-y-2">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Summer Vibes T-Shirt</h2>
                                <p className="text-2xl font-bold tracking-tighter sm:text-3xl">$29.99</p>
                                <p className="text-sm font-medium tracking-wide/relaxed text-gray-500 dark:text-gray-400">
                                    Classic fit, double-needle sleeve and bottom hem. Available in multiple colors.
                                </p>
                                <div className="flex gap-4">
                                    <Button>View Product</Button>
                                    <Button variant="outline">Add to Cart</Button>
                                </div>
                            </div>
                            <div className="mx-auto aspect-square overflow-hidden rounded-xl border border-gray-200 border-gray-200 dark:border-gray-800">
                                <img
                                    src="/placeholder.svg"
                                    width="400"
                                    height="400"
                                    alt="Product"
                                    className="aspect-square object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}