/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KnqoOEi21Y7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Page() {
    return (
        <div className="w-full max-w-2xl space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">Contact us</h1>
                <p className="text-gray-500 dark:text-gray-400">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Enter the subject" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" />
                </div>
                <Button>Send message</Button>
            </div>
        </div>
    )
}