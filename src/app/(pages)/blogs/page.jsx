import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="container mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 py-8 md:py-12 lg:py-16">
                <div className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/placeholder.svg"
                                alt="Blog post image"
                                width={400}
                                height={225}
                                className="w-full h-48 object-cover"
                                style={{ aspectRatio: "400/225", objectFit: "cover" }}
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    <Link href="#" className="hover:underline" prefetch={false}>
                                        The Ultimate Guide to Sustainable Living
                                    </Link>
                                </h3>
                                <div className="flex items-center gap-2 mb-2">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Author avatar"
                                        width={32}
                                        height={32}
                                        className="rounded-full"
                                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
                                    />
                                    <span className="text-gray-500">John Doe</span>
                                </div>
                                <p className="text-gray-600 line-clamp-3">
                                    Discover practical tips and strategies to reduce your carbon footprint and live a more sustainable
                                    lifestyle. From eco-friendly home improvements to ethical shopping habits, this guide has everything
                                    you need to make a positive impact.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/placeholder.svg"
                                alt="Blog post image"
                                width={400}
                                height={225}
                                className="w-full h-48 object-cover"
                                style={{ aspectRatio: "400/225", objectFit: "cover" }}
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    <Link href="#" className="hover:underline" prefetch={false}>
                                        The Rise of Remote Work: Navigating the New Normal
                                    </Link>
                                </h3>
                                <div className="flex items-center gap-2 mb-2">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Author avatar"
                                        width={32}
                                        height={32}
                                        className="rounded-full"
                                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
                                    />
                                    <span className="text-gray-500">Jane Smith</span>
                                </div>
                                <p className="text-gray-600 line-clamp-3">
                                    Explore the challenges and opportunities of remote work in the post-pandemic era. From setting up a
                                    productive home office to maintaining work-life balance, this article provides valuable insights for
                                    both employees and employers.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="/placeholder.svg"
                                alt="Blog post image"
                                width={400}
                                height={225}
                                className="w-full h-48 object-cover"
                                style={{ aspectRatio: "400/225", objectFit: "cover" }}
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    <Link href="#" className="hover:underline" prefetch={false}>
                                        The Art of Mindful Productivity: Boost Your Focus and Efficiency
                                    </Link>
                                </h3>
                                <div className="flex items-center gap-2 mb-2">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Author avatar"
                                        width={32}
                                        height={32}
                                        className="rounded-full"
                                        style={{ aspectRatio: "32/32", objectFit: "cover" }}
                                    />
                                    <span className="text-gray-500">Bob Johnson</span>
                                </div>
                                <p className="text-gray-600 line-clamp-3">
                                    Learn how to cultivate a mindful approach to your work and daily tasks. Discover proven techniques to
                                    reduce distractions, prioritize effectively, and achieve a sustainable level of productivity without
                                    burnout.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">More Blog Posts</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <img
                                    src="/placeholder.svg"
                                    alt="Blog post image"
                                    width={100}
                                    height={100}
                                    className="rounded-lg w-24 h-24 object-cover"
                                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        <Link href="#" className="hover:underline" prefetch={false}>
                                            The Power of Positive Thinking: Unlocking Your Potential
                                        </Link>
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <img
                                            src="/placeholder.svg"
                                            alt="Author avatar"
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                            style={{ aspectRatio: "24/24", objectFit: "cover" }}
                                        />
                                        <span>Sarah Lee</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img
                                    src="/placeholder.svg"
                                    alt="Blog post image"
                                    width={100}
                                    height={100}
                                    className="rounded-lg w-24 h-24 object-cover"
                                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        <Link href="#" className="hover:underline" prefetch={false}>
                                            The Future of Artificial Intelligence: Opportunities and Challenges
                                        </Link>
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <img
                                            src="/placeholder.svg"
                                            alt="Author avatar"
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                            style={{ aspectRatio: "24/24", objectFit: "cover" }}
                                        />
                                        <span>Tom Wilson</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
                        <div className="grid grid-cols-2 gap-2">
                            <Link href="#" className="hover:underline" prefetch={false}>
                                Technology
                            </Link>
                            <Link href="#" className="hover:underline" prefetch={false}>
                                Lifestyle
                            </Link>
                            <Link href="#" className="hover:underline" prefetch={false}>
                                Business
                            </Link>
                            <Link href="#" className="hover:underline" prefetch={false}>
                                Travel
                            </Link>
                            <Link href="#" className="hover:underline" prefetch={false}>
                                Health
                            </Link>
                            <Link href="#" className="hover:underline" prefetch={false}>
                                Creativity
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Popular Posts</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <img
                                    src="/placeholder.svg"
                                    alt="Blog post image"
                                    width={100}
                                    height={100}
                                    className="rounded-lg w-24 h-24 object-cover"
                                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        <Link href="#" className="hover:underline" prefetch={false}>
                                            The Art of Minimalism: Decluttering Your Life
                                        </Link>
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <img
                                            src="/placeholder.svg"
                                            alt="Author avatar"
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                            style={{ aspectRatio: "24/24", objectFit: "cover" }}
                                        />
                                        <span>Emily Chen</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img
                                    src="/placeholder.svg"
                                    alt="Blog post image"
                                    width={100}
                                    height={100}
                                    className="rounded-lg w-24 h-24 object-cover"
                                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        <Link href="#" className="hover:underline" prefetch={false}>
                                            The Science of Sleep: Improving Your Rest and Productivity
                                        </Link>
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <img
                                            src="/placeholder.svg"
                                            alt="Author avatar"
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                            style={{ aspectRatio: "24/24", objectFit: "cover" }}
                                        />
                                        <span>Michael Lee</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
                        <p className="text-gray-600 mb-4">
                            Subscribe to our newsletter to stay up-to-date with the latest blog posts and exclusive content.
                        </p>
                        <form className="flex gap-2">
                            <Input type="email" placeholder="Enter your email" className="flex-1" />
                            <Button type="submit">Subscribe</Button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

//test commit